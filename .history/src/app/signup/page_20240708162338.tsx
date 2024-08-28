import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Hospital, User } from "lucide-react";
import { Card} from "@/components/ui/card";
import { HoverCard } from "@/components/ui/hover-card";
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "customer-signup",
    title: "Customer Signup",
    description: "Join as a customer to access personalized services and exclusive offers.",
    icon: <User className="text-blue-600 w-16 h-16 mb-4" />,
    link: "/customer-signup",
    buttonClass: "bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200",
    detail: "Get access to personalized care, track your orders, and receive updates directly.",
  },
  {
    id: "pharmacy-signup",
    title: "Pharmacy Signup",
    description: "Register your pharmacy to manage inventory, process orders, and connect with customers.",
    icon: <Package className="text-green-600 w-16 h-16 mb-4" />,
    link: "/pharmacy-signup",
    buttonClass: "bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-200",
    detail: "Streamline your operations, expand your reach, and increase your service efficiency.",
  },
  {
    id: "hospital-signup",
    title: "Hospital Signup",
    description: "Sign up your hospital to streamline operations, from patient management to billing.",
    icon: <Hospital className="text-red-600 w-16 h-16 mb-4" />,
    link: "/hospital-signup",
    buttonClass: "bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-200",
    detail: "Enhance patient care with advanced tools for scheduling, billing, and clinical management.",
  },
];

export default function MainSignup() {
  const [hovered, bind] = useHover();

  return (
    <div>
      <nav className="bg-white fixed w-full z-10 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto mr-4" />
        </div>
      </nav>

      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
          <p className="text-gray-600 mb-12">Choose your signup category below.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signupOptions.map((option) => (
              <Card key={option.id} className="flex flex-col items-center p-6 shadow-xl hover:shadow-2xl transition duration-300" {...bind}>
                {option.icon}
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{option.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500 mb-4">{option.detail}</p>
                <Link href={option.link}>
                  <Button className={option.buttonClass}>{option.title}</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
