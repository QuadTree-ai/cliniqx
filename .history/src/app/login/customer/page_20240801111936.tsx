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

  const handleLoginClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Logging in with", email, password);
    router.push("/dashboard");
  };

  const handleSignUpClick = () => {
    router.push("/signup/customer");
  };

  const handleForgotPasswordClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    router.push("/forgotpassword");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-mediumGreen to-lightGreen p-12 text-white">
        <div className="max-w-lg text-center space-y-4">
          <h2 className="text-4xl font-bold">Empowering Your Health Decisions</h2>
          <p className="text-lg">
            Our platform connects you with a network of hospitals, pharmacies, and clinics for comprehensive healthcare management.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-deepGreen p-12 text-white">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-center">Customer Login</h1>
          <form onSubmit={handleLoginClick} className="space-y-6">
            <div>
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-lightGreen focus:border-transparent rounded-lg"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-lightGreen focus:border-transparent rounded-lg"
              />
              <a
                href="#"
                onClick={handleForgotPasswordClick}
                className="text-sm hover:underline block text-right mt-2"
              >
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-lightGreen hover:bg-mediumGreen py-2 rounded-lg text-lg font-medium">
              Log In
            </Button>
          </form>
          <p className="text-center text-sm">
            New here?{" "}
            <button onClick={handleSignUpClick} className="font-medium hover:underline">
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPage;
