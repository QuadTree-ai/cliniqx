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
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-4">Unify Your Healthcare Experience</h2>
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h1>
        <form onSubmit={handleLoginClick} className="space-y-8">
          <div>
            <Label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <a
              href="#"
              onClick={handleForgotPasswordClick}
              className="text-sm text-blue-600 hover:underline block text-right mt-2"
            >
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full py-3 text-lg text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            Log In
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button onClick={handleSignUpClick} className="font-semibold text-blue-600 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
