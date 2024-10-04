"use client";

import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HospitalFormFieldsProps, hospitalFormConfig, DynamicFieldConfig, HospitalSignupData } from './HospitalSignupData';

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ signupData, handleChange }) => {
  const renderField = (field: DynamicFieldConfig) => {
    switch (field.type) {
      case 'select':
        return (
          <Select
            onValueChange={(value) => handleChange({ target: { name: field.name, value } } as any)}
            defaultValue={(signupData as any)[field.name] || ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={signupData[field.name as keyof HospitalSignupData]?.toString() || ''}
            onChange={handleChange}
            required={!field.optional}
            className="w-full"
          />
        );
    }
  };

  const renderFormSections = () =>
    Object.entries(hospitalFormConfig).map(([section, fields]) => {
      if (!Array.isArray(fields)) return null; // Skip dynamicOptions
      return (
        <div key={section} className="form-section mb-6">
          <h3 className="text-xl text-white mb-4 capitalize">{section}</h3>
          {fields.map((field: DynamicFieldConfig, index: number) => (
            <div key={index} className="form-field mb-4">
              <Label className="block text-white mb-2">{field.label}</Label>
              {renderField(field)}
            </div>
          ))}
        </div>
      );
    });

  return (
    <form className="space-y-6">
      {renderFormSections()}
    </form>
  );
};

export default HospitalFormFields;
