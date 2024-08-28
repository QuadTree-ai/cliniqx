import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 1.5,  // Adjusted for a smoother transition
  ease: "easeInOut"  // Smoother easing function for natural animation
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
    // Redefined paths for more dynamic and fluid motion
    "M720 445 C750 430 800 430 850 435 C900 440 950 450 1000 460 C1050 470 1100 480 1150 490 C1200 500 1250 510 1300 520 C1350 530 1400 540 1440 550",
    "M720 445 C750 460 800 460 850 455 C900 450 950 445 1000 440 C1050 435 1100 430 1150 425 C1200 420 1250 415 1300 410 C1350 405 1400 400 1440 395",
    "M720 445 C750 435 800 435 850 440 C900 445 950 450 1000 455 C1050 460 1100 465 1150 470 C1200 475 1250 480 1300 485 C1350 490 1400 495 1440 500",
  ];

  return (
    <div className={cn("relative", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description || `Scroll this component and see the bottom SVG come to life. Wow, this works!`}
      </p>
      <div className="w-full h-[890px] flex items-center justify-center bg-red-transparent">
        <svg
          width="1440"
          height="890"
          viewBox="0 0 1440 890"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full"
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
                animate={{
                  pathLength: 1
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
      </div>
      <div className="absolute w-full h-[890px] flex items-center justify-center z-10">
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
