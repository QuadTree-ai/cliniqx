import React from "react";
import Hero from "./(Hero)/page";
import Features from "./(Features)/page";
import Services from "./(Services)/page";
import Testimonials from "./Testimonial";
import Navbar from "./(Navbar)/page";

const HomePage = () => {
  return (
    <div className="from-gray-900 to-black bg-grid-small-black/[0.1] relative">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
