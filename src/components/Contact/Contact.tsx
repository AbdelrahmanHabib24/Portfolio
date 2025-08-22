/* eslint-disable @typescript-eslint/no-require-imports */
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {

  return (
    <motion.section
      id="contact"
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
            <h2 className="text-gray-900 dark:text-gray-100 text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Open to new opportunities and exciting projects. Let's
              collaborate!
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
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
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              <h3 className="text-gray-900 dark:text-gray-100 text-2xl font-bold mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                Available for freelance and full-time roles. Whether it's a new
                project or a tech discussion, I'm just a message away.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail size={20} className="text-cyan-600" />,
                    title: "Email",
                    value: "abdelrahmanhabib502@gmail.com",
                    bg: "bg-cyan-100 dark:bg-cyan-900",
                  },
                  {
                    icon: <Phone size={20} className="text-emerald-600" />,
                    title: "Phone",
                    value: "+20 1023289634",
                    bg: "bg-emerald-100 dark:bg-emerald-900",
                  },
                  {
                    icon: <MapPin size={20} className="text-blue-600" />,
                    title: "Location",
                    value: "Egypt",
                    bg: "bg-blue-100 dark:bg-blue-900",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center cursor-pointer"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className={`p-3 ${item.bg} rounded-lg mr-4 shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-gray-100 font-medium">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Contact*/}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              <form
                action="https://formsubmit.co/abdelrahmanhabib502@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://protoflio58.netlify.app"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-cyan-500"
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-cyan-500"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-cyan-500 resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg font-medium shadow-md flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0, 82, 219, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
