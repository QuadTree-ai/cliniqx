// src/app/hospital/signup/HospitalFormFields.tsx
import React from "react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import fieldConfigurations from './fieldConfigurations.json'; // Assuming the path is correct

// Separated FieldRenderer Component
const FieldRenderer = React.memo(({ field, value, handleChange }) => {
    const renderInput = () => (
      <Input
        id={field.name}
        type={field.type}
        name={field.name}
        value={value}
        onChange={handleChange}
        placeholder={field.placeholder}
        className="w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
      />
    );
  
    const renderSelect = () => (
      <Select
        id={field.name}
        name={field.name}
        value={value}
        onChange={handleChange}
        options={field.options.map(option => ({ label: option, value: option }))}
        className="w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
      />
    );
  
    return field.type === 'select' ? renderSelect() : renderInput();
  });
  
  export const HospitalFormFields = ({ signupData, handleChange }) => {
    return (
      <div className="space-y-6">
        {Object.entries(fieldConfigurations).map(([section, fields]) => (
          <div key={section}>
            <h3 className="font-semibold text-lg text-gray-200">{section}</h3>
            {fields.map(field => (
              <div key={field.name} className="mb-3">
                <Label htmlFor={field.name} className="block text-sm font-medium text-gray-300">
                  {field.label}
                </Label>
                <FieldRenderer field={field} value={signupData[field.name]} handleChange={e => handleChange(e, field.name)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default HospitalFormFields;