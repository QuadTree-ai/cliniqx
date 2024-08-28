"use client";

import React from 'react';
import Pharmacysignuphero from './components/hero';
import PharmacySignupIntro from './components/intro'; // Ensure this path is correct

const PharmacySignupPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Pharmacysignuphero />
      <PharmacySignupIntro />
    </div>
  );
};

export default PharmacySignupPage;
