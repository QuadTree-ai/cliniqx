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

  const getLineVariants = (delay: number) => ({
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.05, transition: { delay } },
  });

  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();

  useEffect(() => {
    if (scrollY > 100) {
      line1Controls.start("visible");
    } else {
      line1Controls.start("hidden");
    }
    if (scrollY > 200) {
      line2Controls.start("visible");
    } else {
      line2Controls.start("hidden");
    }
    if (scrollY > 300) {
      line3Controls.start("visible");
    } else {
      line3Controls.start("hidden");
    }
  }, [scrollY, line1Controls, line2Controls, line3Controls]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug space-y-4">
        <motion.span
          className="block"
          variants={getLineVariants(0)}
          initial="hidden"
          animate={line1Controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.2)}
          initial="hidden"
          animate={line2Controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.4)}
          initial="hidden"
          animate={line3Controls}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          & treatment
        </motion.span>
      </div>
    </div>
  );
};

export default TextHighlight;
