// src/components/ui/google-gemini-effect.tsx

"use client";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 2,  // Increased duration for better visibility of animation
  ease: "easeInOut",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="300px"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full"
      >
        {/* Update path attributes to match the visual style of the uploaded image */}
        <motion.path
          d="M720 150 Q 850 50, 1440 100"
          stroke="#76B4BD"  // Soft blue color
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <motion.path
          d="M720 150 Q 850 150, 1440 200"
          stroke="#F67280"  // Soft red color
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M720 150 Q 850 250, 1440 300"
          stroke="#6C5B7B"  // Soft purple color
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
      </svg>
    </div>
  );
};

export default GoogleGeminiEffect;
