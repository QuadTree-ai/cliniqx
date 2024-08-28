// src/app/hospital/signup/HospitalFormFields.tsx
import React, { useState } from 'react';
import fieldConfigurations from './HospitalSignupFormConfig.json';

const HospitalFormFields: React.FC = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case 'select':
        return (
          <select name={field.name} onChange={handleChange} required={field.optional !== true}>
            {field.options.map((option: string) => <option key={option} value={option}>{option}</option>)}
          </select>
        );
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
            required={field.optional !== true}
          />
        );
    }
  };

  const renderFormFields = () => {
    return Object.values(fieldConfigurations.HospitalSignupFormConfig).flat().map((field: any, index: number) => (
      <div key={index}>
        <label>{field.label}</label>
        {renderField(field)}
      </div>
    ));
  };

  return (
    <form onSubmit={e => {
      e.preventDefault();
      console.log('Submitted Form Data:', formData);
      // Here you might handle form submission, e.g., send data to an API
    }}>
      {renderFormFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalFormFields;
