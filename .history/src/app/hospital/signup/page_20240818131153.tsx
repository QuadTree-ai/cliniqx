"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/app/logos/cliniqx-invent-logo";
import { useHospitalSignupHandlers } from './signHandle';
import { renderInputField, renderCheckboxField, DropzoneField } from './hospitalFormFields';
import { Checkbox } from "@/components/ui/checkbox";

export default function HospitalSignupPage() {
  const router = useRouter();
  const { signupData, handleChange, handleArrayChange, handleBooleanChange, handleSubmit } = useHospitalSignupHandlers();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({
    certificateOfRegistration: null,
    license: null,
    pharmacyLicense: null,
    clinicalEstablishmentLicense: null,
    bioMedicalWasteAuthorization: null,
  });

  const handleTermsChange = (checked: boolean) => setAcceptedTerms(checked);

  const handleSignUpClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    handleSubmit(event);
    router.push("/dashboard");
  };

  const documentLabels = [
    "Certificate of Registration",
    "License",
    "Pharmacy License",
    "Clinical Establishment License",
    "Bio-medical Waste Authorization"
  ];

  const documentKeys = [
    "certificateOfRegistration",
    "license",
    "pharmacyLicense",
    "clinicalEstablishmentLicense",
    "bioMedicalWasteAuthorization"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-5xl w-full border border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <Logo className="w-20 h-auto mb-4" />
          <h2 className="text-3xl font-bold text-center text-white mb-4">Hospital Signup</h2>
          <p className="text-center text-gray-300 mb-4">Join our platform to enhance your hospital&apos;s operational efficiency. Fill out the form below to get started.</p>
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
              {Object.entries(signupData.address).map(([key, value]) => (
                renderInputField(key, key, value as string, (e) => handleChange(e, 'address'))
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Contact Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {Object.entries(signupData.contact).map(([key, value]) => (
                renderInputField(key, key, value as string, (e) => handleChange(e, 'contact'))
              ))}
            </div>
          </div>

          {/* Fields with Array Values */}
          {["departments", "medicalEquipment", "insuranceProviders", "availableSpecialties"].map(field => (
            <div className="col-span-2 xl:col-span-3" key={field}>
              {renderInputField(
                field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1'), // Capitalize and format the field name
                field,
                (signupData as any)[field].join(', '),
                (e) => handleArrayChange(field as keyof typeof signupData, e.target.value),
                "text",
                `Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} separated by commas`
              )}
            </div>
          ))}

          {/* Document Uploads */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Upload Certifications/Documents</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {documentKeys.map((key, index) => (
                <DropzoneField
                  key={key}
                  label={documentLabels[index]}
                  fieldName={key}
                  uploadedFiles={uploadedFiles}
                  setUploadedFiles={setUploadedFiles}
                />
              ))}
            </div>
          </div>

          {/* Available Services */}
          <div className="col-span-2 xl:col-span-3">
            <h2 className="text-lg font-semibold text-white mb-2">Available Services</h2>
            <div className="flex items-center space-x-4">
              {["ambulanceServices", "telemedicineServices"].map(service => (
                renderCheckboxField(
                  service.replace(/([A-Z])/g, ' $1'),
                  service,
                  (signupData as any)[service],
                  (checked) => handleBooleanChange(service as keyof typeof signupData, checked)
                )
              ))}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center col-span-2 xl:col-span-3">
            <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={handleTermsChange} className="border-gray-300 rounded-md" />
            <label htmlFor="terms" className="ml-2 text-white">
              I accept the{" "}
              <a href="/terms" className="underline text-blue-400">terms and conditions</a>
            </label>
          </div>

          {/* Signup Button */}
          <div className="col-span-2 xl:col-span-3 flex justify-center">
            <Button type="submit" className="py-2 px-8 text-md font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}