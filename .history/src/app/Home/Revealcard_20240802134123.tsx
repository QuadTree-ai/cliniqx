"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[80vh] w-full px-4 py-12">
      <TextRevealCard
        text="You take care of your health"
        revealText="We take care of your treatment"
        className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <TextRevealCardTitle className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-lg md:text-xl text-gray-300">
            This is a text reveal card. Hover over the card to reveal the hidden text.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
