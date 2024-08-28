// src/components/FeaturesSectionDemo.tsx
import React from "react";
import {
    IconUsers,
    IconActivity,
    IconCurrencyRupee,
    IconShield,
    IconTrendingUp,
    IconCircle,
    IconMap,
    IconAward,
  } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const features = [
    { title: "Nationwide Reach", description: "Access to a network spanning 1000+ cities across India.", icon: <IconUsers /> },
    { title: "Increase Customer Base", description: "Expand your customer base by 10x with our marketing strategies.", icon: <IconActivity /> },
    { title: "Boost Revenue", description: "CliniQX partners see an average increase of 60% in revenue.", icon: <IconCurrencyRupee /> },
    { title: "Operational Support", description: "24/7 support to help you manage day-to-day operations efficiently.", icon: <IconShield /> },
    { title: "Insightful Analytics", description: "Detailed analytics provide insights to optimize your business.", icon: <IconTrendingUp /> },
    { title: "Proven Trust", description: "Join a trusted network of healthcare providers.", icon: <IconCircle /> },
    { title: "Extensive Coverage", description: "Our platform connects you with customers nationwide, expanding your market reach.", icon: <IconMap /> },
    { title: "Quality Assurance", description: "Our network is built on trust and quality, ensuring the best service for partners.", icon: <IconAward /> },
  ];

const FeaturesSectionDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto gap-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group transition-transform duration-300 hover:scale-105",
        "border dark:border-neutral-800 border-neutral-300",
        (index % 4 !== 3) && "lg:border-r",  // Only add right border if it's not the last in a row
        index < 4 && "border-b"             // Add bottom border to the first row
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;
