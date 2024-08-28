"use client";

import React from "react";
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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-8">
        <div className="relative mb-12">
          <CliniQXCard />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center space-x-6 space-y-6 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <service.icon className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm text-center">
                {service.description}
              </p>
            </div>
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
