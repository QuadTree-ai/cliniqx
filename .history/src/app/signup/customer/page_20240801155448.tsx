// src/app/signup/customer/CustomerSignup.tsx
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
import CliniQXCard from "@/app/Home/(Features)/cliniqxcard"; // Adjust the path as necessary
import BSCliniQXCard from "@/app/Home/(Features)/bscliniqxcard"; // Adjust the path as necessary
import { formFields, FormFieldKey } from "./Formconstant"; // Adjust the path as necessary

interface FormFieldProps {
  fieldKey: FormFieldKey;
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  fieldKey,
  value,
  handleInputChange,
}) => {
  const field = formFields[fieldKey];
  return (
    <div className="grid gap-2">
      <Label htmlFor={field.id}>{field.label}</Label>
      <Input
        id={field.id}
        name={field.id}
        type={field.type || "text"}
        placeholder={field.placeholder}
        value={value}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default function CustomerSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [cardNumber, setCardNumber] = useState("00001");
  const [showBSCard, setShowBSCard] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to create an account.");
      return;
    }
    setShowOTP(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setShowBSCard(
      ["first-name", "last-name"].includes(name) && value.trim() !== ""
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Background />
      <Card className="w-full max-w-lg p-6 shadow-xl rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700">
        <CardHeader className="flex flex-col items-center">
          {!showBSCard ? (
            <CliniQXCard
              identifier={cardNumber}
              setIdentifier={() => {}}
              className="w-96"
            />
          ) : (
            <BSCliniQXCard
              identifier={cardNumber}
              setIdentifier={setCardNumber}
              className="w-96"
              firstName={formData.firstName}
              lastName={formData.lastName}
            />
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {["firstName", "lastName", "email", "phone", "password"].map(
                (key) => (
                  <FormField
                    key={key}
                    fieldKey={key as FormFieldKey}
                    value={formData[key]}
                    handleInputChange={handleInputChange}
                  />
                )
              )}
              <div className="flex items-center gap-2">
                <Checkbox
                  id={formFields.terms.id}
                  checked={termsAccepted}
                  onCheckedChange={() => setTermsAccepted(!termsAccepted)}
                />
                <Label htmlFor={formFields.terms.id}>
                  {formFields.terms.label}
                  <Link href="#" className="underline text-blue-400">
                    {formFields.terms.linkLabel}
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
            <div className="mt-4 text-center text-sm">
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
  );
}
