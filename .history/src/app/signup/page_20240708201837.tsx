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
  },
  {
    id: "hospital-signup",
    title: "I'm a Hospital",
    link: "/hospital-signup",
  },
  {
    id: "customer-signup",
    title: "I'm a Customer",
    link: "/customer-signup",
  },
];

export default function MainSignup() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-md py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                I'm a Pharmacy
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/pharmacy-signup" passHref>
                  <Button className="w-full text-left py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                    Sign Up as Pharmacy
                  </Button>
                </Link>
                <Link href="/pharmacy-info" passHref>
                  <Button className="w-full text-left py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                    More Info for Pharmacy
                  </Button>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-md py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                I'm a Hospital
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/hospital-signup" passHref>
                  <Button className="w-full text-left py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                    Sign Up as Hospital
                  </Button>
                </Link>
                <Link href="/hospital-info" passHref>
                  <Button className="w-full text-left py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                    More Info for Hospital
                  </Button>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/customer-signup" passHref>
                <Button className="rounded-md py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                  I'm a Customer
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </nav>

      <div className="pt-24 flex items-center justify-center min-h-screen">
        <div className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome to Our Service</h2>
          <p className="text-sm text-gray-500 mb-4">
            Please choose an option from the menu above to sign up or get more information.
          </p>
        </div>
      </div>
    </div>
  );
}
