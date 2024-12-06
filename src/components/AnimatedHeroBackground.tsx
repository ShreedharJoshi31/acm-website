import React from "react";
import { motion } from "framer-motion";

export const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 100%)",
              "linear-gradient(225deg, rgba(147,51,234,0.2) 0%, rgba(59,130,246,0.2) 100%)",
              "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Animated circles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1,
          }}
        >
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500"
            style={{ filter: "blur(50px)" }}
          />
        </motion.div>
      ))}

      {/* Animated code symbols */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            y: [0, Math.random() * (-200 - -50) + -50],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute text-blue-500/20 text-4xl font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "20%",
          }}
        >
          {"</>"}
        </motion.div>
      ))}
    </div>
  );
};
