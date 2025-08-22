/* eslint-disable @typescript-eslint/no-require-imports */
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {

  const experiences = [
    {
      type: "work",
      title: "Front End Developer",
      company: "Eyego",
      period: "Sep 2024 - Present",
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
                    <ul className="list-disc pl-4 text-sm leading-relaxed text-gray-600 marker:text-cyan-500 dark:text-gray-300 dark:marker:text-cyan-400">
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
  );
}
