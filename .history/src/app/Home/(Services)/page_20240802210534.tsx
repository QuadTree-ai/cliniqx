// src/app/Home/(Services)/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this is correctly imported

const Service: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative min-h-screen flex flex-col md:flex-row items-center justify-between py-8 md:py-12"
          >
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Image
                src={service.image}
                alt={service.title}
                layout="responsive"
                width={700}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-lg transition-opacity duration-500 ease-in-out hover:opacity-80"
                priority
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg mb-6">{service.description}</p>
                <div className="space-y-4">
                  {service.subServices.map((subService, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center space-x-4"
                    >
                      <Image
                        src={subService.image}
                        alt={subService.text}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="text-md text-gray-700">{subService.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
