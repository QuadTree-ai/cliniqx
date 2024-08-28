// src/app/Home/Revealcard.tsx

"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card"; // Ensure this path is correct

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full bg-gradient-to-br from-gray-800 to-gray-900">
      <TextRevealCard
        text="Empowering Healthcare"
        revealText="with AI-driven Insights"
      >
        <TextRevealCardTitle>
          Revolutionize Your Medical Practice
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Experience unparalleled efficiency and accuracy with our AI-powered EMR/EHR solutions. Hover to discover more.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export default TextRevealCardPreview;
