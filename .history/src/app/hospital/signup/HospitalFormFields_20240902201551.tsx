"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { HospitalSignupData, hospitalFormConfig } from "./HospitalSignupData";
import { HospitalFormFieldsProps, FieldConfig } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ signupData, handleChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);

  // Drag-and-drop functionality for file upload
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: any[]) => {
      console.log("Accepted files:", acceptedFiles);
      console.log("File rejections:", fileRejections);

      if (fileRejections.length > 0) {
        setFileError("Some files were rejected. Please check the file types and sizes.");
      } else {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        setFileError(null);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/jpeg': ['.jpg'],
      'image/png': ['.png']
    },
    maxFiles: 5,
  });

  const renderField = (field: FieldConfig) => {
    const value = signupData[field.name as keyof HospitalSignupData];

    switch (field.type) {
      case "select":
        return (
          <Select
            name={field.name}
            value={typeof value === "string" ? value : ""}
            className="bg-transparent text-white"
            required={!field.optional}
          >
            <option value="" disabled>Select...</option>
            {field.options?.map((option) => (
              <option key={option} value={option} onClick={() => handleChange({ target: { name: field.name, value: option, type: "select" } } as unknown as React.ChangeEvent<HTMLInputElement>)}>
                {option}
              </option>
            ))}
          </Select>
        );
      case "checkbox":
        return (
          <Checkbox
            name={field.name}
            checked={!!value}
            onCheckedChange={(checked) =>
              handleChange({
                target: {
                  name: field.name,
                  value: checked,
                  type: "checkbox",
                },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
          />
        );
      default:
        return (
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={
              typeof value === "string" || typeof value === "number"
                ? value
                : ""
            }
            onChange={handleChange}
            required={!field.optional}
            className="bg-transparent text-white"
          />
        );
    }
  };

  const renderFormSections = () =>
    Object.entries(hospitalFormConfig).map(([section, fields]) => {
      if (!Array.isArray(fields)) return null; // Skip dynamicOptions
      return (
        <div key={section} className="form-section mb-6">
          <h3 className="text-xl text-white mb-4 capitalize">{section}</h3>
          {fields.map((field: FieldConfig, index: number) => (
            <div key={index} className="form-field mb-4">
              <Label className="block text-white mb-2">{field.label}</Label>
              {renderField(field)}
            </div>
          ))}
        </div>
      );
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted with data:", signupData, "Files:", files);
    // Handle form submission logic (e.g., sending data to an API)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {renderFormSections()}

      {/* Drag and Drop File Upload */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 rounded-md transition ${
          isDragActive
            ? "bg-gray-800 border-blue-500"
            : "bg-transparent border-gray-500"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-white">Drop the files here...</p>
        ) : (
          <p className="text-white">
            Drag and drop important files here, or click to select files (Max 5 files)
          </p>
        )}
        {fileError && <p className="text-red-500 mt-2">{fileError}</p>}
        <ul className="mt-4 text-white">
          {files.map((file, index) => (
            <li key={index} className="text-sm">
              {file.name}
            </li>
          ))}
        </ul>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Submit
      </Button>
    </form>
  );
};

export default HospitalFormFields;
