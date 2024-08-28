"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for class names

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false);

  // Backgrounds for animation
  const backgroundInitial = "rgba(255, 255, 255, 0)";
  const backgroundHover =
    "radial-gradient(circle, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-center p-2 rounded-full overflow-hidden",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "z-10 bg-black text-white px-4 py-2 rounded-full",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{ background: backgroundInitial }}
        animate={{ background: hovered ? backgroundHover : backgroundInitial }}
        transition={{ duration }}
      />
    </Tag>
  );
}
