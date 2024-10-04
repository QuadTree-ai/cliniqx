import { useState, useEffect } from 'react';
import axios from 'axios';
import { DashboardData } from '../types';

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    recentTests: [],
    invoices: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/dashboard');
        setDashboardData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred while fetching dashboard data'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { dashboardData, isLoading, error };
};
