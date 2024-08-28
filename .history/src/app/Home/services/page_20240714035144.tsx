// src/app/Home/services/page.tsx

import React from 'react';
import CliniQXCard from "../Features/cliniqxcard";
import { FaHospital, FaClinicMedical, FaPills } from 'react-icons/fa';

import cliniqx from "/public/cliniqx.svg";
import cliniqxdoc from "/public/clinqx doc.svg";
import cliniqxinvent from "/public/cliniqx invent.svg";


const Service = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-start">
          <CliniQXCard />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <FaHospital className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Hospital Payments</h3>
                <p className="text-gray-600">This card can be used to pay at hospitals through health insurance.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaClinicMedical className="text-4xl text-green-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Medical Reports stored digitally</h3>
                <p className="text-gray-600">The card will have all the medical data, medical history, and medical reports.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaPills className="text-4xl text-red-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Usage in Clinics and Pharmacies</h3>
                <p className="text-gray-600">This card will be used in hospitals, pharmacies, and clinics.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
