import {
  Spline,
  BrainCircuit,
  Layers,
  FileCode,
  ServerCog,
  Boxes,
  Database,
  Github,
  Sigma,
  Workflow,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Code
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: User, path: "/" },
  { id: "about", label: "About", icon: User, path: "/about" },
  { id: "skills", label: "Skills", icon: Code, path: "/skills" },
  { id: "projects", label: "Projects", icon: Briefcase, path: "/projects" },
  { id: "experience", label: "Experience", icon: GraduationCap, path: "/experience" },
  { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
];

export const skills = [
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

export const projects = [
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
      "Developed a responsive food delivery app using React, enabling users to browse menus, place orders, and track deliveries efficiently",
    image: "Screenshot 2024-10-28 101613.png",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://luminous-froyo-7c35dc.netlify.app/",
    githubUrl: "#",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Front End Developer",
    company: "Eyego",
    period: "May 2025 - Present",
    description:
      "Led frontend development for an AI-based real-time people tracking system using Next.js, Redux, and WebSockets, Integrated AI models for live location tracking, people classification, and step estimation.",
    icon: Briefcase,
  },
  {
    type: "InternShip",
    title: "Web Development Using Python",
    company: "Information Technology Institute (ITI)",
    period: "May 2024 - Sep 2024",
    description:
      "Designed user interfaces with HTML, CSS, JavaScript, and React, while developing secure APIs and web applications using Django and Django REST Framework, emphasizing clean, documented code and API integration",
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