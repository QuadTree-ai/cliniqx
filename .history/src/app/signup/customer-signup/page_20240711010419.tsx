"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from '../../Logo';

export default function CustomerSignup() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to create an account.");
      return;
    }
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md p-6 shadow-md">
        <form onSubmit={handleSubmit}>
          <CardHeader className="flex flex-col items-center">
            <Logo className="mb-6" />
            <CardTitle className="text-2xl font-semibold mb-4">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="first-name" className="sr-only">First Name</Label>
                <Input id="first-name" placeholder="First Name" required />
              </div>
              <div>
                <Label htmlFor="last-name" className="sr-only">Last Name</Label>
                <Input id="last-name" placeholder="Last Name" required />
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">Password</Label>
                <Input id="password" type="password" placeholder="Password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={() => setTermsAccepted(!termsAccepted)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I accept the{" "}
                  <Link href="#" className="underline">
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">
                Create an account
              </Button>
              <Button variant="outline" className="w-full py-2">
                Sign up with GitHub
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
