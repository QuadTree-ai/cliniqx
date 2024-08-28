"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this is correctly imported
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"; // Adjust the import path if necessary

const Service: React.FC = () => {
  const stickyContent = services.map((service, index) => ({
    title: service.title,
    description: service.description,
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 h-full w-full text-gray-800">
        <div className="w-full md:w-1/2">
          <Image
            src={service.image}
            alt={service.title}
            layout="responsive"
            width={700}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-lg transition-opacity duration-500 ease-in-out hover:opacity-80"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {service.title}
          </h2>
          <p className="mb-4">{service.description}</p>
          <div className="grid grid-cols-1 gap-4">
            {service.subServices.map((subService, subIndex) => (
              <div key={subIndex} className="flex items-center space-x-3">
                <p className="text-sm text-gray-600">{subService.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="p-10">
        <StickyScroll content={stickyContent} />
      </div>
    </section>
  );
};

export default Service;
