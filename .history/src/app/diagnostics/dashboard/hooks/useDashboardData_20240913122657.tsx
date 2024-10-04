import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DashboardData } from '@/types/dashboard';

const initialDashboardData: DashboardData = {
  recentTests: [],
  invoices: [],
  patientInfo: null,
  testTypeDistribution: [],
  revenue: [],
  patientAgeDistribution: [],
  patientStats: null,
};

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialDashboardData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<DashboardData>('/api/dashboard');
      if (response.data) {
        setDashboardData(response.data);
      } else {
        throw new Error('No data received from the server');
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    dashboardData,
    isLoading,
    error,
    activeSection,
    setActiveSection,
    refreshData: fetchDashboardData,
  };
};
