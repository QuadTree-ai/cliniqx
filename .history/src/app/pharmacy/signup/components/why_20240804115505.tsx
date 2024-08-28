"use client";

import React from "react";
import {
  IconHospital,
  IconUsers,
  IconActivity,
  IconCurrencyRupee,
  IconShield,
  IconClock,
  IconCircle,
  IconTrendingUp,
} from "@tabler/icons-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col border py-10 relative group bg-white shadow-lg">
      <div className="mb-4 relative z-10 px-10 text-center">
        {icon}
        <h3 className="text-lg font-bold mt-2">{title}</h3>
      </div>
      <p className="text-sm max-w-xs relative z-10 px-10 text-neutral-600">
        {description}
      </p>
    </div>
  );
};


const features = [
  {
    title: "Nationwide Reach",
    description: "Access a network spanning 1000+ cities across India.",
    icon: <IconUsers />,
  },
  {
    title: "Increase Customer Base",
    description: "Expand your customer base by 10x with our targeted marketing strategies.",
    icon: <IconActivity />,
  },
  {
    title: "Boost Revenue",
    description: "See an average increase of 60% in revenue with CliniQX partnerships.",
    icon: <IconCurrencyRupee />,
  },
  {
    title: "Operational Support",
    description: "Receive 24/7 support to streamline your day-to-day operations.",
    icon: <IconShield />,
  },
  {
    title: "Insightful Analytics",
    description: "Gain insights and analytics to optimize your business operations.",
    icon: <IconTrendingUp />,
  },
  {
    title: "Proven Trust",
    description: "Join a trusted network enhancing healthcare access nationwide.",
    icon: <IconCircle />,
  },
];

const WhyCliniQX = () => {
    return (
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why should you partner with CliniQX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyCliniQX;