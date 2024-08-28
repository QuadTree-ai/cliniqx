"use client";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";

export default function Component() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const handleForgotPasswordClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();  // Prevent the default link behavior
    router.push("/forgetpassword");
  };

  const handleLoginClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();  // Prevent the default form submission behavior
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2 relative">
      <div className="hidden lg:flex items-center justify-center bg-black p-12 text-white">
        <div className="space-y-4 max-w-lg text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Connecting Healthcare
          </h2>
          <p className="text-lg">
            Creating a connected platform that seamlessly integrates Hospitals, Pharmacies, and Clinics to enhance your healthcare experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 h-full bg-gray-900">
        <div className="mx-auto w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-600">
              Enter your email and password below to access your account.
            </p>
          </div>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <div>
              <Label htmlFor="email" className="font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <Label htmlFor="password" className="font-semibold">Password</Label>
                <a
                  href="#"
                  onClick={handleForgotPasswordClick}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
              Login
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button onClick={handleSignUpClick} className="font-medium text-blue-500 hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}