import axios, { AxiosError } from 'axios';

// Define the customer info type
export interface CustomerInfo {
  id: string;
  name: string;
  email: string;
  image: string;
  age: number;
  diseases: string[];
  location: string;
  phone: string;
  cliniqx: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// Function to fetch customer info
export const fetchCustomerInfo = async (id: string): Promise<CustomerInfo | null> => {
  try {
    const response = await axios.get<CustomerInfo>(`${API_BASE_URL}/customers/${id}`, {
      timeout: 5000 // 5 seconds timeout
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error fetching customer info: ${error.message}`);
      if (error.response) {
        console.error(`Status: ${error.response.status}`);
        console.error(`Data: ${JSON.stringify(error.response.data)}`);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
    return null;
  }
};

// You can add other API-related functions here
