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
    description: "Register your pharmacy to manage inventory, process orders, and connect with customers.",
    signupText: "Pharmacy Signup"
  },
  {
    id: "hospital-signup",
    title: "I'm a Hospital",
    link: "/hospital-signup",
    description: "Sign up your hospital to streamline operations, from patient management to billing.",
    signupText: "Hospital Signup"
  },
  {
    id: "customer-signup",
    title: "I'm a Customer",
    link: "/customer-signup",
    description: "Join as a customer to access personalized services and exclusive offers.",
    signupText: "Customer Signup"
  },
];

const NavButton = ({ href, children, className }) => (
  <Link href={href} passHref>
    <Button className={`rounded-md py-2 px-4 transition-colors duration-200 ${className}`}>
      {children}
    </Button>
  </Link>
);

const SignupNavItem = ({ title, link, description, signupText }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className="rounded-md py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
      {title}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="p-4 bg-white rounded shadow-lg mt-2">
      <NavButton href={link} className="w-full text-left text-black bg-gray-200 hover:bg-gray-300 mb-2">
        {signupText}
      </NavButton>
      <p className="text-sm text-gray-500">{description}</p>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

export default function MainSignup() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <NavigationMenu className="flex space-x-4">
            {signupOptions.slice(0, 2).map(option => (
              <SignupNavItem key={option.id} {...option} />
            ))}
            <NavigationMenuItem>
              <NavButton href={signupOptions[2].link} className="text-white bg-black">
                {signupOptions[2].title}
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
