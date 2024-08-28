"use client";

import React from "react";
import Image from "next/image";
import CliniQXCard from "../Features/cliniqxcard";
import cliniqx from "/public/cliniqx.svg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const services = [
  {
    image: cliniqx,
    title: "Hospital Payments",
    description: "Use this card for hospital payments via health insurance.",
  },
  {
    image: cliniqx,
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
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-8">
        <div className="relative mb-8">
          <CliniQXCard />
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {services.map((service, index) => (
              <figure key={index} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground">{service.title}</div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default Service;
