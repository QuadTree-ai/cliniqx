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
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Human Model in the Center */}
      <div className="flex flex-col items-center md:mx-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <Image 
            src={isFrontView ? HumanFront : HumanBack} 
            alt={isFrontView ? "Human Front View" : "Human Back View"} 
            width={300} 
            height={450} 
            className="object-contain md:w-96 md:h-auto"
          />
        </div>
      </div>

      {/* Right Button */}
      <div className="flex md:flex-col justify-center items-center">
        <button
          onClick={handleFlip}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
