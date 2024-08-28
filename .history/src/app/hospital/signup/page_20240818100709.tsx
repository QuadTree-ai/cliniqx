// src/app/hospital/signup/page.tsx

import React from 'react';
import { useHospitalSignupHandlers } from './signHandle';

export default function HospitalSignupPage() {
  const {
    signupData,
    handleInputChange,
    handleAddressChange,
    handleContactChange,
    handleAdministratorChange,
    handleEmergencyContactChange,
    handleArrayChange,
    handleBooleanChange,
    handleStaffCapacityChange,
    handleSubmit,
  } = useHospitalSignupHandlers();

  // Reusable function for rendering input fields
  const renderInputField = (label: string, name: string, value: string | number, onChange: any, type = "text", placeholder = '') => (
    <div>
      <label className="block text-sm font-medium mb-1 capitalize">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2 w-full"
        placeholder={placeholder || `Enter ${label}`}
      />
    </div>
  );

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Hospital Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hospital Name */}
        {renderInputField("Hospital Name", "hospitalName", signupData.hospitalName, handleInputChange)}

        {/* Address Fields */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <div className="space-y-4">
            {Object.entries(signupData.address).map(([key, value]) =>
              renderInputField(key, key, value as string, handleAddressChange)
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <div className="space-y-4">
            {Object.entries(signupData.contact).map(([key, value]) =>
              renderInputField(key, key, value as string, handleContactChange)
            )}
          </div>
        </div>

        {/* Administrator Information */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Administrator Information</h2>
          <div className="space-y-4">
            {Object.entries(signupData.administrator).map(([key, value]) =>
              renderInputField(key, key, value as string, handleAdministratorChange)
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Emergency Contact</h2>
          <div className="space-y-4">
            {Object.entries(signupData.emergencyContact).map(([key, value]) =>
              renderInputField(key, key, value as string, handleEmergencyContactChange)
            )}
          </div>
        </div>

        {/* Number of Beds */}
        {renderInputField("Number of Beds", "numberOfBeds", signupData.numberOfBeds, handleInputChange, "number")}

        {/* Services Offered */}
        {renderInputField(
          "Services Offered",
          "services",
          signupData.services.join(', '),
          (e: { target: { value: string; }; }) => handleArrayChange("services", e.target.value.split(', ')),
          "text",
          "Enter services separated by commas"
        )}

        {/* Staff Capacity */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Staff Capacity</h2>
          <div className="space-y-4">
            {Object.entries(signupData.staffCapacity).map(([key, value]) =>
              renderInputField(key, key, value as number, handleStaffCapacityChange, "number")
            )}
          </div>
        </div>

        {/* Checkbox for Ambulance and Telemedicine Services */}
        <div>
          <label className="block text-sm font-medium mb-2">Available Services</label>
          <div className="flex items-center space-x-4">
            {["ambulanceServices", "telemedicineServices"].map((service) => (
              <label key={service} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={(signupData as any)[service]}
                  onChange={(e) => handleBooleanChange(service as keyof typeof signupData, e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2 capitalize">{service.replace(/([A-Z])/g, ' $1')}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
