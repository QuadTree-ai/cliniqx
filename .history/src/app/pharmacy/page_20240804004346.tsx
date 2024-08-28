"use client";

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../Logo';

const PharmacyPage = () => {
  const router = useRouter();
  
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex flex-col items-center justify-center">
      <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 fixed top-0 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center px-6">
        <Image
          src="/pharmacy-counter.svg"  // Ensure this is the correct path
          alt="Pharmacy Counter"
          width={422.18}  // Exact dimensions specified
          height={396.89}
          className="mb-6"
        />
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">
          Pharmacy Partner Dashboard
        </h2>
        <p className="text-sm text-gray-200 text-center mb-4">
          Join our platform to manage and enhance your pharmacy operations effectively.
        </p>
        <div className="w-full max-w-md space-y-4">
          <button
            onClick={() => navigateTo('/pharmacy/login')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md leading-6 font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Log In
          </button>
          <button
            onClick={() => navigateTo('/pharmacy/signup')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md leading-6 font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
          >
            Register
          </button>
        </div>
        <footer className="text-xs text-gray-400 mt-10">
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
