import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "customer-signup",
    title: "Customer Signup",
    link: "/customer-signup",
  },
  {
    id: "pharmacy-signup",
    title: "Pharmacy Signup",
    link: "/pharmacy-signup",
  },
  {
    id: "hospital-signup",
    title: "Hospital Signup",
    link: "/hospital-signup",
  },
];

export default function MainSignup() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll" style={{ scrollBehavior: 'smooth' }}>
      <nav className="bg-white fixed w-full z-10 top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      {signupOptions.map((option) => (
        <div key={option.id} className="h-screen flex items-center justify-center snap-start">
          <Card className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{option.title}</h2>
            <Link href={option.link} passHref>
              <Button className="rounded-md py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                Sign Up
              </Button>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
}
