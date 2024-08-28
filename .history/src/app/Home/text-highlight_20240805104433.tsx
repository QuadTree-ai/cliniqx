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
    hidden: { opacity: 0.3, scale: 1 },
    visible: { opacity: 1, scale: 1.05 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.h1
        className="text-center text-gray-500 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl px-4 leading-snug"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        You take care of your habits, we take care of your health & treatment
      </motion.h1>
    </div>
  );
};

export default TextHighlight;
