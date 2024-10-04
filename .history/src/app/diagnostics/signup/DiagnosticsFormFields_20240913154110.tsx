import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import * as constants from './diagconstants';

export interface DiagnosticsFormFieldsProps {
  onSubmit: (data: Partial<constants.DiagnosticsSignupData>) => void;
  currentStep: number;
  initialData: Partial<constants.DiagnosticsSignupData>;
}

const DiagnosticsFormFields: React.FC<DiagnosticsFormFieldsProps> = ({ onSubmit, currentStep, initialData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<constants.DiagnosticsSignupData>({
    resolver: zodResolver(constants.diagnosticsSignupSchema),
    mode: 'onBlur',
    defaultValues: { ...constants.initialSignupData, ...initialData },
  });

  const currentStepConfig = constants.formConfig[currentStep - 1];

  const onSubmitForm = useCallback((data: constants.DiagnosticsSignupData) => {
    onSubmit(data);
  }, [onSubmit]);

  const renderField = useCallback((fieldName: keyof constants.DiagnosticsSignupData) => {
    const commonProps = {
      id: fieldName,
      ...register(fieldName),
    };

    switch (fieldName) {
      case constants.FIELD_NAMES.SPECIALTIES:
      case constants.FIELD_NAMES.EQUIPMENT_LIST:
      case constants.FIELD_NAMES.ACCEPTED_INSURANCES:
        return (
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter comma-separated values"
                value={field.value.join(', ')}
                onChange={(e) => field.onChange(e.target.value.split(',').map(item => item.trim()))}
              />
            )}
          />
        );
      case constants.FIELD_NAMES.OPERATING_HOURS:
        return <Textarea {...commonProps} />;
      case constants.FIELD_NAMES.EMERGENCY_SERVICES:
      case constants.FIELD_NAMES.TERMS_ACCEPTED:
        return (
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id={fieldName}
              />
            )}
          />
        );
      case constants.FIELD_NAMES.STATE:
        return (
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  {/* Add state options here */}
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
            )}
          />
        );
      default:
        return <Input {...commonProps} type={fieldName === constants.FIELD_NAMES.EMAIL ? 'email' : 'text'} />;
    }
  }, [register, control]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h2 className="text-white text-xl font-bold mb-4">{currentStepConfig.title}</h2>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentStepConfig.fields.map((fieldName) => (
          <div key={fieldName}>
            <Label htmlFor={fieldName}>{fieldName.replace(/([A-Z])/g, ' $1').trim()}</Label>
            {renderField(fieldName as keyof constants.DiagnosticsSignupData)}
            {errors[fieldName as keyof constants.DiagnosticsSignupData] && (
              <span className="text-red-500 text-sm">
                {errors[fieldName as keyof constants.DiagnosticsSignupData]?.message}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit">
          {currentStep < constants.formConfig.length ? "Next" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default DiagnosticsFormFields;