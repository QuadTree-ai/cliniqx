"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { doctorSignupSchema, initialSignupData, FIELD_NAMES } from "./doconstant"; // Importing constants
import { z } from "zod"; // Ensure zod is imported for error handling
import Logo from "../../logos/cliniqx-invent-logo";

const DoctorRegister = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialSignupData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (!termsAccepted) {
      setError("Please accept the terms and conditions to proceed.");
      setLoading(false);
      return;
    }

    try {
      // Validate form data
      doctorSignupSchema.parse(formData);
      // Simulate registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/doctor/login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors.map(e => e.message).join(", "));
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 rounded-xl shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-bold text-center text-white">Doctor Registration</h2>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={handleRegister} className="space-y-4">
          {Object.entries(FIELD_NAMES).map(([key, value]) => (
            <div key={key}>
              <Label htmlFor={value} className="text-white">{value.replace(/_/g, ' ')}</Label>
              <Input
                id={value}
                name={value}
                type={key === "PASSWORD" ? "password" : "text"}
                required
                value={typeof formData[value] === 'string' ? formData[value] : ''}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          ))}
          <div className="flex items-center">
            <Checkbox
              id={FIELD_NAMES.ACCEPTED_TERMS}
              name={FIELD_NAMES.ACCEPTED_TERMS}
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
              className="mr-2"
            />
            <Label htmlFor={FIELD_NAMES.ACCEPTED_TERMS} className="text-white">
              I accept the terms and conditions
            </Label>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
