import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { gsap } from "gsap";

type SectionId = "projects" | "contact";
interface HomeProps {
  scrollToSection: (sectionId: SectionId) => void;
}

export default function Home({ scrollToSection }: HomeProps) {
  /* ── Dynamic Typewriter Roles ─────────────────────── */
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "Front-End Developer",
  ];

  /* ── Magnetic CTA Button Refs ────────────────────── */
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null);

  /* ── Typewriter Logic ────────────────────────────── */
  useEffect(() => {
    const current = roles[loopNum % roles.length];
    const next = isDeleting
      ? current.substring(0, displayText.length - 1)
      : current.substring(0, displayText.length + 1);

    const timer = setTimeout(() => {
      setDisplayText(next);
      if (!isDeleting && next === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && next === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
      }
      setTypingSpeed(isDeleting ? 40 : 90);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  /* ── Magnetic Button Physics ─────────────────────── */
  const handleMagneticMouseMove = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - r.left - r.width / 2) * 0.22,
      y: (e.clientY - r.top - r.height / 2) * 0.22,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMagneticMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "expo.out",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full text-slate-900 dark:text-white flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 transition-colors duration-500"
    >
      {/* ── Background Star Particles ────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 top-24 pointer-events-none opacity-30 dark:opacity-60 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(1.5px 1.5px at 15% 20%, #06b6d4, transparent), radial-gradient(1px 1px at 75% 15%, #ffffff, transparent), radial-gradient(2px 2px at 85% 65%, #3b82f6, transparent)`,
            backgroundSize: "300px 300px",
            animation: "star-twinkle-1 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 45% 30%, #ffffff, transparent), radial-gradient(2px 2px at 60% 75%, #06b6d4, transparent)`,
            backgroundSize: "350px 350px",
            animation: "star-twinkle-2 6s ease-in-out infinite",
            animationDelay: "-2s",
          }}
        />
      </div>

      {/* ── Center Focal Lighting Glow ────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full pointer-events-none opacity-35 dark:opacity-55 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(37,99,235,0.1) 45%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* ── Left Social Sidebar ──────────────────────── */}
      <aside className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center">
        <div className="backdrop-blur-xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 rounded-full px-3 py-6 flex flex-col items-center gap-6 shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300">
          <a
            href="https://github.com/AbdelrahmanHabib24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group p-1.5 rounded-lg text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Github
              size={18}
              className="transition-transform duration-200 group-hover:-translate-y-[1px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahmanhabib23/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group p-1.5 rounded-lg text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Linkedin
              size={18}
              className="transition-transform duration-200 group-hover:-translate-y-[1px]"
            />
          </a>
          <a
            href="mailto:abdelrahmanhabib502@gmail.com"
            aria-label="Email"
            className="group p-1.5 rounded-lg text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Mail
              size={18}
              className="transition-transform duration-200 group-hover:-translate-y-[1px]"
            />
          </a>
          <a
            href="tel:+201023289634"
            aria-label="Phone"
            className="group p-1.5 rounded-lg text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Phone
              size={18}
              className="transition-transform duration-200 group-hover:-translate-y-[1px]"
            />
          </a>
        </div>
      </aside>

      {/* ══════════════════════════════════════════════
          EYE-CATCHING HERO CONTENT & PORTRAIT
          ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
       

        {/* Floating Portrait with Animated Glow Arc Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mb-8"
        >
          <motion.div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center"
            animate={{ y: [-9, 9, -9] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glowing Neon Arc Ring */}
            <div
              className="absolute inset-[-14px] md:inset-[-18px] rounded-full border-[2px] border-cyan-500/80 dark:border-cyan-400/90 pointer-events-none z-0 shadow-[0_0_30px_rgba(6,182,212,0.6),inset_0_0_15px_rgba(6,182,212,0.3)]"
            />

            {/* Breathing glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 75%)",
                filter: "blur(20px)",
                animation: "hero-breathing-glow 7s ease-in-out infinite",
              }}
            />

            {/* Portrait image */}
            <img
              src="/WhatsApp Image 2025-09-02 at 13.27.26_df05d2f2.jpg"
              alt="Abdelrahman Habib"
              className="relative z-10 w-full h-full rounded-full object-cover object-top shadow-2xl border-2 border-white/30 dark:border-cyan-400/30"
            />
          </motion.div>
        </motion.div>

        {/* Name Title with Kinetic Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 leading-tight sm:leading-none"
        >
          <span className="text-slate-900 dark:text-white">
            Abdelrahman{" "}
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            Habib
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Role */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-gray-200 mb-8 flex items-center justify-center gap-2 min-h-[40px]"
        >
          <span className="text-cyan-500 dark:text-cyan-400 font-bold drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]">
            {displayText}
          </span>
          <span className="w-[2.5px] h-6 sm:h-7 bg-cyan-500 dark:bg-cyan-400 inline-block animate-pulse" />
        </motion.h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            ref={primaryBtnRef}
            onClick={() => scrollToSection("projects")}
            onMouseMove={handleMagneticMouseMove}
            onMouseLeave={handleMagneticMouseLeave}
            className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_25px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_32px_rgba(6,182,212,0.6)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore My Projects</span>
            <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-200">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </button>

          <a
            ref={secondaryBtnRef}
            href="https://wa.me/201023289634"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMagneticMouseMove}
            onMouseLeave={handleMagneticMouseLeave}
            className="group flex items-center gap-3 bg-white/80 border border-slate-200 text-slate-800 dark:bg-white/[0.04] dark:border-white/15 dark:text-white font-medium text-sm px-7 py-3.5 rounded-full hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200 shadow-sm dark:shadow-md"
          >
            <span>Let's Talk</span>
            <div className="w-7 h-7 rounded-full border border-slate-300 dark:border-white/30 flex items-center justify-center group-hover:border-cyan-500 group-hover:text-cyan-500 dark:group-hover:border-cyan-400 dark:group-hover:text-cyan-400 transition-all duration-200">
              <MessageSquare size={14} />
            </div>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => scrollToSection("projects")}
          className="relative flex flex-col items-center cursor-pointer group select-none"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-6 w-48 h-12 pointer-events-none opacity-30 dark:opacity-40"
            style={{
              background:
                "radial-gradient(ellipse, rgba(6,182,212,0.45) 0%, transparent 70%)",
              filter: "blur(15px)",
            }}
          />
          <div className="relative w-6 h-10 rounded-full border-2 border-slate-300 dark:border-white/30 flex justify-center p-1.5 backdrop-blur-xs group-hover:border-cyan-400 transition-colors duration-300">
            <div className="w-1 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-mouse-wheel-dot" />
          </div>
          <ChevronDown
            size={16}
            className="text-cyan-500 dark:text-cyan-400/80 -mt-0.5 animate-bounce group-hover:text-cyan-300 transition-colors"
          />
          <span className="text-[10px] tracking-[0.35em] text-slate-400 dark:text-gray-400 uppercase font-medium mt-1 group-hover:text-cyan-400 transition-colors">
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
