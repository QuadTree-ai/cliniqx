// src/app/hospital/signup/page.tsx

import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";  // Correct import for useRouter
import Button from "@/components/ui/button"; // Ensure your import paths are correct
import HospitalFormFields from "./HospitalFormFields";
import { initialSignupData } from "./HospitalSignupData"; // Assuming you export initial data for forms

export default function HospitalSignupPage() {
  const router = useRouter();
  const [signupData, setSignupData] = useState(initialSignupData);  // Initialize with the correct default data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,  // Simplified, removed unused `section` param
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("Form Data Submitted:", signupData);
      // Simulate API call
      setTimeout(() => {
        router.push("/dashboard"); // Direct navigation after action
        setIsLoading(false); // Set loading false after the navigation
      }, 2000);
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Failed to submit form. Please try again.");
      setIsLoading(false); // Ensure loading state is reset on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-800 p-10 rounded-xl shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Hospital Signup</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <HospitalFormFields signupData={signupData} handleChange={handleChange} />
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-200">
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
}
