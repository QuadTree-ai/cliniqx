// src/app/pharmacy/signup/page.tsx

import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../../logos/cliniqx-invent-logo';

const PharmacySignupPage = () => {
  const router = useRouter();

  const navigateToFormPage = () => {
    router.push('/pharmacy/signup/formpage');
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
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-md w-full border border-gray-700 text-center">
          <h1 className="text-3xl font-bold text-white mt-4">Partner with CliniQX</h1>
          <p className="text-xl mt-2 text-white">at 0% commission for the 1st month!</p>
          <p className="text-white">And get ads worth INR 1500. Valid for new pharmacy partners in select cities.</p>
          <button onClick={navigateToFormPage} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out">
            Register your pharmacy
          </button>
          <button onClick={navigateToLoginPage} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out">
            Login to view your existing pharmacy
          </button>
          <p className="text-sm text-white mt-4">
            Need help? Contact <a href="tel:+919000000011" className="underline">+91 90-00-00-00-11</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PharmacySignupPage;
