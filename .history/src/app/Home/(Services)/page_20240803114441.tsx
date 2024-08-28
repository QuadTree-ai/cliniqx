import React, { FC } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { services, ServiceCard } from "./servicesData";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useMotionValue } from "framer-motion";
import Image from "next/image";

const ServiceCardComponent: FC<{ card: ServiceCard; index: number }> = ({ card, index }) => (
  <Card
    card={{
      src: card.image.src, // Assuming card.image.src is a valid URL
      title: card.title,
      category: "Healthcare",
      content: (
        <div className="p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-lg relative">
          {/* Displaying the 3D SVG image with optimized loading and responsive settings */}
          <div className="relative h-16 w-16 mb-4"> {/* Set the height and width as needed */}
            <Image
              src="/public/cliniqx.svg" // Path to your SVG in the public folder
              alt="CliniQX Logo"
              layout="fill"
              objectFit="contain"
              priority // Use priority to preload important images
              className="rounded-md"
            />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{card.title}</h2>
          <p className="text-lg mb-6">{card.description}</p>
          <div className="space-y-4">
            {card.subServices.map((subService, subIndex) => (
              <div key={subIndex} className="flex items-center space-x-4">
                <p className="text-md text-gray-700">{subService.text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    }}
    index={index}
  />
);

const Service: FC = () => {
  const cards = services.map((service, index) => (
    <ServiceCardComponent key={service.title} card={service} index={index} />
  ));

  const pathLengths = [
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
  ];

  return (
    <section className="text-gray-800 py-16 relative">
      <GoogleGeminiEffect pathLengths={pathLengths} className="absolute top-0 left-0 w-full h-full" />
      <div className="container mx-auto px-6">
        <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 mb-10">
          Our Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Service;
