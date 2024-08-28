"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this path is correctly imported
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="text-gray-800 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12 relative overflow-hidden">
            {/* Full background image with shadow */}
            <div className="relative h-96 w-full shadow-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 ease-in-out hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 flex flex-col justify-end p-6">
                <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                <p className="text-white text-lg">{service.description}</p>
              </div>
            </div>
            {/* Card content with alternating app images */}
            <CardContent className="mt-4 bg-white rounded-xl p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.subServices.map((subService, subIndex) => (
                  <Card key={subIndex} className={`relative overflow-hidden bg-white p-4 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}>
                    <div className="w-full h-48 mb-4 relative">
                      <Image
                        src={subService.image}
                        alt={`${service.title} - ${subService.text}`}
                        layout="responsive"
                        width={400}
                        height={300}
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="text-center text-sm font-semibold text-gray-800">{subService.text}</h3>
                  </Card>
                ))}
              </div>
            </CardContent>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Service;