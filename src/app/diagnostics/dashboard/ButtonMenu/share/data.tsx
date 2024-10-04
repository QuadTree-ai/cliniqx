import { useState, useEffect } from 'react';
import { CustomerInfo } from '@/types/customer';

export function useCustomerData() {
  const [customer, setCustomer] = useState<CustomerInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/customer');
        if (response.ok) {
          const data = await response.json();
          setCustomer(data);
        }
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    }
    fetchData();
  }, []);

  return customer;
}
