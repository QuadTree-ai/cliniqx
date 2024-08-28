
"use client"

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
    router.push('/pharmacy/login');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col">
      <nav className="w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <div className="text-center p-10 flex-grow">
        <h1 className="text-4xl font-bold text-white">Partner with CliniQX</h1>
        <p className="text-xl mt-2 text-white">at 0% commission for the 1st month!</p>
        <p className="text-white">And get ads worth INR 1500. Valid for new pharmacy partners in select cities.</p>
        <button onClick={navigateToFormPage} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register your pharmacy
        </button>
        <button onClick={navigateToLoginPage} className="mt-4 ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Login to view your existing pharmacy
        </button>
        <p className="text-sm text-white mt-4">
          Need help? Contact <a href="tel:+919000000011" className="underline">+91 90-00-00-00-11</a>
        </p>
      </div>
      <div className="text-center p-10 bg-white text-gray-800">
        <h2 className="text-2xl font-bold">Why should you partner with CliniQX?</h2>
        <p>CliniQX enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
        <div className="flex justify-around p-4">
          <div className="p-4 shadow rounded">
            <h3 className="text-xl font-bold">1000+ cities</h3>
            <p>in India</p>
          </div>
          <div className="p-4 shadow rounded">
            <h3 className="text-xl font-bold">3 lakh+</h3>
            <p>pharmacy listings</p>
          </div>
          <div className="p-4 shadow rounded">
            <h3 className="text-xl font-bold">5.0 crore+</h3>
            <p>monthly orders</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8">How it works?</h2>
        <ol className="list-decimal ml-6">
          <li>Create your page on CliniQX. Help users discover your place by creating a listing on CliniQX.</li>
          <li>Register for online ordering. And deliver orders to millions of customers with ease.</li>
          <li>Start receiving orders online. Manage orders on our partner app, web dashboard or API partners.</li>
        </ol>
        <p className="mt-4">Already have your pharmacy listed? <a href="#" className="text-blue-500 underline">Search here</a> and claim the ownership of your pharmacy.</p>
      </div>
      <div className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold">What do you get on sign-up</h2>
        <p>CliniQX Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!</p>
        <ul className="list-disc ml-6">
          <li>Pharmacy Partner app: Manage all your orders on your smartphone with our Android app.</li>
          <li>Pharmacy Partner web dashboard: Manage all your orders on your desktop or laptop.</li>
          <li>API integration: Manage all your orders on your existing Point of Sale (POS) or third party software.</li>
        </ul>
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Start your journey with CliniQX</button>
      </div>
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        {/* FAQs content here */}
      </div>
    </div>
  );
};

export default PharmacySignupPage;
