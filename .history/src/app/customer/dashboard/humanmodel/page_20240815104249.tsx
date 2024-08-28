"use client";

import { useState } from "react";
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

          {/* Overlay Health Issues on the Front View */}
          {isFrontView && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <HealthIssues />
            </div>
          )}

          {/* SVG Layer for Clickable Parts */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <g id="brain" onClick={() => handlePartClick('Brain')} className="cursor-pointer pointer-events-auto">
              {/* Brain paths go here */}
            </g>
            <g id="heart" onClick={() => handlePartClick('Heart')} className="cursor-pointer pointer-events-auto">
              {/* Heart paths go here */}
            </g>
            {/* Add more anatomical parts as needed */}
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
