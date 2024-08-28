"use client";

// src/app/pharmacy/signup/page.tsx

import React from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import Logo from "../../logos/cliniqx-invent-logo";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"; // Ensure this path is correct

const PharmacySignupPage = () => {
  const router = useRouter();

  const navigateToFormPage = () => {
    router.push("/pharmacy/signup/register");
  };

  const navigateToLoginPage = () => {
    router.push("/pharmacy/login");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col items-center">
      <nav className="w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo className="h-12 w-auto" />
        </div>
      </nav>
      <HeroHighlight containerClassName="w-full max-w-4xl p-10">
        <h1 className="text-4xl font-medium text-white mb-8">
          Partner with{" "}
          <Highlight className="bg-gradient-to-r from-cyan-500 to-blue-500">
            CliniQX
          </Highlight>
        </h1>
        <p className="text-4xl font-regular text-white mb-8">
          at{" "}
          <Highlight className="bg-gradient-to-r from-green-500 to-blue-500">
            0% commission for the 1st month!
          </Highlight>
        </p>
        <p className="text-white mb-8">
          And get ads worth{" "}
          <Highlight className="bg-gradient-to-r from-yellow-500 to-orange-500">
            INR 1500
          </Highlight>
          . Valid for new pharmacy partners in select cities.
        </p>
        <div className="flex items-start space-x-4">
          <button
            onClick={navigateToFormPage}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Register your pharmacy
          </button>
          <button
            onClick={navigateToLoginPage}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Login to view your existing pharmacy
          </button>
        </div>

        <p className="text-sm text-gray-200 mt-4">
          Need help? Contact{" "}
          <a href="tel:+919000000011" className="underline">
            +91 90-00-00-00-11
          </a>
        </p>
      </HeroHighlight>
    </div>
  );
};

export default PharmacySignupPage;
