"use client"

// src/app/pharmacy/signup/page.tsx

import React from 'react';
import { useRouter } from 'next/navigation'; // Ensure correct import for useRouter
import Logo from '../../logos/cliniqx-invent-logo';

const PharmacySignupPage = () => {
  const router = useRouter();

  const navigateToFormPage = () => {
    router.push('/pharmacy/signup/register');
  };

  const navigateToLoginPage = () => {
    router.push('/pharmacy/login');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col">
      <nav className="w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <div className="text-left max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-white">Partner with CliniQX</h1>
          <p className="text-4xl mt-2 text-white">at 0% commission for the 1st month!</p>
          <p className="text-4xl text-white">And get ads worth INR 1500. Valid for new pharmacy partners in select cities.</p>
          <div className="flex flex-col mt-4 space-y-4">
            <button onClick={navigateToFormPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register your pharmacy
            </button>
            <button onClick={navigateToLoginPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Login to view your existing pharmacy
            </button>
          </div>
          <p className="text-lg text-white mt-4">
            Need help? Contact <a href="tel:+919000000011" className="underline">+91 90-00-00-00-11</a>
          </p>
        </div>
      </div>
      <div className="text-left p-10 bg-white text-gray-800 max-w-7xl mx-auto">
        {/* Further content and sections as per the earlier detailed response */}
      </div>
    </div>
  );
};

export default PharmacySignupPage;
