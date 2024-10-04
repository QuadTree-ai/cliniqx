import { useState, useEffect } from 'react';
import { CustomerInfo } from '@/types/customer';

export function useCustomerData() {
  const [customer, setCustomer] = useState<CustomerInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (typeof window === 'undefined') {
        // Server-side
        const { getCustomerData } = await import('./server-data');
        const data = await getCustomerData();
        setCustomer(data);
      } else {
        // Client-side
        // Implement client-side data fetching if needed
      }
    }
    fetchData();
  }, []);

  return customer;
}
