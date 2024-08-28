/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"; // Adjust the import path based on actual file location
import Image from "next/image";
import { Hospital, User, Clipboard } from 'lucide-react';

export function IntroductionPage() {
  const ref = useRef(null);

  // Scroll-based animations setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform values for SVG path animations
  const pathLengths = [0.5, 0.5, 0.5, 0.5, 0.5].map(start =>
    useTransform(scrollYProgress, [0, 0.8], [start, 1.2])
  );

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect pathLengths={pathLengths} />

      {/* Display of connected items with SVG and icons */}
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] space-y-6">
        <div className="flex items-center">
          <Clipboard className="text-green-500 w-6 h-6 md:w-12 md:h-12" aria-label="Pharmacy"/>
          <span className="ml-2 text-white">Pharmacy</span>
        </div>
        <div className="flex items-center">
          <Hospital className="text-blue-500 w-6 h-6 md:w-12 md:h-12" aria-label="Hospital"/>
          <span className="ml-2 text-white">Hospital</span>
        </div>
        <div className="flex items-center">
          <User className="text-red-500 w-6 h-6 md:w-12 md:h-12" aria-label="Local Doctor"/>
          <span className="ml-2 text-white">Local Doctor</span>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
