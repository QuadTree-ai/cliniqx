/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CliniQXCard from "./cliniqxcard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <section
      id="Features"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-gray-700 mb-8 uppercase tracking-wide">
            Introducing
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            India's First Healthcare Card
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Experience seamless healthcare transactions and data sharing with
            our advanced CliniQX card.
          </p>
          <Button className="px-6 py-3 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-300 ease-in-out flex items-center space-x-2 shadow-lg rounded-full">
            <span>Get Your Card</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <CliniQXCard className="transition-transform transform hover:scale-105 duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Features;
