import { useCallback } from 'react';
import { showInvalidInputAlert, showCustomerNotFoundAlert, showErrorFetchingDataAlert } from './alerts';
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from './types';
import { mapAPICustomerToUICustomer } from '@/utils/customerMapper';

export const useHandlers = () => {
  const isValidIdentifier = useCallback((identifier: Identifier) => {
    return PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx);
  }, []);

  const handleSearch = useCallback(async (
    identifier: Identifier,
    onSuccess: (customerInfo: CustomerInfo) => void,
    onLoading: () => void
  ) => {
    if (!isValidIdentifier(identifier)) {
      showInvalidInputAlert();
      return false;
    }

    onLoading();
    try {
      const id = identifier.phone || identifier.cliniqx;
      const customerData = await fetchCustomerInfo(id);
      if (customerData) {
        const mappedCustomer = mapAPICustomerToUICustomer(customerData);
        onSuccess(mappedCustomer);
        return true;
      } else {
        showCustomerNotFoundAlert();
        return false;
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      showErrorFetchingDataAlert();
      return false;
    }
  }, [isValidIdentifier]);

  return {
    handleSearch,
  };
};
