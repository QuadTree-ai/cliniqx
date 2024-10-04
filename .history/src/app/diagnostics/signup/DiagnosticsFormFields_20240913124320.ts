import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DiagnosticsSignupData } from './DiagnosticsSignupData';

interface DiagnosticsFormFieldsProps {
  signupData: DiagnosticsSignupData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const DiagnosticsFormFields: React.FC<DiagnosticsFormFieldsProps> = ({ signupData, handleChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="centerName">Diagnostic Center Name</Label>
          <Input
            id="centerName"
            name="centerName"
            value={signupData.centerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="ownerName">Owner Name</Label>
          <Input
            id="ownerName"
            name="ownerName"
            value={signupData.ownerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={signupData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={signupData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={signupData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={signupData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            value={signupData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={signupData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="licenseNumber">License Number</Label>
          <Input
            id="licenseNumber"
            name="licenseNumber"
            value={signupData.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="operatingHours">Operating Hours</Label>
          <Input
            id="operatingHours"
            name="operatingHours"
            value={signupData.operatingHours}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <Checkbox
          id="emergencyServices"
          name="emergencyServices"
          checked={signupData.emergencyServices}
          onCheckedChange={(checked) => handleChange({ target: { name: 'emergencyServices', value: checked } } as React.ChangeEvent<HTMLInputElement>)}
        />
        <Label htmlFor="emergencyServices" className="ml-2">Offer Emergency Services</Label>
      </div>
      <div className="mt-4">
        <Checkbox
          id="termsAccepted"
          name="termsAccepted"
          checked={signupData.termsAccepted}
          onCheckedChange={(checked) => handleChange({ target: { name: 'termsAccepted', value: checked } } as React.ChangeEvent<HTMLInputElement>)}
          required
        />
        <Label htmlFor="termsAccepted" className="ml-2">I accept the terms and conditions</Label>
      </div>
    </>
  );
};

export default DiagnosticsFormFields;
