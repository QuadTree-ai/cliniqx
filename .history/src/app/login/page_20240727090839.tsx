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
    <div className="w-full h-screen flex flex-wrap content-center">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen bg-black text-white px-10">
        <div className="max-w-md text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Unify Your Healthcare Experience
          </h2>
          <p className="text-lg mt-4">
            Streamline how you interact with hospitals, pharmacies, and clinics—all in one platform.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen bg-gray-900 text-white px-10">
        <div className="max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-400">
              Access your integrated healthcare account.
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
                className="mt-1 w-full p-2 border border-gray-500 rounded"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <Label htmlFor="password" className="font-semibold">Password</Label>
                <a
                  href="#"
                  onClick={handleForgotPasswordClick}
                  className="text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="mt-1 w-full p-2 border border-gray-500 rounded"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded">
              Login
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don’t have an account?{" "}
            <button onClick={handleSignUpClick} className="font-medium hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}