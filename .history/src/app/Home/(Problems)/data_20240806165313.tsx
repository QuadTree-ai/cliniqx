// src/app/Home/(Problems)/data.tsx

"use client";

import React from "react";

// Define the type for the card props for better type-checking and readability
interface CardProps {
  title: string;
  description: string;
  author: string;
  readTime: string;
  image: string;
  number: number;
}

/**
 * CardDemo component displays a card with information about health statistics.
 * It is designed to be visually appealing and informative, displaying dynamic data effectively.
 * 
 * Props:
 * - title: Title of the card
 * - description: Short description or subtitle
 * - author: Author or source of the data
 * - readTime: Additional text to describe the data's nature (e.g., "Dynamic Data")
 * - image: Background image URL for the card
 * - number: Numeric value displaying the real-time statistic
 */
export function CardDemo({
  title,
  author,
  readTime,
  image,
  number,
}: CardProps) {
  return (
    <div className="max-w-xs w-full mb-8">
      <div
        className="cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl flex flex-col justify-between p-4 bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>
        <div className="flex flex-col justify-between h-full p-4 z-10 text-white space-y-4">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
          </div>
          <div className="self-end">
            <span className="text-4xl font-bold">{number}</span>
          </div>
          <div>
            <p className="font-normal text-base">{author}</p>
            <p className="text-sm">{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;
