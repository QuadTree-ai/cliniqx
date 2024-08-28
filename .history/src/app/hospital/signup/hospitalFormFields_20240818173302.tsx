import React from "react";
import { Label, Input, Checkbox, Select } from "shadcn";
import hospitalOptions from './hospitalOptions.json';

const fieldConfigurations = {
  general: [
    { label: "Hospital Name", name: "hospitalName", type: "text", placeholder: "Enter Hospital Name" },
    { label: "Website", name: "website", type: "text", placeholder: "Enter Website URL" },
    { label: "Hospital Type", name: "hospitalType", type: "select", options: hospitalOptions.hospitalTypes },
    { label: "Accreditation", name: "accreditation", type: "text", placeholder: "Enter Accreditation" },
  ],
  contact: [
    { label: "Phone Number", name: "phoneNumber", type: "tel", placeholder: "Enter Phone Number" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter Email Address" },
    { label: "Fax", name: "fax", type: "text", placeholder: "Enter Fax Number", optional: true },
    { label: "Toll-Free Number", name: "tollFreeNumber", type: "text", placeholder: "Enter Toll-Free Number", optional: true },
  ],
  address: [
    { label: "Street", name: "street", type: "text", placeholder: "Enter Street" },
    { label: "City", name: "city", type: "text", placeholder: "Enter City" },
    { label: "State", name: "state", type: "text", placeholder: "Enter State" },
    { label: "Postal Code", name: "postalCode", type: "text", placeholder: "Enter Postal Code" },
    { label: "Country", name: "country", type: "text", placeholder: "Enter Country" },
  ],
};

export const HospitalFormFields = ({ signupData, handleChange }) => (
  <div className="space-y-6">
    {Object.entries(fieldConfigurations).map(([section, fields]) => (
      <div key={section}>
        <h3 className="font-semibold text-lg text-gray-200">{section}</h3>
        {fields.map((field) => (
          <div key={field.name} className="mb-3">
            <Label htmlFor={field.name} className="block text-sm font-medium text-gray-300">
              {field.label}
            </Label>
            {field.type === 'select' ? (
              <Select
                id={field.name}
                name={field.name}
                value={signupData[field.name]}
                onChange={(e) => handleChange({ target: { name: field.name, value: e } })}
                options={field.options.map((option) => ({ label: option, value: option }))}
                className="w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
              />
            ) : (
              <Input
                id={field.name}
                type={field.type}
                name={field.name}
                value={signupData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full p-2 rounded-md bg-gray-800 text-white border-gray-700"
              />
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);
