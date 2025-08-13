import { motion } from "framer-motion";
import {
  Spline,
  BrainCircuit,
  Layers,
  FileCode,
  ServerCog,
  Boxes,
  Database,
  Sigma,
  Workflow,
  Github,
} from "lucide-react";

export default function Skills() {

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

  return (
    <motion.section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-cyan-900"
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
        <motion.div>
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
              A showcase of the technologies and tools I master.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    boxShadow: "0 8px 20px rgba(0, 82, 219, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 ${skill.color} rounded-lg mr-4 shadow-sm`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-300">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5 bg-gray-200 dark:bg-gray-700">
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
  );
}
