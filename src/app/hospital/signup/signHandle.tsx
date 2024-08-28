import React, { useState } from 'react';
import { HospitalSignupData, initialSignupData } from './HospitalSignupData';

const SignupHandle: React.FC = () => {
  const [formData, setFormData] = useState<HospitalSignupData>(initialSignupData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const nameParts = name.split('.');

    if (nameParts.length > 1) {
      // Check if the first level is an object before spreading
      setFormData(prevState => {
        const field = prevState[nameParts[0] as keyof HospitalSignupData];
        if (typeof field === 'object' && field !== null) {
          return {
            ...prevState,
            [nameParts[0]]: {
              ...field,
              [nameParts[1]]: value,
            },
          };
        } else {
          // If the field is not an object, return the previous state unchanged
          console.warn(`Field ${nameParts[0]} is not an object.`);
          return prevState;
        }
      });
    } else {
      // Handle top-level fields
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Hospital Name</label>
        <input
          type="text"
          name="hospitalName"
          placeholder="Enter Hospital Name"
          value={formData.hospitalName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Website</label>
        <input
          type="text"
          name="website"
          placeholder="Enter Website"
          value={formData.website || ''}
          onChange={handleChange}
        />
      </div>

      {/* Nested fields for address */}
      <div>
        <label>Street</label>
        <input
          type="text"
          name="address.street"
          placeholder="Enter Street"
          value={formData.address.street}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="address.city"
          placeholder="Enter City"
          value={formData.address.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          name="address.state"
          placeholder="Enter State"
          value={formData.address.state}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Postal Code</label>
        <input
          type="text"
          name="address.postalCode"
          placeholder="Enter Postal Code"
          value={formData.address.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          name="address.country"
          placeholder="Enter Country"
          value={formData.address.country}
          onChange={handleChange}
          required
        />
      </div>

      {/* Nested fields for contact */}
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="contact.phoneNumber"
          placeholder="Enter Phone Number"
          value={formData.contact.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="contact.email"
          placeholder="Enter Email"
          value={formData.contact.email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupHandle;
