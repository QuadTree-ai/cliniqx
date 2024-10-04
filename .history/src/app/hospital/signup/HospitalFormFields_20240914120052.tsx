"use client";

import React, { useCallback } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HospitalSignupData, formConfig, DynamicFieldConfig, FIELD_NAMES } from './HospitalSignupData';

interface HospitalFormFieldsProps {
  onSubmit: (data: Partial<HospitalSignupData>) => void;
  currentStep: number;
  totalSteps: number;
}

const useHospitalForm = (currentStep: number) => {
  const { control, formState: { errors } } = useFormContext<HospitalSignupData>();
  const currentStepConfig = formConfig[currentStep - 1];

  const getFieldError = useCallback((fieldName: string) => {
    const [parent, child] = fieldName.split('.');
    return child 
      ? (errors[parent as keyof HospitalSignupData] as Record<string, { message?: string }>)?.[child]?.message 
      : errors[fieldName as keyof HospitalSignupData]?.message;
  }, [errors]);

  return { control, currentStepConfig, getFieldError };
};

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ currentStep, totalSteps, onSubmit }) => {
  const { control, currentStepConfig, getFieldError } = useHospitalForm(currentStep);

  const handleSubmit = (data: Partial<HospitalSignupData>) => {
    onSubmit(data);
  };

  const renderField = useCallback((field: DynamicFieldConfig) => {
    return (
      <Controller
        name={field.name as any}
        control={control}
        render={({ field: { onChange, value } }) => {
          switch (field.type) {
            case 'select':
              return (
                <Select onValueChange={onChange} value={value as string}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            case 'checkbox':
              return (
                <Checkbox 
                  checked={Boolean(value)} 
                  onCheckedChange={(checked) => onChange(checked)}
                />
              );
            case 'array':
              return (
                <Input
                  type="text"
                  placeholder={field.placeholder}
                  value={Array.isArray(value) ? value.join(', ') : ''}
                  onChange={(e) => onChange(e.target.value.split(',').map(item => item.trim()))}
                  className="w-full"
                />
              );
            default:
              return (
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={value as string}
                  onChange={onChange}
                  required={!field.optional}
                  className="w-full"
                />
              );
          }
        }}
      />
    );
  }, [control]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <h3 className="text-xl text-white mb-4">{currentStepConfig.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentStepConfig.fields.map((field: DynamicFieldConfig) => (
            <div key={field.name} className="form-field mb-4 text-white">
              <Label className="block text-white mb-2" htmlFor={field.name}>
                {field.label}
              </Label>
              {renderField(field)}
              {getFieldError(field.name) && (
                <span className="text-red-500 text-sm">
                  {getFieldError(field.name)}
                </span>
              )}
            </div>
          ))}
        </div>
        <Button type="submit">
          {currentStep < totalSteps ? "Next" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default HospitalFormFields;
