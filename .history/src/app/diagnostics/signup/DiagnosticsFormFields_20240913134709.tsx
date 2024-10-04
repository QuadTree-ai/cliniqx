import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DiagnosticsSignupData, diagnosticsSignupSchema, initialSignupData, formConfig, FIELD_NAMES } from './diagconstants';

export interface DiagnosticsFormFieldsProps {
  onSubmit: (data: Partial<DiagnosticsSignupData>) => void;
  currentStep: number;
  initialData: Partial<DiagnosticsSignupData>; // Add this line
}

const DiagnosticsFormFields: React.FC<DiagnosticsFormFieldsProps> = ({ onSubmit, currentStep }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<DiagnosticsSignupData>({
    resolver: zodResolver(diagnosticsSignupSchema),
    mode: 'onBlur',
    defaultValues: initialSignupData,
  });

  const [step, setStep] = React.useState(currentStep);

  const nextStep = useCallback(() => setStep(prev => prev + 1), []);
  const prevStep = useCallback(() => setStep(prev => prev - 1), []);

  const onSubmitForm = useCallback((data: DiagnosticsSignupData) => {
    onSubmit(data);
  }, [onSubmit]);

  const currentStepConfig = formConfig[step - 1];

  const renderField = useCallback((fieldName: keyof DiagnosticsSignupData) => {
    const commonProps = {
      id: fieldName,
      ...register(fieldName),
    };

    switch (fieldName) {
      case FIELD_NAMES.SPECIALTIES:
      case FIELD_NAMES.ACCEPTED_INSURANCES:
        return (
          <Input {...commonProps} type="text" placeholder="Enter comma-separated values" />
        );
      case FIELD_NAMES.OPERATING_HOURS:
        return <Textarea {...commonProps} />;
      case FIELD_NAMES.EMERGENCY_SERVICES:
      case FIELD_NAMES.TERMS_ACCEPTED:
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
      case FIELD_NAMES.STATE:
        return (
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Select {...field}>
                {/* Add state options here */}
              </Select>
            )}
          />
        );
      default:
        return <Input {...commonProps} type={fieldName === FIELD_NAMES.EMAIL ? 'email' : 'text'} />;
    }
  }, [register, control]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h2 className=" text-white text-xl font-bold mb-4">{currentStepConfig.title}</h2>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentStepConfig.fields.map((fieldName) => (
          <div key={fieldName}>
            <Label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</Label>
            {renderField(fieldName as keyof DiagnosticsSignupData)}
            {errors[fieldName as keyof DiagnosticsSignupData] && (
              <span className="text-red-500 text-sm">
                {errors[fieldName as keyof DiagnosticsSignupData]?.message}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        {step > 1 && <Button onClick={prevStep}>Previous</Button>}
        {step < formConfig.length ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </div>
    </form>
  );
};

export default DiagnosticsFormFields;