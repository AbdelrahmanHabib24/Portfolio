import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const reveal: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "Najran Health Platform",
    description:
      "Full-stack bilingual (AR/EN) healthcare platform with advanced GSAP animations and a role-based admin dashboard for appointment and operations management.",
    image: "/najran-health.png",
    technologies: ["Next.js", "Supabase", "GSAP", "Tailwind CSS"],
    liveUrl: "https://najran-health.vercel.app/",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Kalima Platform",
    description:
      "Production-grade platform with a controlled order lifecycle (Pending → Received → Confirmed → Returned) and KPI-based performance tracking with secure watermarking.",
    image: "/Screenshot 2026-04-30 121035.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://kalima-edu.com/",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Travel and Tour",
    description:
      "Tour and Travel app for easy planning and unforgettable adventures — powered by an AI voice assistant built with LiveKit, Deepgram, and Google Gemini.",
    image: "/Screenshot 2025-01-05 222818.png",
    technologies: ["Next.js", "Tailwind CSS", "React Query", "Prisma", "PostgreSQL", "LiveKit", "Google Gemini"],
    liveUrl: "https://travel-and-tour-ebon.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/Travel-and-Tour",
    featured: false,
  },
  {
    title: "Movie App",
    description:
      "React app for exploring trending TV shows and movies with ratings submission and secure authentication.",
    image: "/Screenshot 2025-07-28 220237.png",
    technologies: ["React", "Redux", "Tailwind CSS", "AOS"],
    liveUrl: "https://movie-app-mu-five-17.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/MovieApp",
    featured: false,
  },
  {
    title: "E-Commerce",
    description:
      "E-commerce platform with authentication, local storage session management, and efficient product management.",
    image: "/Screenshot 2024-10-28 095944.png",
    technologies: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ecommerce-nine-drab-69.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/Ecommerce",
    featured: false,
  },
  {
    title: "Food Delivery",
    description:
      "Responsive food delivery app enabling users to browse menus, place orders, and track deliveries efficiently.",
    image: "/Screenshot 2024-10-28 101613.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://food-delivery-seven-vert.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/Food-Delivery",
    featured: false,
  },
  {
    title: "Car Rental Dashboard",
    description:
      "Responsive car-rental admin dashboard — fleet status, add/edit vehicles and drivers, bookings, filters, and real-time earnings.",
    image: "/Car-Rental.png",
    technologies: ["React", "Tailwind CSS", "Zustand", "React Router"],
    liveUrl: "https://car-rental-dashboard-peach.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/CarRental---Dashboard",
    featured: false,
  },
  {
    title: "AETO Luxury Eyewear",
    description:
      "Premium Shopify storefront with a fully custom theme — editorial layouts, multilingual RTL/LTR, dynamic section architecture, and cinematic campaigns.",
    image: "/ateo.png",
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "HTML5", "Shopify Schema"],
    liveUrl: "https://aetoeyewear.com/ar-ae",
    githubUrl: "",
    featured: false,
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* ── Section heading ─────────────────────── */}
        <motion.div className="text-center mb-16" variants={reveal}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-5">
            Explore some of my recent work showcasing creativity and technical expertise.
          </p>
        </motion.div>

        {/* ── Project grid (Progressive Scroll Reveal) ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/85 dark:bg-[#070e1e]/90 border border-slate-200/80 dark:border-cyan-500/20 rounded-2xl overflow-hidden group relative shadow-lg transition-colors duration-300 hover:border-cyan-400/50"
              style={{
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {/* Featured ribbon */}
              {project.featured && (
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-lg"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
                >
                  <Star size={9} fill="white" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full glass text-white hover:text-cyan-300 transition-all duration-[250ms] translate-y-2 group-hover:translate-y-0"
                  >
                    <ExternalLink size={17} />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full glass text-white hover:text-gray-300 transition-all duration-[250ms] translate-y-2 group-hover:translate-y-0 [transition-delay:40ms]"
                    >
                      <Github size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-[250ms]"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
