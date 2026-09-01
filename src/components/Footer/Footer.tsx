import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: "https://github.com/AbdelrahmanHabib24", label: "GitHub", Icon: FaGithub },
    { href: "https://www.linkedin.com/in/abdelrahmanhabib23/", label: "LinkedIn", Icon: FaLinkedin },
    { href: "mailto:abdelrahmanhabib502@gmail.com", label: "Email", Icon: Mail },
    { href: "https://wa.me/201023289634", label: "WhatsApp", Icon: Phone },
  ];

  return (
    <footer className="relative py-10 transition-colors duration-300">
      {/* ── Refined Subtle Top Divider Line ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px] w-full flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg px-4 flex items-center justify-center">
          {/* Subtle center ambient radiance (ultra-soft, low opacity) */}
          <div className="absolute w-2/5 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 dark:via-cyan-400/25 to-transparent blur-[1px]" />
          {/* Hairline subtle gradient: transparent → subtle cyan/blue → transparent */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 dark:via-cyan-400/35 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="text-center sm:text-left">
          <span className="font-bold text-slate-900 dark:text-white text-sm">
            Abdelrahman <span className="text-cyan-500 dark:text-cyan-400">Habib</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-400 dark:text-gray-600">
          © {year} Abdelrahman Habib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}