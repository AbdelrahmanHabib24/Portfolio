import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, User, Pencil, Send } from "lucide-react";

const reveal: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contactInfo = [
  {
    Icon: Mail,
    label: "EMAIL",
    value: "abdelrahmanhabib502@gmail.com",
    href: "mailto:abdelrahmanhabib502@gmail.com",
  },
  {
    Icon: Phone,
    label: "PHONE",
    value: "+20 102 328 9634",
    href: "tel:+201023289634",
  },
  {
    Icon: MapPin,
    label: "LOCATION",
    value: "Egypt",
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section heading ─────────────────────── */}
        <motion.div className="text-center mb-14" variants={reveal}>
          <span className="section-label mb-3 text-cyan-400 font-semibold tracking-widest text-xs uppercase block">
            LET'S CONNECT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Open to new opportunities and exciting projects.<br />
            Let's <span className="text-cyan-400 font-semibold">collaborate</span> and build something amazing together!
          </p>
        </motion.div>

        {/* ── 2 Columns Grid (Progressive Scroll Reveal) ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">

          {/* ── Left Card: Contact Info ────────────── */}
          <motion.div
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-[#070e1e]/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-xl dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden"
            style={{
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              {/* Headline */}
              <div className="mb-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Let’s Work <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Together
                  </span>
                </h3>
                <div className="mt-3 h-[2.5px] w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Whether it’s a new project, a freelance opportunity, or a tech discussion — I’m just a message away.
              </p>

              {/* Contact List (3 Items with Progressive Scroll Reveal) */}
              <div className="space-y-4">
                {contactInfo.map(({ Icon, label, value, href }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="flex items-center gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                        <Icon size={19} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[11px] font-bold tracking-widest text-cyan-400 uppercase mb-0.5">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors truncate block"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-300 block truncate">
                            {value}
                          </span>
                        )}
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && (
                      <div className="mt-4 border-b border-slate-100 dark:border-slate-800/80" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right Card: Form ──────────────────── */}
          <motion.div
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-[#070e1e]/80 border border-slate-200/80 dark:border-cyan-500/30 backdrop-blur-xl shadow-xl dark:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden"
            style={{
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            {/* Top edge glowing reflection ray */}
            <div className="absolute top-0 right-10 w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4]" />

            <form
              action="https://formsubmit.co/abdelrahmanhabib502@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://protoflio58.netlify.app" />

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-700 dark:text-gray-300 uppercase mb-2">
                  <User size={14} className="text-cyan-400" />
                  <span>FULL NAME</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-slate-50 dark:bg-[#040814]/90 border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-700 dark:text-gray-300 uppercase mb-2">
                  <Mail size={14} className="text-cyan-400" />
                  <span>EMAIL ADDRESS</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-50 dark:bg-[#040814]/90 border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-700 dark:text-gray-300 uppercase mb-2">
                  <Pencil size={14} className="text-cyan-400" />
                  <span>MESSAGE</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-50 dark:bg-[#040814]/90 border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
