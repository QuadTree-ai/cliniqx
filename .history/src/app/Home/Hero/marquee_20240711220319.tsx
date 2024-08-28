"use client"

import React from 'react';
import { FaGooglePlay, FaAppStoreIos, FaCapsules } from 'react-icons/fa';

const messages = [
  <span key="message1"><FaGooglePlay className="inline-block mr-2"/> cliniqx is available on the App Store and Google Play Store.</span>,
  <span key="message2"><FaCapsules className="inline-block mr-2"/> cliniqx Invent is available for medical stores.</span>,
  <span key="message3"><FaAppStoreIos className="inline-block mr-2"/> cliniqx Doc is available on the App Store and Google Play Store for hospitals and independent medical professionals/doctors with clinics.</span>,
];

const Marquee = () => {
  return (
    <div className="bg-purple-100 p-4 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {messages.map((message, index) => (
            <span key={index} className="inline-block">
              {message}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
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
