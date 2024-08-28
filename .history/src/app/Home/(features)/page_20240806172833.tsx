/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CliniQXCard from './cliniqxcard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <section id="Features" className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-500 mb-4 uppercase">Introducing</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
            India's first healthcare card
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">
            Experience seamless healthcare transactions and data sharing with our advanced CliniQX card.
          </p>
          <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
            <span>Get Your Card</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="w-full md:w-1/2 p-8 flex justify-center">
          <CliniQXCard />
        </div>
      </div>
    </section>
  );
};

export default Features;
