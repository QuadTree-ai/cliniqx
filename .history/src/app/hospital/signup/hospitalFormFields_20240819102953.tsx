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
    const value = signupData[field.name as keyof HospitalSignupData]; // Get value from signupData

    // Only handle fields that are primitive values (string, number, boolean)
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
            checked={!!value} // Handle checkbox as a boolean
            onChange={handleChange}
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
          />
        );
    }
  };

  const renderFormSections = () => Object.entries(hospitalFormConfig).map(([section, fields]) => (
    <div key={section} className="form-section">
      {fields.map((field: FieldConfig, index: number) => (
        <div key={index} className="form-field">
          <label>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
    </div>
  ));

  return (
    <>
      {renderFormSections()}
    </>
  );
};

export default HospitalFormFields;
