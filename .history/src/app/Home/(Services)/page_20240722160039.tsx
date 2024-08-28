"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Make sure this path is correct
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="text-gray-800 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12 relative overflow-hidden">
            {/* Background Image */}
            <div className="relative h-96 shadow-lg rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition duration-500 ease-in-out"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-60 flex flex-col justify-end p-6">
                <h2 className="text-3xl font-extrabold text-white mb-3">{service.title}</h2>
                <p className="text-white text-lg mb-4">{service.description}</p>
              </div>
            </div>
            {/* Content Cards with App Images */}
            <CardContent className="mt-4 bg-white rounded-xl p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${index % 2 === 0 ? 'md:grid-flow-row-dense' : ''}`}>
                {service.subServices.map((subService, subIndex) => (
                  <Card key={subIndex} className="bg-gray-100 p-4 rounded-xl shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                    <div className="w-full h-48 mb-4 relative rounded-md overflow-hidden">
                      <Image
                        src={subService.image}
                        alt={`${service.title} - ${subService.text}`}
                        layout="responsive"
                        width={400}
                        height={300}
                        objectFit="cover"
                        className="transition duration-300 ease-in-out"
                      />
                    </div>
                    <h3 className="text-center text-sm font-semibold text-gray-900">{subService.text}</h3>
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