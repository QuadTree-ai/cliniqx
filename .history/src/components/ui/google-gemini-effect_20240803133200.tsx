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
    "M720 445C770 435 820 435 870 440 920 445 970 450 1020 455 1070 460 1120 465 1170 470 1220 475 1270 480 1320 485 1370 490 1420 495 1440 500",
    "M720 445C770 455 820 455 870 450 920 445 970 440 1020 435 1070 430 1120 425 1170 420 1220 415 1270 410 1320 405 1370 400 1420 395 1440 390",
    "M720 445C770 460 820 470 870 465 920 460 970 455 1020 450 1070 445 1120 440 1170 435 1220 430 1270 425 1320 420 1370 415 1420 410 1440 405"
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
      <div className="w-full h-[890px] -top-60 md:-top-40  flex items-center justify-center bg-red-transparent absolute ">
      </div>
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
          <Image
          src="/cliniqx.svg"
          alt="CliniQX Connection"
          width={100}
          height={100}
          className="mx-auto"
        />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
