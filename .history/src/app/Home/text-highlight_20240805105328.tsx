// src/app/Home/text-highlight.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineVariants = (delay: number, isHighlighted: boolean) => ({
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: isHighlighted ? "#FFFFFF" : "#6B7280", scale: 1.05, transition: { delay, duration: 1.2 } },
  });

  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();

  useEffect(() => {
    const highlightLine = (lineControls: any, isHighlighted: boolean) => {
      lineControls.start(isHighlighted ? "visible" : "hidden");
    };

    highlightLine(line1Controls, scrollY > 100 && scrollY < 200);
    highlightLine(line2Controls, scrollY > 200 && scrollY < 300);
    highlightLine(line3Controls, scrollY > 300 && scrollY < 400);

  }, [scrollY, line1Controls, line2Controls, line3Controls]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug space-y-4">
        <motion.span
          className="block"
          variants={getLineVariants(0, scrollY > 100 && scrollY < 200)}
          initial="hidden"
          animate={line1Controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.2, scrollY > 200 && scrollY < 300)}
          initial="hidden"
          animate={line2Controls}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.4, scrollY > 300 && scrollY < 400)}
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
