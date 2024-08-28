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
    "M0 445C50 435 100 435 150 440 200 445 250 450 300 455 350 460 400 465 450 470 500 475 550 480 600 485 650 490 700 495 750 500 800 505 850 510 900 520 950 530 1000 545",
    "M0 445C50 455 100 455 150 450 200 445 250 440 300 435 350 430 400 425 450 420 500 415 550 410 600 405 650 400 700 395 750 390 800 385 850 375 900 365 950 355 1000 340",
    "M0 445C50 460 100 470 150 465 200 460 250 455 300 450 350 445 400 440 450 435 500 430 550 425 600 420 650 415 700 410 750 405 800 400 850 395 900 390 950 385 1000 375"
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
      <div className="relative w-full h-[890px] -top-60 md:-top-40 flex items-center justify-start">
        <svg
          width="1024"
          height="890"
          viewBox="0 0 1024 890"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          {pathData.map((path, index) => (
            <React.Fragment key={index}>
              <path
                d={path}
                stroke="#B1C5FF"
                strokeWidth="2"
                fill="none"
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
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <Image
            src="/cliniqx.svg"
            alt="CliniQX Connection"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
