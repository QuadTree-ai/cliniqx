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
    "M720 445C820 435 920 435 1020 445 1120 455 1220 465 1320 475 1320 485 1370 495 1420 505 1440 520 1450 535 1460 550",
    "M720 445C820 455 920 455 1020 445 1120 435 1220 425 1320 415 1320 405 1370 395 1420 385 1440 370 1450 355 1460 340",
    "M720 445C820 470 920 465 1020 450 1120 440 1220 430 1320 420 1320 410 1370 400 1420 390 1440 375 1450 360 1460 345",
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
      <div className="relative w-full h-[890px] flex items-center justify-start -top-60 md:-top-40">
        <svg
          width="1500" // Increased width for end paths
          height="890"
          viewBox="0 0 1500 890" // Adjusted viewBox for end paths
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          {pathData.map((path, index) => (
            <React.Fragment key={index}>
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
        <div className="absolute left-0 flex items-center justify-start w-full z-10">
          <Image
            src="/cliniqx.svg"
            alt="CliniQX Connection"
            width={100}
            height={100}
            className="ml-12" // Margin to the left to align properly
          />
        </div>
      </div>
    </div>
  );
};
