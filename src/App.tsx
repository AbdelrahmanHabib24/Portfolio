import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Footer from "./components/Footer/Footer";
import SectionDivider from "./components/SectionDivider/SectionDivider";

type SectionId =
  | "home" | "about" | "skills" | "projects" | "experience" | "contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  // ── Scroll → active section using IntersectionObserver (Zero layout thrashing) ──
  const scrollToSection = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections: SectionId[] = [
      "home", "about", "skills", "projects", "experience", "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative font-sans bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400">

      {/* ── Grain overlay — 3% opacity (Desktop only to prevent mobile SVG re-rasterization lag) ────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] hidden sm:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* ── Global Living Particle Atmosphere ────────── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[0] overflow-hidden">
        <ParticlesBackground />
      </div>

      {/* ── Page content ─────────────────────────── */}
      <div className="relative z-[2]">
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <Home scrollToSection={scrollToSection} />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
