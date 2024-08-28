import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { signupOptions } from "./signupOptions";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function MainSignup() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      <div className="container mx-auto py-24 flex items-center justify-center">
        <div className="relative w-full">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
            <ArrowRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="space-y-10">
            {signupOptions.map((option) => (
              <Card key={option.id} className="relative overflow-hidden p-6 transition-all duration-300 bg-white rounded-lg shadow-lg">
                <img src={option.imgSrc} alt={option.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 bg-black bg-opacity-50 p-4 rounded-md">
                  <h2 className="text-4xl font-bold text-white mb-2">{option.title}</h2>
                  <p className="text-lg text-white mb-4">{option.description}</p>
                  <Link href={option.link} passHref>
                    <Button className="rounded-md py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                      {option.signupText}
                    </Button>
                  </Link>
                </div>
                <div className="absolute inset-0 bg-black opacity-25"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
