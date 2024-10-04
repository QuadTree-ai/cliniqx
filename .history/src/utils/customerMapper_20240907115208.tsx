import { CustomerInfo as APICustomerInfo } from '@/types/api';
import { CustomerInfo as UICustomerInfo } from '@/types/ui';

export function mapCustomerInfoToUI(apiCustomer: APICustomerInfo): UICustomerInfo {
  return {
    ...apiCustomer,
    image: apiCustomer.image || '',
    age: apiCustomer.age || 0,
    diseases: apiCustomer.diseases || [],
    location: apiCustomer.location || '',
  };
}
