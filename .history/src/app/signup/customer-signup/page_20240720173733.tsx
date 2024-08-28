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
import CliniQXCard from "@/app/Home/(Features)/cliniqxcard";
import BSCliniQXCard from "@/app/Home/(Features)/bscliniqxcard";
import { v4 as uuidv4 } from 'uuid';

export default function CustomerSignup() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState(generateAlphanumeric());
  const [showBSCard, setShowBSCard] = useState(false);

  function generateAlphanumeric() {
    return uuidv4().replace(/[^a-zA-Z0-9]/g, '').slice(0, 8);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to create an account.");
      return;
    }
    setShowOTP(true);
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setShowBSCard(true);
    } else {
      setShowBSCard(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 relative">
      <Background />
      <Card className="w-full max-w-lg p-6 shadow-lg backdrop-blur-lg z-10">
        <CardHeader className="flex flex-col items-center">
          <div className={`card-container ${showBSCard ? "flip" : ""}`}>
            <div className="card-front">
              <CliniQXCard
                identifier={cardNumber}
                className="w-96"
              />
            </div>
            <div className="card-back">
              <BSCliniQXCard
                identifier={cardNumber}
                className="w-96"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    value={firstName}
                    onChange={(e) => handleNameChange(e, setFirstName)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    value={lastName}
                    onChange={(e) => handleNameChange(e, setLastName)}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  required
                />
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
          </form>
        </CardContent>
      </Card>
      <InputOTPDemo
        isOpen={showOTP}
        closeModal={() => setShowOTP(false)}
        cardNumber={cardNumber}
      />
      <style jsx>{`
        .card-container {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }
        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          transition: transform 0.6s ease-in-out;
        }
        .card-front {
          transform: rotateY(0deg);
        }
        .card-back {
          transform: rotateY(180deg);
        }
        .flip .card-front {
          transform: rotateY(-180deg);
        }
        .flip .card-back {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
}
