// src/app/hospital/signup/HospitalFormFields.tsx
import React, { useState } from 'react';
import { HospitalSignupData } from './HospitalSignupData'; // Ensure this path matches where you have defined your interface

// Assuming your field configurations are imported correctly from a local JSON file
import fieldConfigurations from './HospitalSignupFormConfig.json';

interface FormFieldProps {
  label: string;
  name: keyof HospitalSignupData;
  type: 'text' | 'email' | 'tel' | 'select'; // Specify more types if needed
  placeholder?: string;
  options?: string[];
  optional?: boolean;
}

const HospitalFormFields: React.FC = () => {
  const [formData, setFormData] = useState<Partial<HospitalSignupData>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const renderField = (field: FormFieldProps) => {
    if (field.type === 'select' && field.options) {
      return (
        <select name={field.name} onChange={handleChange} required={!field.optional}>
          {field.options.map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
          required={!field.optional}
        />
      );
    }
  };

  const renderFormFields = () => {
    return Object.values(fieldConfigurations.HospitalSignupFormConfig).flat().map((field: FormFieldProps, index) => (
      <div key={index}>
        <label>{field.label}</label>
        {renderField(field)}
      </div>
    ));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      // Here you would normally handle the form submission, e.g., sending data to a server
    }}>
      {renderFormFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalFormFields;
