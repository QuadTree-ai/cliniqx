// src/app/Home/Home.tsx

import React from "react";
import Hero from "./(Hero)/page";
import Features from "./(Features)/page";
import Services from "./(Services)/page";
import Footer from "../Footer";
import Navbar from "./(Navbar)/page";
import TextHighlight from "./(Introduction)/page";
import CardsContainer from "./(Problems)/page";
import Launchpad from "./launchpad";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <Hero />
      <CardsContainer/>
      <TextHighlight/>
      <Features />
      <Services />
      <Launchpad/>
      <Footer />
    </div>
  );
};

export default HomePage;
