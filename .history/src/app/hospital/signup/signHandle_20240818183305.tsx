// src/app/hospital/signup/SignupHandle.tsx

import React, { useState } from 'react';
import { HospitalSignupData } from './HospitalSignupData';

const SignupHandle: React.FC = () => {
  const [formData, setFormData] = useState<HospitalSignupData>({} as HospitalSignupData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here, you would typically handle the submission to an API or server
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="hospitalName"
        placeholder="Enter Hospital Name"
        onChange={handleChange}
        required
      />
      {/* Add more inputs based on your HospitalSignupData interface and your needs */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupHandle;
