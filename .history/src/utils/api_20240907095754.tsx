import axios from 'axios';

// Define the customer info type
interface CustomerInfo {
  id: string;
  name: string;
  email: string;
  // Add other relevant fields
}

// Function to fetch customer info
export const fetchCustomerInfo = async (id: string): Promise<CustomerInfo | null> => {
  try {
    const response = await axios.get<CustomerInfo>(`/api/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customer info:', error);
    return null;
  }
};

// You can add other API-related functions here
