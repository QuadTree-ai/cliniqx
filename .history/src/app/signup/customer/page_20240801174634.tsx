// src/app/login/customer/CustomerSignup.tsx
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
import { formFields } from "./Formconstant"; // Importing form constants

export default function CustomerSignup() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("00001");

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
    setShowBSCard(e.target.value.trim() !== "");
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
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                {['firstName', 'lastName'].map(field => (
                  <div key={field} className="grid gap-2">
                    <Label htmlFor={formFields[field].id}>{formFields[field].label}</Label>
                    <Input
                      id={formFields[field].id}
                      placeholder={formFields[field].placeholder}
                      value={field === 'firstName' ? firstName : lastName}
                      onChange={(e) => handleNameChange(e, field === 'firstName' ? setFirstName : setLastName)}
                      required
                    />
                  </div>
                ))}
              </div>
              {['email', 'phone', 'password'].map(field => (
                <div key={field} className="grid gap-2">
                  <Label htmlFor={formFields[field].id}>{formFields[field].label}</Label>
                  <Input
                    id={formFields[field].id}
                    type={formFields[field].type}
                    placeholder={formFields[field].placeholder}
                    required
                  />
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Checkbox
                  id={formFields.terms.id}
                  checked={termsAccepted}
                  onCheckedChange={() => setTermsAccepted(!termsAccepted)}
                />
                <Label htmlFor={formFields.terms.id}>
                  {formFields.terms.label}
                  <Link href="#" className="underline">
                    {formFields.terms.linkLabel}
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-gray-600 hover:bg-black text-white py-2">
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
    </div>
  );
}
