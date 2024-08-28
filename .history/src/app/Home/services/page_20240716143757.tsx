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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Our Services</h2>
          <p className="text-gray-400">Explore how our card integrates across different healthcare services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex justify-center">
                <service.icon className="w-16 h-16 text-purple-500" />
              </CardHeader>
              <CardContent className="text-center p-4">
                <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <style jsx>{`
        section {
          background-image: linear-gradient(to right, #1a202c, #2d3748, #4a5568);
        }
      `}</style>
    </section>
  );
};

export default Service;
