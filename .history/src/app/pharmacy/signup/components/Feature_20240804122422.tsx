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
      "flex flex-col py-8 px-6 relative group transition-transform duration-300 hover:scale-105",
      "border dark:border-neutral-800 border-neutral-300",
      (index % 4 !== 3) && "lg:border-r",  // Only add right border if it's not the last in a row
      index < 4 && "border-b"             // Add bottom border to the first row
    )}>
      <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <span className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-2 transition-transform duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10">
        {description}
      </p>
    </div>
  );
};

export default Feature;
