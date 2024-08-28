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
import BSCliniQXCard from "@/app/Home/(Features)/bscliniqxcard";

export default function CustomerSignup() {
  const [state, setState] = useState({
    termsAccepted: false,
    showOTP: false,
    firstName: "",
    lastName: "",
    cardNumber: "00001", // Maintain a constant card number for the initial card
    showBSCard: false
  });

  const handleInputChange = (field) => (event) => {
    const { value } = event.target;
    setState(prevState => ({
      ...prevState,
      [field]: value,
      showBSCard: field === 'firstName' || field === 'lastName' ? value.trim() !== "" : prevState.showBSCard
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.termsAccepted) {
      alert("You must accept the terms and conditions to create an account.");
      return;
    }
    setState(prev => ({ ...prev, showOTP: true }));
  };

  const toggleTermsAccepted = () => setState(prev => ({ ...prev, termsAccepted: !prev.termsAccepted }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 relative">
      <Background />
      <Card className="w-full max-w-lg p-6 shadow-lg backdrop-blur-lg z-10">
        <CardHeader className="flex flex-col items-center">
          {!state.showBSCard ? (
            <CliniQXCard identifier={state.cardNumber} setIdentifier={() => {}} className="w-96" />
          ) : (
            <BSCliniQXCard identifier={state.cardNumber} setIdentifier={() => setState(prev => ({ ...prev, cardNumber: prev.cardNumber }))} className="w-96" firstName={state.firstName} lastName={state.lastName} />
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                {['first-name', 'last-name'].map((id, index) => (
                  <div key={id} className="grid gap-2">
                    <Label htmlFor={id}>{index === 0 ? 'First Name' : 'Last Name'}</Label>
                    <Input
                      id={id}
                      placeholder={index === 0 ? "Max" : "Robinson"}
                      value={index === 0 ? state.firstName : state.lastName}
                      onChange={handleInputChange(index === 0 ? 'firstName' : 'lastName')}
                      required
                    />
                  </div>
                ))}
              </div>
              {['email', 'phone'].map((type, index) => (
                <div key={type} className="grid gap-2">
                  <Label htmlFor={type}>{index === 0 ? 'Email' : 'Phone Number'}</Label>
                  <Input id={type} type={index === 0 ? 'email' : 'tel'} placeholder={index === 0 ? 'm@example.com' : '123-456-7890'} required />
                </div>
              ))}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={state.termsAccepted}
                  onCheckedChange={toggleTermsAccepted}
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
      <InputOTPDemo isOpen={state.showOTP} closeModal={() => setState(prev => ({ ...prev, showOTP: false }))} cardNumber={state.cardNumber} />
    </div>
  );
}
