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
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between min-h-screen bg-gray-900 p-4 md:p-12">
      {/* Human Model Section */}
      <div className="flex flex-col items-center md:items-start w-full md:w-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-10 text-white">
          Human Model
        </h1>
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">
            {isFrontView ? "Front View" : "Back View"}
          </h2>
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
      </div>

      {/* Flip Button Section */}
      <div className="mt-8 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
        <button
          onClick={handleFlip}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg"
        >
          {isFrontView ? (
            <>
              <span className="mr-2">View Back Side</span>
              <ArrowRight className="w-6 h-6" />
            </>
          ) : (
            <>
              <ArrowLeft className="w-6 h-6" />
              <span className="ml-2">View Front Side</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
