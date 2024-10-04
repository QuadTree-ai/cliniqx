import { useState, useCallback } from 'react';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from '../types';
import { useHandlers } from '../handle';

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
    setSearchState({ status: 'loading' });
    const result = await handleSearchFromHandlers(
      identifier,
      (customerInfo: CustomerInfo) => {
        setSearchState({ status: 'success', data: customerInfo });
      },
      () => setSearchState({ status: 'loading' })
    );
    if (!result) {
      setSearchState({ status: 'error', error: 'Customer not found' });
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
