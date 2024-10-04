"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import DiagnosticsFormFields from "./DiagnosticsFormFields";
import { DiagnosticsSignupData, diagnosticsSignupSchema } from './diagconstants';
import Logo from "../../logos/cliniqx-invent-logo";

const DiagnosticsSignupPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: DiagnosticsSignupData) => {
    setIsLoading(true);
    setError(null);

    try {
      const validatedData = diagnosticsSignupSchema.parse({
        ...data,
        specialties: Array.isArray(data.specialties) ? data.specialties : data.specialties.split(',').map(s => s.trim()),
        acceptedInsurances: Array.isArray(data.acceptedInsurances) ? data.acceptedInsurances : data.acceptedInsurances.split(',').map(s => s.trim()),
      });
      console.log("Form Data Submitted:", validatedData);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      router.push("/dashboard");
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Failed to submit form. Please check your inputs and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-4xl w-full border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-bold text-center text-white">
            Diagnostics Center Signup
          </h2>
        </div>
        <p className="text-center text-white mb-6">
          Join our platform to enhance your diagnostic center&apos;s digital presence and services.
          Fill out the form below to get started.
        </p>
        {error && (
          <div className="bg-red-500 bg-opacity-75 text-white p-3 rounded-md mb-6 text-center">
            {error}
          </div>
        )}
        <DiagnosticsFormFields onSubmit={handleSubmit} />
        {isLoading && (
          <div className="text-center text-white mt-4">
            <Button disabled className="bg-blue-600 hover:bg-blue-700">
              Submitting...
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticsSignupPage;
