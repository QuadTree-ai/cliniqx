import DashboardLayout from './layout';
import { useRouter } from 'next/router';
import OrdersPage from './orders/page';
import ProductsPage from './products/page';
import CustomersPage from './customers/page';
import AnalyticsPage from './analytics/page';
import SettingsPage from './settings/page';
import HomePage from './home/page';

export default function Dashboard() {
  const router = useRouter();
  const { pathname } = router;

  let content;
  switch (pathname) {
    case '/dashboard/orders':
      content = <OrdersPage />;
      break;
    case '/dashboard/products':
      content = <ProductsPage />;
      break;
    case '/dashboard/customers':
      content = <CustomersPage />;
      break;
    case '/dashboard/analytics':
      content = <AnalyticsPage />;
      break;
    case '/dashboard/settings':
      content = <SettingsPage />;
      break;
    default:
      content = <HomePage />;
      break;
  }

  return (
    <DashboardLayout>
      {content}
    </DashboardLayout>
  );
}
