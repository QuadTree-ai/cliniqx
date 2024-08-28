"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[90vh] w-full px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
      <TextRevealCard
        text="You take care of your health"
        revealText="We take care of your treatment"
        className="max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-gray-800"
      >
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <TextRevealCardTitle className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Experience the Difference in Care
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 whitespace-nowrap">
            Discover a seamless healthcare experience with our comprehensive treatment options. We take care of your treatment.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
