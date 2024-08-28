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
    "M0 445C100 435 200 435 300 445 400 455 500 465 600 475 650 480 670 485 690 495 710 515 730 535 750 555",
    "M0 445C100 455 200 455 300 445 400 435 500 425 600 415 650 410 670 405 690 395 710 375 730 355 750 335",
    "M0 445C100 470 200 465 300 450 400 440 500 430 600 420 650 415 670 410 690 405 710 395 730 385 750 375",
  ];

  return (
    <div className={cn("sticky top-80", className)}>
      <div className="text-container p-4">
        <p className="text-lg md:text-7xl font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
          {title || `Build with Aceternity UI`}
        </p>
        <p className="text-xs md:text-xl font-normal text-center text-neutral-400">
          {description || `Scroll this component and see the bottom SVG come to life wow this works!`}
        </p>
      </div>
      <div className="relative w-full h-[500px]">
        <svg
          width="800"
          height="500"
          viewBox="0 0 800 500"
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
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
          </defs>
        </svg>
        <div className="absolute top-50 left-0 translate-x-0 translate-y-[-50%] z-10">
          <Image
            src="/cliniqx.svg"
            alt="CliniQX Connection"
            width={50}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
