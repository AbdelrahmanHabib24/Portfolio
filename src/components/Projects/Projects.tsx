import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye, Github } from "lucide-react";
import ProjectGallery, { type ProjectScreen } from "./ProjectGallery";

const hegazyScreens: ProjectScreen[] = [
  {
    src: "/projects/hegazy-motors/dashboard.png",
    title: "Dashboard",
    alt: "Hegazy Motors ERP dashboard with sales analytics and vehicle performance.",
  },
  {
    src: "/projects/hegazy-motors/sales-invoice.png",
    title: "Sales Invoice",
    alt: "Hegazy Motors sales invoice form with customer, warehouse, payment, and vehicle details.",
  },
  {
    src: "/projects/hegazy-motors/inventory.png",
    title: "Vehicle Inventory",
    alt: "Hegazy Motors vehicle inventory table and warehouse form.",
  },
  {
    src: "/projects/hegazy-motors/customers.png",
    title: "Customers",
    alt: "Hegazy Motors customer management table.",
  },
  {
    src: "/projects/hegazy-motors/invoices.png",
    title: "Sales & Purchase Invoices",
    alt: "Hegazy Motors sales and purchase invoices list with filters.",
  },
  {
    src: "/projects/hegazy-motors/account-statement.png",
    title: "Account Statement",
    alt: "Hegazy Motors account statement with balances and transactions.",
  },
  {
    src: "/projects/hegazy-motors/balance-sheet.png",
    title: "Balance Sheet",
    alt: "Hegazy Motors balance sheet report with date filters.",
  },
];

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category?: string;
  screens?: ProjectScreen[];
};

const actionIconClassName =
  "p-2.5 rounded-full glass text-slate-900 hover:text-cyan-700 focus-visible:text-cyan-700 dark:text-white dark:hover:text-cyan-300 dark:focus-visible:text-cyan-300 transition-all duration-[250ms] translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 [@media(hover:none)]:translate-y-0";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const projects: Project[] = [
  {
    title: "Hegazy Motors",
    category: "ERP",
    description:
      "Frontend contributor within the team behind an automotive ERP, working on sales invoicing and vehicle inventory interfaces.",
    image: hegazyScreens[0].src,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Recharts",
      "React Flow",
    ],
    liveUrl: "https://carsdemo.greenmorph.net/login",
    githubUrl: "",
    screens: hegazyScreens,
  },
  {
    title: "Taj Holding",
    description:
      "Built an enterprise-grade multilingual corporate platform with scalable architecture, reusable UI components, design-system driven development, and production-ready responsive experiences.",
    image: "/taj.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Supabase"],
    liveUrl: "https://www.tajholding.com/en",
    githubUrl: "",
  },
  {
    title: "Kalima Platform",
    description:
      "Production-grade platform with a controlled order lifecycle (Pending → Received → Confirmed → Returned) and KPI-based performance tracking with secure watermarking.",
    image: "/Screenshot 2026-04-30 121035.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://kalima-edu.com/",
    githubUrl: "",
  },

  {
    title: "CreMedia",
    description:
      "Freelance corporate landing page built for a real client, featuring responsive layouts, polished UI, and smooth interactive animations.",
    image: "/cremedia.png",
    technologies: ["Astro", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://www.cremediaeg.com/",
    githubUrl: "",
  },
  {
    title: "Travel and Tour",
    description:
      "Tour and Travel app for easy planning and unforgettable adventures — powered by an AI voice assistant built with LiveKit, Deepgram, and Google Gemini.",
    image: "/Screenshot 2025-01-05 222818.png",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "React Query",
      "LiveKit",
      "Google Gemini",
    ],
    liveUrl: "https://travel-and-tour-ebon.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/Travel-and-Tour",
  },
  {
    title: "AETO Luxury Eyewear",
    description:
      "Premium Shopify storefront with a fully custom theme — editorial layouts, multilingual RTL/LTR, dynamic section architecture, and cinematic campaigns.",
    image: "/ateo.png",
    technologies: [
      "Shopify",
      "Liquid",
      "Custom Theme",
      "JavaScript",
      "HTML/CSS",
    ],
    liveUrl: "https://aetoeyewear.com/ar-ae",
    githubUrl: "",
  },
  {
    title: "Najran Health Platform",
    description:
      "Full-stack bilingual (AR/EN) healthcare platform with advanced GSAP animations and a role-based admin dashboard for appointment and operations management.",
    image: "/najran-health.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "GSAP", "Tailwind CSS"],
    liveUrl: "https://najran-health.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Movie App",
    description:
      "React app for exploring trending TV shows and movies with ratings submission and secure authentication.",
    image: "/Screenshot 2025-07-28 220237.png",
    technologies: ["React", "Redux", "Tailwind CSS", "TMDB API"],
    liveUrl: "https://movie-app-mu-five-17.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/MovieApp",
  },
  // {
  //   title: "Food Delivery",
  //   description:
  //     "Responsive food delivery app enabling users to browse menus, place orders, and track deliveries efficiently.",
  //   image: "/Screenshot 2024-10-28 101613.png",
  //   technologies: ["React", "Tailwind CSS", "React Router"],
  //   liveUrl: "https://food-delivery-seven-vert.vercel.app/",
  //   githubUrl: "https://github.com/AbdelrahmanHabib24/Food-Delivery",
  // },
  {
    title: "Car Rental Dashboard",
    description:
      "Responsive car-rental admin dashboard — fleet status, add/edit vehicles and drivers, bookings, filters, and real-time earnings.",
    image: "/Car-Rental.png",
    technologies: ["React", "Tailwind CSS", "Zustand", "React Router"],
    liveUrl: "https://car-rental-dashboard-peach.vercel.app/",
    githubUrl: "https://github.com/AbdelrahmanHabib24/CarRental---Dashboard",
  },
];

export default function Projects() {
  const [gallery, setGallery] = useState<Project | null>(null);
  return (
    <>
      <motion.section
        id="projects"
        className="py-24 relative overflow-hidden transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* ── Section heading ─────────────────────── */}
          <motion.div className="text-center mb-16" variants={reveal}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-5">
              Explore some of my recent work showcasing creativity and technical
              expertise.
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
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 sm:h-52 bg-gradient-to-b from-slate-900 via-[#070e20] to-[#030712] flex items-center justify-center  ">
                  <img
                    src={project.image}
                    alt={project.screens?.[0].alt ?? project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-fill  transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-md"
                  />
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity duration-[250ms]"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    }}
                  >
                    {project.screens && (
                      <button
                        type="button"
                        onClick={() => setGallery(project)}
                        aria-label={`View screens for ${project.title}`}
                        className={actionIconClassName}
                      >
                        <Eye size={17} />
                      </button>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo in a new tab`}
                      className={actionIconClassName}
                    >
                      <ExternalLink size={17} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={actionIconClassName}
                      >
                        <Github size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white mb-2">
                    {project.screens ? (
                      project.title
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-[250ms]"
                      >
                        {project.title}
                      </a>
                    )}
                    {project.category && (
                      <span className="inline-block rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-0.5 text-[11px] leading-none text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-300">
                        {project.category}
                      </span>
                    )}
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
      {gallery?.screens && (
        <ProjectGallery
          title={gallery.title}
          screens={gallery.screens}
          onClose={() => setGallery(null)}
        />
      )}
    </>
  );
}
