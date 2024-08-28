"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-6 py-16 bg-gray-100">
      <TextRevealCard
        text="You take care of your health"
        revealText="We take care of your treatment"
        className="max-w-5xl w-full rounded-xl shadow-2xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <div className="flex flex-col justify-center items-center text-center p-12 h-full">
          <TextRevealCardTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the Difference in Care.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-xl md:text-2xl text-gray-200">
            Discover a seamless healthcare experience with our comprehensive treatment options. Hover over the card to reveal more.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
