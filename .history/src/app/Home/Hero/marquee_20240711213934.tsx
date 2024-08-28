"use client";

import React from "react";
import { FaGooglePlay, FaAppStoreIos, FaCapsules } from "react-icons/fa";

const messages = [
  <span key="message1">
    <FaGooglePlay className="inline-block mr-2" /> cliniqx is available for on
    app store and google play store.
  </span>,
  <span key="message2">
    <FaCapsules className="inline-block mr-2" /> cliniqx invent is available for
    medical store.
  </span>,
  <span key="message3">
    <FaAppStoreIos className="inline-block mr-2" /> cliniqx doc is available on
    app store and google play store for hospital / independent medical
    professional / doctors with clinics.
  </span>,
];

const Marquee = () => {
  return (
    <div className=" bg-purple-100">
      <div className="animate-marquee text-purple-700 flex whitespace-nowrap space-x-8">
        {messages.map((message, index) => (
          <span
            key={index}
            className="flex items-center justify-center text-sm md:text-base lg:text-lg"
          >
            {message}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 100s linear infinite;
          width: 100%;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
