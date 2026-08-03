import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  { href: "https://github.com/AbdelrahmanHabib24",          icon: <Github   size={18} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abdelrahmanhabib23/", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "mailto:abdelrahmanhabib502@gmail.com",           icon: <Mail     size={18} />, label: "Email" },
];

export default function Footer() {
  return (
    <motion.footer
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Gradient top line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, #06b6d4 40%, #8b5cf6 60%, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">

        {/* Brand */}
        <p className="text-xl font-bold gradient-text mb-0.5">Abdelrahman Habib</p>
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-400 dark:text-gray-600 mb-6">
          Frontend Developer
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-7">
          {socials.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="p-2.5 rounded-full glass text-gray-500 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-[250ms]"
              whileHover={{ scale: 1.12, y: -2 }}
              transition={{ duration: 0.25 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center justify-center gap-1.5">
          © 2025 Abdelrahman Habib · Built with
          <Heart size={11} className="text-rose-400" fill="currentColor" />
          &amp; React
        </p>
      </div>
    </motion.footer>
  );
}