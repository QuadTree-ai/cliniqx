import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { HospitalFormFields } from "./hospitalFormFields";
import { defaultHospitalSignupData, HospitalSignupData } from "./HospitalSignupData";

export default function HospitalSignupPage() {
  const router = useRouter();
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  const handleChange = (e, section) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;
    setSignupData((prev) => ({
      ...prev,
      [section || name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", signupData);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-800 p-10 rounded-xl shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Hospital Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <HospitalFormFields signupData={signupData} handleChange={handleChange} />
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-200">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
