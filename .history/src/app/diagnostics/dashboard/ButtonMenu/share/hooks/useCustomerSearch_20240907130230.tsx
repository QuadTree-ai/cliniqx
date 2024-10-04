import { useState, useCallback, useMemo } from 'react';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from '../types';
import { useHandlers } from '../handle';
import debounce from 'lodash/debounce';

type SearchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: CustomerInfo }
  | { status: 'error'; error: string };

export const useCustomerSearch = () => {
  const [identifier, setIdentifier] = useState<Identifier>({ phone: '', cliniqx: '' });
  const [searchState, setSearchState] = useState<SearchState>({ status: 'idle' });

  const { handleIdentifierChange: handleIdentifierChangeFromHandlers, handleSearch: handleSearchFromHandlers } = useHandlers();

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (identifier: Identifier) => {
        setSearchState({ status: 'loading' });
        try {
          const result = await handleSearchFromHandlers(
            identifier,
            (customerInfo) => {
              setSearchState({ status: 'success', data: customerInfo });
              return true; // Return true to indicate success
            },
            () => setSearchState({ status: 'loading' })
          );
          if (!result) {
            setSearchState({ status: 'error', error: 'Customer not found' });
          }
        } catch (error) {
          setSearchState({ status: 'error', error: 'An error occurred while searching' });
        }
      }, 300),
    [handleSearchFromHandlers]
  );

  const handleSearch = useCallback(() => {
    debouncedSearch(identifier);
  }, [identifier, debouncedSearch]);

  return useMemo(
    () => ({
      identifier,
      isLoading: searchState.status === 'loading',
      customerInfo: searchState.status === 'success' ? searchState.data : null,
      error: searchState.status === 'error' ? searchState.error : null,
      handleIdentifierChange,
      handleSearch,
    }),
    [identifier, searchState, handleIdentifierChange, handleSearch]
  );
};
