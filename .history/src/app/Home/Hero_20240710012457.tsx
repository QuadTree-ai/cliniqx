import Navbar from "./navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react"; // Assuming you are using lucide-react for icons

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <Navbar />
      <div className="container mx-auto pt-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-4 leading-tight">
          Transform Health
        </h1>
        <h2 className="text-6xl font-light text-gray-400 mb-6">
          with advanced AI
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 max-w-3xl">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
            <Heart className="w-8 h-8 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-gray-600">
              88% Mavericks improved their mental health with our 12 week program, get started with your personalised program now
            </p>
          </div>
          <Link href="/signup" passHref>
            <Button className="rounded-md py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Try Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
