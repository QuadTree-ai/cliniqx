import React from 'react';

const messages = [
  "cliniqx deployed on app store and google play store.",
  "cliniqx invent is open for the pharmacy / medical store.",
  "cliniqx doc is available on app store and google play store for hospital / independent medical professional / doctors with clinics & other medical professionals."
];

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex space-x-8 text-gray-700">
        {messages.map((message, index) => (
          <span key={index} className="px-4">
            {message}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
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
