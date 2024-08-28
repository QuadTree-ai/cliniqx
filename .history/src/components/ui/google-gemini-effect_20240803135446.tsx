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
    "M0 445C300 435 600 435 900 440 920 445 940 455 960 470 980 485 1000 500 1020 515 1040 530 1060 545 1080 560 1100 575 1120 590 1140 605 1160 620 1180 635 1200 650 1220 665 1240 680 1260 695 1280 710 1300 725 1320 740 1340 755 1360 770 1380 785 1400 800 1420 815 1440 830",
    "M0 445C300 455 600 455 900 450 920 445 940 440 960 435 980 430 1000 425 1020 420 1040 415 1060 410 1080 405 1100 400 1120 395 1140 390 1160 385 1180 380 1200 375 1220 370 1240 365 1260 360 1280 355 1300 350 1320 345 1340 340 1360 335 1380 330 1400 325 1420 320 1440 315",
    "M0 445C300 460 600 470 900 465 920 460 940 455 960 450 980 445 1000 440 1020 435 1040 430 1060 425 1080 420 1100 415 1120 410 1140 405 1160 400 1180 395 1200 390 1220 385 1240 380 1260 375 1280 370 1300 365 1320 360 1340 355 1360 350 1380 345 1400 340 1420 335 1440 330"
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
          width="1440"
          height="890"
          viewBox="0 0 1440 890"
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
        <div className="absolute top-0 left-0 z-10">
          <Image
            src="/cliniqx.svg"
            alt="CliniQX Connection"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
