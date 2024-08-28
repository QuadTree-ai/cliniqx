// src/components/Feature.tsx
import React from 'react';
import { cn } from "@/lib/utils";
import { IconProps } from "@tabler/icons-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactElement<IconProps>;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  return (
    <div className={cn(
      "flex flex-col py-10 relative group transition-all duration-300 hover:scale-105",
      "border border-neutral-200 dark:border-neutral-700", // Adding subtle border
      "hover:bg-neutral-100 dark:hover:bg-neutral-800",  // Adding hover background change
      (index % 2 === 0) && "border-r dark:border-neutral-700",
      (index < 4) && "border-b dark:border-neutral-700"
    )}>
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300",
        "bg-gradient-to-t from-neutral-50 dark:from-neutral-900 to-transparent",
        "opacity-0 group-hover:opacity-100 pointer-events-none"
      )} />
      <div className="mb-4 relative z-10 px-10 text-neutral-200 dark:text-neutral-400">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10 px-10">
        <span className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block text-neutral-800 dark:text-neutral-200">
          {title}
        </span>
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Feature;
