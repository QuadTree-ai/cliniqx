// LoginModal.js

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";  // Correct the import path for router
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../../logos/cliniqx-invent-logo"; // Adjust the import path according to your file structure

const LoginModal = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    console.log("Login with OTP sent to:", phoneNumber);
    // Additional logic for handling OTP
  };

  const handleEmailLogin = () => {
    router.push("/pharmacy/login/email");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google initiated");
    // Integration with Google Auth API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-md w-full border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        </div>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="+91 Phone"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              onClick={handleLogin}
              className="w-full py-3 text-lg font-bold text-white bg-neutral-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Send One Time Password
            </Button>
            <p className="text-center my-6 text-gray-400">— or —</p>
            <Button
              onClick={handleEmailLogin}
              className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
            >
              Continue with Email
            </Button>
            <Button
              onClick={handleGoogleLogin}
              className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300"
            >
              Sign in with Google
            </Button>
          </div>
        </CardContent>
        <p className="text-sm text-center text-white">
          New to cliniqx-invent? 
          <a href="/pharmacy/signup" className="underline text-blue-400 hover:text-blue-500">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
