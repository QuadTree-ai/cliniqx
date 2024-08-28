"use client";

import React from "react";

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
  author,
  readTime,
  image,
  number,
}: CardProps) {
  return (
    <div className="max-w-xs w-full group card mb-12">
      <div
        className="cursor-pointer overflow-hidden relative card h-auto rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-6 bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60"></div>
        <div className="p-4 z-10 text-white space-y-4">
          <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
          <p className="text-base">{author}</p>
          <p className="text-sm">{readTime}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-3xl font-bold">{number}</span>
            <p className="text-xs">Updated every second</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;
