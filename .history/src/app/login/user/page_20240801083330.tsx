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
    event.preventDefault();  // Prevent the default link behavior
    router.push("/forgetpassword");
  };

  const handleLoginClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();  // Prevent the default form submission behavior
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-wrap">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen bg-black text-white p-12">
        <div className="max-w-lg text-center space-y-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Unify Your Healthcare Experience
          </h2>
          <p className="text-lg">
            Seamlessly integrate hospitals, pharmacies, and clinics to enhance your healthcare experience.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen bg-gray-900 text-white p-12">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <div>
              <Label htmlFor="email" className="block font-semibold text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                required
                className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block font-semibold text-gray-300">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              />
              <a
                href="#"
                onClick={handleForgotPasswordClick}
                className="text-sm text-blue-300 hover:underline block text-right mt-2"
              >
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-lg">
              Login
            </Button>
          </form>
          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <button onClick={handleSignUpClick} className="font-medium text-blue-300 hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}