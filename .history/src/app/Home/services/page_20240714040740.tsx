// src/app/Home/services/page.tsx

import React, { useEffect } from 'react';
import Image from 'next/image';
import CliniQXCard from "../Features/cliniqxcard";

import cliniqx from "/public/cliniqx.svg";
import cliniqxdoc from "/public/clinqx doc.svg";
import cliniqxinvent from "/public/cliniqx invent.svg";

const services = [
  {
    image: cliniqxdoc,
    title: 'Hospital Payments',
    description: 'This card can be used to pay at hospitals through health insurance.',
  },
  {
    image: cliniqxinvent,
    title: 'Medical Data',
    description: 'The card will have all the medical data, medical history, and medical reports.',
  },
  {
    image: cliniqx,
    title: 'Usage in Clinics and Pharmacies',
    description: 'This card will be used in hospitals, pharmacies, and clinics.',
  }
];

const Service = () => {
  useEffect(() => {
    const rotateAnimation = () => {
      const servicesElements = document.querySelectorAll('.service-item');
      const radius = 250; // Radius of the circle
      const centerX = window.innerWidth / 2;
      const centerY = 400;

      servicesElements.forEach((element, index) => {
        const angle = (index / services.length) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - element.clientWidth / 2;
        const y = centerY + radius * Math.sin(angle) - element.clientHeight / 2;

        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    rotateAnimation();
    window.addEventListener('resize', rotateAnimation);

    return () => {
      window.removeEventListener('resize', rotateAnimation);
    };
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50">
      <div className="container mx-auto relative z-10">
        <div className="relative w-full h-[600px] flex items-center justify-center">
          <div className="absolute">
            <CliniQXCard />
          </div>
          {services.map((service, index) => (
            <div key={index} className="absolute service-item transition-transform duration-500 ease-in-out">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .service-item {
          position: absolute;
          transition: transform 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        section {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Service;
