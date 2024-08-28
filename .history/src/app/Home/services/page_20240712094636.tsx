// src/app/Home/services/page.tsx

import React from 'react';
import CliniQXCard from "../Features/cliniqxcard";
import { FaHospital, FaClinicMedical, FaPills } from 'react-icons/fa';

const Service = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
        <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-start">
          <CliniQXCard />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <ul className="space-y-8">
            <li className="flex items-start space-x-6">
              <FaHospital className="text-5xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Hospital Payments</h3>
                <p className="text-gray-600 text-lg">This card can be used to pay at hospitals through health insurance.</p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <FaClinicMedical className="text-5xl text-green-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Medical Data</h3>
                <p className="text-gray-600 text-lg">The card will have all the medical data, medical history, and medical reports.</p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <FaPills className="text-5xl text-red-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Usage in Clinics and Pharmacies</h3>
                <p className="text-gray-600 text-lg">This card will be used in hospitals, pharmacies, and clinics.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
