/* eslint-disable @typescript-eslint/no-require-imports */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

type SectionId = "projects" | "contact";

interface HomeProps {
  scrollToSection: (sectionId: SectionId) => void;
}

export default function Home({ scrollToSection }: HomeProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const texts = ["a Front-End Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      setDisplayText(
        isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1)
      );
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
      setTypingSpeed(isDeleting ? 80 : 150);
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden 
        bg-white dark:bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-20 lg:px-8 text-center">
        <motion.div
          className="flex justify-center  mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/WhatsApp Image 2025-09-02 at 13.27.26_df05d2f2.jpg"
            alt="Abdelrahman Habib"
            className="w-52 h-52 rounded-full  object-cover object-top border-4 border-cyan-500 shadow-lg"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold lg:mb-4 leading-tight text-gray-900 dark:text-white"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          Hi, I'm{" "}
          <motion.span
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Abdelrahman Habib
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="bg-gradient-to-r mb-10 text-5xl font-bold from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {displayText}
          <span className="border-r-2 border-cyan-500 animate-pulse"></span>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link to="/projects">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-full font-medium shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 rounded-full font-medium border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 hover:shadow-lg 
                dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center space-x-6">
          {[
            {
              href: "https://github.com/AbdelrahmanHabib24",
              icon: <Github size={24} />,
            },
            {
              href: "https://www.linkedin.com/in/abdelrahmanhabib23/",
              icon: <Linkedin size={24} />,
            },
            {
              href: "mailto:abdelrahmanhabib502@gmail.com",
              icon: <Mail size={24} />,
            },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full shadow-md transition-all duration-300 bg-white hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute bottom-8 right-[46%] lg:right-[48.5%] text-gray-500 dark:text-gray-300"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </motion.section>
  );
}
