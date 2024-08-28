"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Adjust the path as needed
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-200 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12 transition duration-300 ease-in-out hover:shadow-xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out">
              <div className="md:flex">
                <div className="relative md:w-2/3 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="responsive"
                    width={700}
                    height={467}
                    objectFit="cover"
                    className="rounded-t-lg md:rounded-none md:rounded-l-lg"
                  />
                </div>
                <div className="p-6 space-y-4 w-full md:w-1/3">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <CardContent>
                    <div className="flex flex-wrap justify-start items-center gap-4">
                      {service.subServices.map((subService, subIndex) => (
                        <div key={subIndex} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out w-full">
                          <div className="relative w-full h-48 mb-2">
                            <Image
                              src={subService.image}
                              alt={`${service.title} - ${subService.text}`}
                              layout="responsive"
                              width={400}
                              height={300}
                              objectFit="cover"
                            />
                          </div>
                          <h3 className="text-sm font-bold text-gray-700">{subService.text}</h3>
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