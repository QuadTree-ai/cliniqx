"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Adjust the path as needed
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="relative md:w-1/3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="responsive"
                    width={700}
                    height={467}
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.subServices.map((subService, subIndex) => (
                        <div key={subIndex} className="flex items-center p-4 bg-gray-50 rounded-lg shadow space-x-4">
                          <div className="relative w-12 h-12">
                            <Image
                              src={subService.image}
                              alt={subService.text}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <span className="text-gray-600">{subService.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Service;
