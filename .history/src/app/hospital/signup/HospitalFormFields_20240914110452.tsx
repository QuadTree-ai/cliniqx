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
}

const HospitalFormFields: React.FC<HospitalFormFieldsProps> = ({ onSubmit, currentStep }) => {
  const { control, handleSubmit, formState: { errors } } = useFormContext<HospitalSignupData>();

  const currentStepConfig = formConfig[currentStep - 1];

  const onSubmitForm = useCallback((data: HospitalSignupData) => {
    onSubmit(data);
  }, [onSubmit]);

  const renderField = useCallback((field: DynamicFieldConfig) => {
    const commonProps = {
      id: field.name,
      name: field.name,
    };

    switch (field.type) {
      case 'select':
        return (
          <Controller
            name={field.name as keyof HospitalSignupData}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} value={value}>
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
            )}
          />
        );
      case 'text':
        return (
          <Controller
            name={field.name as keyof HospitalSignupData}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Textarea {...commonProps} onChange={onChange} value={value} placeholder={field.placeholder} />
            )}
          />
        );
      case 'checkbox':
        return (
          <Controller
            name={field.name as keyof HospitalSignupData}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox 
                checked={Boolean(value)} 
                onCheckedChange={(checked) => onChange(checked)}
                {...commonProps} 
              />
            )}
          />
        );
      case 'array':
        return (
          <Controller
            name={field.name as keyof HospitalSignupData}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                {...commonProps}
                type="text"
                placeholder="Enter comma-separated values"
                value={Array.isArray(value) ? value.join(', ') : ''}
                onChange={(e) => onChange(e.target.value.split(',').map(item => item.trim()))}
                className="w-full"
              />
            )}
          />
        );
      default:
        return (
          <Controller
            name={field.name as keyof HospitalSignupData}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                {...commonProps}
                type={field.type}
                placeholder={field.placeholder}
                value={value}
                onChange={onChange}
                required={!field.optional}
                className="w-full"
              />
            )}
          />
        );
    }
  }, [control]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h3 className="text-xl text-white mb-4">{currentStepConfig.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentStepConfig.fields.map((field: DynamicFieldConfig) => (
          <div key={field.name} className="form-field mb-4">
            <Label className="block text-white mb-2" htmlFor={field.name}>
              {field.label}
            </Label>
            {renderField(field)}
            {errors[field.name as keyof HospitalSignupData] && (
              <span className="text-red-500 text-sm">
                {errors[field.name as keyof HospitalSignupData]?.message}
              </span>
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default HospitalFormFields;
