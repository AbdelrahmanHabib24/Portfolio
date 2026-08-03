import { useRef } from "react";
import { motion, useScroll, useSpring, useInView, type Variants } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const reveal: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

const experiences = [
  {
    type: "work",
    title: "Front End Developer",
    company: "Mavoid — Alexandria, Egypt",
    period: "Oct 2025 – April 2026",
    points: [
      "Built Gazala E-commerce & MUP property platform (React + ShadCN) with lease lifecycle (Draft → Active → Ended) and automated invoicing.",
      "Delivered invoices/payments and maintenance center (search, filters, pagination, CRUD) using reusable shared components and role-based permissions.",
    ],
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Eyego — Riyadh, Saudi Arabia",
    period: "Sep 2024 – Sep 2025",
    points: [
      "Improved application performance by reducing page load time by ~30%, and designed a real-time tracking system using Next.js, Redux, and WebSockets.",
      "Developed a multi-floor map editor and a low-latency AI voice UI using React, Konva, LiveKit, and OpenAI.",
    ],
    icon: Briefcase,
  },
  {
    type: "internship",
    title: "Web Development Using Python",
    company: "Information Technology Institute (ITI)",
    period: "May 2024 – Sep 2024",
    points: [
      "Designed responsive UIs with HTML, CSS, JavaScript, and React.",
      "Built secure APIs and web apps using Django and Django REST Framework with clean docs.",
    ],
    icon: GraduationCap,
  },
  {
    type: "internship",
    title: "Software Development Fundamentals",
    company: "Information Technology Institute (ITI)",
    period: "Nov 2023 – Feb 2024",
    points: [
      "Strengthened CS fundamentals with C/C++ and core web technologies.",
      "Developed web apps with HTML, CSS, JavaScript, PHP, MySQL, and customized WordPress sites.",
    ],
    icon: GraduationCap,
  },
];

/* ── Individual Timeline Card with Dynamic Active Glow ── */
function TimelineCard({ exp }: { exp: typeof experiences[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Focused viewport margin: Active ONLY when card is in current view focus
  const isInFocus = useInView(cardRef, {
    margin: "-30% 0px -35% 0px",
    once: false,
  });

  const Icon = exp.icon;

  return (
    <div ref={cardRef} className="relative flex items-start mb-12 last:mb-0">
      {/* ── Node Icon Circle (Hidden by default, Illuminates clearly when approached) ── */}
      <motion.div
        className="relative flex-shrink-0 w-12 h-12 mr-6 z-10"
        animate={{
          opacity: isInFocus ? 1 : 0.2,
          scale: isInFocus ? 1 : 0.82,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Outer Glow Halo — Subtle & Crisp */}
        <motion.div
          className="absolute -inset-1.5 rounded-full bg-cyan-400/30 blur-sm pointer-events-none"
          animate={{
            opacity: isInFocus ? 0.85 : 0,
            scale: isInFocus ? 1.12 : 0.6,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Inner Circle Container */}
        <motion.div
          className="relative w-12 h-12 rounded-full flex items-center justify-center border border-cyan-300/40 transition-all duration-300"
          style={{ background: "linear-gradient(135deg, #06b6d4, #2563eb)" }}
          animate={{
            boxShadow: isInFocus
              ? "0 0 16px rgba(6,182,212,0.5), 0 0 28px rgba(6,182,212,0.2)"
              : "0 0 0px rgba(6,182,212,0)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Icon size={19} className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
        </motion.div>
      </motion.div>

      {/* ── Card Content ── */}
      <motion.div
        className="flex-grow bg-white/85 dark:bg-[#070e1e]/90 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-lg transition-colors duration-300"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity" }}
        animate={{
          borderColor: isInFocus ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.08)",
          boxShadow: isInFocus
            ? "0 4px 25px rgba(6,182,212,0.15)"
            : "0 4px 10px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
            {exp.title}
          </h3>
          <span className="text-xs px-3 py-1 rounded-full glass text-gray-500 dark:text-gray-400 flex-shrink-0 self-start">
            {exp.period}
          </span>
        </div>
        <h4 className="text-sm font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
          {exp.company}
        </h4>
        <ul className="space-y-2">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Scroll Progress linked to Timeline container (Follows scroll down & reverses up) ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.section
      id="experience"
      className="py-24 relative overflow-hidden  transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.08 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ─────────────────────── */}
        <motion.div className="text-center mb-16" variants={reveal}>
          <span className="section-label mb-3">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Experience <span className="text-cyan-400">&amp;</span>  Internship
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-500 dark:text-gray-400 mt-5">
            My professional journey and academic background.
          </p>
        </motion.div>

        {/* ── Timeline ────────────────────────────── */}
        <div ref={containerRef} className="max-w-3xl mx-auto relative">

          {/* ── Scroll-Linked Vertical Line (Transparent & Subtle Glow) ── */}
          <div
            className="absolute left-[23px] top-6 bottom-[140px] sm:bottom-[130px] w-[2px] pointer-events-none z-0 opacity-25"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {/* Transparent track line */}
            <div className="w-full h-full bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full" />

            {/* Animated glowing line fill synced with scroll position */}
            <motion.div
              className="absolute inset-0 w-full rounded-full"
              style={{
                scaleY,
                originY: 0,
                background: "linear-gradient(to bottom, rgba(6,182,212,0.5), rgba(59,130,246,0.5), rgba(139,92,246,0.5))",
                boxShadow: "0 0 4px rgba(6,182,212,0.25)",
              }}
            />
          </div>

          {/* ── Timeline Cards ── */}
          {experiences.map((exp, index) => (
            <TimelineCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
