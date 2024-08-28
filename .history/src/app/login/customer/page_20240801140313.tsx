// src/app/login/customer/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ServicesConnectionCard from "./Leftside";

export default function Component() {
  const router = useRouter();

  const handleSignUpClick = () => router.push("/signup");
  const handleForgotPasswordClick = () => router.push("/forgotpassword");
  const handleLoginClick = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-wrap">
      <ServicesConnectionCard />
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-900 text-white p-12">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-center">Customer Login</h1>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <div>
              <Label htmlFor="email" className="block font-semibold text-gray-200">Email</Label>
              <Input id="email" type="email" required className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />
            </div>
            <div>
              <Label htmlFor="password" className="block font-semibold text-gray-200">Password</Label>
              <Input id="password" type="password" required className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />
              <a href="#" onClick={handleForgotPasswordClick} className="text-sm text-blue-200 hover:underline block text-right mt-2">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-lg">
              Log In
            </Button>
          </form>
          <p className="text-center text-sm text-gray-400">
            Don’t have an account? <button onClick={handleSignUpClick} className="text-blue-200 hover:underline">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
