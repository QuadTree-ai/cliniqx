// src/app/hospital/signup/page.tsx

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import HospitalFormFields from "./HospitalFormFields";
import { initialSignupData, HospitalSignupData } from "./HospitalSignupData";

const HospitalSignupPage: React.FC = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState<HospitalSignupData>(initialSignupData); // Initialize with default form data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form field changes
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;

    // Use type guard to check if the target is an HTMLInputElement for checkboxes
    const { name, value, type } = target;
    setSignupData(prev => ({
      ...prev,
      [name]: type === "checkbox" && target instanceof HTMLInputElement ? target.checked : value, // Handle checkboxes
    }));
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Clear any existing error before submission

    try {
      console.log("Form Data Submitted:", signupData);

      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // After successful form submission, navigate to the dashboard
      router.push("/dashboard");
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false); // Always reset loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-800 p-10 rounded-xl shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Hospital Signup</h2>

        {/* Display error message if any */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Render form fields dynamically */}
          <HospitalFormFields signupData={signupData} handleChange={handleChange} />

          {/* Submit button with loading state */}
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-200"
            disabled={isLoading} // Disable button while form is submitting
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HospitalSignupPage;
