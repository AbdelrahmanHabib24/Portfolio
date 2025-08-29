/* eslint-disable @typescript-eslint/no-require-imports */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="dark:bg-black bg-white text-white py-12"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        },
      }}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={{
          hidden: { opacity: 0 },
          visible: { transition: { staggerChildren: 0.2 } },
        }}>
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.a
              href="https://github.com/AbdelrahmanHabib24"
              className="p-3 rounded-full shadow-md transition-all duration-300 bg-white hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdelrahmanhabib23/"
              className="p-3 rounded-full shadow-md transition-all duration-300 bg-white hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:abdelrahmanhabib502@gmail.com"
              className="p-3 rounded-full shadow-md transition-all duration-300 bg-white hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          <motion.p className="text-gray-400 mb-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            © 2025 Abdelrahman Habib. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}