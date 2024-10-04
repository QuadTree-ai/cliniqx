import React, { useState } from 'react';

export default function HospitalOnboarding() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <h1>Hospital Onboarding</h1>
      {step === 1 && <Step1 nextStep={nextStep} />}
      
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 prevStep={prevStep} />}
    </div>
  );
}

function Step1({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <h2>Step 1: Hospital Information</h2>
      <form onSubmit={nextStep}>
        <label>
          Hospital Name:
          <input type="text" name="hospitalName" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

function Step2({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <form onSubmit={nextStep}>
        <label>
          Contact Person:
          <input type="text" name="contactPerson" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" required />
        </label>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

function Step3({ prevStep }: { prevStep: () => void }) {
  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <p>Please review your information before submitting.</p>
      {/* Display the collected information here */}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
}
