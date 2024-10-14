// LoginModal.tsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../../logos/cliniqx-invent-logo";
import InputOTPDemo from "@/app/otp/InputOTP";

const LoginModal = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    console.log("Login with OTP sent to:", phoneNumber);
    // Simulate sending OTP here (additional logic)
    setTimeout(() => { // Simulating async operation like API call
      setOtpSent(true);
      setLoading(false);
    }, 2000);
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
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-12 max-w-md w-full border border-gray-700">
        <div className="flex justify-between items-center mb-12">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-bold text-center text-white">{otpSent ? "Enter OTP" : "Login"}</h2>
        </div>
        <CardContent>
          {otpSent ? (
            <InputOTPDemo isOpen={otpSent} closeModal={() => setOtpSent(false)} cardNumber="1234-5678-9101-1121" />
          ) : (
            <div className="space-y-8">
              <Input
                type="text"
                placeholder="+91 Phone"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                disabled={loading}
                className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                onClick={handleLogin}
                disabled={loading}
                className={`w-full py-4 text-lg font-bold text-white ${loading ? "bg-gray-400" : "bg-gray-500 hover:bg-gradient-to-l"} rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300`}
              >
                {loading ? "Sending..." : "Send One Time Password"}
              </Button>
              <p className="text-center my-8 text-gray-400">— or —</p>
              {/* Removed Continue with Email button */}
              {/* Removed Sign in with Google button */}
              {/* <Button
                onClick={handleEmailLogin}
                className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
              >
                Continue with Email
              </Button>
              <Button
                onClick={handleGoogleLogin}
                className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300"
              >
                Sign in with Google
              </Button> */}
            </div>
          )}
        </CardContent>
        {!otpSent && (
          <p className="text-sm text-center text-white mt-8">
            New to cliniqx-invent?
            <a href="/pharmacy/signup" className="underline text-blue-400 hover:text-blue-500">
              Create account
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
