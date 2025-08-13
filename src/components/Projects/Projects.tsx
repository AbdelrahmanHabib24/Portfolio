import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {

  const projects = [
    {
      title: "Voice Agent",
      description:
        "Built the frontend of a real-time voice assistant using Next.js and LiveKit, featuring WebRTC audio streaming, animated waveforms, and chat-based interaction with Deepgram STT, Gemini LLM, and Cartesia TTS integration.",
      image: "/Screenshot 2025-07-22.png",
      technologies: ["Next", "Tailwind", "Python", "LiveKit"],
      liveUrl: "https://live-kit-agent.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Movie App",
      description:
        "A React app that provides a user-friendly interface for exploring trending TV shows and movies, submitting ratings, and ensuring secure authentication.",
      image: "/Screenshot 2025-07-28 220237.png",
      technologies: ["React", "Redux", "Tailwind ", "Aos"],
      liveUrl: "https://movie-app897.netlify.app/",
      githubUrl: "https://github.com/AbdelrahmanHabib24/MovieApp",
    },
    {
      title: "E-Commerce",
      description:
        "An e-commerce platform built with React and Tailwind CSS featuring authentication, local storage for session management and efficient product management.",
      image: "/Screenshot 2024-10-28 095944.png",
      technologies: ["React", "Redux", "Tailwind", "Framer Motion"],
      liveUrl: "https://ecommerce128.netlify.app/",
      githubUrl: "https://github.com/AbdelrahmanHabib24/Ecommerce",
    },
    {
      title: "Travel and Tour",
      description:
        "Explore our Tour and Travel app for easy planning and unforgettable adventures. Crafted with Next.js and Tailwind CSS for a smooth, modern experience.",
      image: "/Screenshot 2025-01-05 222818.png",
      technologies: ["Next", "Tailwind", "Framer Motion"],
      liveUrl: "https://travel97.netlify.app/",
      githubUrl: "https://github.com/AbdelrahmanHabib24/Travel-and-Tour",
    },
    {
      title: "Food Delivery",
      description:
        "Developed a responsive food delivery app using React, enabling users to browse menus, place orders, and track deliveries efficiently",
      image: "/Screenshot 2024-10-28 101613.png",
      technologies: ["React", "Tailwind"],
      liveUrl: "https://luminous-froyo-7c35dc.netlify.app/",
      githubUrl: "#",
    },
  ];

  return (
   <motion.section
  id="projects"
  className="py-24 bg-white dark:bg-gray-900"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.1 }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className="text-center mb-16"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
          Explore some of my recent work showcasing creativity and technical
          expertise.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="rounded-xl overflow-hidden relative group transition-all duration-300 bg-white shadow-md hover:shadow-xl dark:bg-black dark:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
            whileHover={{
              scale: 1.03,
              rotate: 0.5,
              boxShadow: "0 10px 20px rgba(0, 82, 219, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-fill transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black/50 dark:bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <a
                  href={project.liveUrl}
                  className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                )}
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 transition-colors text-gray-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <p className="mb-4 text-sm leading-relaxed line-clamp-2 text-gray-600 dark:text-gray-300">
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

  );
}
