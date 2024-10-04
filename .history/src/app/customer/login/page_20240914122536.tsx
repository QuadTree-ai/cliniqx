// src/app/login/customer/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OTPComponent from "@/components/OTPComponent";

export default function Component() {
  const router = useRouter();
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const handleForgotPasswordClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push("/forgetpassword");
  };

  const handleLoginClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

    if (!email || !password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      // Here you would typically validate the email and password with your backend
      // For this example, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowOTP(true);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerified = () => {
    setShowOTP(false);
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md p-8 space-y-8 shadow-xl rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700">
        <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
          Unify Your Healthcare Experience
        </h2>
        <h1 className="text-2xl font-bold text-center text-white mb-6">Customer Login</h1>
        {error && (
          <div className="bg-red-500 bg-opacity-75 text-white p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleLoginClick} className="space-y-8">
          <div>
            <Label htmlFor="email" className="block text-sm font-semibold text-white">Email</Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-semibold text-white">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <a
              href="#"
              onClick={handleForgotPasswordClick}
              className="text-sm text-blue-400 hover:underline block text-right mt-2"
            >
              Forgot password?
            </a>
          </div>
          <Button 
            type="submit" 
            className="w-full py-3 text-lg font-bold text-white bg-black shadow-lg hover:bg-gradient-to-r from-gray-500 to-blue-500 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
        <p className="text-sm text-center text-white mt-6">
          Don't have an account?{" "}
          <button onClick={handleSignUpClick} className="font-semibold text-blue-400 hover:underline">
            Sign up
          </button>
        </p>
      </div>
      {showOTP && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <OTPComponent
              phoneNumber={phoneNumber}
              onOTPVerified={handleOTPVerified}
              onClose={() => setShowOTP(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
