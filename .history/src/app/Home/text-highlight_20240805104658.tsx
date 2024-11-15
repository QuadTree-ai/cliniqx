// src/app/Home/text-highlight.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [scrollY, controls]);

  const variants = {
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.05 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug space-y-4"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="block">You take care of your habits,</span>
        <span className="block">we take care of your health</span>
        <span className="block">& treatment</span>
      </motion.div>
    </div>
  );
};

export default TextHighlight;
