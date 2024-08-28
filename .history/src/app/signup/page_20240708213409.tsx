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

      <div className="container mx-auto py-24 flex flex-col items-center justify-center space-y-10">
        {signupOptions.map((option) => (
          <Card key={option.id} className="relative overflow-hidden w-full max-w-4xl transition-all duration-300 bg-white rounded-lg shadow-lg">
            <img src={option.imgSrc} alt={option.title} className="w-full h-96 object-cover" />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
              <h2 className="text-4xl font-bold text-white mb-2">{option.title}</h2>
              <p className="text-lg text-white mb-4">{option.description}</p>
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
