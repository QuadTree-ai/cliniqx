"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const controlsLine1 = useAnimation();
  const controlsLine2 = useAnimation();
  const controlsLine3 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineVariants = (delay: number) => ({
    hidden: { opacity: 0.3, color: "#6B7280", scale: 1 },
    visible: { opacity: 1, color: "#FFFFFF", scale: 1.05, transition: { delay, type: "spring", stiffness: 300 } },
  });

  useEffect(() => {
    const triggerPoints = [100, 300, 500]; // Thresholds for each line to activate

    const updateAnimations = () => {
      controlsLine1.start(scrollY > triggerPoints[0] && scrollY < triggerPoints[1] ? "visible" : "hidden");
      controlsLine2.start(scrollY > triggerPoints[1] && scrollY < triggerPoints[2] ? "visible" : "hidden");
      controlsLine3.start(scrollY > triggerPoints[2] ? "visible" : "hidden");
    };

    updateAnimations();
  }, [scrollY, controlsLine1, controlsLine2, controlsLine3]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center font-bold text-8xl leading-tight space-y-8 text-gray-400">
        <motion.span
          className="block"
          variants={lineVariants(0)}
          initial="hidden"
          animate={controlsLine1}
        >
          You take care of your habits,
        </motion.span>
        <motion.span
          className="block"
          variants={lineVariants(0.2)}
          initial="hidden"
          animate={controlsLine2}
        >
          we take care of your health
        </motion.span>
        <motion.span
          className="block"
          variants={lineVariants(0.4)}
          initial="hidden"
          animate={controlsLine3}
        >
          & treatment
        </motion.span>
      </div>
    </div>
  );
};

export default TextHighlight;
