"use client";

import React from 'react';
import { FaGooglePlay, FaAppStoreIos, FaCapsules } from 'react-icons/fa';

const messages = [
  <span key="message1"><FaGooglePlay className="inline-block mr-2"/> cliniqx is available on the App Store and Google Play Store.</span>,
  <span key="message2"><FaCapsules className="inline-block mr-2"/> cliniqx Invent is available for medical stores.</span>,
  <span key="message3"><FaAppStoreIos className="inline-block m-2"/> cliniqx Doc is available on the App Store and Google Play Store for hospitals, independent medical professionals, and doctors with clinics.</span>,
];

const Marquee = () => {
  return (
    <div className="bg-purple-100 p-4 overflow-hidden">
      <div className="relative w-full">
        <div className="animate-marquee text-purple-700 flex whitespace-nowrap space-x-8">
          {messages.map((message, index) => (
            <span key={index} className="flex items-center justify-center text-sm md:text-base lg:text-lg">
              {message}
            </span>
          ))}
        </div>
        <div className="animate-marquee text-purple-700 flex whitespace-nowrap space-x-8 absolute top-0 left-full">
          {messages.map((message, index) => (
            <span key={index} className="flex items-center justify-center text-sm md:text-base lg:text-lg">
              {message}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
