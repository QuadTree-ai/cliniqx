"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import CliniQXCard from "../(Features)/cliniqxcard";

import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";

const services = [
  {
    image: hospitalImage,
    title: "Hospital Payments",
    description: "Swift and secure transactions with health insurance integration.",
    subServices: [
      "Pay medical bills effortlessly.",
      "Fetch and apply insurance details.",
      "Share medical history and records.",
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Seamless inventory management and delivery options.",
    subServices: [
      "Check medicine availability.",
      "Integrated or own delivery services.",
      "Efficient billing and payment.",
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Easy access to patient records and streamlined referrals.",
    subServices: [
      "Access and update records.",
      "Manage patient medications.",
      "Refer patients with full history.",
    ],
  },
];

const Service = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="w-full p-6 hover:shadow-2xl transition-shadow duration-300 bg-white">
              <CardHeader className="flex flex-col items-start space-y-4 mb-4">
                <div className="relative w-full h-56">
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
                <div className="grid grid-cols-1 gap-4">
                  {service.subServices.map((subService, subIndex) => (
                    <Card key={subIndex} className="p-4 bg-gray-50">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-gray-800" />
                        <span className="text-sm text-gray-600">{subService}</span>
                      </div>
                    </Card>
                  ))}
                </div>
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
