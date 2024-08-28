// Assuming the JSON is located at public/config/HospitalSignupFormConfig.json
import React, { useState, useEffect } from 'react';
import { HospitalSignupData } from './HospitalSignupData';

interface FormFieldProps {
  label: string;
  name: keyof HospitalSignupData;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  options?: string[];
  optional?: boolean;
}

interface FieldConfiguration {
  general: FormFieldProps[];
  contact: FormFieldProps[];
  address: FormFieldProps[];
}

const HospitalFormFields: React.FC = () => {
  const [formData, setFormData] = useState<Partial<HospitalSignupData>>({});
  const [fieldConfigurations, setFieldConfigurations] = useState<FieldConfiguration | null>(null);

  useEffect(() => {
    fetch('/config/HospitalSignupFormConfig.json')
      .then(response => response.json())
      .then(data => setFieldConfigurations(data.HospitalSignupFormConfig))
      .catch(error => console.error("Failed to load field configurations", error));
  }, []);

  if (!fieldConfigurations) {
    return <p>Loading form configurations...</p>;
  }

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
          {field.options.map(option => (
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
    return Object.values(fieldConfigurations).flat().map((field, index) => (
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
    }}>
      {renderFormFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalFormFields;
