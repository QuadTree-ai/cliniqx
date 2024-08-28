/* eslint-disable @next/next/no-img-element */
import Navbar from "./navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <Navbar />
      <div className="container mx-auto pt-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-4 leading-tight">
          Transform Health
        </h2>
        <h2 className="text-6xl font-light text-gray-400 mb-6">
          with advanced AI
        </h2>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
            <CheckCircle className="text-white w-8 h-8" />
          </div>
          <p className="text-lg text-gray-800 flex-grow">
            88% Mavericks improved their mental health with our 12-week program, get started with your personalised program now.
          </p>
          <Link href="/signup" passHref>
            <Button className="rounded-md py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Try Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
