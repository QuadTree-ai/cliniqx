"use client"

import React from 'react';
import { FaGooglePlay, FaAppStoreIos, FaCapsules } from 'react-icons/fa';

const messages = [
  { id: "message1", icon: <FaGooglePlay className="inline-block mr-2" />, text: "cliniqx deployed on app store and google play store." },
  { id: "message2", icon: <FaCapsules className="inline-block mr-2" />, text: "cliniqx invent is open for the pharmacy / medical store." },
  { id: "message3", icon: <FaAppStoreIos className="inline-block mr-2" />, text: "cliniqx doc is available on app store and google play store for hospital / independent medical professional / doctors with clinics & other medical professionals." },
];

const Marquee = () => {
  return (
    <div className="w-full bg-purple-100 p-4 overflow-hidden">
      <div className="animate-marquee text-purple-700 flex space-x-8">
        {messages.map((message) => (
          <div key={message.id} className="flex items-center justify-center w-full text-sm md:text-base lg:text-lg">
            {message.icon} {message.text}
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
          width: 100%;
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
