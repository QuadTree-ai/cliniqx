"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { services } from "./servicesData";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react"; // Lucide icon for interactivity

const Service = () => {
  const handleImageClick = (imageSrc: StaticImageData) => {
    console.log("Open image in a lightbox or modal:", imageSrc);
  };

  return (
    <section className="bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <section key={index} className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-500 hover:shadow-2xl">
              <div className="lg:flex">
                <div className="relative lg:w-2/3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="responsive"
                    width={700}
                    height={467}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6 space-y-4 w-full lg:w-1/3">
                  <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {service.subServices.map((subService, subIndex) => (
                        <Card key={subIndex} className="relative p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-transform duration-300 ease-in-out">
                          <div onClick={() => handleImageClick(subService.image)} className="cursor-pointer">
                            <div className="w-full h-48 mb-4 relative">
                              <Image
                                src={subService.image}
                                alt={`${service.title} - ${subService.text}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-black bg-opacity-40">
                                <Eye className="text-white w-8 h-8" />
                              </div>
                            </div>
                            <h3 className="text-center text-sm font-semibold text-gray-800">{subService.text}</h3>
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