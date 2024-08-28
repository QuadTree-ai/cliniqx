"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/app/logos/cliniqx-invent-logo"; // Adjust the import path according to your file structure
import { useHospitalSignupHandlers } from './signHandle'; // Custom hook for handling form data

export default function HospitalSignupPage() {
  const router = useRouter();
  const {
    signupData,
    handleInputChange,
    handleAddressChange,
    handleContactChange,
    handleAdministratorChange,
    handleEmergencyContactChange,
    handleArrayChange,
    handleBooleanChange,
    handleStaffCapacityChange,
    handleSubmit,
  } = useHospitalSignupHandlers();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleTermsChange = (checked: boolean) => setAcceptedTerms(checked);

  const handleSignUpClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form Data:", signupData);
    router.push("/dashboard");
  };

  const renderInputField = (label: string, name: string, value: string | number, onChange: any, type = "text", placeholder = '') => (
    <div>
      <Label htmlFor={name} className="block text-sm font-semibold text-white">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full p-3 border border-transparent bg-gray-700 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder || `Enter ${label}`}
      />
    </div>
  );

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
          Join our platform to enhance your hospital&apos;s operational efficiency. Fill out the form below to get started.
        </p>
        <form onSubmit={handleSignUpClick} className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {renderInputField("Hospital Name", "hospitalName", signupData.hospitalName, handleInputChange)}
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Address</h2>
            {Object.entries(signupData.address).map(([key, value]) =>
              renderInputField(key, key, value as string, handleAddressChange)
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
            {Object.entries(signupData.contact).map(([key, value]) =>
              renderInputField(key, key, value as string, handleContactChange)
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Administrator Information</h2>
            {Object.entries(signupData.administrator).map(([key, value]) =>
              renderInputField(key, key, value as string, handleAdministratorChange)
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Emergency Contact</h2>
            {Object.entries(signupData.emergencyContact).map(([key, value]) =>
              renderInputField(key, key, value as string, handleEmergencyContactChange)
            )}
          </div>

          {renderInputField("Number of Beds", "numberOfBeds", signupData.numberOfBeds, handleInputChange, "number")}

          {renderInputField(
            "Services Offered",
            "services",
            signupData.services.join(', '),
            (e: { target: { value: string; }; }) => handleArrayChange("services", e.target.value.split(', ')),
            "text",
            "Enter services separated by commas"
          )}

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Staff Capacity</h2>
            {Object.entries(signupData.staffCapacity).map(([key, value]) =>
              renderInputField(key, key, value as number, handleStaffCapacityChange, "number")
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Available Services</h2>
            <div className="flex items-center space-x-4">
              {["ambulanceServices", "telemedicineServices"].map((service) => (
                <label key={service} className="inline-flex items-center">
                  <Checkbox
                    id={service}
                    name={service}
                    checked={Boolean((signupData as any)[service])}
                    onCheckedChange={(checked: boolean) => handleBooleanChange(service as keyof typeof signupData, checked)}
                    className="border-gray-300 rounded-md"
                  />
                  <span className="ml-2 capitalize text-white">{service.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center col-span-1 md:col-span-2">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={handleTermsChange}
              className="border-gray-300 rounded-md"
            />
            <Label htmlFor="terms" className="ml-2 text-white">
              I accept the{" "}
              <a href="/terms" className="underline text-blue-400">
                terms and conditions
              </a>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 col-span-1 md:col-span-2"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
