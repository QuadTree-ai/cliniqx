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
      "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
      (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
      index < 4 && "lg:border-b dark:border-neutral-800"
    )}>
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10 px-10">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Feature;
