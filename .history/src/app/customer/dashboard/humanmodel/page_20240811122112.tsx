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
    <div className="flex flex-row items-center justify-start min-h-screen bg-gray-900 p-8">
      {/* Human Model on the Left */}
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold mb-8 text-white">Human Model View</h1>
        
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {isFrontView ? "Front View" : "Back View"}
          </h2>
          <Image 
            src={isFrontView ? HumanFront : HumanBack} 
            alt={isFrontView ? "Human Front View" : "Human Back View"} 
            width={400} 
            height={600} 
            className="object-contain"
          />
        </div>
      </div>

      {/* Flip Button on the Right */}
      <div className="ml-8">
        <button
          onClick={handleFlip}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          {isFrontView ? (
            <>
              <span className="mr-2">View Back Side</span>
              <ArrowRight className="w-5 h-5" />
            </>
          ) : (
            <>
              <ArrowLeft className="w-5 h-5" />
              <span className="ml-2">View Front Side</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
