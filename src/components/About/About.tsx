/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import programmingAnimation from "../../../Programming.json";
import { Award } from "lucide-react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 text-gray-900 dark:text-white"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Discover my journey, skills, and passion for creating impactful
            digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="flex justify-center items-center"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <Lottie
              animationData={programmingAnimation}
              loop
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:text-start text-center text-gray-900 dark:text-white">
              Front End Developer
            </h3>

            <motion.ul
              className="list-disc pl-5 mb-8 leading-relaxed text-base sm:text-lg space-y-2 text-gray-600 dark:text-gray-300"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {[
                "Building modern and responsive web applications.",
                "Experienced in React, Next.js, and Tailwind CSS.",
                "Creating user-friendly interfaces with high performance and accessibility.",
                "Delivered real-world projects like interactive dashboards and voice-enabled UIs.",
                "Skilled in tools like Framer Motion, Konva, and LiveKit.",
                "Passionate about frontend architecture and animations.",
                "Improving developer experience through scalable code and thoughtful UI patterns.",
                "Continuously exploring emerging web technologies.",
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div
                className="p-4 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0, 82, 219, 0.25)",
                }}
              >
                <Award className="text-cyan-500 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  5+ <span className="text-sm">Projects</span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Delivered successfully
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
