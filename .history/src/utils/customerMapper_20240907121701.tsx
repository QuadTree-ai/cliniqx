import { CustomerInfo as APICustomerInfo } from '@/utils/api';
import { CustomerInfo as UICustomerInfo } from '@/types/ui';

/**
 * Maps the API customer information to the UI customer information format.
 * Handles cases where the input might be null or undefined.
 *
 * @param {APICustomerInfo | null | undefined} apiCustomer - The customer information from the API
 * @returns {UICustomerInfo} The formatted customer information for the UI
 */
export function mapAPICustomerToUICustomer(apiCustomer: APICustomerInfo | null | undefined): UICustomerInfo {
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
  };
}
