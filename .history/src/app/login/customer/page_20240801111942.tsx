"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CustomerLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLoginClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Logging in with", email, password);
    router.push("/dashboard");
  };

  const handleSignUpClick = () => {
    router.push("/signup/customer");
  };

  const handleForgotPasswordClick = () => {
    router.push("/forgotpassword");
  };

  return (
    <div className="w-full h-screen flex flex-wrap">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen bg-gradient-to-r from-mediumGreen to-lightGreen text-white p-12">
        <div className="max-w-lg text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Empowering Your Health Decisions
          </h2>
          <p className="text-lg">
            Our platform connects you with a network of hospitals, pharmacies, and clinics to ensure comprehensive and seamless healthcare management.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen bg-deepGreen text-white p-12">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-center">Customer Login</h1>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <div>
              <Label htmlFor="email" className="block font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block font-semibold">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              />
              <a
                href="#"
                onClick={handleForgotPasswordClick}
                className="text-sm hover:underline block text-right mt-2 text-lightGreen"
              >
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-lightGreen hover:bg-mediumGreen py-2 rounded text-lg">
              Log In
            </Button>
          </form>
          <p className="text-center text-sm text-gray-400">
            New here?{" "}
            <button onClick={handleSignUpClick} className="font-medium text-lightGreen hover:underline">
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPage;
