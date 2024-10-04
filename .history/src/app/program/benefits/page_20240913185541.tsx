"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Calendar, Tag, Phone, Heart } from "lucide-react";

const benefits = [
  {
    title: "Comprehensive Health Coverage",
    description: "Get access to a wide range of health services including consultations, diagnostics, and treatments.",
    icon: ShieldCheck,
  },
  {
    title: "Priority Appointments",
    description: "Enjoy priority booking for all your medical appointments, ensuring you get timely care.",
    icon: Calendar,
  },
  {
    title: "Exclusive Discounts",
    description: "Receive exclusive discounts on various health services and products.",
    icon: Tag,
  },
  {
    title: "24/7 Telehealth Access",
    description: "Consult with healthcare professionals anytime, anywhere with our 24/7 telehealth service.",
    icon: Phone,
  },
  {
    title: "Personalized Health Plans",
    description: "Get personalized health plans tailored to your specific needs and health goals.",
    icon: Heart,
  },
];

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          CliniQX Membership Benefits
        </h1>
        <ul className="space-y-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <li key={index} className="flex items-start space-x-4">
                <Icon className="w-8 h-8 text-blue-500" />
                <div>
                  <h2 className="text-2xl font-bold text-white">{benefit.title}</h2>
                  <p className="text-white">{benefit.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
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