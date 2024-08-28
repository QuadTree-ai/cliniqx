"use client";
import { motion, MotionValue } from "framer-motion";
import { Hospital, User, Clipboard } from 'lucide-react';
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  return (
    <div className="sticky top-80 w-full h-[890px] relative">
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-60px] md:top-[-40px] w-full"
      >
        <motion.path
          d="M0 500H1400"
          stroke="black"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <foreignObject x="50" y="460" width="300" height="100">
          <div className="flex items-center space-x-4">
            <Hospital className="text-blue-500 w-6 h-6 md:w-10 md:h-10"/>
            <span className="text-white">Hospital</span>
          </div>
        </foreignObject>
        <foreignObject x="550" y="460" width="300" height="100">
          <div className="flex items-center space-x-4">
            <Clipboard className="text-green-500 w-6 h-6 md:w-10 md:h-10"/>
            <span className="text-white">Pharmacy</span>
          </div>
        </foreignObject>
        <foreignObject x="1050" y="460" width="300" height="100">
          <div className="flex items-center space-x-4">
            <User className="text-red-500 w-6 h-6 md:w-10 md:h-10"/>
            <span className="text-white">Local Doctor</span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
