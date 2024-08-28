// src/app/hospital/signup/HospitalSignupPage.tsx
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
  const { signupData, handleChange, handleArrayChange, handleSubmit } = useHospitalSignupHandlers();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-10 max-w-6xl w-full border border-gray-700">
        <Logo className="w-28 h-auto mb-6" />
        <h2 className="text-3xl font-bold text-center text-white mb-4">Hospital Signup</h2>
        <form onSubmit={handleSubmit} className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <InputField label="Hospital Name" name="hospitalName" value={signupData.hospitalName} onChange={handleChange} />
          {/* Dynamically generate input fields for other sections */}
          <Button type="submit" className="col-span-2 xl:col-span-3">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

const InputField = ({ label, name, value, onChange }) => (
  <div className="mb-6">
    <Label htmlFor={name} className="block text-sm font-semibold text-white mb-2">{label}</Label>
    <Input id={name} name={name} type="text" value={value} onChange={onChange} required className="mt-1 w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
  </div>
);
