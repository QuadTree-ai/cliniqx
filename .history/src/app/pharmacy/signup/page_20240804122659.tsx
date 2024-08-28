"use client";

import React from 'react';
import Pharmacysignuphero from './components/hero';
import PharmacySignupIntro from './components/intro';
import FeaturesSectionDemo from "./components/feature"

const PharmacySignupPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Pharmacysignuphero />
      <PharmacySignupIntro />
      <FeaturesSectionDemo/>
    </div>
  );
};

export default PharmacySignupPage;
