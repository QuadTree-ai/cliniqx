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
import { HospitalSignupData, formConfig, DynamicFieldConfig } from './HospitalSignupData';

interface HospitalFormFieldsProps {
  onSubmit: (data: Partial<HospitalSignupData>) => void;
  currentStep: number;
  initialData: HospitalSignupData;
}

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ onSubmit, currentStep, initialData }) => {
  const [stepData, setStepData] = React.useState<Partial<HospitalSignupData>>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStepData(prev => ({ ...prev, [name]: value }));
  };

  const renderField = (field: DynamicFieldConfig) => {
    switch (field.type) {
      case 'select':
        return (
          <Select
            onValueChange={(value) => handleChange({ target: { name: field.name, value } } as any)}
            defaultValue={(stepData as any)[field.name] || ''}
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
            value={(stepData as any)[field.name] || ''}
            onChange={handleChange}
            required={!field.optional}
            className="w-full"
          />
        );
    }
  };

  const currentStepConfig = formConfig[currentStep - 1];

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(stepData);
    }}>
      <h3 className="text-xl text-white mb-4">{currentStepConfig.title}</h3>
      {currentStepConfig.fields.map((field: DynamicFieldConfig, index: number) => (
        <div key={index} className="form-field mb-4">
          <Label className="block text-white mb-2">{field.label}</Label>
          {renderField(field)}
        </div>
      ))}
      <button type="submit" className="hidden">Submit</button>
    </form>
  );
};

export default HospitalFormFields;
