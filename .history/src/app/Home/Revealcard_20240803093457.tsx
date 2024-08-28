// RevealCard.tsx
"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <TextRevealCard
        text="You take care of your health"
        revealText="We handle your treatment"
        className="w-full max-w-5xl px-12 py-20 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="flex flex-col justify-center h-full">
          <TextRevealCardTitle className="text-3xl font-bold text-white mb-6">
            Enhanced Care, Simplified
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-2xl text-gray-300">
            Explore comprehensive treatment options with a hover.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
