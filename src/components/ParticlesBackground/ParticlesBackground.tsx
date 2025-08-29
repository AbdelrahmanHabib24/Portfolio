/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function ParticlesBackground() {
  const { darkMode } = useContext(ThemeContext);

  if (!darkMode) return null;

  const particles = useMemo(() => {
    return [...Array(110)].map((_, i) => {
      const size = Math.random() * 2 + 1;
      const tailLength = size * (8 + Math.random() * 5);
      const duration = 10 + Math.random() * 10;
      const delay = Math.random() * 5;
      const startX = 100 + Math.random() * 20; 
      const endX = -10 - Math.random() * 20;   
      const startY = Math.random() * 90;    
      const endY = startY + Math.random() * 20 - 10; 

      return { id: i, size, tailLength, duration, delay, startX, endX, startY, endY };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-7">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute flex items-center"
          style={{ top: `${p.startY}vh`, left: `${p.startX}vw` }}
          animate={{
            x: [0, p.endX - p.startX + "vw"],
            y: [0, p.endY - p.startY + "vh"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
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
          <div
            className="rounded-full blur-md opacity-60"
            style={{
              width: p.tailLength,
              height: p.size / 2,
              marginLeft: -p.size * 2,
              background:
                "linear-gradient(to left, white, rgba(255,255,255,0))",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
