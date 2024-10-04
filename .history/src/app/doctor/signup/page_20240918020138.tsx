"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { doctorSignupSchema, initialSignupData, FIELD_NAMES } from "./doconstant"; // Importing constants

const DoctorRegister = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialSignupData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    try {
      doctorSignupSchema.parse(formData); // Validate form data
      // Simulate registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/doctor/login");
    } catch (err) {
      setError(err.errors ? err.errors[0].message : "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center text-white">Doctor Registration</h1>
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
                value={formData[value]}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          ))}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
