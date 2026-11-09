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

/* ── Custom Bear SVG for Zustand ── */
const ZustandBearIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="28" cy="28" r="16" fill="#38BDF8" />
    <circle cx="72" cy="28" r="16" fill="#38BDF8" />
    <circle cx="28" cy="28" r="8" fill="#E0F2FE" />
    <circle cx="72" cy="28" r="8" fill="#E0F2FE" />
    <circle cx="50" cy="56" r="36" fill="#38BDF8" />
    <ellipse cx="50" cy="64" rx="16" ry="12" fill="#E0F2FE" />
    <circle cx="38" cy="48" r="4" fill="#0F172A" />
    <circle cx="62" cy="48" r="4" fill="#0F172A" />
    <ellipse cx="50" cy="60" rx="5" ry="3.5" fill="#0F172A" />
  </svg>
);

/* ── Custom Cloud SVG for REST APIs ── */
const RestApiCloudIcon = () => (
  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0EA5E9]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

/* ── HTML5 + CSS3 Dual Icon ── */
const HtmlCssDualIcon = () => (
  <div className="flex items-center gap-1.5" aria-hidden="true">
    <SiHtml5 className="w-7 h-7 sm:w-8 sm:h-8 text-[#E34F26]" />
    <SiCss3 className="w-7 h-7 sm:w-8 sm:h-8 text-[#1572B6]" />
  </div>
);

/* ── 16 Technologies in Original Full Brand Colors ── */
const technologies = [
  { name: "React", icon: () => <SiReact className="w-8 h-8 sm:w-9 sm:h-9 text-[#61DAFB]" /> },
  { name: "Next.js", icon: () => <SiNextdotjs className="w-8 h-8 sm:w-9 sm:h-9 text-slate-900 dark:text-white" /> },
  { name: "Redux", icon: () => <SiRedux className="w-8 h-8 sm:w-9 sm:h-9 text-[#764ABC]" /> },
  { name: "React Query", icon: () => <SiReactquery className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF4154]" /> },
  { name: "Zustand", icon: ZustandBearIcon },
  { name: "Tailwind CSS", icon: () => <SiTailwindcss className="w-8 h-8 sm:w-9 sm:h-9 text-[#06B6D4]" /> },
  { name: "ShadCN UI", icon: () => <SiShadcnui className="w-8 h-8 sm:w-9 sm:h-9 text-slate-900 dark:text-white" /> },
  { name: "Framer Motion", icon: () => <SiFramer className="w-8 h-8 sm:w-9 sm:h-9 text-[#0055FF]" /> },
  { name: "JavaScript", icon: () => <SiJavascript className="w-8 h-8 sm:w-9 sm:h-9 text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: () => <SiTypescript className="w-8 h-8 sm:w-9 sm:h-9 text-[#3178C6]" /> },
  { name: "HTML5 / CSS3", icon: HtmlCssDualIcon },
  { name: "REST APIs", icon: RestApiCloudIcon },
  { name: "PostgreSQL", icon: () => <SiPostgresql className="w-8 h-8 sm:w-9 sm:h-9 text-[#4169E1]" /> },
  { name: "MySQL", icon: () => <SiMysql className="w-8 h-8 sm:w-9 sm:h-9 text-[#4479A1]" /> },
  { name: "Docker", icon: () => <SiDocker className="w-8 h-8 sm:w-9 sm:h-9 text-[#2496ED]" /> },
  { name: "Git & GitHub", icon: () => <SiGithub className="w-8 h-8 sm:w-9 sm:h-9 text-slate-900 dark:text-white" /> },
];

// Replicated internally to ensure seamless infinite looping without gaps
const marqueeList = [...technologies, ...technologies, ...technologies];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technologies marquee"
      className="relative w-full py-6 sm:py-8 overflow-hidden flex items-center justify-center transition-colors duration-500"
    >
      <div className="marquee-container relative w-full overflow-hidden flex items-center select-none">
        {/* Left Fade Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 z-10 bg-gradient-to-r from-slate-50 dark:from-[#030712] to-transparent"
        />

        {/* Right Fade Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 z-10 bg-gradient-to-l from-slate-50 dark:from-[#030712] to-transparent"
        />

        {/* Primary Marquee Track */}
        <div
          className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16 animate-marquee py-2"
          style={{ animation: "marquee-scroll 30s linear infinite" }}
        >
          {marqueeList.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`track-1-${idx}`}
                title={tech.name}
                aria-label={tech.name}
                className="flex items-center justify-center flex-shrink-0"
              >
                <IconComponent />
              </div>
            );
          })}
        </div>

        {/* Mirrored Marquee Track (seamless loop duplicate) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16 animate-marquee py-2"
          style={{ animation: "marquee-scroll 30s linear infinite" }}
        >
          {marqueeList.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`track-2-${idx}`}
                title={tech.name}
                className="flex items-center justify-center flex-shrink-0"
              >
                <IconComponent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
