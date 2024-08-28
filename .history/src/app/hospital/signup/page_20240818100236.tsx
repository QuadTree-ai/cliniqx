"use client"

// src/app/hospital/signup/page.tsx

import { useState } from 'react';
import { defaultHospitalSignupData, HospitalSignupData } from './signupData';

export default function HospitalSignupPage() {
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleAdministratorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      administrator: {
        ...prevData.administrator,
        [name]: value,
      },
    }));
  };

  const handleEmergencyContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      emergencyContact: {
        ...prevData.emergencyContact,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the data to your backend or handle it as needed
    console.log('Signup Data:', signupData);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hospital Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Street Address</label>
          <input
            type="text"
            name="street"
            value={signupData.address.street}
            onChange={handleAddressChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Street Address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={signupData.address.city}
            onChange={handleAddressChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter City"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            type="text"
            name="state"
            value={signupData.address.state}
            onChange={handleAddressChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter State"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={signupData.address.postalCode}
            onChange={handleAddressChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Postal Code"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={signupData.contact.phoneNumber}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Administrator Name</label>
          <input
            type="text"
            name="name"
            value={signupData.administrator.name}
            onChange={handleAdministratorChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Administrator Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Administrator Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={signupData.administrator.contactNumber}
            onChange={handleAdministratorChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Administrator Contact Number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Emergency Contact Name</label>
          <input
            type="text"
            name="name"
            value={signupData.emergencyContact.name}
            onChange={handleEmergencyContactChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Emergency Contact Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Emergency Contact Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={signupData.emergencyContact.phoneNumber}
            onChange={handleEmergencyContactChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter Emergency Contact Phone Number"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
