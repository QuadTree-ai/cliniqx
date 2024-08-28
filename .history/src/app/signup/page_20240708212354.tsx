import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/app/Logo";
import { signupOptions } from "@/signupOptions";

export default function MainSignup() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll" style={{ scrollBehavior: 'smooth' }}>
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
        </div>
      </nav>

      <div className="fixed top-1/2 transform -translate-y-1/2 left-4 z-10 flex flex-col space-y-2">
        {signupOptions.map((option, index) => (
          <a key={option.id} href={`#section-${index}`} className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors duration-200"></a>
        ))}
      </div>

      {signupOptions.map((option, index) => (
        <div key={option.id} id={`section-${index}`} className="snap-start flex items-center justify-center h-screen bg-gray-100">
          <Card className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <img src={option.imgSrc} alt={option.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">{option.title}</h2>
            <p className="text-lg text-gray-500 mb-4">{option.description}</p>
            <Link href={option.link} passHref>
              <Button className="rounded-md py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                {option.signupText}
              </Button>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
}
