import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Link from "next/link";
import { HomeIcon, ShoppingCartIcon, PackageIcon, UsersIcon, LineChartIcon, SettingsIcon, Package2Icon } from "@/components/icons";

const NAV_ITEMS = [
  { href: "/dashboard", icon: <HomeIcon className="h-6 w-6" />, label: "Dashboard" },
  { href: "/dashboard/orders", icon: <ShoppingCartIcon className="h-6 w-6" />, label: "Orders" },
  { href: "/dashboard/products", icon: <PackageIcon className="h-6 w-6" />, label: "Products" },
  { href: "/dashboard/customers", icon: <UsersIcon className="h-6 w-6" />, label: "Customers" },
  { href: "/dashboard/analytics", icon: <LineChartIcon className="h-6 w-6" />, label: "Analytics" },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            prefetch={false}
          >
            <Package2Icon className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">cliniqx-inevnt</span>
          </Link>
          {NAV_ITEMS.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                  prefetch={false}
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
}
