"use client"

import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const messages = [
  "cliniqx deployed on app store and google play store.",
  "cliniqx invent is open for the pharmacy / medical store.",
  "cliniqx doc is available on app store and google play store for hospital / independent medical professional / doctors with clinics & other medical professionals."
];

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex text-gray-700">
        {messages.map((message, index) => (
          <div key={index} className="flex items-center space-x-2 px-4">
            {index === 0 && <FaGooglePlay className="text-green-600 w-6 h-6" />}
            {index === 1 && <FaApple className="text-gray-800 w-6 h-6" />}
            <span>{message}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 60s linear infinite;
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
