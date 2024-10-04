import { useState, useCallback, useMemo } from 'react';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from '../types';
import { useHandlers } from '../handle';

export const useCustomerSearch = () => {
  const [identifier, setIdentifier] = useState<Identifier>({ phone: '', cliniqx: '' });
  const [searchState, setSearchState] = useState<
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: CustomerInfo }
    | { status: 'error'; error: string }
  >({ status: 'idle' });

  const { handleIdentifierChange: handleIdentifierChangeFromHandlers, handleSearch: handleSearchFromHandlers } = useHandlers();

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const handleSearch = useCallback(async () => {
    setSearchState({ status: 'loading' });
    try {
      const result = await handleSearchFromHandlers(identifier);
      if (result) {
        setSearchState({ status: 'success', data: result });
      } else {
        setSearchState({ status: 'error', error: 'Customer not found' });
      }
    } catch (error) {
      setSearchState({ status: 'error', error: 'An error occurred while searching' });
    }
  }, [identifier, handleSearchFromHandlers]);

  const isLoading = searchState.status === 'loading';
  const customerInfo = searchState.status === 'success' ? searchState.data : null;
  const error = searchState.status === 'error' ? searchState.error : null;

  return useMemo(() => ({
    identifier,
    isLoading,
    customerInfo,
    error,
    handleIdentifierChange,
    handleSearch,
  }), [identifier, isLoading, customerInfo, error, handleIdentifierChange, handleSearch]);
};
