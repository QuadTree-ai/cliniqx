/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { signupOptions } from "./signupOptions";
import { User } from "lucide-react";

export default function MainSignup() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <Link href="/customer-signup" passHref>
            <Button className="rounded-md py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <User className="w-6 h-6" />
              <span>I'm a Customer</span>
            </Button>
          </Link>
        </div>
      </nav>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto py-24 flex items-center justify-center space-x-6">
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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {option.title}
                  </h2>
                </div>
                <p className="text-sm text-white mb-4">{option.description}</p>
                <Link href={option.link} passHref>
                  <Button className="rounded-md py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                    <option.Icon className="w-6 h-6 text-white" />
                    <span>{option.signupText}</span>
                  </Button>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 opacity-25 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
