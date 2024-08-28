"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/app/logos/cliniqx-invent-logo"; 
import { useHospitalSignupHandlers } from './signHandle'; 
import { useDropzone } from "react-dropzone"; // For drag and drop

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
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleTermsChange = (checked: boolean) => setAcceptedTerms(checked);

  const handleSignUpClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form Data:", signupData);
    handleSubmit(event); 
    router.push("/dashboard"); 
  };

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: ".pdf,.doc,.docx,.png,.jpg,.jpeg" });

  const renderInputField = (label: string, name: string, value: string | number, onChange: any, type = "text", placeholder = '') => (
    <div className="mb-6">
      <Label htmlFor={name} className="block text-sm font-semibold text-white mb-2">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
        placeholder={placeholder || `Enter ${label}`}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-10 max-w-5xl w-full border border-gray-700">
        <div className="flex flex-col items-center mb-8">
          <Logo className="w-28 h-auto mb-6" />
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Hospital Signup
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Join our platform to enhance your hospital&apos;s operational efficiency. Fill out the form below to get started.
          </p>
        </div>
        
        <form onSubmit={handleSignUpClick} className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Hospital Name */}
          {renderInputField("Hospital Name", "hospitalName", signupData.hospitalName, handleInputChange)}
          
          {/* Address Section */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Address</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(signupData.address).map(([key, value]) =>
                renderInputField(key, key, value as string, handleAddressChange)
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(signupData.contact).map(([key, value]) =>
                renderInputField(key, key, value as string, handleContactChange)
              )}
            </div>
          </div>

          {/* Administrator Information */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Administrator Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(signupData.administrator).map(([key, value]) =>
                renderInputField(key, key, value as string, handleAdministratorChange)
              )}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Emergency Contact</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(signupData.emergencyContact).map(([key, value]) =>
                renderInputField(key, key, value as string, handleEmergencyContactChange)
              )}
            </div>
          </div>

          {/* Number of Beds */}
          {renderInputField("Number of Beds", "numberOfBeds", signupData.numberOfBeds, handleInputChange, "number")}

          {/* Services Offered */}
          {renderInputField(
            "Services Offered",
            "services",
            signupData.services.join(', '),
            (e: { target: { value: string; }; }) => handleArrayChange("services", e.target.value.split(', ')),
            "text",
            "Enter services separated by commas"
          )}

          {/* Staff Capacity */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Staff Capacity</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(signupData.staffCapacity).map(([key, value]) =>
                renderInputField(key, key, value as number, handleStaffCapacityChange, "number")
              )}
            </div>
          </div>

          {/* Hospital Facilities */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Hospital Facilities</h2>
            {renderInputField(
              "Hospital Facilities",
              "hospitalFacilities",
              signupData.hospitalFacilities.join(', '),
              (e: { target: { value: string; }; }) => handleArrayChange("hospitalFacilities", e.target.value.split(', ')),
              "text",
              "Enter facilities separated by commas"
            )}
          </div>

          {/* Certifications and Affiliations */}
          <div className="col-span-2">
            {renderInputField(
              "Certifications",
              "certifications",
              signupData.certifications.join(', '),
              (e: { target: { value: string; }; }) => handleArrayChange("certifications", e.target.value.split(', ')),
              "text",
              "Enter certifications separated by commas"
            )}
          </div>
          <div className="col-span-2">
            {renderInputField(
              "Affiliations",
              "affiliations",
              signupData.affiliations.join(', '),
              (e: { target: { value: string; }; }) => handleArrayChange("affiliations", e.target.value.split(', ')),
              "text",
              "Enter affiliations separated by commas"
            )}
          </div>

          {/* Drag and Drop File Upload for Certifications/Documents */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Upload Certifications/Documents</h2>
            <div {...getRootProps()} className={`border-2 border-dashed p-4 rounded-lg ${isDragActive ? 'border-blue-400' : 'border-gray-600'} text-center`}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-400">Drop the files here ...</p>
              ) : (
                <p className="text-gray-300">Drag and drop files here, or click to select files</p>
              )}
            </div>
            <ul className="mt-4 space-y-2">
              {uploadedFiles.map((file) => (
                <li key={file.name} className="text-white">{file.name}</li>
              ))}
            </ul>
          </div>

          {/* Available Services - Ambulance and Telemedicine */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">Available Services</h2>
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

          {/* Terms and Conditions */}
          <div className="flex items-center col-span-2">
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 col-span-2"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
