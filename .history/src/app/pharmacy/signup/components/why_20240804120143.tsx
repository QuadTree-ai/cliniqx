"use client";

import React from "react";
import {
  IconUsers,
  IconActivity,
  IconCurrencyRupee,
  IconShield,
  IconCircle,
  IconTrendingUp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: JSX.Element;
  }

const features = [
  {
    title: "Nationwide Reach",
    description: "Access to a network spanning 1000+ cities across India.",
    icon: <IconUsers />,
  },
  {
    title: "Increase Customer Base",
    description: "Expand your customer base by 10x with our marketing strategies.",
    icon: <IconActivity />,
  },
  {
    title: "Boost Revenue",
    description: "CliniQX partners see an average increase of 60% in revenue.",
    icon: <IconCurrencyRupee />,
  },
  {
    title: "Operational Support",
    description: "24/7 support to help you manage day-to-day operations efficiently.",
    icon: <IconShield />,
  },
  {
    title: "Insightful Analytics",
    description: "Detailed analytics provide insights to optimize your business.",
    icon: <IconTrendingUp />,
  },
  {
    title: "Proven Trust",
    description: "Join a trusted network of healthcare providers.",
    icon: <IconCircle />,
  },
];

const WhyCliniQX = () => {
  return (
    <section className="bg-transparent py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Why should you partner with CliniQX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) =>  {
  return (
    <div className={cn("flex flex-col border py-10 relative group bg-white shadow-lg",
                      "transition duration-200 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl")}>
      <div className="mb-4 relative z-10 px-10 text-center">
        {icon}
        <h3 className="text-lg font-bold mt-2">{title}</h3>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default WhyCliniQX;
