/* eslint-disable @typescript-eslint/no-require-imports */
import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import programmingAnimation from "../Programming.json";
import Lottie from "lottie-react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Award,
  ChevronDown,
  Send,
  User,
  Briefcase,
  GraduationCap,
  Spline,
  BrainCircuit,
  Layers,
  FileCode,
  ServerCog,
  Boxes,
  Sigma,
  Workflow,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const skills = [
    { name: "React", level: 90, icon: Spline, color: "bg-cyan-500" },
    { name: "Redux", level: 65, icon: BrainCircuit, color: "bg-rose-500" },
    { name: "Next.js", level: 85, icon: Layers, color: "bg-blue-500" },
    { name: "Python", level: 80, icon: FileCode, color: "bg-emerald-500" },
    { name: "Django", level: 75, icon: ServerCog, color: "bg-teal-600" },
    { name: "Docker", level: 70, icon: Boxes, color: "bg-sky-500" },
    { name: "Postgres", level: 75, icon: Database, color: "bg-indigo-500" },
    { name: "Sql/MySql", level: 80, icon: Sigma, color: "bg-amber-500" },
    { name: "GitHub", level: 90, icon: Github, color: "bg-gray-800" },
    { name: "Agile", level: 90, icon: Workflow, color: "bg-teal-500" },
  ];

  const projects = [
    {
      title: "Voice Agent",
      description:
        "Built the frontend of a real-time voice assistant using Next.js and LiveKit, featuring WebRTC audio streaming, animated waveforms, and chat-based interaction with Deepgram STT, Gemini LLM, and Cartesia TTS integration.",
      image: "Screenshot 2025-07-22.png",
      technologies: ["Next", "Tailwind", "Python", "LiveKit"],
      liveUrl: "https://live-kit-agent.vercel.app/",
      githubUrl: "#",
    },

    {
      title: "Movie App",
      description:
        "A React app that provides a user-friendly interface for exploring trending TV shows and movies, submitting ratings, and ensuring secure authentication.",
      image: "Screenshot 2025-07-28 220237.png",
      technologies: ["React", "Redux", "Tailwind ", "Aos"],
      liveUrl: "https://movie-app897.netlify.app/",
      githubUrl: "https://github.com/AbdelrahmanHabib24/MovieApp",
    },
    {
      title: "E-Commerce",
      description:
        "An e-commerce platform built with React and Tailwind CSS featuring authentication, local storage for session management and efficient product management.",
      image: "Screenshot 2024-10-28 095944.png",
      technologies: ["React", "Redux", "Tailwind", "Framer Motion"],
      liveUrl: "https://ecommerce128.netlify.app/",
      githubUrl: "https://github.com/AbdelrahmanHabib24/Ecommerce",
    },
    {
      title: "Travel and Tour",
      description:
        "Explore our Tour and Travel app for easy planning and unforgettable adventures. Crafted with Next.js and Tailwind CSS for a smooth, modern experience.",
      image: "Screenshot 2025-01-05 222818.png",
      technologies: ["Next", "Tailwind", "Framer Motion"],
      liveUrl: "https://travel97.netlify.app/",
      githubUrl: "https://github.com/AbdelrahmanHabib24/Travel-and-Tour",
    },
    {
      title: "Food Delivery",
      description:
        " Developed a responsive food delivery app using React, enabling users to browse menus, place orders, and track deliveries efficiently",
      image: "Screenshot 2024-10-28 101613.png",
      technologies: ["React", "Tailwind"],
      liveUrl: "https://luminous-froyo-7c35dc.netlify.app/",
      githubUrl: "#",
    },
  ];

  const experiences = [
    {
      type: "work",
      title: "Front End Developer",
      company: "Eyego",
      period: "May 2025 - Present",
      description:
        "Led frontend development for an AI-based real-time people tracking system using Next.js, Redux, and WebSockets ,Integrated AI models for live location tracking, people classification, and step estimation.",
      icon: Briefcase,
    },
    {
      type: "InternShip",
      title: "Web Development Using Python ",
      company: "Information Technology Institute (ITI)",
      period: "May 2024 - Sep 2024",
      description:
        " Designed user interfaces with HTML, CSS, JavaScript, and React, while developing secure APIs and web applications using Django and Django REST Framework, emphasizing clean, documented code and API integration",
      icon: GraduationCap,
    },
    {
      type: "InternShip",
      title: "SoftWare Development Fundamentals",
      company: "Information Technology Institute (ITI)",
      period: "Nov 2023 - Feb 2024",
      description:
        "Developed programming skills in C, C++, and web technologies, building responsive UIs and web applications using HTML, CSS, JavaScript, PHP, and MySQL, while also designing flowcharts and customizing WordPress sites Full Stack.",
      icon: GraduationCap,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 font-sans">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50"
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
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Abdelrahman Habib
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div
                className="ml-10 flex items-baseline space-x-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden group ${
                      activeSection === item.id
                        ? "bg-cyan-500 text-white shadow-md"
                        : "text-gray-700"
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
                    <span className="relative z-10">{item.label}</span>
                    {/* Hover background animation */}
                    <motion.span
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white shadow-lg origin-top"
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
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center w-full px-4 py-2 rounded-lg text-base font-medium ${
                        activeSection === item.id
                          ? "bg-cyan-500 text-white"
                          : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                      }`}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={20} className="mr-2" />
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-cyan-50 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Image */}
          <motion.div
            className="relative w-52 h-52 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/WhatsApp Image 2024-08-06 at 18.25.11_b368635e.jpg"
                alt="Profile"
                className="w-48 h-48 object-fill rounded-full"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
              style={{
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* اسمك بحروف متحركة */}
              {Array.from("Abdelrahman Habib").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            A Frontend Developer building sleek, responsive, and high-performing
            web interfaces with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-full font-medium shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 rounded-full font-medium hover:bg-cyan-50 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
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
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-gray-500" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover my journey, skills, and passion for creating impactful
              digital solutions.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center "
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Lottie Animation */}
            <motion.div
              className="flex justify-center items-center "
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, ease: "easeInOut" }}
            >
              <Lottie
                animationData={programmingAnimation}
                loop={true}
                className=" w-full h-auto"
              />
            </motion.div>

            {/* Text + Stats */}
            <motion.div
              className="flex flex-col justify-center"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <h3 className="text-xl sm:text-2xl flex justify-center sm:justify-start items-center font-bold text-gray-900 mb-5">
                Front End Developer
              </h3>

              <ul className="list-disc pl-5 text-gray-600 mb-8 leading-relaxed text-base sm:text-lg sm:space-y-4">
                <li>Building modern and responsive web applications.</li>
                <li>
                  Experienced in <strong>React</strong>,{" "}
                  <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
                </li>
                <li>
                  Creating <strong>user-friendly interfaces</strong> with high
                  performance and accessibility.
                </li>
                <li>
                  Delivered real-world projects like{" "}
                  <strong>interactive dashboards</strong> and voice-enabled UIs.
                </li>
                <li>
                  Skilled in tools like <strong>Framer Motion</strong>, Konva,
                  and LiveKit.
                </li>
                <li>
                  Passionate about <strong>frontend architecture</strong> and
                  animations.
                </li>
                <li>
                  Improving developer experience through{" "}
                  <strong>scalable code</strong> and thoughtful UI patterns.
                </li>
                <li>
                  Continuously exploring{" "}
                  <strong>emerging web technologies</strong>.
                </li>
              </ul>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                <motion.div
                  className="p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(0, 82, 219, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="text-cyan-500 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900">5+ Projects</h4>
                  <p className="text-sm text-gray-600">
                    Delivered successfully
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-24 bg-gradient-to-br from-gray-50 to-cyan-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants}>
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A showcase of the technologies and tools I master.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      rotate: 1,
                      boxShadow: `0 8px 20px ${"rgba(0, 82, 219, 0.4)"}`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 ${skill.color} rounded-lg mr-4 shadow-sm`}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${skill.color}`}
                          initial={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div variants={containerVariants}>
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore some of my recent work showcasing creativity and
                technical expertise.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-xl shadow-md overflow-hidden relative group transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    rotate: 0.5,
                    boxShadow: "0 10px 20px rgba(0, 82, 219, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-fill transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
                      >
                        <Github size={20} />
                      </a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-cyan-600 transition-colors">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="py-24 bg-gradient-to-br from-gray-50 to-cyan-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants}>
            {/* Section Title */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Experience & Internship
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                My professional journey and academic background.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="max-w-3xl mx-auto relative"
              variants={containerVariants}
            >
              {/* Vertical line */}
              <div className="absolute left-6 top-20 w-0.5  bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30" />

              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start mb-12 last:mb-0"
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {index < experiences.length - 1 && (
                      <div
                        className="absolute left-6 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30"
                        style={{
                          top: "4rem",
                          height: "7rem",
                          width: "2px",
                        }}
                      />
                    )}

                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-6 shadow-lg relative z-10">
                      <Icon size={20} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
                      <div className="flex flex-col list-disc  md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-cyan-600 font-medium mb-3">
                        {exp.company}
                      </h4>
                      <ul className="list-disc pl-4 text-gray-600 text-sm leading-relaxed marker:text-cyan-500">
                        {exp.description.split(". ").map((point, i) => (
                          <li key={i}>
                            <span className="font-medium">
                              {point.split(" ")[0]}
                            </span>{" "}
                            {point.slice(point.indexOf(" ") + 1)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 bg-white"
        variants={containerVariants}
        initial={false}
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants}>
            {/* Title */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Open to new opportunities and exciting projects. Let's
                collaborate!
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              variants={containerVariants}
            >
              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Available for freelance and full-time roles. Whether it's a
                  new project or a tech discussion, I'm just a message away.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail size={20} className="text-cyan-600" />,
                      title: "Email",
                      value: "abdelrahmanhabib502@gmail.com",
                      bg: "bg-cyan-100",
                    },
                    {
                      icon: <Phone size={20} className="text-emerald-600" />,
                      title: "Phone",
                      value: "+20 1023289634",
                      bg: "bg-emerald-100",
                    },
                    {
                      icon: <MapPin size={20} className="text-blue-600" />,
                      title: "Location",
                      value: "Egypt",
                      bg: "bg-blue-100",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center cursor-pointer"
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div
                        className={`p-3 ${item.bg} rounded-lg mr-4 shadow-sm`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form
                  action="https://formsubmit.co/abdelrahmanhabib502@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* FormSubmit Hidden Config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://protoflio58.netlify.app"
                  />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-50"
                      placeholder="Your full name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-50"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-gray-50 resize-none"
                      placeholder="Tell me about your project..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg flex items-center justify-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 30px rgba(0, 82, 219, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12"
        variants={containerVariants}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={containerVariants}>
            <motion.div
              className="flex justify-center space-x-6 mb-8"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/AbdelrahmanHabib24"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdelrahmanhabib23/"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:abdelrahmanhabib502@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>

            <motion.p className="text-gray-400 mb-4" variants={itemVariants}>
              © 2025 Abdelrahman Habib. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
