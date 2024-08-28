"use client";

// src/app/Home/services/page.tsx

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CliniQXCard from "../Features/cliniqxcard";

import cliniqxdoc from "/public/cliniqx doc.svg";
import cliniqxinvent from "/public/cliniqx invent.svg";
import cliniqx from "/public/cliniqx.svg"; // Add new image for clinic

const services = [
  {
    image: cliniqxdoc,
    title: "Hospital Payments",
    description: "Use this card for hospital payments via health insurance.",
  },
  {
    image: cliniqxinvent,
    title: "Medical Data",
    description: "Store all medical data, history, and reports on this card.",
  },
  {
    image: cliniqx,
    title: "Clinic & Pharmacy Usage",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
  },
];

const Service = () => {
  const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rotateAnimation = () => {
      const servicesElements = serviceItemsRef.current;
      const radius = 250; // Radius of the circle
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      servicesElements.forEach((element, index) => {
        if (element) {
          const angle = (index / services.length) * (2 * Math.PI);
          const x = centerX + radius * Math.cos(angle) - element.clientWidth / 2;
          const y = centerY + radius * Math.sin(angle) - element.clientHeight / 2;

          element.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    rotateAnimation();
    window.addEventListener("resize", rotateAnimation);

    return () => {
      window.removeEventListener("resize", rotateAnimation);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200">
      <div className="container mx-auto relative z-10">
        <div className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute">
            <CliniQXCard />
          </div>
          {services.map((service, index) => (
            <div
              key={index}
              className="absolute service-item transition-transform duration-500 ease-in-out hover:scale-105"
              ref={(el) => {
                serviceItemsRef.current[index] = el;
              }}
            >
              <div className="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {service.title}
                  </h3>
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
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: fadeIn 1s ease-in-out;
        }

        .service-item:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Service;
