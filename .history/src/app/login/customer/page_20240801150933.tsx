"use client";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Hospital, Store, HousePlus } from 'lucide-react';


export default function Component() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const handleForgotPasswordClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push("/forgetpassword");
  };

  const handleLoginClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-wrap">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-gradient-to-r from-green-300 to-blue-300 text-white">
        <h2 className="text-5xl font-extrabold mb-10 tracking-tight">
          Unify Your Healthcare Experience
        </h2>
        <Card className="relative w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden text-gray-800">
          <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
            <path d="M30,50 Q50,-20 70,50 T110,50 T150,50" stroke="#4A5568" strokeWidth="2" fill="transparent"/>
          </svg>
          <div className="flex justify-around p-8">
            <div className="text-center animate-pulse delay-150">
              <Hospital className="h-12 w-12 text-blue-600 animate-bounce" />
              <p className="text-xl mt-3">Hospital</p>
            </div>
            <div className="text-center animate-pulse delay-300">
              <Store className="h-12 w-12 text-green-600 animate-bounce" />
              <p className="text-xl mt-3">Pharmacy</p>
            </div>
            <div className="text-center animate-pulse delay-450">
              <HousePlus className="h-12 w-12 text-red-600 animate-bounce" />
              <p className="text-xl mt-3">Clinic</p>
            </div>
          </div>
          <p className="text-center p-4">
            Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
          </p>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-800 text-white p-12">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLoginClick} className="space-y-4">
          <div>
            <Label htmlFor="email" className="block font-semibold text-gray-200">Email</Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="password" className="block font-semibold text-gray-200">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
            <a
              href="#"
              onClick={handleForgotPasswordClick}
              className="text-sm text-blue-200 hover:underline block text-right mt-2"
            >
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-400 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-500 transform hover:scale-105 transition duration-300 ease-in-out py-2 rounded text-lg">
            Log In
          </Button>
        </form>
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <button onClick={handleSignUpClick} className="font-medium text-blue-200 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}