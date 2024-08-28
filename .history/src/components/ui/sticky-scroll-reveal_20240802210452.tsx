"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // Use the entire page for scroll effect
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-auto overflow-y-visible flex flex-col items-center space-y-10 p-10"
      ref={ref}
    >
      {content.map((item, index) => (
        <div
          key={item.title + index}
          className="w-full flex flex-col items-center my-20"
        >
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3,
            }}
            className="text-2xl font-bold text-slate-100 text-center"
          >
            {item.title}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3,
            }}
            className="text-lg text-slate-300 max-w-sm mt-10 text-center"
          >
            {item.description}
          </motion.p>
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              "h-60 w-80 rounded-md bg-white mt-10 overflow-hidden",
              contentClassName
            )}
          >
            {item.content ?? null}
          </div>
        </div>
      ))}
    </motion.div>
  );
};
