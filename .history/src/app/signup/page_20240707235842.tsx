"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming you have a Checkbox component
import { fields, FormField } from "./fields"; // Adjust the import path according to your file structure

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSignUpClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form Data:", formData); // You can handle form submission here
    router.push("/dashboard"); // Navigate to dashboard after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Join our platform to enhance your medical store or pharmacy business. Fill out the form below to get started.
        </p>
        <form onSubmit={handleSignUpClick} className="grid gap-4">
          {fields.map((field: FormField) => (
            <div key={field.name} className="grid gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "select" ? (
                <Select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="border-gray-300 rounded-md"
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  onChange={handleChange}
                  className="border-gray-300 rounded-md"
                />
              )}
            </div>
          ))}
          <div className="flex items-center">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onChange={handleCheckboxChange}
              className="border-gray-300 rounded-md"
            />
            <Label htmlFor="terms" className="ml-2">
              I accept the <a href="/terms" className="underline text-blue-600">terms and conditions</a>
            </Label>
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white rounded-md py-2 mt-4">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
