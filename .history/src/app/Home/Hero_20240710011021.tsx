import Navbar from "./navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <Navbar />
      <div className="container mx-auto pt-24">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Transform your Health
        </h1>
        <h2 className="text-4xl font-light text-gray-600 mb-6">
          with advance AI
        </h2>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-lg text-gray-600">
          Join thousands of healthcare providers using CliniQX
        </p>
      </div>
    </section>
  );
};

export default Hero;
