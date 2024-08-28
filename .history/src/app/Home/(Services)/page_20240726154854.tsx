import React from 'react';
import Image from 'next/image';
import { services } from "./servicesData"; // Ensure this is correctly imported

const Service: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {services.map((service, index) => (
        <div key={index} className="relative min-h-screen flex items-center justify-center">
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="object-center object-cover transition-opacity duration-500 ease-in-out hover:opacity-80"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 flex flex-col justify-end">
            <div className="container mx-auto px-4 py-24">
              <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-white text-lg mb-8">{service.description}</p>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                {service.subServices.map((subService, subIndex) => (
                  <div key={subIndex} className="flex flex-col items-center md:items-start lg:items-center">
                    <Image
                      src={subService.image}
                      alt={subService.text}
                      width={300}
                      height={300}
                      className="mb-2 rounded-full shadow-lg"
                    />
                    <p className="text-white font-medium">{subService.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;