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
    event.preventDefault(); // Prevent the default link behavior
    router.push("/forgetpassword");
  };

  const handleLoginClick = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent the default form submission behavior
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2 relative">
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300 p-12 text-white">
        <div className="space-y-4 max-w-lg text-center">
          <h2 className="text-4xl font-bold">Empowering Your Decisions</h2>
          <p className="text-lg">
            Join us and experience innovative solutions designed to enhance your daily decisions. From data analytics to personalized insights, we ensure you stay ahead.
          </p>
          <p className="text-lg">
            Our platform offers a comprehensive suite of tools that help you manage everything from finances to daily operations. Let us help you unlock your potential.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 h-full">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <form onSubmit={handleLoginClick} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    onClick={handleForgotPasswordClick}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <button onClick={handleSignUpClick} className="underline">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}