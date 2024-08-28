import { Button } from "@/components/ui/button";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <div className="container mx-auto pt-24">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Transform Health
        </h1>
        <h2 className="text-4xl font-light text-gray-500 mb-6">
          with advance AI
        </h2>
        <div className="mt-6 flex items-center space-x-4">
          <Link href="https://play.google.com/store" passHref>
            <Button className="text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2">
              <AiFillAndroid className="w-6 h-6" />
              <span>Google Play</span>
            </Button>
          </Link>
          <Link href="https://www.apple.com/app-store/" passHref>
            <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
              <FaApple className="w-6 h-6" />
              <span>App Store</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
