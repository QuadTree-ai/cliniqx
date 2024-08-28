"use client";

import React from "react";

// Define the type for the card props
interface CardProps {
  title: string;
  description: string;
  author: string;
  readTime: string;
  image: string;
  number: number;
}

// Card component accepting dynamic props
export function CardDemo({
  title,
  author,
  readTime,
  image,
  number,
}: CardProps) {
  return (
    <div className="max-w-xs w-full group card mb-8">
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author}
            </p>
            <p className="text-sm text-gray-400">{readTime}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <div className="flex items-center justify-end text-white">
            <span className="text-4xl font-bold">{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;
