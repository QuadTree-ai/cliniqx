import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Hospital, User } from "lucide-react";
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "customer-signup",
    title: "Customer Signup",
    description: "Sign up as a customer",
    icon: <User className="text-blue-600 w-16 h-16 mb-4" />,
    link: "/customer-signup",
    buttonClass: "bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200",
  },
  {
    id: "pharmacy-signup",
    title: "Pharmacy Signup",
    description: "Sign up as a pharmacy",
    icon: <Package className="text-green-600 w-16 h-16 mb-4" />,
    link: "/pharmacy-signup",
    buttonClass: "bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-200",
  },
  {
    id: "hospital-signup",
    title: "Hospital Signup",
    description: "Sign up as a hospital",
    icon: <Hospital className="text-red-600 w-16 h-16 mb-4" />,
    link: "/hospital-signup",
    buttonClass: "bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-200",
  },
];

export default function MainSignup() {
  return (
    <div>
      <nav className="bg-white fixed w-full z-10 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto mr-4" />
        </div>
      </nav>

      <div className="min-h-screen pt-20 bg-gradient-to-r from-blue-50 to-purple-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
          <p className="text-gray-600 mb-12">Choose your signup category below.</p>

          <div className="flex flex-col items-center space-y-8">
            {signupOptions.map((option) => (
              <div key={option.id} className="flex flex-col items-center">
                {option.icon}
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{option.title}</h2>
                <Link href={option.link}>
                  <Button className={option.buttonClass}>{option.title}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
