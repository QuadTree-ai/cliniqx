"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[90vh] w-full px-6 py-16">
      <TextRevealCard
        text="You take care of your health"
        revealText="We take care of your treatment"
        className="max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-gray-800"
      >
        <div className="px-10 py-12 text-center">
          {/* Enhanced padding for more spacing */}
          <TextRevealCardTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Experience the Difference in Care
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-base md:text-lg lg:text-xl text-gray-300 mb-4">
            Discover a seamless healthcare experience with our comprehensive treatment options.
          </TextRevealCardDescription>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mt-4 whitespace-nowrap">
            We take care of your <span className="font-semibold">treatment</span>
          </p>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
