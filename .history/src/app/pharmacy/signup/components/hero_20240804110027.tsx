"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Corrected import path for useRouter
import Logo from "../../../logos/cliniqx-invent-logo";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const Pharmacysignuphero = () => {
  const router = useRouter();

  const navigateToFormPage = () => {
    router.push("/pharmacy/signup/register");
  };

  const navigateToLoginPage = () => {
    router.push("/pharmacy/login");
  };

  return (
    <div className="flex flex-col items-center">
      <nav className="w-full bg-transparent py-2 px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo className="h-8 w-auto sm:h-12" />
        </div>
      </nav>
      <HeroHighlight containerClassName="w-full max-w-4xl p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl font-medium text-white mb-4 sm:mb-6">
          Partner with CliniQX
        </h1>
        <p className="text-2xl sm:text-3xl font-medium text-white mb-4 sm:mb-6">
          at <Highlight className="bg-gradient-to-r from-green-500 to-blue-500">0% commission for the 1st month!</Highlight>
        </p>
        <p className="text-xl text-white mb-4 sm:mb-6">
          And get ads worth INR 1500. Valid for new pharmacy partners in select cities.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={navigateToFormPage}
            className="bg-gray-700 text-white font-medium py-2 px-4 rounded"
          >
            Register your pharmacy
          </button>
          <button
            onClick={navigateToLoginPage}
            className="bg-white text-gray-800 font-medium py-2 px-4 rounded"
          >
            Login to view your existing pharmacy
          </button>
        </div>
        <p className="text-sm text-gray-200 mt-2">
          Need help? Contact <a href="tel:+919000000011" className="underline">+91 90-00-00-00-11</a>
        </p>
      </HeroHighlight>
    </div>
  );
};

export default Pharmacysignuphero;
