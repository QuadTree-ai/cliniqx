/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
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


      {/* Display of connected items with SVG and icons */}
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] space-y-6">
      </div>
    </div>
  );
}

export default IntroductionPage;
