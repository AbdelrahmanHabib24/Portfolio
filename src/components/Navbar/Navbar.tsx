/* eslint-disable @typescript-eslint/no-require-imports */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext"; 
import { Sun, Moon } from "lucide-react";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

type SectionId = "home" | "about" | "skills" | "projects" | "experience" | "contact";

type NavbarProps = {
  activeSection: SectionId;
  scrollToSection: (sectionId: SectionId) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};



export default function Navbar({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen ,  }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: User, path: "/" },
    { id: "about", label: "About", icon: User, path: "/about" },
    { id: "skills", label: "Skills", icon: Code, path: "/skills" },
    { id: "projects", label: "Projects", icon: Briefcase, path: "/projects" },
    { id: "experience", label: "Experience", icon: GraduationCap, path: "/experience" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  ];

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            <Link to="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Abdelrahman Habib
              </span>
            </Link>
          </motion.div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              className="ml-10 flex items-baseline space-x-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id as SectionId)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden group ${
                    activeSection === item.id
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link to={item.path}>
                    <span className="relative z-10">{item.label}</span>
                    <motion.span
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.button>
              ))}
            </motion.div>

            {/* Toggle dark*/}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-cyan-500 hover:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* menu button*/}
          <motion.div
            className="sm:hidden flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* toggle button mobile*/}
            <button
              onClick={toggleDarkMode}
              className="mr-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-cyan-500 hover:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden bg-white dark:bg-gray-900 shadow-lg origin-top"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id as SectionId);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-4 py-2 rounded-lg text-base font-medium ${
                      activeSection === item.id
                        ? "bg-cyan-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-700"
                    }`}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to={item.path} className="flex items-center w-full">
                      <Icon size={20} className="mr-2" />
                      {item.label}
                    </Link>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}