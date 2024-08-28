"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/app/logos/cliniqx-invent-logo";
import { useHospitalSignupHandlers } from './signHandle';
import { useDropzone } from "react-dropzone"; // For drag and drop

// Dropzone component to handle file uploads
const DropzoneField = ({ label, fieldName, uploadedFiles, setUploadedFiles }: any) => {
  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles((prevState: any) => ({
      ...prevState,
      [fieldName]: acceptedFiles[0] || null,
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    multiple: false,
  });

  return (
    <div className="w-full p-2">
      <h2 className="text-lg font-semibold text-white mb-2">{label}</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center ${isDragActive ? 'border-blue-400' : 'border-gray-600'}`}
      >
        <input {...getInputProps()} />
        {uploadedFiles[fieldName] ? (
          <p className="text-white">{uploadedFiles[fieldName]?.name}</p>
        ) : (
          <p className="text-gray-400">Drag and drop a file here, or click to select one</p>
        )}
      </div>
    </div>
  );
};

export default function HospitalSignupPage() {
  const router = useRouter();
  const {
    signupData,
    handleChange,
    handleArrayChange,
    handleBooleanChange,
    handleSubmit,
  } = useHospitalSignupHandlers();

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({
    certificateOfRegistration: null,
    license: null,
    pharmacyLicense: null,
    clinicalEstablishmentLicense: null,
    bioMedicalWasteAuthorization: null,
  });

  // Handle terms and conditions checkbox
  const handleTermsChange = (checked: boolean) => setAcceptedTerms(checked);

  // Handle form submit
  const handleSignUpClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    handleSubmit(event);
    router.push("/dashboard");
  };

  const renderInputField = (
    label: string,
    name: string,
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    type = "text",
    placeholder = ''
  ) => (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-semibold text-white mb-1">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
        placeholder={placeholder || `Enter ${label}`}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-5xl w-full border border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <Logo className="w-20 h-auto mb-4" />
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Hospital Signup
          </h2>
          <p className="text-center text-gray-300 mb-4">
            Join our platform to enhance your hospital&apos;s operational efficiency. Fill out the form below to get started.
          </p>
        </div>

        <form onSubmit={handleSignUpClick} className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* Hospital Name */}
          <div className="lg:col-span-1">
            {renderInputField("Hospital Name", "hospitalName", signupData.hospitalName, handleChange)}
          </div>

          {/* Address Section */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Address</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {Object.entries(signupData.address).map(([key, value]) =>
                renderInputField(key, key, value as string, (e) => handleChange(e, 'address'))
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Contact Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {Object.entries(signupData.contact).map(([key, value]) =>
                renderInputField(key, key, value as string, (e) => handleChange(e, 'contact'))
              )}
            </div>
          </div>

          {/* Document Uploads */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Upload Certifications/Documents</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <DropzoneField
                label="Certificate of Registration"
                fieldName="certificateOfRegistration"
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
              <DropzoneField
                label="License"
                fieldName="license"
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
              <DropzoneField
                label="Pharmacy License"
                fieldName="pharmacyLicense"
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
              <DropzoneField
                label="Clinical Establishment License"
                fieldName="clinicalEstablishmentLicense"
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
              <DropzoneField
                label="Bio-medical Waste Authorization"
                fieldName="bioMedicalWasteAuthorization"
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
            </div>
          </div>

          {/* Available Services */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Available Services</h2>
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
          <div className="flex items-center col-span-2 xl:col-span-3">
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

          {/* Signup Button */}
          <div className="col-span-2 xl:col-span-3 flex justify-center">
            <Button
              type="submit"
              className="py-2 px-8 text-md font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
