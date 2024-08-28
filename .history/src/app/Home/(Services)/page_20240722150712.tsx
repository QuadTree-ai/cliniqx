"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData";
import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
  return (
    <section className="text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12 relative">
            <div className="relative h-96">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 flex flex-col justify-end p-6">
                <h2 className="text-4xl font-extrabold text-white mb-3">{service.title}</h2>
                <p className="text-white text-lg mb-4">{service.description}</p>
              </div>
            </div>
            <CardContent className="mt-4 bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.subServices.map((subService, subIndex) => (
                  <Card key={subIndex} className="bg-white p-4 rounded-xl shadow transition-transform duration-300 ease-in-out hover:scale-105">
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