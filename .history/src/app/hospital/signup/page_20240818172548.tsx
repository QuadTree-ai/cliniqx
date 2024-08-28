"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import { Button } from "@/components/ui/button";
import { HospitalFormFields } from "./hospitalFormFields";
import { defaultHospitalSignupData, HospitalSignupData } from "./signupData";

export default function HospitalSignupPage() {
  const router = useRouter();
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: keyof HospitalSignupData) => {
    const { name, value, type } = event.target;
    const isCheckbox = type === "checkbox";
    const updatedValue = isCheckbox ? (event.target as HTMLInputElement).checked : value;

    setSignupData(prevData => ({
      ...prevData,
      [section ? `${section}.${name}` : name]: updatedValue,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:", signupData);
    router.push("/dashboard"); // Navigate to the dashboard after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-6">
      <div className="bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-10 max-w-6xl w-full border border-gray-800">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Hospital Signup</h2>
          <p className="text-center text-gray-300 mb-6">
            Join our platform to enhance your hospital&apos;s operational efficiency. Fill out the form below to get started.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <HospitalFormFields signupData={signupData} handleChange={handleChange} />
          <div className="flex justify-end">
            <Button type="submit" className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
