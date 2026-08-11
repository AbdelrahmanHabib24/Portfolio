import { motion, type Variants } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithub,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";

const reveal: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── Custom Bear SVG for Zustand ── */
const ZustandBearIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <circle cx="28" cy="28" r="16" fill="#38BDF8"/>
    <circle cx="72" cy="28" r="16" fill="#38BDF8"/>
    <circle cx="28" cy="28" r="8" fill="#E0F2FE"/>
    <circle cx="72" cy="28" r="8" fill="#E0F2FE"/>
    <circle cx="50" cy="56" r="36" fill="#38BDF8"/>
    <ellipse cx="50" cy="64" rx="16" ry="12" fill="#E0F2FE"/>
    <circle cx="38" cy="48" r="4" fill="#0F172A"/>
    <circle cx="62" cy="48" r="4" fill="#0F172A"/>
    <ellipse cx="50" cy="60" rx="5" ry="3.5" fill="#0F172A"/>
  </svg>
);

/* ── Custom Cloud SVG for REST APIs ── */
const RestApiCloudIcon = () => (
  <svg className="w-8 h-8 text-[#0EA5E9]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
  </svg>
);

/* ── HTML5 + CSS3 Dual Icon ── */
const HtmlCssDualIcon = () => (
  <div className="flex items-center gap-1.5">
    <SiHtml5 className="w-6 h-6 text-[#E34F26]" />
    <SiCss3 className="w-6 h-6 text-[#1572B6]" />
  </div>
);

/* ── 16 Skill Cards Configuration ── */
const skillsData = [
  {
    name: "React",
    description: "Building interactive UIs with components and hooks.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
    icon: () => <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    boxBorder: "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
  },
  {
    name: "Next.js",
    description: "Production-ready apps with App Router & SSR.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30 font-semibold",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-slate-600 dark:bg-slate-300 shadow-[0_0_8px_#cbd5e1]",
    icon: () => <SiNextdotjs className="w-8 h-8 text-white" />,
    boxBorder: "border-slate-400 dark:border-slate-600 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  },
  {
    name: "Redux",
    description: "Managing global state with predictable patterns.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
    icon: () => <SiRedux className="w-8 h-8 text-[#764ABC]" />,
    boxBorder: "border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)]",
  },
  {
    name: "React Query",
    description: "Data fetching, caching & synchronization made easy.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
    icon: () => <SiReactquery className="w-8 h-8 text-[#FF4154]" />,
    boxBorder: "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
  },
  {
    name: "Zustand",
    description: "Lightweight and scalable state management.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-blue-400 shadow-[0_0_8px_#3b82f6]",
    icon: ZustandBearIcon,
    boxBorder: "border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.25)]",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS for fast and responsive design.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
    icon: () => <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    boxBorder: "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
  },
  {
    name: "ShadCN UI",
    description: "Beautifully designed UI components.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
    icon: () => <SiShadcnui className="w-7 h-7 text-white" />,
    boxBorder: "border-slate-400 dark:border-slate-600 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  },
  {
    name: "Framer Motion",
    description: "Production-ready animations for modern interfaces.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
    icon: () => <SiFramer className="w-8 h-8 text-[#0055FF]" />,
    boxBorder: "border-purple-500/40 shadow-[0_0_20px_rgba(240,0,255,0.25)]",
  },
  {
    name: "JavaScript (ES6+)",
    description: "Modern JavaScript for powerful web apps.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
    icon: () => <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    boxBorder: "border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.25)]",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript for safer and scalable code.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-blue-400 shadow-[0_0_8px_#3b82f6]",
    icon: () => <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    boxBorder: "border-blue-500/40 shadow-[0_0_20px_rgba(49,120,198,0.25)]",
  },
  {
    name: "HTML5 / CSS3",
    description: "Semantic markup and modern styling.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-orange-400 shadow-[0_0_8px_#f97316]",
    icon: HtmlCssDualIcon,
    boxBorder: "border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.25)]",
  },
  {
    name: "REST APIs",
    description: "Building and consuming robust RESTful services.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-blue-400 shadow-[0_0_8px_#38bdf8]",
    icon: RestApiCloudIcon,
    boxBorder: "border-blue-500/40 shadow-[0_0_20px_rgba(14,165,233,0.25)]",
  },
  {
    name: "PostgreSQL",
    description: "Relational database design and optimization.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-blue-400 shadow-[0_0_8px_#38bdf8]",
    icon: () => <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
    boxBorder: "border-blue-500/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]",
  },
  {
    name: "MySQL",
    description: "Database management and complex queries.",
    levelText: "Proficient",
    levelBadgeStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    dots: [true, true, true, true, false, false],
    dotColor: "bg-blue-400 shadow-[0_0_8px_#38bdf8]",
    icon: () => <SiMysql className="w-8 h-8 text-[#4479A1]" />,
    boxBorder: "border-blue-500/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]",
  },
  {
    name: "Docker",
    description: "Containerization for consistent environments.",
    levelText: "Intermediate",
    levelBadgeStyle: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
    dots: [true, true, true, false, false, false],
    dotColor: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
    icon: () => <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    boxBorder: "border-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]",
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaboration workflows.",
    levelText: "Advanced",
    levelBadgeStyle: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30 font-semibold",
    dots: [true, true, true, true, true, false],
    dotColor: "bg-slate-600 dark:bg-slate-300 shadow-[0_0_8px_#cbd5e1]",
    icon: () => <SiGithub className="w-8 h-8 text-white" />,
    boxBorder: "border-slate-400 dark:border-slate-600 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-24 overflow-hidden  transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section heading ─────────────────────── */}
        <motion.div className="text-center mb-14" variants={reveal}>
          <span className="section-label mb-3 text-cyan-400 font-semibold tracking-widest text-xs uppercase">WHAT I KNOW</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Skills <span className="text-cyan-400">&amp;</span> Expertise
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            A showcase of the technologies and tools I master to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* ── 16 Skills Grid (Scroll-Synchronized Progressive Reveal) ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="p-5 rounded-2xl bg-white/85 dark:bg-[#070e1e]/90 border border-slate-200/80 dark:border-cyan-500/20 transition-colors duration-300 hover:border-cyan-400/50 shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between group"
                style={{
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 4) * 0.06 }}
                whileHover={{ scale: 1.025, y: -3 }}
              >
                {/* Top Section: Icon Badge + Title & Subtitle */}
                <div>
                  <div className="flex items-start gap-3.5 mb-3">
                    {/* Badge Container */}
                    <div className={`w-14 h-14 rounded-2xl bg-slate-950 dark:bg-[#081226] border ${skill.boxBorder} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105`}>
                      <IconComponent />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug truncate">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle Description */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Section: Level Pill + Rating Dots */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${skill.levelBadgeStyle}`}>
                    {skill.levelText}
                  </span>

                  {/* 6 Dots */}
                  <div className="flex items-center gap-1">
                    {skill.dots.map((isFilled, idx) => (
                      <span
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isFilled
                            ? skill.dotColor
                            : "bg-slate-300 dark:bg-slate-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
