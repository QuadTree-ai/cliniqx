"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 2,
  ease: "easeInOut",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this
        works!`}
      </p>
      <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full">
        <Image
          src="/cliniqx.svg"
          alt="CliniQX Connection"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full"
      >
        {/* Only three paths with specified colors and blur effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M720 150 Q 850 50, 1440 100"
          stroke="#76B4BD"  // Soft blue color
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <motion.path
          d="M720 150 Q 850 150, 1440 200"
          stroke="#F67280"  // Soft red color
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M720 150 Q 850 250, 1440 300"
          stroke="#6C5B7B"  // Soft purple color
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
      </svg>
    </div>
  );
};

export default GoogleGeminiEffect;
