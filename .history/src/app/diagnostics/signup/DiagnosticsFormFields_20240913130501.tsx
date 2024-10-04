import React, { useMemo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { DiagnosticsSignupData, diagnosticsSignupSchema, initialSignupData } from './diagconstants';

interface DiagnosticsFormFieldsProps {
  onSubmit: (data: DiagnosticsSignupData) => void;
}

const DiagnosticsFormFields: React.FC<DiagnosticsFormFieldsProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<DiagnosticsSignupData>({
    resolver: zodResolver(diagnosticsSignupSchema),
    mode: 'onBlur',
    defaultValues: initialSignupData,
  });

  const [step, setStep] = React.useState(1);

  const nextStep = useCallback(() => setStep(prev => prev + 1), []);
  const prevStep = useCallback(() => setStep(prev => prev - 1), []);

  const onSubmitForm = useCallback((data: DiagnosticsSignupData) => {
    onSubmit(data);
  }, [onSubmit]);

  const formConfig = useMemo(() => [
    {
      fields: ['centerName', 'ownerName', 'email', 'phone'],
      title: 'Basic Information',
    },
    {
      fields: ['address', 'city', 'state', 'zipCode'],
      title: 'Location Details',
    },
    {
      fields: ['licenseNumber', 'operatingHours', 'specialties', 'acceptedInsurances', 'emergencyServices', 'termsAccepted'],
      title: 'Additional Information',
    },
  ], []);

  const renderField = useCallback((fieldName: keyof DiagnosticsSignupData) => {
    const commonProps = {
      id: fieldName,
      ...register(fieldName),
    };

    switch (fieldName) {
      case 'specialties':
      case 'acceptedInsurances':
        return (
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <MultiSelect {...field} options={[/* Add options here */]} />
            )}
          />
        );
      case 'operatingHours':
        return <Textarea {...commonProps} />;
      case 'emergencyServices':
      case 'termsAccepted':
        return (
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Checkbox {...field} id={fieldName} />
            )}
          />
        );
      case 'state':
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
        return <Input {...commonProps} type={fieldName === 'email' ? 'email' : 'text'} />;
    }
  }, [register, control]);

  const currentStepConfig = formConfig[step - 1];

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h2 className="text-xl font-bold mb-4">{currentStepConfig.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
