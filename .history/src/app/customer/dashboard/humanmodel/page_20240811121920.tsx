// src/app/customer/humanmodel/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import HumanFront from '/public/human models/Human front.svg';
import HumanBack from '/public/human models/Human back.svg';

export default function HumanModel() {
  const [isFrontView, setIsFrontView] = useState(true);

  const handleFlip = () => {
    setIsFrontView(!isFrontView);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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

      <button
        onClick={handleFlip}
        className="mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isFrontView ? "View Back Side" : "View Front Side"}
      </button>
    </div>
  );
}
