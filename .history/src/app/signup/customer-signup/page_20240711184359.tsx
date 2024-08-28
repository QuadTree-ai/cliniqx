"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "../../Logo";
import Background from "./background";
import InputOTPDemo from "../otp/InputOTP";
import CliniQXCard from '@/app/Home/Features/cliniqxcard'

export default function CustomerSignup() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to create an account.");
      return;
    }
    setShowOTP(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 relative">
      <Background />
      <Card className="w-full max-w-lg p-6 shadow-lg backdrop-blur-lg z-10">
        <form onSubmit={handleSubmit}>
          <CardHeader className="flex flex-col items-center">
            <CliniQXCard className="mb-4" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
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
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="123-456-7890" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={() => setTermsAccepted(!termsAccepted)}
                />
                <Label htmlFor="terms">
                  I accept the{" "}
                  <Link href="#" className="underline">
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-gray-600 hover:bg-black text-white py-2"
              >
                Create an account
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
      <InputOTPDemo isOpen={showOTP} closeModal={() => setShowOTP(false)} />
    </div>
  );
}
