"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../logos/cliniqx-invent-logo";

const LoginModal = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    console.log("Login with OTP sent to:", phoneNumber);
  };

  const handleEmailLogin = () => {
    router.push("/pharmacy/login/email");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google initiated");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg max-w-md w-full space-y-6 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500">Access your account</p>
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="text"
                placeholder="+91 Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={handleLogin}
            >
              Send One Time Password
            </button>
          </div>
          <p className="text-center my-6 text-gray-400">— or —</p>
          <div className="space-y-4">
            <button
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200"
              onClick={handleEmailLogin}
            >
              Continue with Email
            </button>
            <button
              className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-200"
              onClick={handleGoogleLogin}
            >
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="text-sm text-center">
          New to cliniqx-invent? <a href="/pharmacy/signup" className="text-blue-500 underline hover:text-blue-600">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
