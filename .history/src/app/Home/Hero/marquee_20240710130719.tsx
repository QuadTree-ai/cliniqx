/* eslint-disable react/jsx-key */
"use client"

import React from 'react';
import { FaGooglePlay, FaAppStoreIos, FaStethoscope, FaCapsules } from 'react-icons/fa';

const messages = [
  <span><FaGooglePlay className="inline-block mr-2"/> cliniqx deployed on app store and google play store.</span>,
  <span><FaCapsules className="inline-block mr-2"/> cliniqx invent is open for the pharmacy / medical store.</span>,
  <span><FaAppStoreIos className="inline-block mr-2"/> cliniqx doc is available on app store and google play store for hospital / independent medical professional / doctors with clinics & other medical professionals.</span>,
];

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-purple-100 p-4 rounded-lg shadow-md">
      <div className="animate-marquee text-purple-700">
        {messages.map((message, index) => (
          <span key={index} className="flex justify-center items-center min-w-full">
            {message}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 100s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
