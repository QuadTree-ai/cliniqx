import React from "react";
import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";

// Define the structure of a service card
export type ServiceCard = {
  image: StaticImageData; // Keep this as StaticImageData for internal usage
  title: string;
  description: string;
  subServices: { text: string }[];
};

// Sample data for services
export const services: ServiceCard[] = [
  {
    image: hospitalImage,
    title: "Hospital Benefits",
    description: "Seamlessly manage your healthcare transactions and records.",
    subServices: [
      {
        text: "Instantly pay bills online.",
      },
      {
        text: "View and share your medical records easily.",
      },
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Access medicine information and streamline your pharmacy visits.",
    subServices: [
      {
        text: "Check real-time medicine stock.",
      },
      {
        text: "Connect with pharmacy delivery services.",
      },
      {
        text: "Quick and easy in-app billing.",
      },
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Effortlessly coordinate with local clinics for your healthcare needs.",
    subServices: [
      {
        text: "Access up-to-date medical records.",
      },
      {
        text: "Receive and manage prescriptions directly on your app.",
      },
    ],
  },
];
