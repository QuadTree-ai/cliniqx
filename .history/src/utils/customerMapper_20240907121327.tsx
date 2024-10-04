import { CustomerInfo as APICustomerInfo } from '@/utils/api';
import { CustomerInfo as UICustomerInfo } from '@/types/ui';

export function mapCustomerInfoToUI(apiCustomer: APICustomerInfo | null | undefined): UICustomerInfo {
  if (!apiCustomer) {
    return {
      name: '',
      image: '',
      age: 0,
      diseases: [],
      location: '',
      phone: '',
      cliniqx: '',
    };
  }

  return {
    name: apiCustomer.name ?? '',
    image: apiCustomer.image ?? '',
    age: apiCustomer.age ?? 0,
    diseases: Array.isArray(apiCustomer.diseases) ? apiCustomer.diseases : [],
    location: apiCustomer.location ?? '',
    phone: apiCustomer.phone ?? '',
    cliniqx: apiCustomer.cliniqx ?? '',
  } as UICustomerInfo;
}
