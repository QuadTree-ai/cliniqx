"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../Logo';

const PharmacyPage = () => {
  const router = useRouter();
  
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex flex-col">
      <nav className="bg-transparent py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="max-w-lg w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
              Pharmacy Partner Dashboard
            </h2>
            <p className="mt-2 text-center text-sm text-gray-200">
              Join our platform to manage and enhance your pharmacy operations effectively.
            </p>
          </div>
          <div className="mt-10">
            <button
              onClick={() => navigateTo('/pharmacy/login')}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg leading-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Log In
            </button>
            <button
              onClick={() => navigateTo('/pharmacy/signup')}
              className="mt-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg leading-6 font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>
          <footer className="mt-12 text-center text-xs text-gray-400">
            By continuing, you agree to our
            <a href="/terms" className="underline text-blue-200 hover:text-blue-100"> Terms of Service</a>, 
            <a href="/privacy" className="underline text-blue-200 hover:text-blue-100"> Privacy Policy</a>, and 
            <a href="/conduct" className="underline text-blue-200 hover:text-blue-100"> Code of Conduct</a>.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PharmacyPage;
