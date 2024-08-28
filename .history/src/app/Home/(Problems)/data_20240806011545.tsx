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

export function CardDemo({ title, description, author, readTime, image, number }: CardProps) {
  return (
    <div className="max-w-xs w-full mb-8 group card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-lg shadow-xl mx-auto flex flex-col justify-between p-6 bg-cover",
          "transition duration-300 ease-in-out transform hover:scale-105"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
        <div className="flex flex-col justify-between h-full p-4 z-10">
          <div>
            <h3 className="font-bold text-xl text-white">{title}</h3>
            <p className="text-gray-200">{description}</p>
          </div>
          <div className="flex justify-end items-center">
            <span className="text-3xl font-bold text-white">{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;
