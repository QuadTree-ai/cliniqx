"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { fields, FormField } from "./fields"; // Adjust the import path according to your file structure
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSignUpClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
    console.log("Form Data:", formData); // You can handle form submission here
    router.push("/dashboard"); // Navigate to dashboard after signup
  };

  return (
    <div className="flex items-center justify-center py-12 h-full">
      <form onSubmit={handleSignUpClick} className="mx-auto grid w-[350px] gap-6">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        {fields.map((field: FormField) => (
          <div key={field.name} className="grid gap-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            {field.type === "select" ? (
              <Select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
              >
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            ) : field.type === "file" ? (
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                onChange={handleChange}
              />
            ) : (
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
