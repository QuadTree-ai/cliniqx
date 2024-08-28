// src/app/pharmacy/signup/page.tsx

import React from 'react';
import { useRouter } from 'next/router';
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-md w-full border border-gray-700 text-center">
        <div className="mb-12">
          <Logo className="w-32 h-auto mx-auto" />
          <h1 className="text-3xl font-bold text-white mt-4">Partner with CliniQX</h1>
          <p className="text-xl mt-2 text-white">at 0% commission for the 1st month!</p>
          <p className="mt-2 text-white">And get ads worth INR 1500. Valid for new pharmacy partners in select cities.</p>
        </div>
        <button onClick={navigateToFormPage} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out">
          Register your pharmacy
        </button>
        <button onClick={navigateToLoginPage} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Login to view your existing pharmacy
        </button>
        <p className="text-sm text-white mt-8">
          Need help? Contact +91 90-00-00-00-11
        </p>
      </div>
    </div>
  );
};

export default PharmacySignupPage;
