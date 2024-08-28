"use client";

import { useState } from "react";
import Image from "next/image";
import HumanFront from '/public/human models/Human front.svg';
import HumanBack from '/public/human models/Human back.svg';
import HealthIssues from './markhealthissues';
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="relative flex flex-col items-center rounded-lg p-4 bg-white shadow-md">
        
        {/* Container for Human Model and Health Issues */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          {/* Display Human Model (Front or Back) */}
          <Image 
            src={isFrontView ? HumanFront : HumanBack} 
            alt={isFrontView ? "Human Front View" : "Human Back View"} 
            layout="responsive" 
            width={200} 
            height={300} 
            className="object-contain"
          />

          {/* Overlay Health Issues on the Front View */}
          {isFrontView && (
            <div className="absolute inset-0">
              <HealthIssues />
            </div>
          )}

          {/* SVG Layer for Clickable Parts */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {isFrontView && (
              <>
                <g id="brain" className="cursor-pointer pointer-events-auto" onClick={() => handlePartClick('Brain')}>
                  {/* Example Brain Path */}
                  <circle cx="100" cy="100" r="40" fill="transparent" stroke="red" />
                </g>
                <g id="heart" className="cursor-pointer pointer-events-auto" onClick={() => handlePartClick('Heart')}>
                  {/* Example Heart Path */}
                  <rect x="150" y="150" width="50" height="50" fill="transparent" stroke="blue" />
                </g>
                {/* Add more anatomical parts as needed */}
              </>
            )}
          </svg>
        </div>

        {/* Flip Button */}
        <button
          onClick={handleFlip}
          className="mt-6 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center shadow-lg"
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
