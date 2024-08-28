import Navbar from "./navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-50 relative">
      <Navbar />
      <div className="container mx-auto text-center pt-24">
        <h1 className="text-8xl font-bold text-gray-800 mb-4 leading-tight">
          Transforming Healthcare
        </h1>
        <h2 className="text-6xl font-light text-gray-600 mb-6">
          with Advanced EHR Solutions
        </h2>
        <Link href="/signup" passHref>
          <Button className="rounded-md py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <p className="text-xl text-gray-600">
          Join thousands of healthcare providers using CliniQX
        </p>
      </div>
    </section>
  );
};

export default Hero;
