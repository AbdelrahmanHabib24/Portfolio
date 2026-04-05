/* eslint-disable @typescript-eslint/no-require-imports */
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Front End Developer",
      company: "Mavoid — Alexandria, Egypt",
      period: "Oct 2025 - April 2026",
      points: [
        "Built Gazala E-commerce & MUP property platform (React + ShadCN) with lease lifecycle (Draft → Active → Ended) and automated invoicing.",
        "Delivered invoices/payments and maintenance center (search, filters, pagination, CRUD) using reusable shared components and role-based permissions.",
      ],
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Eyego — Riyadh, Saudi Arabia",
      period: "Sep 2024 - Sep 2025",
      points: [
        "Improved application performance by reducing page load time by ~30%, and designed a real-time tracking system using Next.js, Redux, and WebSockets for seamless client synchronization.",
        "Developed a multi-floor map editor and a low-latency AI voice UI using React, Konva, LiveKit, and OpenAI, while enhancing the reliability of Axios and WebSocket integrations.",
      ],
      icon: Briefcase,
    },
    {
      type: "InternShip",
      title: "Web Development Using Python",
      company: "Information Technology Institute (ITI)",
      period: "May 2024 - Sep 2024",
      points: [
        "Designed responsive UIs with HTML, CSS, JavaScript, and React.",
        "Built secure APIs and web apps using Django and Django REST Framework with clean docs.",
      ],
      icon: GraduationCap,
    },
    {
      type: "InternShip",
      title: "Software Development Fundamentals",
      company: "Information Technology Institute (ITI)",
      period: "Nov 2023 - Feb 2024",
      points: [
        "Strengthened CS fundamentals with C/C++ and core web technologies.",
        "Developed web apps with HTML, CSS, JavaScript, PHP, MySQL, and customized WordPress sites.",
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-24 bg-white dark:bg-black"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Experience & Internship
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
              My professional journey and academic background.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto relative"
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
            <div className="absolute left-6 top-20 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30 dark:opacity-50" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  className="relative flex items-start mb-12 last:mb-0"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.15 },
                    },
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {index < experiences.length - 1 && (
                    <div
                      className="absolute left-6 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30 dark:opacity-50"
                      style={{ top: "4rem", height: "7rem", width: "2px" }}
                    />
                  )}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-6 shadow-lg relative z-10">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-grow p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      <span className="text-sm px-3 py-1 rounded-full text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-700">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="font-medium mb-3 text-cyan-600 dark:text-cyan-400">
                      {exp.company}
                    </h4>
                    <ul className="list-disc pl-4 text-sm leading-relaxed text-gray-600 marker:text-cyan-500 dark:text-gray-300 dark:marker:text-cyan-400 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
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
  );
}
