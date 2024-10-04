"use client"
// src/app/hospital/signup/page.tsx

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import HospitalFormFields from "./HospitalFormFields";
import { initialSignupData, HospitalSignupData } from "./HospitalSignupData";

const HospitalSignupPage: React.FC = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState<HospitalSignupData>(initialSignupData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setSignupData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log("Form Data Submitted:", signupData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push("/dashboard");
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Hospital Signup</h2>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-md mb-6 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          <HospitalFormFields signupData={signupData} handleChange={handleChange} />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors duration-200 text-lg font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HospitalSignupPage;
