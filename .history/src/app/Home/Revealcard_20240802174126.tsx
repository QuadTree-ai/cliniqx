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
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Manage your health"
        revealText="We handle the details"
        className="max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-12 flex flex-col justify-center h-full">
          <TextRevealCardTitle className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Enhanced Care, Simplified.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-lg md:text-xl text-gray-300">
            Explore comprehensive treatment options with a hover.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
