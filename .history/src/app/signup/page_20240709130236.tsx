/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { signupOptions } from "./signupOptions";
import { User, ArrowDown } from "lucide-react";

export default function MainSignup() {
  return (
    <div className="min-h-screen bg-white relative">
      <nav className="bg-white fixed w-full z-10 top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      {/* Customer Section */}
      <section id="customer-section" className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6 relative">
        <div className="container mx-auto flex items-center justify-center space-x-12">
          <Card className="relative overflow-hidden w-1/2 max-w-2xl transition-transform duration-500 rounded-lg shadow-lg">
            <img
              src="/customer.jpeg"
              alt="I'm a Customer"
              className="w-full h-96 object-cover"
            />
          </Card>
          <div className="flex flex-col items-start space-y-4 max-w-lg">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              I'm a Customer
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join as a customer to access personalized services and exclusive offers.
            </p>
            <Link href="/customer-signup" passHref>
              <Button className="rounded-md py-3 px-8 text-white bg-gray-900 hover:bg-black transition-colors duration-200 flex items-center space-x-2">
                <User className="w-6 h-6 text-white" />
                <span>Customer Signup</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 w-full text-center">
          <p className="text-xl text-gray-700 mb-4">
            If you are a business owner or medical professional
          </p>
          <a href="#business-section" className="flex justify-center">
            <ArrowDown className="w-10 h-10 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
          </a>
        </div>
      </section>

      {/* Business Owner/Medical Professional Section */}
      <section id="business-section" className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6">
        <div className="text-center text-4xl font-bold text-gray-800 mb-12">
          Sign up for Medical Business/Medical Professional
        </div>
        <div className="container mx-auto flex items-center justify-center space-x-12">
          {signupOptions.map((option) => (
            <div key={option.id} className="flex flex-col items-center space-y-4 w-1/3 max-w-lg">
              <Link href={option.link} passHref>
                <Card className="relative overflow-hidden w-full h-96 max-w-3xl transition-transform duration-500 rounded-lg shadow-lg cursor-pointer">
                  <img
                    src={option.imgSrc}
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="flex flex-col items-start space-y-2">
                      <h2 className="text-3xl font-bold text-white">
                        {option.title}
                      </h2>
                      <p className="text-base text-white">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 opacity-30 pointer-events-none"></div>
                </Card>
              </Link>
              <Link href={option.link} passHref>
                <Button className="rounded-md py-3 px-8 text-white bg-gray-900 hover:bg-black transition-colors duration-200 flex items-center space-x-2">
                  <option.Icon className="w-6 h-6 text-white" />
                  <span>{option.signupText}</span>
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
