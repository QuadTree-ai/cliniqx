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
    const triggerHeight = window.innerHeight / 2;  // Middle of the viewport

    const checkVisibility = (ref: React.RefObject<HTMLSpanElement>, controls: any) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      if (rect.top <= triggerHeight && rect.bottom >= triggerHeight) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    checkVisibility(line1Ref, line1Controls);
    checkVisibility(line2Ref, line2Controls);
    checkVisibility(line3Ref, line3Controls);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();  // Initial check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineVariants = () => ({
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center font-bold text-9xl leading-tight space-y-10 text-gray-400">
        <motion.span
          ref={line1Ref}
          className="block"
          variants={getLineVariants()}
          initial="hidden"
          animate={line1Controls}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          ref={line2Ref}
          className="block"
          variants={getLineVariants()}
          initial="hidden"
          animate={line2Controls}
        >
          we take care of your health
        </motion.span>
        <motion.span
          ref={line3Ref}
          className="block"
          variants={getLineVariants()}
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
