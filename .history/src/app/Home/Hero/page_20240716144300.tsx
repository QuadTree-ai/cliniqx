"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Hospital, FileText, ShoppingBag } from "lucide-react";
import CliniQXCard from "../Features/cliniqxcard";

const services = [
  {
    icon: Hospital,
    title: "Hospital Payments",
    description: "Use this card for hospital payments via health insurance.",
  },
  {
    icon: FileText,
    title: "Medical Data",
    description: "Store all medical data, history, and reports on this card.",
  },
  {
    icon: ShoppingBag,
    title: "Clinic & Pharmacy Usage",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
  },
];

const Service = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
        <div className="relative mb-12">
          <CliniQXCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl p-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-4 hover:shadow-2xl transition-shadow duration-300 bg-white text-gray-800">
              <service.icon className="w-10 h-10 mb-4 text-primary" />
              <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
              <CardDescription className="text-sm">{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
      <style jsx>{`
        section {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Service;
