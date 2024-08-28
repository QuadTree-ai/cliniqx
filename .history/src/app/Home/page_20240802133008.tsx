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
    <div className="bg-gradient-to-br from-gray-900 to-black bg-grid-small/[0.2] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TextRevealCardPreview />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
