"use client";

import { ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useDropzone } from "react-dropzone";

export const renderInputField = (
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

export const renderCheckboxField = (
  label: string,
  name: string,
  checked: boolean,
  onChange: (checked: boolean) => void
) => (
  <div className="flex items-center mb-4">
    <Checkbox
      id={name}
      name={name}
      checked={checked}
      onCheckedChange={onChange}
      className="border-gray-300 rounded-md"
    />
    <Label htmlFor={name} className="ml-2 text-white">
      {label}
    </Label>
  </div>
);

export const DropzoneField = ({ label, fieldName, uploadedFiles, setUploadedFiles }: any) => {
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
