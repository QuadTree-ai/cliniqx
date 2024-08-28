import Link from "next/link";
import { SetStateAction, useState } from 'react';
import { Button } from "@/components/ui/button";
import { User, Package, Hospital } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form"; // Assuming Form is a provided component from shadcn
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "customer-signup",
    title: "Customer Signup",
    description: "Join as a customer to access personalized services and exclusive offers.",
    icon: <User className="text-blue-600 w-16 h-16 mb-4" />,
    imgSrc: "/path/to/customer-image.jpg",
  },
  {
    id: "pharmacy-signup",
    title: "Pharmacy Signup",
    description: "Register your pharmacy to manage inventory, process orders, and connect with customers.",
    icon: <Package className="text-green-600 w-16 h-16 mb-4" />,
    imgSrc: "/path/to/pharmacy-image.jpg",
  },
  {
    id: "hospital-signup",
    title: "Hospital Signup",
    description: "Sign up your hospital to streamline operations, from patient management to billing.",
    icon: <Hospital className="text-red-600 w-16 h-16 mb-4" />,
    imgSrc: "/path/to/hospital-image.jpg",
  },
];

export default function MainSignup() {
  const [activeForm, setActiveForm] = useState(null);

  const toggleForm = (id: string | SetStateAction<null>) => {
    setActiveForm(activeForm === id ? null : id);
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll" style={{ scrollBehavior: 'smooth' }}>
      <nav className="bg-white fixed w-full z-10 top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      {signupOptions.map((option) => (
        <div key={option.id} className="h-screen flex items-center justify-center snap-start">
          <Card className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg shadow-lg">
            <img src={option.imgSrc} alt={`${option.title} Image`} className="w-32 h-32 rounded-full mb-4"/>
            {option.icon}
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{option.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{option.description}</p>
            <Button className={`rounded-md py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200`}
                    onClick={() => toggleForm(option.id)}>
              {activeForm === option.id ? 'Close Form' : 'Sign Up'}
            </Button>
            {activeForm === option.id && (
              <Form id={option.id} />
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
