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
  const pathData = [
    "M720 500 C750 450, 790 450, 830 500 C870 550, 910 550, 950 500 C990 450, 1030 450, 1070 500 C1110 550, 1150 550, 1190 500 C1230 450, 1270 450, 1310 500 C1350 550, 1390 550, 1430 500",
    "M720 500 C750 550, 790 550, 830 500 C870 450, 910 450, 950 500 C990 550, 1030 550, 1070 500 C1110 450, 1150 450, 1190 500 C1230 550, 1270 550, 1310 500 C1350 450, 1390 450, 1430 500",
  ];

  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this works!`}
      </p>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full z-0"
      >
        {pathData.map((path, index) => (
          <React.Fragment key={index}>
            <motion.path
              d={path}
              stroke={index % 2 === 0 ? "#FFB7C5" : "#4FABFF"}
              strokeWidth="3"
              fill="none"
              initial={{
                pathLength: 0,
              }}
              style={{
                pathLength: pathLengths[index],
              }}
              transition={transition}
              filter="url(#blurMe)"
            />
          </React.Fragment>
        ))}
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
      <div className="absolute w-full h-full flex items-center justify-center z-10">
        <Image
          src="/cliniqx.svg"
          alt="CliniQX Connection"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
    </div>
  );
};
