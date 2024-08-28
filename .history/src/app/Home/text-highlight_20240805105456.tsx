// src/app/Home/text-highlight.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Event handler to update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for each line
  const getLineVariants = (highlight: boolean) => ({
    hidden: { opacity: 0.3, color: "#6B7280" },
    visible: {
      opacity: highlight ? 1 : 0.3,
      color: highlight ? "#FFFFFF" : "#6B7280",
      scale: highlight ? 1.05 : 1,
    },
  });

  // Animation controls for each line
  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();

  useEffect(() => {
    // Control animations based on scroll position
    line1Controls.start(scrollY > 100 && scrollY < 200 ? "visible" : "hidden");
    line2Controls.start(scrollY > 200 && scrollY < 300 ? "visible" : "hidden");
    line3Controls.start(scrollY > 300 && scrollY < 400 ? "visible" : "hidden");
  }, [scrollY, line1Controls, line2Controls, line3Controls]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug space-y-4">
        <motion.span
          className="block"
          variants={getLineVariants(scrollY > 100 && scrollY < 200)}
          initial="hidden"
          animate={line1Controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(scrollY > 200 && scrollY < 300)}
          initial="hidden"
          animate={line2Controls}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(scrollY > 300 && scrollY < 400)}
          initial="hidden"
          animate={line3Controls}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          & treatment
        </motion.span>
      </div>
    </div>
  );
};

export default TextHighlight;
