// src/app/pharmacy/signup/page.tsx

import React from 'react';
import { useRouter } from 'next/router';  // Correct import for useRouter
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
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <nav className="w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <div className="flex flex-col items-center justify-start flex-grow">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-5">Partner with CliniQX</h1>
          <p className="text-4xl mt-2 text-white mb-4">at 0% commission for the 1st month!</p>
          <p className="text-white">And get ads worth INR 1500. Valid for new pharmacy partners in select cities.</p>
          <div className="mt-4">
            <button onClick={navigateToFormPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Register your pharmacy
            </button>
            <button onClick={navigateToLoginPage} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Login to view your existing pharmacy
            </button>
          </div>
          <p className="text-sm text-white mt-4">
            Need help? Contact <a href="tel:+919000000011" className="underline">+91 90-00-00-00-11</a>
          </p>
        </div>
      </div>
      <div className="text-center p-10 bg-white text-gray-800">
        {/* Further content and sections as per the earlier detailed response */}
      </div>
    </div>
  );
};

export default PharmacySignupPage;
