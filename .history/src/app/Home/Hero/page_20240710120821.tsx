import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import Human from '/public/3d.svg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start justify-center py-12 bg-gray-50 relative px-8">
      <div className="container mx-auto pt-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-8xl font-bold text-gray-800 mb-4 leading-tight">
            Transforming
          </h1>
          <h1 className="text-8xl font-bold text-gray-800 mb-4 leading-tight">
            Healthcare
          </h1>
          <h2 className="text-4xl font-light text-gray-500 mb-6">with advance AI</h2>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image src={Human} alt="3D Human" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
