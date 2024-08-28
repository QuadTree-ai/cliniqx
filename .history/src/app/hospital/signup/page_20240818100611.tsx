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

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Hospital Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hospital Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            value={signupData.hospitalName}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Hospital Name"
          />
        </div>

        {/* Address Fields */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <div className="space-y-4">
            {["street", "city", "state", "postalCode", "country"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={(signupData.address as any)[field]}
                  onChange={handleAddressChange}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Fields */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <div className="space-y-4">
            {["phoneNumber", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={(signupData.contact as any)[field]}
                  onChange={handleContactChange}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Administrator Information */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Administrator Information</h2>
          <div className="space-y-4">
            {["name", "role", "contactNumber", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={(signupData.administrator as any)[field]}
                  onChange={handleAdministratorChange}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Emergency Contact</h2>
          <div className="space-y-4">
            {["name", "phoneNumber"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={(signupData.emergencyContact as any)[field]}
                  onChange={handleEmergencyContactChange}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Number of Beds */}
        <div>
          <label className="block text-sm font-medium mb-1">Number of Beds</label>
          <input
            type="number"
            name="numberOfBeds"
            value={signupData.numberOfBeds}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Number of Beds"
          />
        </div>

        {/* Services Offered */}
        <div>
          <label className="block text-sm font-medium mb-1">Services Offered</label>
          <input
            type="text"
            value={signupData.services.join(', ')}
            onChange={(e) => handleArrayChange("services", e.target.value.split(', '))}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter services separated by commas"
          />
        </div>

        {/* Staff Capacity */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Staff Capacity</h2>
          <div className="space-y-4">
            {["doctors", "nurses", "technicians", "adminStaff"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                <input
                  type="number"
                  name={field}
                  value={(signupData.staffCapacity as any)[field]}
                  onChange={handleStaffCapacityChange}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`Enter number of ${field}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Checkbox for Ambulance and Telemedicine Services */}
        <div>
          <label className="block text-sm font-medium mb-2">Available Services</label>
          <div className="flex items-center space-x-4">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={signupData.ambulanceServices}
                  onChange={(e) => handleBooleanChange("ambulanceServices", e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2">Ambulance Services</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={signupData.telemedicineServices}
                  onChange={(e) => handleBooleanChange("telemedicineServices", e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2">Telemedicine Services</span>
              </label>
            </div>
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
