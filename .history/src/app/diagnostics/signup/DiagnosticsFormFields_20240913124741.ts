import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { DiagnosticsSignupData } from './diagconstants';

interface DiagnosticsFormFieldsProps {
  onSubmit: (data: DiagnosticsSignupData) => void;
}

const DiagnosticsFormFields: React.FC<DiagnosticsFormFieldsProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<DiagnosticsSignupData>();
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
                <Input id="centerName" {...register("centerName", { required: "Center name is required" })} />
                {errors.centerName && <span className="text-red-500">{errors.centerName.message}</span>}
              </div>
              <div>
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" {...register("ownerName", { required: "Owner name is required" })} />
                {errors.ownerName && <span className="text-red-500">{errors.ownerName.message}</span>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" {...register("phone", { required: "Phone is required" })} />
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
                <Input id="address" {...register("address", { required: "Address is required" })} />
                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" {...register("city", { required: "City is required" })} />
                {errors.city && <span className="text-red-500">{errors.city.message}</span>}
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: "State is required" }}
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
                <Input id="zipCode" {...register("zipCode", { required: "ZIP code is required" })} />
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
                <Input id="licenseNumber" {...register("licenseNumber", { required: "License number is required" })} />
                {errors.licenseNumber && <span className="text-red-500">{errors.licenseNumber.message}</span>}
              </div>
              <div>
                <Label htmlFor="operatingHours">Operating Hours</Label>
                <Textarea id="operatingHours" {...register("operatingHours", { required: "Operating hours are required" })} />
                {errors.operatingHours && <span className="text-red-500">{errors.operatingHours.message}</span>}
              </div>
              <div>
                <Label htmlFor="specialties">Specialties</Label>
                <Controller
                  name="specialties"
                  control={control}
                  rules={{ required: "At least one specialty is required" }}
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
                rules={{ required: "You must accept the terms and conditions" }}
                render={({ field }) => (
                  <Checkbox {...field} id="termsAccepted" />
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
