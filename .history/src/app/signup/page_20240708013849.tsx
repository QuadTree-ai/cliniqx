"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectOption } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { fields, FormField } from "./fields"; 

type FormData = {
  [key: string]: any;
};

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files?.[0] : value,
    });
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSignUpClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form Data:", formData);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Join our platform to enhance your medical store or pharmacy business.
          Fill out the form below to get started.
        </p>
        <form onSubmit={handleSignUpClick} className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {fields.map((field: FormField) => (
            <div key={field.name} className="grid gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "select" ? (
                <Select
                  value={formData[field.name] || ""}
                  onValueChange={(value) => setFormData({ ...formData, [field.name]: value })}
                  required={field.required}
                >
                  <SelectTrigger className="border-gray-300 rounded-md" />
                  <SelectContent>
                    {field.options?.map((option) => (
                      <SelectOption key={option} value={option}>
                        {option}
                      </SelectOption>
                    ))}
                  </SelectContent>
                </Select>
              ) : field.type === "file" ? (
                <Input
                  id={field.name}
                  name={field.name}
                  type="file"
                  required={field.required}
                  onChange={handleChange}
                  className="border-gray-300 rounded-md"
                />
              ) : field.type === "checkboxGroup" ? (
                field.options?.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${field.name}-${option}`}
                      name={field.name}
                      value={option}
                      onChange={handleChange}
                    />
                    <Label htmlFor={`${field.name}-${option}`}>{option}</Label>
                  </div>
                ))
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
          <div className="flex items-center col-span-1 md:col-span-2">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onChange={handleCheckboxChange}
              className="border-gray-300 rounded-md"
            />
            <Label htmlFor="terms" className="ml-2">
              I accept the{" "}
              <a href="/terms" className="underline">
                terms and conditions
              </a>
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 mt-4 col-span-1 md:col-span-2"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
