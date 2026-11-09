import { useRef, useEffect, useCallback } from "react";
import { FileUser } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const socials = [
  { href: "https://github.com/AbdelrahmanHabib24", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/abdelrahmanhabib23/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "/AbdElrahman--Habib.pdf", label: "View CV (PDF)", Icon: FileUser },
  { href: "https://wa.me/201023289634", label: "WhatsApp", Icon: BsWhatsapp },
];

interface WaterDrop {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

const HEADLINE = "Thanks for Exploring My Journey.";
const EMPTY_MASK = "radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 100%)";
const TEXT_CLASSES =
  "text-[clamp(1.35rem,2.5vw+0.4rem,2.35rem)] font-extrabold tracking-normal leading-[1.35] text-center px-2 pt-1.5 pb-2.5 select-none";

// Helper to generate soft radial gradient with smooth edge
const radial = (x: number, y: number, r: number, a: number) =>
  `radial-gradient(circle ${r.toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, rgba(0,0,0,${a.toFixed(2)}) 0%, rgba(0,0,0,${(a * 0.45).toFixed(2)}) 50%, transparent 100%)`;

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  const dropsRef = useRef<WaterDrop[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const cursorRef = useRef<{ x: number; y: number; active: boolean; alpha: number }>({
    x: 0,
    y: 0,
    active: false,
    alpha: 0,
  });

  const rafRef = useRef<number | null>(null);

  // Initialize CSS mask to empty
  useEffect(() => {
    if (revealRef.current) {
      revealRef.current.style.webkitMaskImage = EMPTY_MASK;
      revealRef.current.style.maskImage = EMPTY_MASK;
    }
  }, []);

  const startLoop = () => {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(updateFrame);
    }
  };

  const addDrop = useCallback((x: number, y: number, radius = 55) => {
    dropsRef.current.push({ x, y, radius, alpha: 1 });
    if (dropsRef.current.length > 14) dropsRef.current.shift();
    startLoop();
  }, []);

  const updateFrame = (timestamp: number) => {
    const dt = 0.016;
    const time = timestamp * 0.003;
    const cursor = cursorRef.current;
    const drops = dropsRef.current;

    // Fade out cursor when not hovering/touching
    if (!cursor.active && cursor.alpha > 0) {
      cursor.alpha = Math.max(0, cursor.alpha - dt * 2);
    }

    // Update trailing water drops (smooth absorption into sand)
    for (let i = drops.length - 1; i >= 0; i--) {
      const d = drops[i];
      d.alpha -= dt * 1.1;
      if (d.alpha <= 0) drops.splice(i, 1);
    }

    // Stop loop when all water has completely receded
    if (drops.length === 0 && cursor.alpha <= 0.01) {
      if (revealRef.current) {
        revealRef.current.style.webkitMaskImage = EMPTY_MASK;
        revealRef.current.style.maskImage = EMPTY_MASK;
      }
      rafRef.current = null;
      return;
    }

    // Build organic liquid boundary
    const masks: string[] = [];

    // 1. Cursor fluid pool (with wavy harmonic offsets)
    if (cursor.alpha > 0.02) {
      const r = 68 * cursor.alpha;
      const wave = Math.sin(time * 3) * 8;
      masks.push(radial(cursor.x, cursor.y, r, cursor.alpha));
      masks.push(radial(cursor.x + 16 + wave, cursor.y + Math.cos(time * 2) * 6, r * 0.75, cursor.alpha * 0.8));
      masks.push(radial(cursor.x - 16 - wave, cursor.y - Math.cos(time * 2) * 6, r * 0.75, cursor.alpha * 0.8));
    }

    // 2. Trailing water drops
    for (const d of drops) {
      const wave = Math.sin(time * 2 + d.x * 0.05) * 6;
      masks.push(radial(d.x, d.y, d.radius, d.alpha));
      masks.push(radial(d.x + wave, d.y + wave * 0.5, d.radius * 0.65, d.alpha * 0.7));
    }

    if (revealRef.current) {
      const maskStr = masks.length > 0 ? masks.join(", ") : EMPTY_MASK;
      revealRef.current.style.webkitMaskImage = maskStr;
      revealRef.current.style.maskImage = maskStr;
    }

    rafRef.current = requestAnimationFrame(updateFrame);
  };

  // Unified Pointer Handlers (Works seamlessly across Desktop Mouse & Mobile Touch)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorRef.current = { x, y, alpha: 1, active: true };

    const last = lastPosRef.current;
    if (!last) {
      addDrop(x, y);
    } else {
      const dist = Math.hypot(x - last.x, y - last.y);
      if (dist >= 18) {
        const steps = Math.min(Math.floor(dist / 18), 4);
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          addDrop(last.x + (x - last.x) * t, last.y + (y - last.y) * t);
        }
      }
    }
    lastPosRef.current = { x, y };
    startLoop();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorRef.current = { x, y, alpha: 1, active: true };
    lastPosRef.current = { x, y };

    // Water ripple splash on tap or click
    addDrop(x, y, 50);
    setTimeout(() => addDrop(x + 25, y, 60), 60);
    setTimeout(() => addDrop(x - 25, y, 60), 120);
  };

  const handlePointerLeave = () => {
    cursorRef.current.active = false;
    lastPosRef.current = null;
    startLoop();
  };

  // Wave sweep from left to right across text
  const triggerWave = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const midY = rect.height / 2;
    const totalW = rect.width;
    const steps = 8;

    for (let i = 0; i <= steps; i++) {
      setTimeout(() => {
        const x = (totalW / steps) * i;
        addDrop(x, midY, 65);
      }, i * 70);
    }
  }, [addDrop]);

  // Auto-wave on scroll into view & gentle periodic tide on mobile idle
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerWave();
          if (window.innerWidth < 768 && !timer) {
            timer = setInterval(() => {
              if (!cursorRef.current.active) triggerWave();
            }, 4500);
          }
        } else if (timer) {
          clearInterval(timer);
          timer = null;
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [triggerWave]);

  return (
    <section
      id="contact"
      aria-label="Closing message"
      className="relative w-full py-8 sm:py-10 md:py-12 flex flex-col items-center justify-center transition-colors duration-500"
    >
      <div
        ref={containerRef}
        role="region"
        tabIndex={0}
        aria-label={HEADLINE}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
        onPointerUp={handlePointerLeave}
        onFocus={triggerWave}
        className="relative cursor-default select-none outline-none touch-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-2xl px-4 py-2 sm:px-6 sm:py-3"
      >
        {/* Base Layer: White Text (Ocean Sand) */}
        <p className={`${TEXT_CLASSES} text-slate-900 dark:text-white transition-colors duration-300`}>
          {HEADLINE}
        </p>

        {/* Revealed Layer: Signature Ocean Blue Waterline */}
        <div
          ref={revealRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none px-4 py-2 sm:px-6 sm:py-3"
          style={{ WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }}
        >
          <p className={`${TEXT_CLASSES} bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]`}>
            {HEADLINE}
          </p>
        </div>
      </div>

      {/* Social & Contact Links */}
      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-3.5 relative z-10">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="p-2 sm:p-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </section>
  );
}
