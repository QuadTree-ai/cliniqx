import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";

const signupOptions = [
  {
    id: "customer-signup",
    title: "I'm a Customer",
    link: "/customer-signup",
  },
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
];

export default function MainSignup() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white fixed w-full z-10 top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <div className="flex space-x-4">
            {signupOptions.map((option) => (
              <Link key={option.id} href={option.link} passHref>
                <Button className="rounded-md py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                  {option.title}
                </Button>
              </Link>
            ))}
            <Link href="/book-consultation" passHref>
              <Button className="rounded-md py-2 px-4 text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 flex items-center justify-center min-h-screen">
        <div className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome to Our Service</h2>
          <p className="text-sm text-gray-500 mb-4">
            Please choose an option from the menu above to sign up or book a consultation.
          </p>
        </div>
      </div>
    </div>
  );
}
