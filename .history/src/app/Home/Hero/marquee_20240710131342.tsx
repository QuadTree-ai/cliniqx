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
    <div className="w-full overflow-hidden bg-purple-100 p-4 shadow-md">
      <div className="animate-marquee text-purple-700 flex space-x-8">
        {messages.map((message, index) => (
          <span key={index} className="flex items-center justify-center w-full">
            {message}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
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