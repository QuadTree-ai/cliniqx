import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust the import path according to your file structure
import { ShoppingCart, Package, Hospital, User } from "lucide-react"; // Using lucide-react for icons
import Logo from "@/app/Logo"; // Adjust the import path according to your file structure

export default function MainSignup() {
  return (
    <div>
      {/* Custom Navbar */}
      <nav className="bg-white fixed w-full z-10 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Logo className="w-24 h-auto mr-4" />
          </div>
        </div>
      </nav>

      <div className="min-h-screen pt-20 bg-gradient-to-r from-blue-50 to-purple-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-600">Choose your signup category below.</p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center">
              <User className="text-blue-600 w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Customer Signup</h2>
              <Link href="/customer-signup">
                <Button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200">
                  Customer Signup
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <Package className="text-green-600 w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Pharmacy Signup</h2>
              <Link href="/pharmacy-signup">
                <Button className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-200">
                  Pharmacy Signup
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <Hospital className="text-red-600 w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Hospital Signup</h2>
              <Link href="/hospital-signup">
                <Button className="bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-200">
                  Hospital Signup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
