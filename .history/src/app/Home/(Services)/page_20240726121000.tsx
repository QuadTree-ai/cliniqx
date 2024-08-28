"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this is correctly imported
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="text-gray-800 bg-gray-50">
      {services.map((service, index) => (
        <div key={index} className="relative min-h-screen flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="object-center object-cover transition-opacity duration-500 ease-in-out hover:opacity-80"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60"></div>
          </div>
          <div className={`container mx-auto px-4 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}>
            <div className="text-white max-w-lg z-10 p-6">
              <h2 className="text-4xl font-bold mb-3">{service.title}</h2>
              <p className="text-lg mb-6">{service.description}</p>
              <div className="space-y-6">
                {service.subServices.map((subService, subIndex) => (
                  <div key={subIndex} className="opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold">{subService.text}</h3>
                  </div>
                ))}
              </div>
            </div>
            <CardContent className="w-full md:w-1/3 mt-12 md:mt-0 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              {service.subServices.map((subService, subIndex) => (
                <Card key={subIndex} className="bg-white p-4 rounded-xl shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md mb-4">
                  <div className="w-full h-64 relative rounded-md overflow-hidden">
                    <Image
                      src={subService.image}
                      alt={`${service.title} - ${subService.text}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition duration-300 ease-in-out"
                    />
                  </div>
                </Card>
              ))}
            </CardContent>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;