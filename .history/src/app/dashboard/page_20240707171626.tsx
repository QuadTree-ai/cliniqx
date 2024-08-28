'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DashboardLayout from './layout';
import HomePage from './home/page';

export default function Dashboard() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(<HomePage />);

  useEffect(() => {
    switch (pathname) {
      case '/dashboard/orders':
        import('./orders/page').then((mod) => setCurrentPage(<mod.default />));
        break;
      case '/dashboard/products':
        import('./products/page').then((mod) => setCurrentPage(<mod.default />));
        break;
      case '/dashboard/customers':
        import('./customers/page').then((mod) => setCurrentPage(<mod.default />));
        break;
      case '/dashboard/analytics':
        import('./analytics/page').then((mod) => setCurrentPage(<mod.default />));
        break;
      case '/dashboard/settings':
        import('./settings/page').then((mod) => setCurrentPage(<mod.default />));
        break;
      default:
        setCurrentPage(<HomePage />);
    }
  }, [pathname]);

  return (
    <DashboardLayout>
      {currentPage}
    </DashboardLayout>
  );
}
