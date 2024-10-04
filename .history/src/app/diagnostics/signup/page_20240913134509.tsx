"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import DiagnosticsFormFields from "./DiagnosticsFormFields";
import { DiagnosticsSignupData, diagnosticsSignupSchema, FIELD_NAMES, formConfig } from './diagconstants';
import Logo from "../../logos/cliniqx-invent-logo";

const DiagnosticsSignupPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const totalSteps = formConfig.length;

  const handleSubmit = async (data: DiagnosticsSignupData) => {
    if (!termsAccepted) {
      setError("Please accept the terms and conditions to proceed.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const validatedData = diagnosticsSignupSchema.parse({
        ...data,
        [FIELD_NAMES.SPECIALTIES]: Array.isArray(data[FIELD_NAMES.SPECIALTIES])
          ? data[FIELD_NAMES.SPECIALTIES]
          : (typeof data[FIELD_NAMES.SPECIALTIES] === 'string' ? data[FIELD_NAMES.SPECIALTIES].split(',') : []).map(s => s.trim()),
        [FIELD_NAMES.ACCEPTED_INSURANCES]: Array.isArray(data[FIELD_NAMES.ACCEPTED_INSURANCES])
          ? data[FIELD_NAMES.ACCEPTED_INSURANCES]
          : (typeof data[FIELD_NAMES.ACCEPTED_INSURANCES] === 'string' ? data[FIELD_NAMES.ACCEPTED_INSURANCES].split(',') : []).map(s => s.trim()),
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

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
        <Progress value={(currentStep / totalSteps) * 100} className="mb-6" />
        {error && (
          <div className="bg-red-500 bg-opacity-75 text-white p-3 rounded-md mb-6 text-center">
            {error}
          </div>
        )}
        <DiagnosticsFormFields onSubmit={handleSubmit} currentStep={currentStep} />
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
          >
            I accept the terms and conditions
          </label>
        </div>
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <Button onClick={handlePrevStep} variant="outline">
              Previous
            </Button>
          )}
          {currentStep < totalSteps ? (
            <Button onClick={handleNextStep} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button
              onClick={() => handleSubmit({} as DiagnosticsSignupData)}
              disabled={isLoading || !termsAccepted}
              className="ml-auto"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticsSignupPage;
