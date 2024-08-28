"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this is correctly imported
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="text-gray-800">
      {services.map((service, index) => (
        <div key={index} className="relative min-h-screen">
          {/* Full-screen background image */}
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-center object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Text and sub-service images overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`container mx-auto px-4 pt-24 pb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                <p className="text-white text-lg">{service.description}</p>
              </div>
              <CardContent className="w-full lg:w-1/2 mt-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-6">
                  {service.subServices.map((subService, subIndex) => (
                    <Card key={subIndex} className="relative overflow-hidden bg-white p-6 rounded-xl shadow-lg">
                      <div className="w-full h-64 mb-4 relative">
                        <Image
                          src={subService.image}
                          alt={`${service.title} - ${subService.text}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md transition duration-300 ease-in-out hover:scale-110"
                        />
                      </div>
                      <h3 className="text-center text-sm font-semibold text-gray-800">{subService.text}</h3>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;