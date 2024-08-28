"use client";

import React from "react";
import Image from "next/image";
import { services } from "./servicesData"; // Ensure this is correctly imported

const Service: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="p-12 space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
          >
            <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
              <Image
                src={service.image}
                alt={service.title}
                layout="responsive"
                width={1200}
                height={800}
                objectFit="cover"
                className="rounded-lg shadow-2xl transition-opacity duration-500 ease-in-out hover:opacity-80"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-xl">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-lg mb-6">{service.description}</p>
              <div className="grid grid-cols-1 gap-6">
                {service.subServices.map((subService, subIndex) => (
                  <div key={subIndex} className="flex items-center space-x-4">
                    <p className="text-base text-gray-700">{subService.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
