import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <div className="container mx-auto pt-24">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Transforming
        </h1>
        <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Health
        </h1>
        <h2 className="text-4xl font-light text-gray-500 mb-6">with advance</h2>
        <h2 className="text-4xl font-light text-gray-500 mb-6">AI</h2>
        <div className="mt-6 flex items-center space-x-4"></div>
      </div>
    </section>
  );
};

export default Hero;