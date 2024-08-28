// Service.tsx - The main component file
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { services } from "./servicesData"; // Ensure this is correctly imported

// Dynamically import the FadeInSection component with SSR disabled
const FadeInSection = dynamic(() => import('./FadeInSection'), { ssr: false });

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
                  <FadeInSection key={subIndex}>
                    <div className="flex flex-col items-center md:items-start lg:items-center">
                      <Image
                        src={subService.image}
                        alt={subService.text}
                        width={300}
                        height={300}
                        className="mb-2 rounded-full shadow-lg"
                      />
                      <p className="text-white font-medium">{subService.text}</p>
                    </div>
                  </FadeInSection>
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