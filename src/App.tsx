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
  Calendar,
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const navVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Abdelrahman Habib{" "}
              </span>
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div
                className="ml-10 flex items-baseline space-x-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-cyan-500 text-white shadow-md"
                        : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                    }`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            </div>
            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
              className="md:hidden bg-white shadow-lg"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
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
                      className={`flex items-center w-full px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-cyan-500 text-white"
                          : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                      }`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
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
        className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-cyan-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={containerVariants}>
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="relative w-52 h-52 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/WhatsApp Image 2024-08-06 at 18.25.11_b368635e.jpg"
                    alt="Profile"
                    className="absolute w-48 h-48 object-fill rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Hi,I'm{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Abdelrahman Habib
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              A Frontend Developer building sleek, responsive, and
              high-performing web interfaces with modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={containerVariants}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Explore My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 rounded-full font-medium hover:bg-cyan-50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 82, 219, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Let's Connect
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/AbdelrahmanHabib24"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Github
                  size={24}
                  className="text-gray-700 hover:text-cyan-600"
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdelrahmanhabib23/"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Linkedin
                  size={24}
                  className="text-gray-700 hover:text-cyan-600"
                />
              </motion.a>
              <motion.a
                href="mailto:abdelrahmanhabib502@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <Mail size={24} className="text-gray-700 hover:text-cyan-600" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} className="text-gray-500" />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants}>
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover my journey, skills, and passion for creating impactful
                digital solutions.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Lottie
                  animationData={programmingAnimation}
                  loop={true}
                  className="w-full h-full"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-5 ">
                  Front End Developer
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  I'm a Frontend Developer with 1 year of hands-on experience
                  building modern, responsive web applications using
                  technologies like React, Next.js, and Tailwind CSS. I focus on
                  creating user-friendly interfaces that combine performance,
                  accessibility, and clean design. Over the past year, I've
                  delivered real-world projects including interactive
                  dashboards, voice-enabled UIs, and dynamic spatial editors
                  using tools like Framer Motion, Konva, and LiveKit
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  I'm passionate about frontend architecture, animations, and
                  enhancing developer experience through thoughtful UI patterns
                  and scalable code. Outside of coding, I stay inspired by
                  exploring new web technologies
                </p>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  <motion.div
                    className="p-4 bg-gray-50 rounded-lg shadow-sm"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                    }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Award className="text-cyan-500 mb-2" size={24} />
                    <h4 className="font-semibold text-gray-900">5+ Projects</h4>
                    <p className="text-sm text-gray-600">
                      Delivered successfully
                    </p>
                  </motion.div>
                  <motion.div
                    className="p-4 bg-gray-50 rounded-lg shadow-sm"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0, 82, 219, 0.3)",
                    }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Calendar className="text-blue-500 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Experience</p>
                  </motion.div>
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
        viewport={{ once: false, amount: 0.3 }}
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
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 20px rgba(0, 82, 219, 0.4)",
                    }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                    style={{ animationDelay: `${index * 100}ms` }}
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
        viewport={{ once: false, amount: 0.3 }}
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8"
              variants={containerVariants}
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    y: window.innerWidth <= 1024 ? 0 : -5,
                    rotate: 5,
                    boxShadow: "0 15px 30px rgba(0, 82, 219, 0.5)",
                  }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 1.5,
                    ease: easeInOut,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() =>
                    window.innerWidth < 1024
                      ? setActiveIndex(activeIndex === index ? null : index)
                      : null
                  }
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain transition-all duration-300 group-hover:blur-sm"
                    />
                    <motion.div
                      className={`
          absolute inset-0 bg-black/50 flex items-center justify-center space-x-4
          transition-opacity duration-300
          ${activeIndex === index ? "opacity-100" : "opacity-0"}
          lg:opacity-0 group-hover:lg:opacity-100
        `}
                    >
                      <motion.a
                        href={project.liveUrl}
                        className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9, rotate: 5 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9, rotate: 5 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full"
                          variants={itemVariants}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-24 bg-gradient-to-br from-gray-50 to-cyan-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants}>
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Experience & InternShip
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                My professional journey and academic background.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              variants={containerVariants}
            >
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start mb-12 last:mb-0"
                    variants={itemVariants}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-6 shadow-md"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>

                    <motion.div
                      className="flex-grow bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 20px rgba(0, 82, 219, 0.3)",
                      }}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
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
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </motion.div>

                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-20 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-20" />
                    )}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants}>
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Open to new opportunities and exciting projects. Let's
                collaborate!
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Available for freelance and full-time roles. Whether it's a
                  new project or a tech discussion, I'm just a message away.
                </p>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-cyan-100 rounded-lg mr-4 shadow-sm">
                      <Mail size={20} className="text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        abdelrahmanhabib502@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-emerald-100 rounded-lg mr-4 shadow-sm">
                      <Phone size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+20 1023289634</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 shadow-sm">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600">Egypt</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-gray-50"
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
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-gray-50"
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
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-gray-50 resize-none"
                      placeholder="Tell me about your project..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 30px rgba(0, 82, 219, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
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
