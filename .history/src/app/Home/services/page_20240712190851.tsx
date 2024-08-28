// src/app/Home/services/page.tsx

import React from 'react';
import CliniQXCard from "../Features/cliniqxcard";
import { FaHospital, FaClinicMedical, FaPills } from 'react-icons/fa';

const services = [
  {
    icon: FaHospital,
    title: 'Hospital Payments',
    description: 'This card can be used to pay at hospitals through health insurance.',
    color: 'text-blue-500'
  },
  {
    icon: FaClinicMedical,
    title: 'Medical Data',
    description: 'The card will have all the medical data, medical history, and medical reports.',
    color: 'text-green-500'
  },
  {
    icon: FaPills,
    title: 'Usage in Clinics and Pharmacies',
    description: 'This card will be used in hospitals, pharmacies, and clinics.',
    color: 'text-red-500'
  }
];

const Service = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
        <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-start">
          <CliniQXCard />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <ul className="space-y-8">
            {services.map((service, index) => (
              <li key={index} className="flex items-start space-x-6">
                <service.icon className={`text-5xl ${service.color}`} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
