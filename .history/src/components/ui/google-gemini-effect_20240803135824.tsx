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
  // Updated paths to start from the same origin and end in three different curves
  const pathData = [
    "M0 445C300 450 960 455 980 460 1000 470 1020 480 1040 490 1060 500 1080 510 1100 520 1120 530 1140 540 1160 550 1180 560 1200 570 1220 580 1240 590 1260 600 1280 610 1300 620 1320 630 1340 640 1360 650 1380 660 1400 670 1420 680 1440 690",
    "M0 445C300 440 960 435 980 430 1000 425 1020 420 1040 415 1060 410 1080 405 1100 400 1120 395 1140 390 1160 385 1180 380 1200 375 1220 370 1240 365 1260 360 1280 355 1300 350 1320 345 1340 340 1360 335 1380 330 1400 325 1420 320 1440 315",
    "M0 445C300 455 960 465 980 475 1000 485 1020 495 1040 505 1060 515 1080 525 1100 535 1120 545 1140 555 1160 565 1180 575 1200 585 1220 595 1240 605 1260 615 1280 625 1300 635 1320 645 1340 655 1360 665 1380 675 1400 685 1420 695 1440 705"
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
          src="/path-to-your-image.jpg"
          alt="Aceternity UI Image"
          width={200} // Adjust size as needed
          height={50} // Adjust size as needed
          className="mx-auto z-30"
        />
      </div>
    </div>
  );
};
