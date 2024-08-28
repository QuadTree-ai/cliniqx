"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import path for router
import Image from 'next/image';
import Logo from '../Logo';

const PharmacyPage = () => {
  const router = useRouter();
  
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <nav className="w-full max-w-screen-xl absolute top-0 py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <Image
        src="/pharmacy-counter.svg"
        alt="Pharmacy Counter"
        width={320}
        height={200}
        className="mb-6"
      />
      <div className="max-w-lg w-full text-center space-y-8">
        <h2 className="text-2xl font-extrabold text-white">
          Pharmacy Partner Dashboard
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => navigateTo('/pharmacy/login')}
            className="w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Log In
          </button>
          <button
            onClick={() => navigateTo('/pharmacy/signup')}
            className="w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
          >
            Register
          </button>
        </div>
        <footer className="text-xs text-gray-400 mt-12">
          By continuing, you agree to our
          <a href="/terms" className="underline text-blue-200 hover:text-blue-100"> Terms of Service</a>, 
          <a href="/privacy" className="underline text-blue-200 hover:text-blue-100"> Privacy Policy</a>, and 
          <a href="/conduct" className="underline text-blue-200 hover:text-blue-100"> Code of Conduct</a>.
        </footer>
      </div>
    </div>
  );
};

export default PharmacyPage;
