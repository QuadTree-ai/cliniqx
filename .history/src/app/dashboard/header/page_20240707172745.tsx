import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SearchIcon, PanelLeftIcon, Package2Icon, HomeIcon, LineChartIcon, PackageIcon, ShoppingCartIcon, UsersIcon, SettingsIcon } from "@/components/icons";
import Logo from "./Logo";

const NAV_ITEMS = [
  { href: "/dashboard", icon: <HomeIcon className="h-5 w-5" />, label: "Dashboard" },
  { href: "/dashboard/orders", icon: <ShoppingCartIcon className="h-5 w-5" />, label: "Orders" },
  { href: "/dashboard/products", icon: <PackageIcon className="h-5 w-5" />, label: "Products" },
  { href: "/dashboard/customers", icon: <UsersIcon className="h-5 w-5" />, label: "Customers" },
  { href: "/dashboard/analytics", icon: <LineChartIcon className="h-5 w-5" />, label: "Analytics" },
  { href: "/dashboard/settings", icon: <SettingsIcon className="h-5 w-5" />, label: "Settings" }
];

const BREADCRUMB_ITEMS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/orders", label: "Orders" },
  { label: "Recent Orders" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeftIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
            </Link>
            {NAV_ITEMS.map((item, index) => (
              <Link key={index} href={item.href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {BREADCRUMB_ITEMS.map((item, index) => (
            item.href ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link href={item.href} prefetch={false}>
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              </BreadcrumbItem>
            )
          ))}
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
            <img
              src="/placeholder.svg"
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
