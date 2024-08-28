export interface FormField {
  label: string;
  name: string;
  type: string;
  required: boolean;
  options?: string[];
}

export const fields: FormField[] = [
  { label: 'Store Name', name: 'storeName', type: 'text', required: true },
  { label: 'License Number', name: 'licenseNumber', type: 'text', required: true },
  { label: 'GST Number', name: 'gstNumber', type: 'text', required: false },
  { label: 'Latitude', name: 'latitude', type: 'text', required: false },
  { label: 'Longitude', name: 'longitude', type: 'text', required: false },
  { label: 'Delivery System', name: 'deliverySystem', type: 'select', options: ['Yes', 'No', 'Own'], required: true },
  { label: 'Owner Name', name: 'ownerName', type: 'text', required: true },
  { label: 'Contact Number', name: 'contactNumber', type: 'text', required: true },
  { label: 'Alternate Contact Number', name: 'alternateContactNumber', type: 'text', required: false },
  { label: 'Email', name: 'email', type: 'email', required: true },
  { label: 'Password', name: 'password', type: 'password', required: true },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password', required: true },
  { label: 'Store Image', name: 'storeImage', type: 'file', required: true },
  { label: 'Pin Code', name: 'pinCode', type: 'text', required: true },
  { label: 'Address', name: 'address', type: 'text', required: true },
  { label: 'Area', name: 'area', type: 'text', required: true },
  { label: 'City', name: 'city', type: 'text', required: true },
  { label: 'State', name: 'state', type: 'text', required: true },
  { label: 'Country', name: 'country', type: 'select', options: ['India'], required: true },
  { label: 'Opening Hours', name: 'openingHours', type: 'text', required: true },
  { label: 'Closing Hours', name: 'closingHours', type: 'text', required: true },
  { label: 'Services Offered', name: 'servicesOffered', type: 'checkboxGroup', options: ['24/7 Service', 'Home Delivery', 'Online Consultation'], required: true },
  { label: 'Website', name: 'website', type: 'text', required: false },
];
