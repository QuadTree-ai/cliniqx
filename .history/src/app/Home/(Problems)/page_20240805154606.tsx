// CardDemo.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the type for the card props
interface CardProps {
  title: string;
  description: string;
  author: string;
  readTime: string;
  imageUrl: string;
  avatarUrl: string;
  number: number;
}

// Card component accepting dynamic props
export function CardDemo({ title, description, author, readTime, imageUrl, avatarUrl, number }: CardProps) {
  return (
    <div className="max-w-xs w-full group/card mb-8">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          `bg-[url(${imageUrl})] bg-cover`
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={avatarUrl}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
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
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
          <div className="flex items-center justify-end text-white">
            <span className="text-4xl font-bold">{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;