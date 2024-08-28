// src/app/Home/Home.tsx

import React from "react";
import Hero from "./(Hero)/page";
import Features from "./(Features)/page";
import Services from "./(Services)/page";
import Testimonials from "./Testimonial";
import Navbar from "./(Navbar)/page";
import TextRevealCardPreview from "./Revealcard";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <TextRevealCardPreview />
      <Features />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
