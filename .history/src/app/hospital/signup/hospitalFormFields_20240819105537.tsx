import React from 'react';
import { HospitalSignupData, hospitalFormConfig } from './HospitalSignupData';
import { FieldConfig } from './types';

interface HospitalFormFieldsProps {
  signupData: HospitalSignupData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ signupData, handleChange }) => {
  
  // Render each individual form field based on its type and configuration
  const renderField = (field: FieldConfig) => {
    const value = signupData[field.name as keyof HospitalSignupData]; // Extract value from signupData

    // Handle invalid value types gracefully
    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean" && !Array.isArray(value)) {
      console.warn(`Unexpected value type for field ${field.name}:`, value);
      return null;
    }

    switch (field.type) {
      case 'select':
        return (
          <select
            className="bg-gray-700 text-white border border-gray-500 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            name={field.name}
            value={typeof value === 'string' ? value : ""}
            onChange={handleChange}
            aria-invalid={!value}
            required={!field.optional}
          >
            <option value="">Select...</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <input
            className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            type="checkbox"
            name={field.name}
            checked={!!value} // Handle checkbox as a boolean
            onChange={handleChange}
          />
        );
      default:
        return (
          <input
            className="bg-gray-700 text-white border border-gray-500 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={typeof value === 'string' || typeof value === 'number' ? value : ''}
            onChange={handleChange}
            aria-invalid={!value}
            required={!field.optional}
          />
        );
    }
  };

  // Render each section of the form dynamically based on the config
  const renderFormSections = () => {
    return Object.entries(hospitalFormConfig).map(([section, fields]) => {
      // Skip non-array sections like dynamicOptions
      if (!Array.isArray(fields)) {
        return null;
      }

      return (
        <div key={section} className="form-section mb-6">
          <h3 className="text-xl text-white mb-4 capitalize">{section}</h3>
          {fields.map((field: FieldConfig, index: number) => (
            <div key={index} className="form-field mb-4">
              <label className="block text-white mb-2">{field.label}</label>
              {renderField(field)}
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="space-y-6">
      {renderFormSections()}
    </div>
  );
};

export default HospitalFormFields;
