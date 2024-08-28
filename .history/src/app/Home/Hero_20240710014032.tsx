import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <div className="container mx-auto pt-24">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Transform Health
        </h1>
        <h2 className="text-4xl font-light text-gray-500 mb-6">
          with Advanced AI
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Experience seamless integration and enhanced patient care.
        </p>
        <Link href="/signup" passHref>
          <Button className="rounded-md py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
        <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-md backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-green-500 rounded-full mr-4">
                {/* Replace with an appropriate icon */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-lg text-gray-800">
                88% Mavericks improved their mental health with our 12 week program, get started with your personalized program now.
              </p>
            </div>
            <Link href="/signup" passHref>
              <Button className="rounded-md py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                Try Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
