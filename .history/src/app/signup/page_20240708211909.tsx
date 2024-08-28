import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "pharmacy-signup",
    title: "I'm a Pharmacy",
    link: "/pharmacy-signup",
    description: "Register your pharmacy to manage inventory, process orders, and connect with customers.",
    signupText: "Pharmacy Signup",
    imgSrc: "/pharmacy.jpeg",
  },
  {
    id: "hospital-signup",
    title: "I'm a Hospital",
    link: "/hospital-signup",
    description: "Sign up your hospital to streamline operations, from patient management to billing.",
    signupText: "Hospital Signup",
    imgSrc: "/hospital.jpeg",
  },
  {
    id: "doctor-signup",
    title: "I'm a Doctor",
    link: "/doctor-signup",
    description: "Join as a doctor to connect with patients and manage your appointments.",
    signupText: "Doctor Signup",
    imgSrc: "/doctor.jpeg",
  },
  {
    id: "customer-signup",
    title: "I'm a Customer",
    link: "/customer-signup",
    description: "Join as a customer to access personalized services and exclusive offers.",
    signupText: "Customer Signup",
    imgSrc: "/customer.jpeg",
  },
];

const DropdownItem = ({ title, link, description, signupText, imgSrc }) => (
  <div className="group relative">
    <button className="rounded-md py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
      {title}
    </button>
    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-gray-200 p-4 flex items-center justify-center">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-l" />
        </div>
        <div className="col-span-2 p-4">
          <Link href={link} passHref>
            <Button className="w-full text-left text-black bg-gray-200 hover:bg-gray-300 mb-2">
              {signupText}
            </Button>
          </Link>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function MainSignup() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <div className="flex space-x-4">
            {signupOptions.map(option => (
              <DropdownItem key={option.id} {...option} />
            ))}
          </div>
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
