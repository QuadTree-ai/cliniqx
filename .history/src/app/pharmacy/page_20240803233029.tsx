// src/app/pharmacy/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo';

const PharmacyPage = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo />
          <h1 className="mt-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900">
            CliniQX Invent Pharmacy Partner Dashboard
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Enhance your pharmacy's operations with cutting-edge tools.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Link 
            href="/pharmacy/login"
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            Log In
          </Link>
          <Link 
            href="/pharmacy/signup"
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
          >
            Register
          </Link>
        </div>
        <footer className="mt-8 text-center text-sm text-gray-600">
          By continuing, you agree to our
          <Link href="/terms" className="text-indigo-600 hover:text-indigo-500"> Terms of Service</Link>,
          <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500"> Privacy Policy</Link>, and
          <Link href="/conduct" className="text-indigo-600 hover:text-indigo-500"> Code of Conduct</Link>.
        </footer>
      </div>
    </div>
  );
};

export default PharmacyPage;
