import { useRouter } from 'next/router';
import DashboardLayout from './layout';
import HomePage from './home/page';
import OrdersPage from './orders/page'; // Assuming these pages exist
import ProductsPage from './products/page';
import CustomersPage from './customers/page';
import AnalyticsPage from './analytics/page';
import SettingsPage from './settings/page';

const pages = {
  "/dashboard": <HomePage />,
  "/dashboard/orders": <OrdersPage />,
  "/dashboard/products": <ProductsPage />,
  "/dashboard/customers": <CustomersPage />,
  "/dashboard/analytics": <AnalyticsPage />,
  "/dashboard/settings": <SettingsPage />,
};

export default function Dashboard() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <DashboardLayout>
      {pages[pathname] || <HomePage />}
    </DashboardLayout>
  );
}
