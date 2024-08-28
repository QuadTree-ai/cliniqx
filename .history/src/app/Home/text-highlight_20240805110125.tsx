// src/app/Home/text-highlight.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineVariants = (delay: number) => ({
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.05, transition: { delay } },
  });

  useEffect(() => {
    const animateLines = async () => {
      if (scrollY > 100) {
        await controls.start("visible");
      } else {
        await controls.start("hidden");
      }
    };
    animateLines();
  }, [scrollY, controls]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center font-bold text-8xl leading-tight space-y-8">
        <motion.span
          className="block"
          variants={getLineVariants(0)}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.2)}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.4)}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          & treatment
        </motion.span>
      </div>
    </div>
  );
};

export default TextHighlight;
