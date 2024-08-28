import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";

const signupOptions = [
  {
    id: "pharmacy-signup",
    title: "I'm a Pharmacy",
    link: "/pharmacy-signup",
    infoLink: "/pharmacy-info",
  },
  {
    id: "hospital-signup",
    title: "I'm a Hospital",
    link: "/hospital-signup",
    infoLink: "/hospital-info",
  },
  {
    id: "customer-signup",
    title: "I'm a Customer",
    link: "/customer-signup",
  },
];

const NavButton = ({ href, children, className }) => (
  <Link href={href} passHref>
    <Button className={`rounded-md py-2 px-4 transition-colors duration-200 ${className}`}>
      {children}
    </Button>
  </Link>
);

const SignupNavItem = ({ title, link, infoLink }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className="rounded-md py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
      {title}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavButton href={link} className="w-full text-left text-black bg-gray-200 hover:bg-gray-300">
        Sign Up
      </NavButton>
      {infoLink && (
        <NavButton href={infoLink} className="w-full text-left text-black bg-gray-200 hover:bg-gray-300">
          More Info
        </NavButton>
      )}
    </NavigationMenuContent>
  </NavigationMenuItem>
);

export default function MainSignup() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <NavigationMenu>
            {signupOptions.slice(0, 2).map(option => (
              <SignupNavItem key={option.id} {...option} />
            ))}
            <NavigationMenuItem>
              <NavButton href="/customer-signup" className="text-white bg-blue-600 hover:bg-blue-700">
                I'm a Customer
              </NavButton>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </nav>

      <div className="pt-24 flex items-center justify-center min-h-screen">
        <Card className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome to Our Service</h2>
          <p className="text-sm text-gray-500 mb-4">
            Please choose an option from the menu above to sign up or get more information.
          </p>
        </Card>
      </div>
    </div>
  );
}
