"use client"

// src/app/pharmacy/signup/page.tsx

import React from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../logos/cliniqx-invent-logo';

const PharmacySignupPage = () => {
  const router = useRouter();

  const navigateToFormPage = () => {
    router.push('/src/app/pharmacy/signup/formpage');
  };

  const navigateToLoginPage = () => {
    router.push('/src/app/pharmacy/login');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Logo className="w-32 h-auto" />
        </div>
      </div>

      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">Partner with CliniQX</h1>
        <p className="text-4xl mt-2">at 0% commission for the 1st month!</p>
        <p className="mt-2">And get ads worth INR 1500. Valid for new pharmacy partners in select cities.</p>
        <button onClick={navigateToFormPage} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register your pharmacy
        </button>
        <button onClick={navigateToLoginPage} className="mt-4 ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Login to view your existing pharmacy
        </button>
        <div className="mt-4">
          <p>Need help? Contact +91 90-00-00-00-11</p>
        </div>
      </div>
    </div>
  );
};

export default PharmacySignupPage;
