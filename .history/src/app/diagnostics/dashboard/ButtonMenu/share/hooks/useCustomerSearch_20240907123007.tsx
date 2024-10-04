import { useState, useCallback } from 'react';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from '../types';
import { useHandlers } from '../handle';

export const useCustomerSearch = (setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo | null>>) => {
  const [identifier, setIdentifier] = useState<Identifier>({ phone: '', cliniqx: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { handleIdentifierChange: handleIdentifierChangeFromHandlers, handleSearch: handleSearchFromHandlers } = useHandlers();

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(handleIdentifierChangeFromHandlers(e, type));
  }, [handleIdentifierChangeFromHandlers]);

  const handleSearch = useCallback(() => {
    handleSearchFromHandlers(identifier, setCustomerInfo, setIsLoading);
  }, [identifier, setCustomerInfo, handleSearchFromHandlers]);

  return {
    identifier,
    isLoading,
    handleIdentifierChange,
    handleSearch,
  };
};
