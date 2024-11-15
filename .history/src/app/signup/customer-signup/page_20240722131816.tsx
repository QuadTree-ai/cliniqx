"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Background from "./background";
import InputOTPDemo from "../otp/InputOTP";
import CliniQXCard from "@/app/Home/(Features)/cliniqxcard"; // Initial card
import BSCliniQXCard from "@/app/Home/(Features)/bscliniqxcard"; // Card to show after name input

export default function CustomerSignup() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("00001");
  const [showBSCard, setShowBSCard] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, setName: React.Dispatch<React.SetStateAction<string>>) => {
    setName(e.target.value);
    setShowBSCard(e.target.value.trim() !== "");
  };

  const fullName = `${firstName} ${lastName}`.trim();

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
        <CardHeader className="flex flex-col items-center">
          {showBSCard ? (
            <BSCliniQXCard identifier={cardNumber} setIdentifier={setCardNumber} className="w-96" name={fullName} />
          ) : (
            <CliniQXCard identifier={cardNumber} className="w-96" />
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Max" value={firstName} onChange={(e) => handleNameChange(e, setFirstName)} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Robinson" value={lastName} onChange={(e) => handleNameChange(e, setLastName)} required />
                </div>
              </div>
              <Input id="email" label="Email" type="email" required placeholder="m@example.com" />
              <Input id="phone" label="Phone Number" type="tel" required placeholder="123-456-7890" />
              <Input id="password" label="Password" type="password" required />
              <Checkbox label="I accept the terms and conditions" link="terms and conditions" checked={termsAccepted} onCheckedChange={setTermsAccepted} />
              <Button type="submit" className="mt-4 w-full bg-gray-600 hover:bg-black text-white py-2">Create an account</Button>
              <div className="mt-4 text-center text-sm">
                Already have an account? <Link href="#" className="underline">Sign in</Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <InputOTPDemo isOpen={showOTP} closeModal={() => setShowOTP(false)} cardNumber={cardNumber} />
    </div>
  );
}
