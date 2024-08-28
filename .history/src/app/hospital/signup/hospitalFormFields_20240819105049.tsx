// src/app/hospital/signup/HospitalFormFields.tsx
import React from 'react';
import { HospitalSignupData, hospitalFormConfig } from './HospitalSignupData';
import { FieldConfig } from './types';

interface HospitalFormFieldsProps {
  signupData: HospitalSignupData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ signupData, handleChange }) => {

  const renderField = (field: FieldConfig) => {
    const value = signupData[field.name as keyof HospitalSignupData];

    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean" && !Array.isArray(value)) {
      console.warn(`Unexpected value type for field ${field.name}:`, value);
      return null;
    }

    switch (field.type) {
      case 'select':
        return (
          <select
            name={field.name}
            value={typeof value === 'string' ? value : ""}
            onChange={handleChange}
            required={!field.optional}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
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
            type="checkbox"
            name={field.name}
            checked={!!value}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        );
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={typeof value === 'string' || typeof value === 'number' ? value : ''}
            onChange={handleChange}
            required={!field.optional}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        );
    }
  };

  const renderFormSections = () => Object.entries(hospitalFormConfig).map(([section, fields]) => {
    if (!Array.isArray(fields)) {
      console.warn(`Skipping non-array section: ${section}`);
      return null;
    }

    return (
      <div key={section} className="mb-6">
        <h3 className="text-xl font-semibold mb-4 capitalize">{section}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field: FieldConfig, index: number) => (
            <div key={index} className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
              {renderField(field)}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <>
      {renderFormSections()}
    </>
  );
};

export default HospitalFormFields;
