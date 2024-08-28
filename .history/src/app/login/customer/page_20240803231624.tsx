// src/app/login/customer/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md p-8 space-y-8 shadow-xl rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700">
        <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
          Unify Your Healthcare Experience
        </h2>
        <h1 className="text-2xl font-bold text-center text-white mb-6">Customer Login</h1>
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
          <Button type="submit" className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            Log In
          </Button>
        </form>
        <p className="text-sm text-center text-white mt-6">
          Don’t have an account?{" "}
          <button onClick={handleSignUpClick} className="font-semibold text-blue-400 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
