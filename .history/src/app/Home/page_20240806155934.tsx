// src/app/Home/Home.tsx

import React from "react";
import Hero from "./(Hero)/page";
import Features from "./(Features)/page";
import Services from "./(Services)/page";
import Testimonials from "./Testimonial";
import Navbar from "./(Navbar)/page";
import TextHighlight from "./(Introduction)/page";
import CardsContainer from "./(Problems)/page";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <Hero />
      <TextHighlight/>
      <CardsContainer/>
      <Features />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
