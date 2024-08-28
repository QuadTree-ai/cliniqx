import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import Human from '/public/3d.svg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-24">
        <div className="md:w-1/2">
          <h1 className="text-8xl font-bold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-4xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Available on both Android and iOS.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="https://play.google.com/store" passHref>
              <Button className="text-white bg-green-500 hover:bg-green-600 transition-colors duration-200">
                Google Play
              </Button>
            </Link>
            <Link href="https://www.apple.com/app-store/" passHref>
              <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200">
                App Store
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image src={Human} alt="3D Human" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
