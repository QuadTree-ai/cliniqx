"use client";
import React from "react";
import { motion, MotionValue } from "framer-motion";
import { Hospital, User, Clipboard } from 'lucide-react';
import { cn } from "@/lib/utils";

interface GoogleGeminiEffectProps {
  pathLengths: MotionValue<number>[];  // Assuming pathLengths is an array of MotionValue<number>
  title?: string;
  description?: string;
  className?: string;
}

interface SVGPathsProps {
  pathLengths: MotionValue<number>[];  // Type definition for pathLengths
}

const transition = { duration: 0, ease: "linear" };

const SVGPaths: React.FC<SVGPathsProps> = ({ pathLengths }) => (
  <>
    <motion.path
      d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
      stroke="#FFDDB7"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      style={{ pathLength: pathLengths[1] }}
      transition={transition}
    />
    {/* Additional paths can be similarly added */}
  </>
);

export const GoogleGeminiEffect: React.FC<GoogleGeminiEffectProps> = ({
  pathLengths,
  title = "Build with Aceternity UI",
  description = "Explore the seamless connections between hospitals, pharmacies, and local doctors.",
  className
}) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description}
      </p>
      <div className="flex justify-center items-center absolute w-full h-[890px] -top-60 md:-top-40 bg-red-transparent">
        <Hospital className="text-blue-500 w-6 h-6 md:w-10 md:h-10" aria-label="Hospital"/>
        <Clipboard className="text-green-500 w-6 h-6 md:w-10 md:h-10 mx-12" aria-label="Pharmacy"/>
        <User className="text-red-500 w-6 h-6 md:w-10 md:h-10" aria-label="Local Doctor"/>
      </div>
      <svg width="1440" height="890" viewBox="0 0 1440 890" xmlns="http://www.w3.org/2000/svg" className="absolute -top-60 md:-top-40 w-full">
        <SVGPaths pathLengths={pathLengths} />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GoogleGeminiEffect;
