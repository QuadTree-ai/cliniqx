"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full rounded-2xl">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry"
        className="transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="p-8 flex flex-col justify-center h-full text-center">
          <TextRevealCardTitle className="text-3xl font-bold text-white mb-4">
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-xl text-gray-300">
            This is a text reveal card. Hover over the card to reveal the hidden text.
          </TextRevealCardDescription>
        </div>
      </TextRevealCard>
    </div>
  );
}
