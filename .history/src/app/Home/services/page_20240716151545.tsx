"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Hospital, FileText, ShoppingBag, ClinicMedical } from "lucide-react";
import CliniQXCard from "../Features/cliniqxcard";

const services = [
  {
    icon: Hospital,
    title: "Hospital",
    description: "Use this card for hospital payments via health insurance.",
    subServices: [
      "A patient can pay their medical bill through the card.",
      "The card will fetch health insurance and help to pay the amount.",
      "A user can share medical history, records, and medicines with the hospital.",
    ],
  },
  {
    icon: FileText,
    title: "Personal",
    description: "Store all medical data, history, and reports on this card.",
    subServices: [
      "Add/scan medical documents and store them digitally.",
      "Utilize a wallet for payments at hospitals and pharmacies.",
      "Check medicine availability and order through the app.",
      "Get suggestions for alternate medicine based on salt composition.",
      "View medical history in a 3D human interface.",
      "Add recent problems and get suggestions through Medical LLM.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Pharmacy",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
    subServices: [
      "Check medicine availability in the inventory and generate billing.",
      "Opt for a delivery system (Yes/No) or use own delivery system.",
    ],
  },
  {
    icon: ClinicMedical,
    title: "Clinics",
    description: "Utilize this card at hospitals, pharmacies, and clinics.",
    subServices: [
      "Local clinics can check the medical record of patient data.",
      "Local doctors can add medicine to patient data.",
      "Refer to hospitals.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="w-full p-6 hover:shadow-2xl transition-shadow duration-300 bg-white text-gray-800">
              <CardHeader className="flex items-start space-x-4 mb-4">
                <service.icon className="w-10 h-10 text-primary" />
                <div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
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
