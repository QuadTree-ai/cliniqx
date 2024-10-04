"use client"
// src/app/hospital/signup/page.tsx

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import HospitalFormFields from "./HospitalFormFields";
import { initialSignupData, HospitalSignupData } from "./HospitalSignupData";
import Logo from "../../logos/cliniqx-invent-logo";

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
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-4xl w-full border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-bold text-center text-white">
            Hospital Signup
          </h2>
        </div>
        <p className="text-center text-white mb-6">
          Join our platform to enhance your hospital's digital presence and services.
          Fill out the form below to get started.
        </p>
        {error && (
          <div className="bg-red-500 bg-opacity-75 text-white p-3 rounded-md mb-6 text-center">
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
