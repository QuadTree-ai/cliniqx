import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Package, Hospital } from "lucide-react";
import { HoverCard, ShadowBox } from "@/components/ui"; // Assuming ShadowBox is a shadcn component for better shadows
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "customer-signup",
    title: "Customer Signup",
    description: "Join as a customer to access personalized services and exclusive offers.",
    icon: <User className="text-blue-600 w-16 h-16 mb-4" />,
    link: "/customer-signup",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    detail: "Get access to personalized care, track your orders, and receive updates directly.",
    imgSrc: "/path/to/customer-image.jpg",
  },
  {
    id: "pharmacy-signup",
    title: "Pharmacy Signup",
    description: "Register your pharmacy to manage inventory, process orders, and connect with customers.",
    icon: <Package className="text-green-600 w-16 h-16 mb-4" />,
    link: "/pharmacy-signup",
    buttonClass: "bg-green-600 hover:bg-green-700",
    detail: "Streamline your operations, expand your reach, and increase your service efficiency.",
    imgSrc: "/path/to/pharmacy-image.jpg",
  },
  {
    id: "hospital-signup",
    title: "Hospital Signup",
    description: "Sign up your hospital to streamline operations, from patient management to billing.",
    icon: <Hospital className="text-red-600 w-16 h-16 mb-4" />,
    link: "/hospital-signup",
    buttonClass: "bg-red-600 hover:bg-red-700",
    detail: "Enhance patient care with advanced tools for scheduling, billing, and clinical management.",
    imgSrc: "/path/to/hospital-image.jpg",
  },
];

export default function MainSignup() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll" style={{ scrollBehavior: 'smooth' }}>
      <nav className="bg-white fixed w-full z-10 shadow-md top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      {signupOptions.map((option) => (
        <div key={option.id} className="h-screen flex items-center justify-center snap-start">
          <ShadowBox className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg shadow-xl">
            <img src={option.imgSrc} alt={`${option.title} Image`} className="w-32 h-32 rounded-full mb-4"/>
            {option.icon}
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{option.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{option.description}</p>
            <p className="text-sm text-gray-500 mb-4">{option.detail}</p>
            <Link href={option.link} passHref>
              <Button className={`rounded-md py-2 px-4 text-white ${option.buttonClass} transition-colors duration-200`}>{option.title}</Button>
            </Link>
          </ShadowBox>
        </div>
      ))}
    </div>
  );
}
