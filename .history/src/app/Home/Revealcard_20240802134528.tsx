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
        className="max-w-5xl w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-12">
          <TextRevealCardTitle className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-xl md:text-2xl text-gray-300">
            This is a text reveal card. Hover over the card to reveal the hidden text.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
