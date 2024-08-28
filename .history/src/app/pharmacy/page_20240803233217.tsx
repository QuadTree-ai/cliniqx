"use client"

// src/app/pharmacy/page.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../Logo';

const PharmacyPage = () => {
  const router = useRouter();
  
  const handleLogin = () => {
    router.push('/pharmacy/login');
  };

  const handleRegister = () => {
    router.push('/pharmacy/signup');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            CliniQX Invent Pharmacy Partner Dashboard
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={handleLogin}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
          <button
            onClick={handleRegister}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
        </div>
        <footer className="mt-8 text-center text-sm text-gray-600">
          By continuing, you agree to our
          <span className="text-indigo-600 hover:text-indigo-500"> Terms of Service</span>,
          <span className="text-indigo-600 hover:text-indigo-500"> Privacy Policy</span>, and
          <span className="text-indigo-600 hover:text-indigo-500"> Code of Conduct</span>.
        </footer>
      </div>
    </div>
  );
};

export default PharmacyPage;
