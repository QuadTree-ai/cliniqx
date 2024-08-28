// CustomerSignup component

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

export default function CustomerSignup() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("00001");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-700 relative">
      <Background />
      <Card className="w-full max-w-lg p-6 shadow-lg backdrop-blur-lg z-10">
        <CardHeader className="flex flex-col items-center">
          {!showBSCard ? (
            <CliniQXCard identifier={cardNumber} setIdentifier={() => {}} className="w-96" />
          ) : (
            <BSCliniQXCard identifier={cardNumber} setIdentifier={setCardNumber} className="w-96" firstName={firstName} lastName={lastName} />
          )}
        </CardHeader>
        <CardContent>
          {/* Form and other component details */}
        </CardContent>
      </Card>
      <InputOTPDemo isOpen={showOTP} closeModal={() => setShowOTP(false)} cardNumber={cardNumber} />
    </div>
  );
}
