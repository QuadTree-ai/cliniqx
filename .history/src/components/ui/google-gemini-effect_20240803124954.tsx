// src/components/ui/google-gemini-effect.tsx

"use client";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 2,  // More noticeable transition
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
    <div className={className}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description || `Scroll this component and see the bottom SVG come to life. Watch how it works!`}
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute ">
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
        className="absolute -top-60 md:-top-40 w-full"
      >
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>
        {/* Central blur effect to simulate convergence */}
        <circle cx="720" cy="445" r="20" fill="white" filter="url(#blurMe)" />

        {/* Paths originating from the blur */}
        <motion.path
          d="M720 445 Q 850 345, 1440 395"
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <motion.path
          d="M720 445 Q 850 445, 1440 495"
          stroke="#FFDDB7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M720 445 Q 850 545, 1440 595"
          stroke="#B1C5FF"
          strokeWidth="2"
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
