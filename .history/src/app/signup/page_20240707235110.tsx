"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select"; // Assuming you have a Select component
import { useRouter } from "next/navigation";
import { fields, FormField } from "./fields"; // Adjust the import path according to your file structure

export default function Signup() {
  const router = useRouter();

  const handleSignUpClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    router.push("/dashboard"); // Navigate to dashboard after signup
  };

  return (
    <div className="flex items-center justify-center py-12 h-full">
      <form onSubmit={handleSignUpClick} className="mx-auto grid w-[350px] gap-6">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        {fields.map((field: FormField) => {
          return (
            <div key={field.name} className="grid gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "select" ? (
                <Select id={field.name} required={field.required}>
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
                />
              )}
            </div>
          );
        })}
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
