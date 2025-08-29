/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function ParticlesBackground() {
  const { darkMode } = useContext(ThemeContext);

  if (!darkMode) return null;

  const particles = useMemo(() => {
    return [...Array(300)].map((_, i) => {
      const size = Math.random() * 2 + 1;
      const duration = 6 + Math.random() * 6;
      const delay = Math.random() * 2; 
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 50;

      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;

      return { id: i, size, duration, delay, endX, endY };
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-7">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{
            x: p.endX + "vw",
            y: p.endY + "vh",
            scale: [0, 1, 1.2],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: p.size,
              height: p.size,
              background: "white",
              boxShadow: `0 0 ${p.size * 6}px ${p.size * 1.5}px rgba(255,255,255,0.8)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
