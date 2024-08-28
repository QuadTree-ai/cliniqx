// src/app/hospital/signup/HospitalFormFields.tsx
import React from "react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import fieldConfigurations from './fieldConfigurations.json'; // Assuming the path is correct

export const HospitalFormFields = ({ signupData, handleChange }) => (
  <div>
    {Object.entries(fieldConfigurations).map(([section, fields]) => (
      <div key={section}>
        <h3 className="font-semibold text-lg">{section.replace(/([A-Z])/g, ' $1')}</h3>
        {fields.map((field) => {
          const FieldComponent = field.type === 'select' ? Select : Input;
          return (
            <div key={field.name} className="mb-4">
              <Label htmlFor={field.name}>{field.label}</Label>
              <FieldComponent
                id={field.name}
                type={field.type !== 'select' ? field.type : undefined}
                name={field.name}
                value={signupData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                options={field.type === 'select' ? field.options : undefined}
              />
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export default HospitalFormFields;
