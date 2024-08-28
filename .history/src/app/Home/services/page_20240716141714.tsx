"use client";

import React from "react";
import Image from "next/image";
import CliniQXCard from "../Features/cliniqxcard";
import cliniqx from "/public/cliniqx.svg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const services = [
  {
    image: cliniqx,
    title: "Hospital Payments",
    description: "Use this card for hospital payments via health insurance.",
  },
  {
    image: cliniqx,
    title: "Medical Data",
    description: "Store all medical data, history, and reports on this card.",
  },
  {
    image: cliniqx,
    title: "Clinic & Pharmacy Usage",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
  },
];

const Service = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-8">
        <div className="relative mb-8">
          <CliniQXCard />
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border border-gray-700">
          <div className="flex w-max space-x-6 p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="shrink-0 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="overflow-hidden rounded-full w-16 h-16 mb-4 mx-auto bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <style jsx>{`
        .service-item {
          position: absolute;
          transition: transform 1s ease-in-out;
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

        section {
          animation: fadeIn 1s ease-in-out;
        }

        .service-item:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Service;
