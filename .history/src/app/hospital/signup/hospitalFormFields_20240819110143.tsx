"use client";

import React from "react";
import { HospitalSignupData, hospitalFormConfig } from "./HospitalSignupData";
import { HospitalFormFieldsProps, FieldConfig } from "./types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ signupData, handleChange }) => {

  const renderField = (field: FieldConfig) => {
    const value = signupData[field.name]; // Get value from signupData

    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean" && !Array.isArray(value)) {
      console.warn(`Unexpected value type for field ${field.name}:`, value);
      return null;
    }

    switch (field.type) {
      case 'select':
        return (
          <Select
            name={field.name}
            value={typeof value === 'string' ? value : ""}
            onChange={handleChange} // Correctly pass the change handler function
            className="bg-transparent text-white"
            required={!field.optional}
          >
            <option value="">Select...</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        );
      case 'checkbox':
        return (
          <Checkbox
            name={field.name}
            checked={!!value} // Handle checkbox as a boolean
            onCheckedChange={(checked) => handleChange({
              target: {
                name: field.name,
                value: checked,
                type: 'checkbox'
              }
            } as unknown as React.ChangeEvent<HTMLInputElement>)} // Manually create a change event
          />
        );
      default:
        return (
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={typeof value === 'string' || typeof value === 'number' ? value : ''}
            onChange={handleChange}
            required={!field.optional}
            className="bg-transparent text-white"
          />
        );
    }
  };

  const renderFormSections = () => Object.entries(hospitalFormConfig).map(([section, fields]) => {
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Card className="w-full max-w-lg p-6 shadow-xl rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700">
        <CardHeader className="text-center">
          <h2 className="text-3xl text-white mb-6">Hospital Signup</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {renderFormSections()}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HospitalFormFields;
