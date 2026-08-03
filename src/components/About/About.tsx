import { motion, type Variants } from "framer-motion";
import Lottie from "lottie-react";
import programmingAnimation from "../../../Programming.json";
import { Rocket, Briefcase, Code2 } from "lucide-react";

/* Shared reveal variant — opacity + y + blur, 600ms */
const reveal: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20 lg:py-28 overflow-hidden transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }}
      variants={{
        hidden:   { opacity: 0 },
        visible:  { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section heading ─────────────────────── */}
        <motion.div className="text-center mb-14" variants={reveal}>
          <span className="section-label mb-3 text-cyan-400 font-semibold tracking-widest text-xs uppercase block">WHO I AM</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            About <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto text-gray-500 dark:text-gray-400 mt-5">
            Discover my journey, skills, and passion for creating impactful digital solutions.
          </p>
        </motion.div>

        {/* ── Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Lottie Animation */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -36, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full max-w-lg flex justify-center">
              <div
                className="absolute inset-2 rounded-3xl bg-cyan-500/20 dark:bg-cyan-400/20 blur-2xl pointer-events-none"
                style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
                aria-hidden="true"
              />
              <Lottie
                animationData={programmingAnimation}
                loop
                className="w-full h-auto max-w-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            

            {/* Bullet list with progressive scroll reveal & active illumination */}
            <ul className="mb-10 space-y-3.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {[
               "Building scalable and high-performance web applications with React, Next.js, and TypeScript.",
               "Experienced in real-time systems, AI-powered interfaces, and enterprise business solutions.",
               "Passionate about creating clean, reusable, and maintainable frontend architectures.",
               "Focused on performance, accessibility, and delivering polished user experiences.",
               "Solving complex UI challenges through thoughtful engineering and modern technologies.",
               "Continuously learning and adopting tools that improve product quality and developer experience.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="mt-[7px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] flex-shrink-0" />
                  <span className="group-hover:text-cyan-400 transition-colors duration-200">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Cards — Progressive Staggered Reveal */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { Icon: Rocket,    label: "Projects",  value: "8+" },
                { Icon: Briefcase, label: "Companies", value: "2"  },
                { Icon: Code2,     label: "Yrs Exp.",  value: "~2" },
              ].map(({ Icon, label, value }, idx) => (
                <motion.div
                  key={label}
                  className="p-5 rounded-2xl bg-white/70 dark:bg-[#070e1e]/80 border border-slate-200/80 dark:border-cyan-500/20 text-center shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors duration-300"
                  style={{
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                >
                  <Icon className="text-cyan-400 mx-auto mb-3 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" size={26} strokeWidth={1.8} />
                  <div className="font-bold text-2xl text-gray-900 dark:text-white mb-1">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
