"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import CliniQXCard from "../Features/cliniqxcard";

import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";

const services = [
  {
    image: hospitalImage,
    title: "Hospital Payments",
    description: "Streamline your hospital payments with CliniQX, ensuring swift and secure transactions through health insurance integration.",
    subServices: [
      "Effortlessly pay your medical bills using the CliniQX card.",
      "Automatically fetch and apply health insurance details for payment.",
      "Share comprehensive medical history, records, and prescriptions with hospitals.",
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Enhance your pharmacy experience with CliniQX, offering seamless inventory management and delivery options.",
    subServices: [
      "Instantly check medicine availability and manage inventory.",
      "Opt for integrated delivery services or use your own.",
      "Efficient billing and payment processing at pharmacies.",
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Empower local clinics with CliniQX, providing easy access to patient records and streamlined referral processes.",
    subServices: [
      "Access and update patient medical records effortlessly.",
      "Local doctors can prescribe and manage patient medications.",
      "Easily refer patients to hospitals with complete medical history.",
    ],
  },
];

const Service = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-12">
        <div className="relative mb-12">
          <CliniQXCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="w-full p-6 hover:shadow-2xl transition-shadow duration-300 bg-white text-gray-800">
              <CardHeader className="flex flex-col items-start space-y-4 mb-4">
                <div className="relative w-full h-40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 text-xs">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="mb-1">{subService}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <style jsx>{`
        section {
          animation: fadeIn 1s ease-in-out;
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
      `}</style>
    </section>
  );
};

export default Service;
