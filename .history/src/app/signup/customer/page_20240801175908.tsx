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
  const [cardNumber, setCardNumber] = useState("00001"); // Maintain a constant card number for the initial card
  const [showBSCard, setShowBSCard] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to create an account.");
      return;
    }
    setShowOTP(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, setName: React.Dispatch<React.SetStateAction<string>>) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setShowBSCard(true);
    } else {
      setShowBSCard(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Card className="w-full max-w-lg p-6 shadow-xl rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700">
        <CardHeader className="flex flex-col items-center">
          {!showBSCard ? (
            <CliniQXCard identifier={cardNumber} setIdentifier={() => {}} className="w-96" />
          ) : (
            <BSCliniQXCard identifier={cardNumber} setIdentifier={setCardNumber} className="w-96" firstName={firstName} lastName={lastName} />
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name" className="text-white">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    value={firstName}
                    onChange={(e) => handleNameChange(e, setFirstName)}
                    required
                    className="bg-transparent text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name" className="text-white">Last Name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    value={lastName}
                    onChange={(e) => handleNameChange(e, setLastName)}
                    required
                    className="bg-transparent text-white"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="bg-transparent text-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <Input
                id="phone"
                type="tel"
                placeholder="123-456-7890"
                required
                className="bg-transparent text-white"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
                id="password"
                type="password"
                required
                className="bg-transparent text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={() => setTermsAccepted(!termsAccepted)}
              className="form-checkbox h-5 w-5 text-black bg-white border-none rounded-md"
            />
            <Label htmlFor="terms" className="text-white">
              I accept the{" "}
              <Link href="#" className="underline text-blue-400">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:bg-gradient-to-l text-white py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Create an account
          </Button>
        </div>
        <div className="mt-4 text-center text-sm text-white">
          Already have an account?{" "}
          <Link href="#" className="underline text-blue-400">
            Sign in
          </Link>
        </div>
      </form>
    </CardContent>
  </Card>
  <InputOTPDemo
    isOpen={showOTP}
    closeModal={() => setShowOTP(false)}
    cardNumber={cardNumber}
  />
</div>