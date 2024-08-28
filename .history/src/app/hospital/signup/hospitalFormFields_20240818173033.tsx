import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Example field configurations
const fieldConfigurations = {
  general: [
    { label: "Hospital Name", name: "hospitalName", type: "text", placeholder: "Enter Hospital Name" },
    { label: "Website", name: "website", type: "text", placeholder: "Enter Website URL" },
    { label: "Hospital Type", name: "hospitalType", type: "text", placeholder: "General, Specialty, Teaching, etc." },
    { label: "Accreditation", name: "accreditation", type: "text", placeholder: "Enter Accreditation" },
  ],
  contact: [
    { label: "Phone Number", name: "phoneNumber", type: "tel", placeholder: "Enter Phone Number" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter Email Address" },
    { label: "Fax", name: "fax", type: "text", placeholder: "Enter Fax Number (Optional)" },
    { label: "Toll-Free Number", name: "tollFreeNumber", type: "text", placeholder: "Enter Toll-Free Number (Optional)" },
  ],
  address: [
    { label: "Street", name: "street", type: "text", placeholder: "Enter Street" },
    { label: "City", name: "city", type: "text", placeholder: "Enter City" },
    { label: "State", name: "state", type: "text", placeholder: "Enter State" },
    { label: "Postal Code", name: "postalCode", type: "text", placeholder: "Enter Postal Code" },
    { label: "Country", name: "country", type: "text", placeholder: "Enter Country" },
  ],
  staffCapacity: [
    { label: "Doctors", name: "doctors", type: "number", placeholder: "Enter Number of Doctors" },
    { label: "Nurses", name: "nurses", type: "number", placeholder: "Enter Number of Nurses" },
    { label: "Technicians", name: "technicians", type: "number", placeholder: "Enter Number of Technicians" },
    { label: "Admin Staff", name: "adminStaff", type: "number", placeholder: "Enter Number of Admin Staff" },
  ],
};

// Helper function to render input fields
const renderInputField = (field: any, value: string | number, handleChange: any) => (
  <div key={field.name} className="mb-4">
    <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
      {field.label}
    </Label>
    <Input
      id={field.name}
      name={field.name}
      type={field.type}
      value={value}
      onChange={handleChange}
      placeholder={field.placeholder}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

// Helper function to render checkboxes
const renderCheckboxField = (field: any, value: boolean, handleChange: any) => (
  <div key={field.name} className="flex items-center mb-4">
    <Checkbox
      id={field.name}
      checked={value}
      onCheckedChange={(checked: boolean) => handleChange({ target: { name: field.name, value: checked } })}
    />
    <Label htmlFor={field.name} className="ml-2 text-sm font-medium text-gray-700">
      {field.label}
    </Label>
  </div>
);

// Helper function to render select fields
const renderSelectField = (field: any, value: string, options: string[], handleChange: any) => (
  <div key={field.name} className="mb-4">
    <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
      {field.label}
    </Label>
    <Select
      value={value}
      onValueChange={(val) => handleChange({ target: { name: field.name, value: val } })}
    >
      <SelectTrigger>
        <SelectValue placeholder={field.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

// Main component for form fields
export const HospitalFormFields = ({ signupData, handleChange }: any) => {
  return (
    <div>
      {/* General Information */}
      <h3 className="text-lg font-semibold mb-4">General Information</h3>
      {fieldConfigurations.general.map((field) =>
        renderInputField(field, signupData[field.name], handleChange)
      )}

      {/* Contact Information */}
      <h3 className="text-lg font-semibold mt-6 mb-4">Contact Information</h3>
      {fieldConfigurations.contact.map((field) =>
        renderInputField(field, signupData.contact[field.name], (e: any) => handleChange(e, "contact"))
      )}

      {/* Address Information */}
      <h3 className="text-lg font-semibold mt-6 mb-4">Address Information</h3>
      {fieldConfigurations.address.map((field) =>
        renderInputField(field, signupData.address[field.name], (e: any) => handleChange(e, "address"))
      )}

      {/* Staff Capacity */}
      <h3 className="text-lg font-semibold mt-6 mb-4">Staff Capacity</h3>
      {fieldConfigurations.staffCapacity.map((field) =>
        renderInputField(field, signupData.staffCapacity[field.name], (e: any) => handleChange(e, "staffCapacity"))
      )}

      {/* Checkbox Example */}
      <h3 className="text-lg font-semibold mt-6 mb-4">Services</h3>
      {renderCheckboxField({ label: "Ambulance Services", name: "ambulanceServices" }, signupData.ambulanceServices, handleChange)}
      {renderCheckboxField({ label: "Telemedicine Services", name: "telemedicineServices" }, signupData.telemedicineServices, handleChange)}
    </div>
  );
};
