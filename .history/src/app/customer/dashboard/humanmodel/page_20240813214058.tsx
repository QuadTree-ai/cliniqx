"use client";

import { useState } from "react";
import Image from "next/image";
import HumanFront from '/public/human models/Human front.svg';
import HumanBack from '/public/human models/Human back.svg';
import HealthIssues from './healthissues';
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function HumanModel() {
  const [isFrontView, setIsFrontView] = useState(true);

  const handleFlip = () => {
    setIsFrontView(!isFrontView);
  };

  const handlePartClick = (partId: string) => {
    console.log(`Clicked on ${partId}`);
    // Add logic to display information or highlight the part
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="relative flex flex-col items-center rounded-lg p-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <Image 
            src={isFrontView ? HumanFront : HumanBack} 
            alt={isFrontView ? "Human Front View" : "Human Back View"} 
            layout="responsive" 
            width={200} 
            height={300} 
            className="object-contain"
          />

          {/* Render HealthIssues if Front View */}
          {isFrontView && (
            <div className="absolute inset-0 flex items-center justify-center">
              <HealthIssues />
            </div>
          )}

          {/* Adding click events to each part of the SVG */}
          <svg className="absolute inset-0">
            <g id="brain" onClick={() => handlePartClick('brain')} className="cursor-pointer">
              {/* Brain paths */}
            </g>
            <g id="heart" onClick={() => handlePartClick('heart')} className="cursor-pointer">
              {/* Heart paths */}
            </g>
            {/* Add more parts as necessary */}
          </svg>
        </div>

        {/* Flip Button Below the Model */}
        <button
          onClick={handleFlip}
          className="mt-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center shadow-lg"
        >
          {isFrontView ? (
            <>
              <span className="mr-2">View Back Side</span>
              <ArrowRight className="w-4 h-4" />
            </>
          ) : (
            <>
              <ArrowLeft className="w-4 h-4" />
              <span className="ml-2">View Front Side</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
