"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../logos/cliniqx-invent-logo";

const LoginModal = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    // Logic to handle login
    console.log("Login with OTP sent to:", phoneNumber);
  };

  const handleEmailLogin = () => {
    // Redirect to email login
    router.push("/pharmacy/login/email");
  };

  const handleGoogleLogin = () => {
    // Logic for Google Login
    console.log("Login with Google initiated");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="text-sm text-gray-600">Access your account</p>
        </div>
        <div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="+91 Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleLogin}
            >
              Send One Time Password
            </button>
          </div>
          <div className="text-center my-4">or</div>
          <div className="space-y-2">
            <button
              className="w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-100"
              onClick={handleEmailLogin}
            >
              Continue with Email
            </button>
            <button
              className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={handleGoogleLogin}
            >
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="text-sm text-center">
          New to cliniqx-invent? <a href="/pharmacy/signup" className="text-blue-500 underline">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
