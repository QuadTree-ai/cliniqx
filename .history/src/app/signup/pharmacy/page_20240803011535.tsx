"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { fields, FormField } from "./fields";
import Logo from "../../Logo"; // Adjust the import path according to your file structure

type FormData = {
  [key: string]: any;
};

export default function PharmacySignup() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "file" ? files?.[0] : value,
    });
  };

  const handleCheckboxGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const selectedValues = formData[name] || [];
    if (checked) {
      setFormData({
        ...formData,
        [name]: [...selectedValues, value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: selectedValues.filter((item: string) => item !== value),
      });
    }
  };

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSignUpClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form Data:", formData);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-4xl w-full border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-bold text-center text-white">
            Medical Store Signup
          </h2>
        </div>
        <p className="text-center text-white mb-6">
          Join our platform to enhance your medical store or pharmacy business.
          Fill out the form below to get started.
        </p>
        <form
          onSubmit={handleSignUpClick}
          className="grid gap-6 grid-cols-1 md:grid-cols-2"
        >
          {fields.map((field: FormField) => (
            <div key={field.name} className="col-span-1">
              <Label htmlFor={field.name} className="block text-sm font-semibold text-white">
                {field.label}
              </Label>
              {field.type === "select" ? (
                <Select
                  value={formData[field.name] || ""}
                  onValueChange={(value) =>
                    setFormData({ ...formData, [field.name]: value })
                  }
                  required={field.required}
                >
                  <SelectTrigger className="mt-1 w-full border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <SelectValue placeholder={`Select ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{field.label}</SelectLabel>
                      {field.options?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : field.type === "file" ? (
                <Input
                  id={field.name}
                  name={field.name}
                  type="file"
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : field.type === "checkboxGroup" ? (
                field.options?.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${field.name}-${option}`}
                      name={field.name}
                      value={option}
                      onCheckedChange={(checked) =>
                        handleCheckboxGroupChange({
                          target: { name: field.name, value: option, checked },
                        } as ChangeEvent<HTMLInputElement>)
                      }
                    />
                    <Label htmlFor={`${field.name}-${option}`} className="text-white">
                      {option}
                    </Label>
                  </div>
                ))
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}
            </div>
          ))}
          <div className="flex items-center col-span-1 md:col-span-2">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={handleTermsChange}
              className="border-gray-300 rounded-md"
            />
            <Label htmlFor="terms" className="ml-2 text-white">
              I accept the{" "}
              <a href="/terms" className="underline text-blue-400">
                terms and conditions
              </a>
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 col-span-1 md:col-span-2"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
