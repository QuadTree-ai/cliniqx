"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this path is correct
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-200 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <div className="md:flex">
                <div className="relative md:w-1/3 hover:scale-105 transition-transform duration-300 ease-in-out">
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
                <div className="p-6 space-y-4">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {service.subServices.map((subService, subIndex) => (
                        <div key={subIndex} className="group">
                          <Card className="p-4 bg-gray-50 flex flex-col items-center space-y-3 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="relative w-24 h-24">
                              <Image
                                src={subService.image}
                                alt={`${service.title} - ${subService.text}`}
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-gray-700 group-hover:text-blue-600">{service.title}</h3>
                              <p className="text-sm text-gray-600">{subService.text}</p>
                            </div>
                          </Card>
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