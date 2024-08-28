// src/app/hospital/signup/HospitalFormFields.tsx
import React, { useState } from 'react';
import { hospitalFormConfig } from './HospitalSignupData';
import { FieldConfig } from './types';

const HospitalFormFields: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;  // More appropriate casting
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData(prev => ({
      ...prev,
      [target.name]: value
    }));
  };

  const renderField = (field: FieldConfig) => {
    switch (field.type) {
      case 'select':
        return (
          <select name={field.name} onChange={handleChange} required={!field.optional}>
            {field.options?.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        );
      case 'checkbox':
        return (
          <input
            type="checkbox"
            name={field.name}
            checked={!!formData[field.name]}
            onChange={handleChange}
          />
        );
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={handleChange}
            required={!field.optional}
          />
        );
    }
  };

  const renderFormSections = () => Object.entries(hospitalFormConfig).map(([section, fields]) => (
    <div key={section}>
      {fields.map((field: FieldConfig, index: number) => (
        <div key={index}>
          <label>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
    </div>
  ));

  return (
    <form onSubmit={e => {
      e.preventDefault();
      console.log('Submitted Form Data:', formData);
    }}>
      {renderFormSections()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalFormFields;
