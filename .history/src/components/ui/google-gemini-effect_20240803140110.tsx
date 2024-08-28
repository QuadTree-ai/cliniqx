"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 0,
  ease: "linear",
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
  // Updated paths to have smooth curves and three distinct openings
  const pathData = [
    "M0 445C240 445 480 480 720 520C960 560 1200 600 1440 640",
    "M0 445C240 475 480 500 720 520C960 540 1200 580 1440 620",
    "M0 445C240 420 480 400 720 420C960 440 1200 460 1440 480",
  ];

  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description || "Scroll this component and see the bottom SVG come to life wow this works!"}
      </p>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {pathData.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={["#FFB7C5", "#FFDDB7", "#B1C5FF"][index]}
            strokeWidth="2"
            fill="none"
            initial={{
              pathLength: 0,
            }}
            style={{
              pathLength: pathLengths[index],
            }}
            transition={transition}
          />
        ))}
      </svg>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute">
        <Image
          src="/path-to-your-image.jpg" // Update with the actual image path
          alt="Aceternity UI Image"
          width={200} // Adjust size as needed
          height={50} // Adjust size as needed
          className="mx-auto z-30"
        />
      </div>
    </div>
  );
};
