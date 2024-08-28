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
        className="w-full max-w-4xl px-8 py-16 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 flex flex-col justify-between h-full">
          <TextRevealCardTitle className="text-4xl font-semibold text-white mb-4">
            Enhanced Care, Simplified
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-xl text-gray-300">
            Explore comprehensive treatment options with a hover.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
