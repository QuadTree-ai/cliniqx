// src/app/Home/text-highlight.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();

  const handleScroll = () => {
    const triggerHeight = window.innerHeight / 1.5;

    const checkVisibility = (ref: React.RefObject<HTMLSpanElement>, controls: any) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      if (rect.top <= triggerHeight && rect.bottom >= 0) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    // Check visibility in both directions
    checkVisibility(line1Ref, line1Controls);
    checkVisibility(line2Ref, line2Controls);
    checkVisibility(line3Ref, line3Controls);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount to check initial positions
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineVariants = (delay: number) => ({
    hidden: { opacity: 0.5, color: "#6B7280", scale: 1, transition: { duration: 0.5 } },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.1, transition: { delay, duration: 0.5 } },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center font-bold leading-tight space-y-12 sm:space-y-14 md:space-y-16
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <motion.span
          ref={line1Ref}
          className="block"
          variants={getLineVariants(0)}
          initial="hidden"
          animate={line1Controls}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          ref={line2Ref}
          className="block"
          variants={getLineVariants(0.2)}
          initial="hidden"
          animate={line2Controls}
        >
          we take care of your health
        </motion.span>
        <motion.span
          ref={line3Ref}
          className="block"
          variants={getLineVariants(0.4)}
          initial="hidden"
          animate={line3Controls}
        >
          & treatment
        </motion.span>
      </div>
    </div>
  );
};

export default TextHighlight;
