"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[90vh] w-full px-4 py-12 sm:px-6 sm:py-16">
      <TextRevealCard
        text="You take care of your health"
        revealText="We take care of your treatment"
        className="max-w-6xl w-full rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center"
        // Increased max-width for the card
      >
        <div className="px-8 py-12 sm:px-12 sm:py-16 text-center">
          <TextRevealCardTitle className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Experience the Difference in Care
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-base sm:text-lg md:text-xl text-gray-300">
            Discover a seamless healthcare experience with our comprehensive treatment options
          </TextRevealCardDescription>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 whitespace-nowrap">
            We take care of your <span className="font-semibold">treatment</span>
          </p>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
