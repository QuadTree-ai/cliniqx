// src/app/customer/humanmodel/page.tsx
"use client";

import Image from "next/image";
import HumanFront from '/public/human models/Human front.svg';
import HumanBack from '/public/human models/Human back.svg';

export default function HumanModel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-scree">
      <h1 className="text-2xl font-bold mb-8">Human Model View</h1>
      
      <div className="flex space-x-8">
        {/* Front View */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Front View</h2>
          <Image 
            src={HumanFront} 
            alt="Human Front View" 
            width={400} 
            height={600} 
            className="object-contain"
          />
        </div>

        {/* Back View */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Back View</h2>
          <Image 
            src={HumanBack} 
            alt="Human Back View" 
            width={400} 
            height={600} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
