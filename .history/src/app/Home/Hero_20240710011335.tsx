import Navbar from "./navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <Navbar />
      <div className="container mx-auto pt-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-4 leading-tight">
          Transform Health
        </h1>
        <h2 className="text-6xl font-semibold text-gray-600 mb-6">
          with advance AI
        </h2>
      </div>
    </section>
  );
};

export default Hero;
