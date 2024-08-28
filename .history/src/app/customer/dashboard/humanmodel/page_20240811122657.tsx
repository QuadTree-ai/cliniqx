// src/app/customer/humanmodel/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import HumanFront from '/public/human models/Human front.svg';
import HumanBack from '/public/human models/Human back.svg';
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function HumanModel() {
  const [isFrontView, setIsFrontView] = useState(true);

  const handleFlip = () => {
    setIsFrontView(!isFrontView);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Left Button */}
      <div className="flex md:flex-col justify-center items-center">
        <button
          onClick={handleFlip}
          className="px-3 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Human Model in the Center */}
      <div className="flex flex-col items-center md:mx-4">
        <div className="p-2 rounded-lg shadow-lg">
          <Image 
            src={isFrontView ? HumanFront : HumanBack} 
            alt={isFrontView ? "Human Front View" : "Human Back View"} 
            width={300} 
            height={400} 
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Button */}
      <div className="flex md:flex-col justify-center items-center">
        <button
          onClick={handleFlip}
          className="px-3 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center shadow-lg"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
