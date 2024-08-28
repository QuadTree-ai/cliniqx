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
    "M720 445C820 435 920 435 1020 445 1120 455 1220 465 1320 475 1350 480 1370 485 1390 495 1400 505 1420 515 1440 525",
    "M720 445C820 455 920 455 1020 445 1120 435 1220 425 1320 415 1350 410 1370 405 1390 395 1400 385 1420 375 1440 365",
    "M720 445C820 470 920 465 1020 450 1120 440 1220 430 1320 420 1350 415 1370 410 1390 405 1400 400 1420 395 1440 390",
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
        className="absolute -top-60 md:-top-40 w-full"
      >
        {pathData.map((path, index) => (
          <React.Fragment key={index}>
            <path
              d={path}
              stroke="#B1C5FF"
              strokeWidth="2"
              fill="none"
              pathLength={1}
              filter="url(#blurMe)"
            />
            <motion.path
              d={path}
              stroke="#B1C5FF"
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
          </React.Fragment>
        ))}
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
      <div className="absolute top-0 w-full h-full flex items-center justify-center z-10">
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
