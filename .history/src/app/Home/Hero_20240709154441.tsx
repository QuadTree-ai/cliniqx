/* Hero.tsx */
import Navbar from "./navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12">
      <Navbar />
      <div className="container mx-auto text-center pt-24">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Welcome to CliniQX
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Revolutionizing Healthcare with Advanced EHR Solutions
        </p>
        <Link href="/signup" passHref>
          <Button className="rounded-md py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;