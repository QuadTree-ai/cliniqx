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
  // Define the paths to be curved and diverge into three distinct endings
  const pathData = [
    "M0 445C100 400 200 500 300 450S400 500 500 450S600 500 700 450S800 500 900 450S1000 500 1100 450S1200 500 1300 450S1400 500 1440 445",
    "M0 445C100 470 200 430 300 460S400 440 500 470S600 430 700 460S800 440 900 470S1000 430 1100 460S1200 440 1300 470S1400 430 1440 445",
    "M0 445C100 490 200 410 300 480S400 420 500 490S600 410 700 480S800 420 900 490S1000 410 1100 480S1200 420 1300 490S1400 410 1440 445"
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
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Aceternity UI Image"
          width={200} // Adjust size as needed
          height={50} // Adjust size as needed
          className="mx-auto z-30"
        />
      </div>
    </div>
  );
};
