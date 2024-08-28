import React, { useCallback } from "react";
import { Select, Input, Label } from "@/components/ui";
import fieldConfigurations from './fieldConfigurations.json';

const FieldRenderer = ({ field, value, onChange }) => {
  const handleChange = useCallback((event) => {
    onChange(event, field.name);
  }, [onChange, field.name]);

  const commonProps = {
    id: field.name,
    name: field.name,
    onChange: handleChange,
    value: value,
    placeholder: field.placeholder,
    className: "w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
  };

  return field.type === 'select' ? (
    <Select {...commonProps} options={field.options.map(option => ({ label: option, value: option }))} />
  ) : (
    <Input {...commonProps} type={field.type} />
  );
};

export const HospitalFormFields = ({ signupData, handleChange }) => (
  <div className="space-y-6">
    {Object.entries(fieldConfigurations).map(([section, fields]) => (
      <div key={section}>
        <h3 className="font-semibold text-lg text-gray-200">{section}</h3>
        {fields.map(field => (
          <div key={field.name} className="mb-3">
            <Label htmlFor={field.name} className="block text-sm font-medium text-gray-300">
              {field.label}
            </Label>
            <FieldRenderer field={field} value={signupData[field.name]} onChange={handleChange} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default HospitalFormFields;
