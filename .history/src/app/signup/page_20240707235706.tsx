"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { fields, FormField } from "./fields"; // Adjust the import path according to your file structure

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign Up for CliniQX</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join our system to manage your medical store or pharmacy efficiently. Fill in the details below to create your account.
          </p>
        </div>
        <form onSubmit={handleSignUpClick} className="mt-8 space-y-6">
          {fields.map((field: FormField) => (
            <div key={field.name}>
              <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</Label>
              {field.type === "select" ? (
                <Select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              )}
            </div>
          ))}
          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700">
              Sign Up
            </Button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
