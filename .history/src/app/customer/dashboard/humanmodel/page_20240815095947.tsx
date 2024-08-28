/* eslint-disable react/jsx-no-undef */
"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="relative flex flex-col items-center rounded-lg p-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          
          {/* Render the SVG Component */}
          <HumanAnatomyFront
            onBrainClick={() => handlePartClick('Brain')}
            onHeartClick={() => handlePartClick('Heart')}
            className="w-full h-auto"
          />

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