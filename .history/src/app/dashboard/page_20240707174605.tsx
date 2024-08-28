'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HomePage from './home/page';

export default function Dashboard() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(<HomePage />);

  useEffect(() => {
    const loadPage = async () => {
      switch (pathname) {
        case '/dashboard/orders':
          const OrdersPage = (await import('./orders/page')).default;
          setCurrentPage(<OrdersPage />);
          break;
        case '/dashboard/products':
          const ProductsPage = (await import('./products/page')).default;
          setCurrentPage(<ProductsPage />);
          break;
        case '/dashboard/customers':
          const CustomersPage = (await import('./customers/page')).default;
          setCurrentPage(<CustomersPage />);
          break;
        case '/dashboard/analytics':
          const AnalyticsPage = (await import('./analytics/page')).default;
          setCurrentPage(<AnalyticsPage />);
          break;
        case '/dashboard/settings':
          const SettingsPage = (await import('./settings/page')).default;
          setCurrentPage(<SettingsPage />);
          break;
        default:
          setCurrentPage(<HomePage />);
      }
    };
    loadPage();
  }, [pathname]);

  return (
    <>
      {currentPage}
    </>
  );
}
