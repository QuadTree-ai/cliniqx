// src/components/ui/google-gemini-effect.tsx
"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue<number>[];
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {/* Displaying the CliniQX logo */}
        <foreignObject x="50%" y="100" width="128" height="128" className="origin-center translate-x-[-50%]">
          <Image src="/cliniqx.svg" alt="CliniQX Logo" layout="fill" />
        </foreignObject>

        {/* Path and Text for Hospital */}
        <motion.path
          d="M720,228 L720,360"
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <text x="730" y="300" fill="white" fontSize="16">Hospital</text>

        {/* Path and Text for Pharmacy */}
        <motion.path
          d="M600,228 L600,360"
          stroke="#FFDDB7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <text x="610" y="300" fill="white" fontSize="16">Pharmacy</text>

        {/* Path and Text for Local Doctor */}
        <motion.path
          d="M840,228 L840,360"
          stroke="#4FABFF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <text x="850" y="300" fill="white" fontSize="16">Local Doctor</text>
      </svg>
    </div>
  );
};
