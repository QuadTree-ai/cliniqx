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
        className="max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden bg-gray-800"
      >
        <div className="p-8 text-center">
          {/* Center-aligned text */}
          <TextRevealCardTitle className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Experience the Difference in Care
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-lg md:text-xl text-gray-300">
            Discover a seamless healthcare experience with our comprehensive treatment options.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
