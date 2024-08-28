// src/components/FeaturesSectionDemo.tsx
import React from "react";
import Feature from './feature';
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

export default FeaturesSectionDemo;