"use client";

import React from "react";
import {
  IconHospital,
  IconUsers,
  IconActivity,
  IconCurrencyRupee
  IconShield,
  IconClock,
  IconCircle,
  IconTrendingUp,
} from "@tabler/icons-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Why should you partner with CliniQX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCliniQX;
