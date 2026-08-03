import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Sun, Moon, Menu, X, User, Code, Briefcase, GraduationCap, Mail } from "lucide-react";

type SectionId = "home" | "about" | "skills" | "projects" | "experience" | "contact";

type NavbarProps = {
  activeSection: SectionId;
  scrollToSection: (sectionId: SectionId) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
  activeSection, scrollToSection, isMenuOpen, setIsMenuOpen,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home",       label: "Home",       icon: User,          path: "/" },
    { id: "about",      label: "About",      icon: User,          path: "/about" },
    { id: "skills",     label: "Skills",     icon: Code,          path: "/skills" },
    { id: "projects",   label: "Projects",   icon: Briefcase,     path: "/projects" },
    { id: "experience", label: "Experience", icon: GraduationCap, path: "/experience" },
    { id: "contact",    label: "Contact",    icon: Mail,          path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300   `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ── Logo — Abdelrahman.dev ────────────── */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection("home")}
          >
            <Link to="/" aria-label="Home — Abdelrahman Habib">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Abdelrahman <span className="text-cyan-500 dark:text-cyan-400 font-semibold">Habib</span>
              </span>
            </Link>
          </motion.div>

          {/* ── Desktop Nav ───────────────────────── */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 lg:gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id as SectionId)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 flex flex-col items-center gap-[3px] ${
                      isActive
                        ? "text-slate-900 dark:text-white font-semibold"
                        : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Link to={item.path} className="relative z-10 block">
                      {item.label}
                    </Link>

                    {/* Active Line — centered under label text, CSS transition (no layoutId bug) */}
                    <span
                      className="block h-[2.5px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 transition-all duration-300 origin-center shadow-[0_0_8px_rgba(6,182,212,0.7)]"
                      style={{
                        width: isActive ? "80%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Dark/Light mode capsule toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-6 p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md text-slate-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 flex items-center justify-center shadow-xs"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Moon size={16} className="text-cyan-400 fill-cyan-400/20" />
              ) : (
                <Sun size={16} className="text-amber-500 fill-amber-500/20" />
              )}
            </button>
          </div>

          {/* ── Mobile Controls ───────────────────── */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-gray-300"
            >
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="px-4 py-4 space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => { scrollToSection(item.id as SectionId); setIsMenuOpen(false); }}
                    className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                        : "text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <Link to={item.path} className="flex items-center w-full gap-3">
                      <Icon size={18} className="opacity-70 flex-shrink-0" />
                      {item.label}
                    </Link>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
