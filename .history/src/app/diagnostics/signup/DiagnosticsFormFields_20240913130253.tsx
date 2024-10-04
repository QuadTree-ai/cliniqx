import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DiagnosticsSignupData, diagnosticsSignupSchema } from './DiagnosticsSignupData';

interface DiagnosticsFormFieldsProps {
  onSubmit: (data: DiagnosticsSignupData) => void;
}

const DiagnosticsFormFields: React.FC<DiagnosticsFormFieldsProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<DiagnosticsSignupData>({
    resolver: zodResolver(diagnosticsSignupSchema),
    mode: 'onBlur',
  });

  const [step, setStep] = React.useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onSubmitForm = (data: DiagnosticsSignupData) => {
    onSubmit(data);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="centerName">Diagnostic Center Name</Label>
                <Input id="centerName" {...register("centerName")} />
                {errors.centerName && <span className="text-red-500">{errors.centerName.message}</span>}
              </div>
              <div>
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" {...register("ownerName")} />
                {errors.ownerName && <span className="text-red-500">{errors.ownerName.message}</span>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" {...register("phone")} />
                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
              </div>
            </div>
            <Button onClick={nextStep}>Next</Button>
          </>
        );
      case 2:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" {...register("address")} />
                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" {...register("city")} />
                {errors.city && <span className="text-red-500">{errors.city.message}</span>}
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select {...field}>
                      {/* Add state options here */}
                    </Select>
                  )}
                />
                {errors.state && <span className="text-red-500">{errors.state.message}</span>}
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" {...register("zipCode")} />
                {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}
              </div>
            </div>
            <Button onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep}>Next</Button>
          </>
        );
      case 3:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input id="licenseNumber" {...register("licenseNumber")} />
                {errors.licenseNumber && <span className="text-red-500">{errors.licenseNumber.message}</span>}
              </div>
              <div>
                <Label htmlFor="operatingHours">Operating Hours</Label>
                <Textarea id="operatingHours" {...register("operatingHours")} />
                {errors.operatingHours && <span className="text-red-500">{errors.operatingHours.message}</span>}
              </div>
              <div>
                <Label htmlFor="specialties">Specialties</Label>
                <Controller
                  name="specialties"
                  control={control}
                  render={({ field }) => (
                    <MultiSelect {...field} options={[/* Add specialty options here */]} />
                  )}
                />
                {errors.specialties && <span className="text-red-500">{errors.specialties.message}</span>}
              </div>
              <div>
                <Label htmlFor="acceptedInsurances">Accepted Insurances</Label>
                <Controller
                  name="acceptedInsurances"
                  control={control}
                  render={({ field }) => (
                    <MultiSelect {...field} options={[/* Add insurance options here */]} />
                  )}
                />
              </div>
            </div>
            <div className="mt-4">
              <Controller
                name="emergencyServices"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} id="emergencyServices" />
                )}
              />
              <Label htmlFor="emergencyServices" className="ml-2">Offer Emergency Services</Label>
            </div>
            <div className="mt-4">
              <Controller
                name="termsAccepted"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} id="termsAccepted" value={field.value ? "true" : "false"} />
                )}
              />
              <Label htmlFor="termsAccepted" className="ml-2">I accept the terms and conditions</Label>
              {errors.termsAccepted && <span className="text-red-500">{errors.termsAccepted.message}</span>}
            </div>
            <Button onClick={prevStep}>Previous</Button>
            <Button type="submit">Submit</Button>
          </>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {renderStep()}
    </form>
  );
};

export default DiagnosticsFormFields;
