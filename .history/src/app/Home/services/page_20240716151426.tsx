"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Hospital, FileText, ShoppingBag } from "lucide-react";
import CliniQXCard from "../Features/cliniqxcard";

const services = [
  {
    icon: Hospital,
    title: "Hospital",
    description: "Use this card for hospital payments via health insurance.",
    subServices: [
      "A patient can pay their medical bill through the card",
      "The card will fetch health insurance and will help to pay the amount",
      "A user can share the medical history, medical record, medicines with the hospital",
    ],
  },
  {
    icon: FileText,
    title: "Personal",
    description: "Store all medical data, history, and reports on this card.",
    subServices: [
      "A person can add/scan their medical documents and store digitally",
      "Person will have a wallet to pay at hospital and pharmacy store",
      "A person can check the medicine availability through the app and order medicines",
      "Suggestion of alternate medicine through calculating the salt composition",
      "Can check the medical history in 3D human interface",
      "Can add recent problems and get suggestions through Medical LLM",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Pharmacy",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
    subServices: [
      "A pharmacy can check the medicine availability in the inventory and generate the billing",
      "A pharmacy can opt for the delivery system (Yes/No) or has its own delivery system",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Clinics",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
    subServices: [
      "Local clinics can check the medical record of the patient data",
      "The local doctors can add the medicine to the patient data",
      "Can refer to the hospital",
    ],
  },
];

const Service = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-8">
        <div className="relative mb-12">
          <CliniQXCard />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-6 p-4">
          {services.map((service, index) => (
            <Card key={index} className="w-full md:w-1/3 p-4 hover:shadow-2xl transition-shadow duration-300 bg-white text-gray-800">
              <CardHeader className="flex flex-col items-start mb-4">
                <service.icon className="w-10 h-10 mb-2 text-primary" />
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">{service.description}</CardDescription>
                <ul className="list-disc list-inside text-gray-600">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="text-sm mb-2">{subService}</li>
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
