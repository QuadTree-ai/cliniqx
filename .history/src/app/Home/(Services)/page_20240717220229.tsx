"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import CliniQXCard from "../(Features)/cliniqxcard";
import BSCliniQXCard from "../(Features)/bscliniqxcard";

import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";
import walletImage from "/public/wallet.png";
import insuranceImage from "/public/insurance.png";
import medicalHistoryImage from "/public/medical history.png";

const services = [
  {
    image: hospitalImage,
    title: "Hospital Benefits",
    description: "Swift and secure transactions with health insurance integration.",
    subServices: [
      {
        image: walletImage,
        text: "Pay medical bills effortlessly.",
      },
      {
        image: insuranceImage,
        text: "Fetch and apply insurance details.",
      },
      {
        image: medicalHistoryImage,
        text: "Share medical history and records.",
      },
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Seamless inventory management and delivery options.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Check medicine availability.",
      },
      {
        image: insuranceImage,
        text: "Integrated or own delivery services.",
      },
      {
        image: walletImage,
        text: "Efficient billing and payment.",
      },
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Easy access to patient records and streamlined referrals.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Access and update records.",
      },
      {
        image: walletImage,
        text: "Manage patient medications.",
      },
      {
        image: insuranceImage,
        text: "Refer patients with full history.",
      },
    ],
  },
];

const Service = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <BSCliniQXCard />
        </div>
        {services.map((service, index) => (
          <section key={index} className="mb-12">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start md:space-x-6">
                <div className="relative w-full md:w-1/3 h-56 mb-6 md:mb-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between w-full md:w-2/3">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.subServices.map((subService, subIndex) => (
                        <Card key={subIndex} className="p-4 bg-gray-50 flex items-start space-x-4">
                          <div className="relative w-8 h-8">
                            <Image
                              src={subService.image}
                              alt={subService.text}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{subService.text}</span>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Service;
