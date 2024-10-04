"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Comprehensive Health Coverage",
    description: "Get access to a wide range of health services including consultations, diagnostics, and treatments.",
  },
  {
    title: "Priority Appointments",
    description: "Enjoy priority booking for all your medical appointments, ensuring you get timely care.",
  },
  {
    title: "Exclusive Discounts",
    description: "Receive exclusive discounts on various health services and products.",
  },
  {
    title: "24/7 Telehealth Access",
    description: "Consult with healthcare professionals anytime, anywhere with our 24/7 telehealth service.",
  },
  {
    title: "Personalized Health Plans",
    description: "Get personalized health plans tailored to your specific needs and health goals.",
  },
];

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          CliniQX Membership Benefits
        </h1>
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700">
            <CardHeader className="text-2xl font-bold text-white">
              {benefit.title}
            </CardHeader>
            <CardContent className="text-white">
              {benefit.description}
            </CardContent>
          </Card>
        ))}
        <div className="text-center">
          <Button className="mt-8 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Join CliniQX Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
