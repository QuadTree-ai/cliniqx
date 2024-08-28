import React from "react";
import Hero from "./(Hero)/page";
import Features from "./(Features)/page";
import Services from "./(Services)/page";
import Testimonials from "./Testimonial";
import Navbar from "./(Navbar)/page";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black relative">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
