import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  colorRgb: string;
  pulsePhase: number;
  pulseSpeed: number;
  depth: number;
  glow: boolean;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;
    let touchFadeTimer: NodeJS.Timeout | null = null;

    // Mouse / Touch tracking for interactive network
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      isActive: false,
      intensity: 0,
    };

    // Sophisticated tech palette: Cyan, Sky Blue, Electric Blue, Violet Glow
    const paletteDark = [
      { rgb: "6, 182, 212", glow: true },   // Cyan
      { rgb: "56, 189, 248", glow: true },  // Sky Blue
      { rgb: "37, 99, 235", glow: false },  // Electric Blue
      { rgb: "139, 92, 246", glow: true },  // Violet
      { rgb: "147, 197, 253", glow: false },// Soft Light Blue
    ];

    const paletteLight = [
      { rgb: "8, 145, 178", glow: false },  // Cyan-600
      { rgb: "2, 132, 199", glow: false },  // Sky-600
      { rgb: "37, 99, 235", glow: false },  // Blue-600
      { rgb: "100, 116, 139", glow: false },// Slate-500
    ];

    const palette = darkMode ? paletteDark : paletteLight;

    const getSettings = (w: number) => {
      if (w < 640) {
        return { count: 32, maxDist: 75, pointerDist: 110 }; // Mobile
      }
      if (w < 1024) {
        return { count: 58, maxDist: 95, pointerDist: 135 }; // Tablet
      }
      return { count: 90, maxDist: 120, pointerDist: 160 };  // Desktop
    };

    const initParticles = () => {
      const { count } = getSettings(width);
      particles = [];

      for (let i = 0; i < count; i++) {
        const pColor = palette[Math.floor(Math.random() * palette.length)];
        const depth = Math.random(); // 0 (far) to 1 (near)

        // Varied sizes and active floating velocities
        const radius = depth > 0.75 ? 2.2 + Math.random() * 0.9 : depth > 0.4 ? 1.4 + Math.random() * 0.6 : 0.8 + Math.random() * 0.5;
        const speed = (0.35 + depth * 0.45) * (Math.random() * 0.4 + 0.8);
        const angle = Math.random() * Math.PI * 2;

        const baseAlpha = (darkMode ? 0.2 : 0.15) + depth * 0.5;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius,
          baseAlpha,
          alpha: baseAlpha,
          colorRgb: pColor.rgb,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02,
          depth,
          glow: darkMode && pColor.glow && depth > 0.5,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Global Mouse Tracking
    const handleMouseMove = (e: MouseEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
      pointer.isActive = true;
      pointer.intensity = 1;
      if (touchFadeTimer) clearTimeout(touchFadeTimer);
    };

    const handleMouseLeave = () => {
      pointer.isActive = false;
      pointer.intensity = 0;
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    // Mobile / Touch Interaction (Touch as Mouse)
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
        pointer.x = pointer.targetX;
        pointer.y = pointer.targetY;
        pointer.isActive = true;
        pointer.intensity = 1;
        if (touchFadeTimer) clearTimeout(touchFadeTimer);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
        pointer.isActive = true;
        pointer.intensity = 1;
        if (touchFadeTimer) clearTimeout(touchFadeTimer);
      }
    };

    const handleTouchEnd = () => {
      // Soft lingering fade out after releasing touch
      if (touchFadeTimer) clearTimeout(touchFadeTimer);
      touchFadeTimer = setTimeout(() => {
        pointer.isActive = false;
        pointer.intensity = 0;
        pointer.targetX = -1000;
        pointer.targetY = -1000;
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState !== "hidden";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Dynamic animation loop with high-energy fluid movement
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.667, 2);
      lastTime = time;

      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth pointer coordinate interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.14;
      pointer.y += (pointer.targetY - pointer.y) * 0.14;

      const { maxDist, pointerDist } = getSettings(width);
      const maxDistSq = maxDist * maxDist;
      const pointerDistSq = pointerDist * pointerDist;
      const len = particles.length;

      // 1. Draw Mesh Lines Between Nearby Particles
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * (darkMode ? 0.18 : 0.12) * ((p1.alpha + p2.alpha) * 0.5);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p1.colorRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 2. Draw Interactive Connections to Mouse / Touch Position
      if (pointer.isActive && pointer.x > 0 && pointer.y > 0) {
        for (let i = 0; i < len; i++) {
          const p = particles[i];
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < pointerDistSq) {
            const dist = Math.sqrt(distSq);
            const pointerLineAlpha = (1 - dist / pointerDist) * 0.38 * p.alpha * pointer.intensity;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(${p.colorRgb}, ${pointerLineAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      // 3. Update & Render Particles with Physics & Pulsing Glow
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Active fluid drift with organic wave
        p.x += p.vx * delta + Math.sin(time * 0.0008 + p.pulsePhase) * 0.12 * delta;
        p.y += p.vy * delta + Math.cos(time * 0.0008 + p.pulsePhase) * 0.12 * delta;

        // Pulse brightness and breathing
        p.pulsePhase += p.pulseSpeed * delta;
        p.alpha = Math.max(0.12, p.baseAlpha + Math.sin(p.pulsePhase) * 0.2);

        // Gentle interactive pointer repulsion (works on both mouse & mobile touch)
        if (pointer.isActive && pointer.x > 0 && pointer.y > 0) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < pointerDistSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / pointerDist) * 0.85 * pointer.intensity;
            p.x += (dx / dist) * force * delta * 2.2;
            p.y += (dy / dist) * force * delta * 2.2;
          }
        }

        // Seamless edge wrap
        if (p.x < -15) p.x = width + 15;
        else if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        else if (p.y > height + 15) p.y = -15;

        // Render particle with radiant luminous glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.glow) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(${p.colorRgb}, 0.6)`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(${p.colorRgb}, ${p.alpha})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      if (touchFadeTimer) clearTimeout(touchFadeTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-90 transition-opacity duration-700"
      style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
    />
  );
}
