import React from 'react';

const messages = [
  "cliniqx deployed on app store and google play store.",
  "cliniqx invent is open for the pharmacy / medical store.",
  "cliniqx doc is available on app store and google play store for hospital / independent medical professional / doctors with clinics & other medical professionals."
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {messages.join(' ')}
      </div>
    </div>
  );
};

export default Marquee;
