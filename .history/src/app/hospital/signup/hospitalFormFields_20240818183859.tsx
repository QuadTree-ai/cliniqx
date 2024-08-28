// src/app/hospital/signup/HospitalFormFields.tsx
import React from 'react';
import { HospitalSignupData } from './HospitalSignupData'; // Ensure this path matches where you have defined your interface

// Assuming your field configurations are imported correctly from a local JSON file
import fieldConfigurations from './HospitalSignupFormConfig.json';

interface FormFieldProps {
  label: string;
  name: keyof HospitalSignupData;
  type: string;
  placeholder?: string;
  options?: string[];
  optional?: boolean;
}

const HospitalFormFields: React.FC = () => {
    const [formData, setFormData] = useState({});
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const renderField = (field: any) => {
      if (field.type === 'select') {
        return (
          <select name={field.name} onChange={handleChange} required>
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
      return Object.values(fieldConfigurations.HospitalSignupFormConfig).flat().map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {renderField(field)}
        </div>
      ));
    };
  
    return (
      <form>
        {renderFormFields()}
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default HospitalFormFields;