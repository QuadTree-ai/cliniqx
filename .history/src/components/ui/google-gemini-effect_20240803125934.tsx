"use client";
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
    <div className={className}>
      <div className="sticky top-0 left-0 pl-4 pt-4">
        <Image
          src="/cliniqx.svg"
          alt="CliniQX Connection"
          width={50}
          height={50}
        />
      </div>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this
        works!`}
      </p>
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
          d="M0 400C300 350, 600 650, 1440 600"
          stroke="url(#gradientBlue)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <motion.path
          d="M0 450C300 400, 600 700, 1440 650"
          stroke="url(#gradientPink)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
          filter="url(#blurMe)"
        />
        <motion.path
          d="M0 500C300 450, 600 750, 1440 700"
          stroke="url(#gradientPurple)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#4FABFF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#76B4BD", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradientPink" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#F67280", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#FAB1A0", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#6C5B7B", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#C06C84", stopOpacity: 1 }} />
        </linearGradient>
      </svg>
    </div>
  );
};

export default GoogleGeminiEffect;
