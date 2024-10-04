import { useState, useEffect } from 'react';
import axios, { AxiosError, CancelTokenSource } from 'axios';
import { DashboardData } from '../types';

const initialDashboardData: DashboardData = {
  recentTests: [],
  invoices: [],
  patientInfo: null,
  testTypeDistribution: [],
  revenue: 0,
  patientAgeDistribution: [],
  patientStats: null,
};

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialDashboardData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/dashboard', { cancelToken: source.token });
        if (response.data) {
          setDashboardData(response.data);
        } else {
          throw new Error('No data received from the server');
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          setError(err as AxiosError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();

    return () => {
      source.cancel('Component unmounted');
    };
  }, []);

  return { dashboardData, isLoading, error };
};
