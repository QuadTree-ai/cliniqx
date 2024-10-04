import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, CancelTokenSource } from 'axios';
import { DashboardData } from '../types';

const initialDashboardData: DashboardData = {
  recentTests: [],
  invoices: [],
  patientInfo: null,
  testTypeDistribution: [],
  revenue: [],
  patientAgeDistribution: [],
  patientStats: null,
};

interface DashboardDataState extends DashboardData {
  isLoading: Record<keyof DashboardData, boolean>;
}

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardDataState>({
    ...initialDashboardData,
    isLoading: Object.keys(initialDashboardData).reduce((acc, key) => {
      acc[key as keyof DashboardData] = true;
      return acc;
    }, {} as Record<keyof DashboardData, boolean>),
  });
  const [error, setError] = useState<Error | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async (source: CancelTokenSource) => {
    try {
      const response = await axios.get<DashboardData>('/api/dashboard', { cancelToken: source.token });
      if (response.data) {
        setDashboardData(prevState => ({
          ...response.data,
          isLoading: Object.keys(prevState.isLoading).reduce((acc, key) => {
            acc[key as keyof DashboardData] = false;
            return acc;
          }, {} as Record<keyof DashboardData, boolean>),
        }));
      } else {
        throw new Error('No data received from the server');
      }
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        setDashboardData(prevState => ({
          ...prevState,
          isLoading: Object.keys(prevState.isLoading).reduce((acc, key) => {
            acc[key as keyof DashboardData] = false;
            return acc;
          }, {} as Record<keyof DashboardData, boolean>),
        }));
      }
    }
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchDashboardData(source);
    return () => {
      source.cancel('Component unmounted');
    };
  }, [fetchDashboardData]);

  const refreshData = useCallback(() => {
    const source = axios.CancelToken.source();
    setDashboardData(prevState => ({
      ...prevState,
      isLoading: Object.keys(prevState.isLoading).reduce((acc, key) => {
        acc[key as keyof DashboardData] = true;
        return acc;
      }, {} as Record<keyof DashboardData, boolean>),
    }));
    fetchDashboardData(source);
  }, [fetchDashboardData]);

  return {
    dashboardData,
    isLoading: Object.values(dashboardData.isLoading).some(Boolean),
    error,
    refreshData,
    activeSection,
    setActiveSection,
  };
};
