import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 0,
  ease: "linear",
};

interface GoogleGeminiEffectProps {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}

export const GoogleGeminiEffect: React.FC<GoogleGeminiEffectProps> = ({
  pathLengths,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this works!`}
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute">
        <Image
          src="/cliniqx.svg"
          alt="CliniQX Connection"
          width={100}
          height={100}
        />
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {[
          {
            d: "M830 585C845 584 865 574 878 568C901 558 914 540 932 540C948 540 964 556 982 562C994 567 1006 567 1018 564C1038 559 1051 544 1069 544C1082 544 1095 558 1110 564C1116 566 1123 566 1129 564C1149 558 1162 542 1180 542C1194 542 1212 556 1231 562C1238 564 1245 564 1252 562C1273 556 1286 542 1304 542C1318 542 1332 556 1350 562C1358 564 1366 564 1373 562C1394 556 1407 542 1425 542C1436 542 1447 552 1449 554",
            stroke: "#FFDDB7",
          },
          {
            d: "M830 512C845 511 865 501 878 495C901 485 914 467 932 467C948 467 964 483 982 489C994 494 1006 494 1018 491C1038 486 1051 471 1069 471C1082 471 1095 485 1110 491C1116 493 1123 493 1129 491C1149 485 1162 469 1180 469C1194 469 1212 483 1231 489C1238 491 1245 491 1252 489C1273 483 1286 469 1304 469C1318 469 1332 483 1350 489C1358 491 1366 491 1373 489C1394 483 1407 469 1425 469C1436 469 1447 479 1449 481",
            stroke: "#B1C5FF",
          },
          {
            d: "M830 436C845 435 865 425 878 419C901 409 914 391 932 391C948 391 964 407 982 413C994 418 1006 418 1018 415C1038 410 1051 395 1069 395C1082 395 1095 409 1110 415C1116 417 1123 417 1129 415C1149 409 1162 393 1180 393C1194 393 1212 407 1231 413C1238 415 1245 415 1252 413C1273 407 1286 393 1304 393C1318 393 1332 407 1350 413C1358 415 1366 415 1373 413C1394 407 1407 393 1425 393C1436 393 1447 403 1449 405",
            stroke: "#076EFF",
          },
        ].map((path, index) => (
          <motion.path
            key={index}
            d={path.d}
            stroke={path.stroke}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathLengths[index] }}
            transition={transition}
          />
        ))}

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
