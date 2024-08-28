// src/app/customer/humanmodel/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import HumanFront from '/public/human models/Human front.svg';
import HumanBack from '/public/human models/Human back.svg';
import { ArrowRight, ArrowLeft } from "lucide-react";
import HealthIssues from './healthissues';

export default function HumanModel() {
  const [isFrontView, setIsFrontView] = useState(true);

  const handleFlip = () => {
    setIsFrontView(!isFrontView);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Dashboard Container */}
      <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="relative">
          <Image 
            src={isFrontView ? HumanFront : HumanBack} 
            alt={isFrontView ? "Human Front View" : "Human Back View"} 
            width={295} 
            height={395} 
            className="object-contain max-w-[295px] max-h-[395px] w-full h-auto"
          />

          {/* Render HealthIssues if Front View */}
          {isFrontView && (
            <div className="absolute inset-0 flex items-center justify-center">
              <HealthIssues />
            </div>
          )}
        </div>

        {/* Flip Button Below the Model */}
        <button
          onClick={handleFlip}
          className="mt-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center shadow-lg"
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
