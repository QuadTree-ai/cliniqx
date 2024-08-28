/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { signupOptions } from "./signupOptions";
import { User } from "lucide-react";
import { CurvedArrow } from './curvedarrow';

export default function MainSignup() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      {/* Customer Section */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6 relative">
        <div className="container mx-auto flex items-center justify-center space-x-6">
          <Card className="relative overflow-hidden w-1/3 transition-all duration-300 rounded-lg shadow-lg">
            <img
              src="/customer.jpeg"
              alt="I'm a Customer"
              className="w-full h-80 object-cover"
            />
          </Card>
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              I'm a Customer
            </h2>
            <p className="text-base text-gray-600 mb-4">
              Join as a customer to access personalized services and exclusive offers.
            </p>
            <Link href="/customer-signup" passHref>
              <Button className="rounded-md py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                <User className="w-6 h-6 text-white" />
                <span>Customer Signup</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 w-2/3 bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-xl text-gray-700">
            If you are a business owner or medical professional
          </p>
        </div>
        <div className="absolute w-full h-24 flex items-center justify-center">
          <CurvedArrow from={{ x: 50, y: 50 }} to={{ x: 50, y: 300 }} color="black" width={2} />
        </div>
      </section>

      {/* Business Owner/Medical Professional Section */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6">
        <div className="container mx-auto flex items-center justify-center space-x-6">
          {signupOptions.map((option) => (
            <Card
              key={option.id}
              className="relative overflow-hidden w-1/3 transition-all duration-300 rounded-lg shadow-lg"
            >
              <img
                src={option.imgSrc}
                alt={option.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {option.title}
                  </h2>
                </div>
                <p className="text-base text-white mb-4">{option.description}</p>
                <Link href={option.link} passHref>
                  <Button className="rounded-md py-3 px-8 text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200 flex items-center space-x-2">
                    <option.Icon className="w-6 h-6 text-white" />
                    <span>{option.signupText}</span>
                  </Button>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 opacity-25 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
