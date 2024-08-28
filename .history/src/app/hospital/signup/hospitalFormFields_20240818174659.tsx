// src/app/hospital/signup/HospitalFormFields.tsx
import React from "react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import fieldConfigurations from './fieldConfigurations.json'; // Assuming the path is correct

// Field Renderer Component
const FieldRenderer = ({ field, value, handleChange }) => {
    const { type, name, placeholder, options } = field;
    switch (type) {
      case 'select':
        return (
          <Select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            options={options.map((option) => ({ label: option, value: option }))}
            className="w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
          />
        );
      default:
        return (
          <Input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
          />
        );
    }
  };
  
  export const HospitalFormFields = ({ signupData, handleChange }) => (
    <div className="space-y-6">
      {Object.entries(fieldConfigurations).map(([section, fields]) => (
        <section key={section}>
          <h3 className="font-semibold text-lg text-gray-200">{section}</h3>
          {fields.map((field) => (
            <div key={field.name} className="mb-3">
              <Label htmlFor={field.name} className="block text-sm font-medium text-gray-300">
                {field.label}
              </Label>
              <FieldRenderer field={field} value={signupData[field.name]} handleChange={(e) => handleChange(e, field.name)} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
  
  export default HospitalFormFields;