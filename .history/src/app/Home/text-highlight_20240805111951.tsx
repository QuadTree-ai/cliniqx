"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  // Controls for each line of text
  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineVariants = (delay: number) => ({
    hidden: { opacity: 0.3, color: "#6B7280" },
    visible: { opacity: 1, color: "#FFFFFF", transition: { delay } },
  });

  useEffect(() => {
    const revealThreshold = 100; // Define how far the user needs to scroll before triggering the animation

    // Logic to determine which lines to highlight based on scroll position
    const triggerAnimations = () => {
      if (scrollY < revealThreshold) {
        line3Controls.start("visible");
        line2Controls.start("hidden");
        line1Controls.start("hidden");
      } else if (scrollY >= revealThreshold && scrollY < 2 * revealThreshold) {
        line3Controls.start("visible");
        line2Controls.start("visible");
        line1Controls.start("hidden");
      } else {
        line3Controls.start("visible");
        line2Controls.start("visible");
        line1Controls.start("visible");
      }
    };

    triggerAnimations();
  }, [scrollY, line1Controls, line2Controls, line3Controls]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center font-bold text-8xl leading-tight space-y-8 text-gray-400">
        <motion.span
          className="block"
          variants={getLineVariants(0.4)}
          initial="hidden"
          animate={line1Controls}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0.2)}
          initial="hidden"
          animate={line2Controls}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={getLineVariants(0)}
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
