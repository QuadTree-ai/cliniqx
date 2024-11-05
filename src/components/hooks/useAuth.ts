// hooks/useAuth.ts
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface UseAuthProps {
  redirectTo?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useAuth = ({ redirectTo, onSuccess, onError }: UseAuthProps = {}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleAuth = useCallback(async (
    authFunction: () => Promise<void>,
    successMessage?: string
  ) => {
    setLoading(true);
    setError('');

    try {
      await authFunction();
      onSuccess?.();
      if (redirectTo) {
        router.push(redirectTo);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [router, redirectTo, onSuccess, onError]);

  return { loading, error, setError, handleAuth };
};