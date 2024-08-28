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
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">Unify Your Healthcare Experience</h2>
        <h1 className="text-3xl font-bold text-center text-gray-900">Login</h1>
        <form onSubmit={handleLoginClick} className="space-y-6">
          <div>
            <Label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm"
            />
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm"
            />
            <a
              href="#"
              onClick={handleForgotPasswordClick}
              className="text-sm text-blue-600 hover:underline block text-right mt-2"
            >
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full py-2 text-lg text-white bg-gradient-to-r from-green-400 to-blue-400 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-500 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Log In
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <button onClick={handleSignUpClick} className="font-semibold text-blue-600 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
