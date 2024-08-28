interface FormField {
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
    { label: 'Email', name: 'email', type: 'email', required: true },
    { label: 'Password', name: 'password', type: 'password', required: true },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password', required: true },
    { label: 'Store Image', name: 'storeImage', type: 'file', required: true },
    { label: 'Pin Code', name: 'pinCode', type: 'text', required: true },
    { label: 'Address', name: 'address', type: 'text', required: true },
    { label: 'Area', name: 'area', type: 'text', required: true },
    { label: 'City', name: 'city', type: 'text', required: true },
    { label: 'Country', name: 'country', type: 'text', options: ['India'], required: true },
  ];
  