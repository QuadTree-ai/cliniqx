import { useState, useCallback, useMemo } from 'react';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from '../types';
import { useHandlers } from '../handle';
import { showCustomerNotFoundAlert, showErrorFetchingDataAlert, showInvalidInputAlert } from '../alerts';

type SearchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: CustomerInfo }
  | { status: 'error'; error: string };

export const useCustomerSearch = () => {
  const [identifier, setIdentifier] = useState<Identifier>({ phone: '', cliniqx: '' });
  const [searchState, setSearchState] = useState<SearchState>({ status: 'idle' });

  const { handleSearch: handleSearchFromHandlers } = useHandlers();

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const handleSearch = useCallback(async () => {
    if (identifier.phone.trim() === '' && identifier.cliniqx.trim() === '') {
      showInvalidInputAlert();
      return;
    }

    setSearchState({ status: 'loading' });
    try {
      const result = await handleSearchFromHandlers(
        identifier,
        (customerInfo: CustomerInfo) => {
          setSearchState({ status: 'success', data: customerInfo });
          return true;
        },
        () => setSearchState({ status: 'loading' })
      );
      if (!result) {
        setSearchState({ status: 'error', error: 'Customer not found' });
        showCustomerNotFoundAlert();
      }
    } catch (error) {
      setSearchState({ status: 'error', error: 'An error occurred while searching' });
      showErrorFetchingDataAlert();
    }
  }, [identifier, handleSearchFromHandlers]);

  return {
    identifier,
    isLoading: searchState.status === 'loading',
    customerInfo: searchState.status === 'success' ? searchState.data : null,
    error: searchState.status === 'error' ? searchState.error : null,
    handleIdentifierChange,
    handleSearch,
  };
};
