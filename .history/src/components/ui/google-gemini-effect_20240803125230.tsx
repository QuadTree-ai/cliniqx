"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 2,  // Increased duration for a smoother animation effect
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
        {description || `Scroll this component and see the bottom SVG come to life wow this works!`}
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40  flex items-center justify-center bg-red-transparent absolute ">
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
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <motion.path
          d="M720 445 C900 445, 1440 445, 1440 225"
          stroke="#00BCD4" // Cyan
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
          filter="url(#blurMe)"
        />
        <motion.path
          d="M720 445 C900 445, 1440 445, 1440 445"
          stroke="#FFC107" // Amber
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
          filter="url(#blurMe)"
        />
        <motion.path
          d="M720 445 C900 445, 1440 445, 1440 665"
          stroke="#8BC34A" // Light Green
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
          filter="url(#blurMe)"
        />
      </svg>
    </div>
  );
};

export default GoogleGeminiEffect;
