"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import HospitalFormFields from "./HospitalFormFields";
import { HospitalSignupData, hospitalSignupSchema, initialSignupData, FIELD_NAMES, formConfig } from './HospitalSignupData';
import Logo from "../../logos/cliniqx-invent-logo";

const HospitalSignupPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const methods = useForm<HospitalSignupData>({
    resolver: zodResolver(hospitalSignupSchema),
    defaultValues: initialSignupData,
    mode: 'onBlur',
  });

  const { handleSubmit, watch } = methods;

  const totalSteps = formConfig.length;

  const onSubmit = async (data: HospitalSignupData) => {
    if (!termsAccepted) {
      setError("Please accept the terms and conditions to proceed.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log("Form Data Submitted:", data);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      router.push("/dashboard");
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Failed to submit form. Please check your inputs and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStepSubmit = (data: Partial<HospitalSignupData>) => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-4xl w-full border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <Logo className="w-24 h-auto" />
            <h2 className="text-2xl font-bold text-center text-white">
              Hospital Signup
            </h2>
          </div>
          <p className="text-center text-white mb-6">
            Join our platform to enhance your hospital&apos;s digital presence and services.
            Fill out the form below to get started.
          </p>
          <Progress value={(currentStep / totalSteps) * 100} className="mb-6" />
          {error && (
            <div className="bg-red-500 bg-opacity-75 text-white p-3 rounded-md mb-6 text-center">
              {error}
            </div>
          )}
          <HospitalFormFields 
            onSubmit={handleStepSubmit} 
            currentStep={currentStep}
          />
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
            <Button
              onClick={methods.handleSubmit(handleStepSubmit)}
              disabled={isLoading || (currentStep === totalSteps && !termsAccepted)}
              className="ml-auto"
            >
              {currentStep < totalSteps ? "Next" : (isLoading ? "Submitting..." : "Submit")}
            </Button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default HospitalSignupPage;