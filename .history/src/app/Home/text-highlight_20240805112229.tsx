// src/app/Home/text-highlight.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [direction, setDirection] = useState("down");

  const controlLine1 = useAnimation();
  const controlLine2 = useAnimation();
  const controlLine3 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const scrollDirection = yPos > lastYPos ? "down" : "up";
      setDirection(scrollDirection);
      setLastYPos(yPos);

      if (scrollDirection === "down") {
        if (yPos > 100) controlLine1.start("visible");
        if (yPos > 200) controlLine2.start("visible");
        if (yPos > 300) controlLine3.start("visible");
      } else {
        if (yPos <= 300) controlLine3.start("hidden");
        if (yPos <= 200) controlLine2.start("hidden");
        if (yPos <= 100) controlLine1.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastYPos, controlLine1, controlLine2, controlLine3]);

  const variants = {
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center font-bold text-8xl leading-tight space-y-8 text-gray-400">
        <motion.span
          className="block"
          variants={variants}
          initial="hidden"
          animate={controlLine1}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={variants}
          initial="hidden"
          animate={controlLine2}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={variants}
          initial="hidden"
          animate={controlLine3}
        >
          & treatment
        </motion.span>
      </div>
    </div>
  );
};

export default TextHighlight;
