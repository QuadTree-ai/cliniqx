// src/app/login/customer/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ServicesConnectionCard from "./Leftside"; // Make sure the import path is correct

export default function Component() {
  const router = useRouter();

  const handleSignUpClick = () => router.push("/signup");
  const handleForgotPasswordClick = () => router.push("/forgetpassword");
  const handleLoginClick = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-wrap">
      <ServicesConnectionCard />
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-900 text-white p-12">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleLoginClick} className="space-y-4">
            <LabelledInput id="email" label="Email" type="email" required />
            <LabelledInput id="password" label="Password" type="password" required helpText="Forgot password?" helpOnClick={handleForgotPasswordClick} />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-lg">
              Log In
            </Button>
          </form>
          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <button onClick={handleSignUpClick} className="text-blue-200 hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

const LabelledInput = ({ id, label, type, required, helpText, helpOnClick }: any) => (
  <div>
    <Label htmlFor={id} className="block font-semibold text-gray-200">{label}</Label>
    <Input
      id={id}
      type={type}
      required={required}
      className="mt-1 w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
    />
    {helpText && (
      <a href="#" onClick={helpOnClick} className="text-sm text-blue-200 hover:underline block text-right mt-2">
        {helpText}
      </a>
    )}
  </div>
);
