// src/app/Home/(Problems)/data.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  author: string;
  readTime: string;
  image: string;
  number: number;
}

export function CardDemo({
  title,
  description,
  author,
  readTime,
  image,
  number,
}: CardProps) {
  return (
    <div className="max-w-xs w-full mb-12">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-6 bg-cover",
          "bg-cover"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover:bg-black opacity-70"></div>
        <div className="flex flex-col justify-between h-full p-4">
          <div className="text-gray-50">
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          </div>
          <div className="flex items-center justify-center text-white">
            <span className="text-5xl font-bold">{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;