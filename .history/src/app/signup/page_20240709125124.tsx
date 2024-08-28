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
      <section className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6 relative bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="container mx-auto flex items-center justify-center space-x-8">
          <Card className="relative overflow-hidden w-1/2 max-w-lg transition-transform duration-500 rounded-lg shadow-lg">
            <img
              src="/customer.jpeg"
              alt="I'm a Customer"
              className="w-full h-96 object-cover"
            />
          </Card>
          <div className="flex flex-col items-start space-y-4 max-w-lg">
            <h2 className="text-5xl font-bold text-gray-800 mb-2">
              I'm a Customer
            </h2>
            <p className="text-xl text-gray-600 mb-4">
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
        <div className="absolute bottom-12 w-full text-center">
          <p className="text-xl text-gray-700">
            If you are a business owner or medical professional
          </p>
          <div className="relative w-full h-24 flex items-center justify-center">
            <CurvedArrow from={{ x: 150, y: 0 }} to={{ x: 150, y: 300 }} color="black" width={2} />
          </div>
        </div>
      </section>

      {/* Business Owner/Medical Professional Section */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6">
        <div className="text-center text-4xl font-bold text-gray-800 mb-12">
          Sign up for Medical Business/Medical Professional
        </div>
        <div className="container mx-auto flex items-center justify-center space-x-8">
          {signupOptions.map((option) => (
            <Link href={option.link} key={option.id} passHref>
              <Card className="relative overflow-hidden w-1/2 max-w-lg transition-transform duration-500 rounded-lg shadow-lg cursor-pointer">
                <img
                  src={option.imgSrc}
                  alt={option.title}
                  className="w-full h-96 object-cover"
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
          ))}
        </div>
      </section>
    </div>
  );
}
