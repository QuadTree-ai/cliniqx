import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { signupOptions } from "./signupOptions";

export default function MainSignup() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <Link href="/customer-signup" passHref>
            <Button className="rounded-md py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              I'm a Customer
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto py-24 flex items-center justify-between space-x-6">
        {signupOptions.map((option) => (
          <Card key={option.id} className="relative overflow-hidden w-1/3 transition-all duration-300 bg-white rounded-lg shadow-lg">
            <img src={option.imgSrc} alt={option.title} className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h2 className="text-2xl font-bold text-white mb-2">{option.title}</h2>
              <p className="text-sm text-white mb-4">{option.description}</p>
              <Link href={option.link} passHref>
                <Button className="rounded-md py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                  {option.signupText}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
