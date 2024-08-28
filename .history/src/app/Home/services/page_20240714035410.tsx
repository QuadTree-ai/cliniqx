// src/app/Home/services/page.tsx

import React from 'react';
import CliniQXCard from "../Features/cliniqxcard";
import Image from 'next/image';
import hospitalImage from '/public/hospital.jpg';
import clinicImage from '/public/clinic.jpg';
import pharmacyImage from '/public/pharmacy.jpg';

const services = [
  {
    image: hospitalImage,
    title: 'Hospital Payments',
    description: 'This card can be used to pay at hospitals through health insurance.',
  },
  {
    image: clinicImage,
    title: 'Medical Reports stored digitally',
    description: 'The card will have all the medical data, medical history, and medical reports.',
  },
  {
    image: pharmacyImage,
    title: 'Usage in Clinics and Pharmacies',
    description: 'This card will be used in hospitals, pharmacies, and clinics.',
  }
];

const Service = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative">
        <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-start">
          <CliniQXCard />
          {/* Connecting lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300 z-0"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-xl relative z-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <ul className="space-y-8">
            {services.map((service, index) => (
              <li key={index} className="flex items-start space-x-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
                {/* Connecting lines */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-12 bg-gray-300"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
