import React from "react";
import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";
import { StaticImageData } from "next/image";

// Define the structure of a service card
export type ServiceCard = {
  image: StaticImageData; // Keep this as StaticImageData for internal usage
  title: string;
  description: string;
};

// Sample data for services
export const services: ServiceCard[] = [
  {
    image: hospitalImage,
    title: "Hospital Benefits",
    description: "Seamlessly manage your healthcare transactions and records.",
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description:
      "Access medicine information and streamline your pharmacy visits.",
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description:
      "Effortlessly coordinate with local clinics for your healthcare needs.",
  },
];
