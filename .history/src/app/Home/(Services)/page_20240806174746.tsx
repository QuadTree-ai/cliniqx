"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Ensure these paths are correct
import { services, ServiceCard } from "./servicesData"; // Import updated service data

const ServiceCardComponent = ({ card, index }: { card: ServiceCard, index: number }) => (
  <Card
    card={{
      src: card.image.src,
      title: card.title,
      category: "Healthcare",
      content: (
        <div className="p-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-lg h-80"> {/* Reduced padding and height */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h2> {/* Reduced text size */}
          <p className="text-md mb-4">{card.description}</p> {/* Reduced text size */}
          <div className="space-y-2">
            {card.subServices.map((subService, subIndex) => (
              <div key={subIndex} className="flex items-center space-x-2">
                <p className="text-sm text-gray-700">{subService.text}</p> {/* Reduced text size */}
              </div>
            ))}
          </div>
        </div>
      ),
    }}
    index={index}
  />
);

const Service: React.FC = () => {
  const cards = services.map((service, index) => (
    <ServiceCardComponent key={service.title} card={service} index={index} />
  ));

  return (
    <section className="text-gray-800 py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="max-w-7xl mx-auto text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Our Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Service;
