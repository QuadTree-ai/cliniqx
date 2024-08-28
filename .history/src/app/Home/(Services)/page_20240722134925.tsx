"use client";

import React from "react";
import Image from "next/image";
import { services } from "@/data/servicesData";
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-50 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12 transition duration-300 ease-in-out hover:shadow-xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.subServices.map((subService, subIndex) => (
                        <Card key={subIndex} className="p-4 bg-gray-50 flex items-start space-x-4 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={subService.image}
                              alt={`${service.title} - ${subService.text}`}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-700">{service.title}</span>
                            <span className="text-sm text-gray-600">{subService.text}</span>
                          </div>
                        </Card>
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
