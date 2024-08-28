"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[60rem] rounded-2xl w-full px-4">
      <TextRevealCard
        text="You take care of your health"
        revealText="We take care of your treatment"
        className="max-w-lg w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <TextRevealCardTitle className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-md md:text-lg text-gray-300">
            This is a text reveal card. Hover over the card to reveal the hidden text.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
