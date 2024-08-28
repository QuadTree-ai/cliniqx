import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the import path according to your file structure
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assume we have a Card component
import { ShoppingCart, Package, Hospital, User } from 'lucide-react'; // Using lucide-react for icons
import Logo from '@/app/Logo'; // Adjust the import path according to your file structure

export default function MainSignup() {
  return (
    <div>
      {/* Custom Navbar */}
      <nav className="bg-white fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Logo className="w-24 h-auto mr-4" />
          </div>
        </div>
      </nav>

      <div className="min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-600">Choose your signup category below.</p>
          </div>

          <div id="customer-signup" className="mb-12">
            <Card className="flex flex-col items-center bg-blue-50 rounded-lg p-6">
              <CardHeader className="flex flex-col items-center">
                <User className="text-blue-600 w-16 h-16 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-700 mb-2">Customer Signup</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href="/customer-signup">
                  <Button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200">
                    Customer Signup
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div id="pharmacy-signup" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Pharmacy Signup</h2>
            <Card className="flex flex-col items-center bg-green-50 rounded-lg p-6">
              <CardHeader className="flex flex-col items-center">
                <Package className="text-green-600 w-16 h-16 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-700 mb-2">Pharmacy Signup</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href="/pharmacy-signup">
                  <Button className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-200">
                    Pharmacy Signup
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div id="hospital-signup" className="mb-12">
            <Card className="flex flex-col items-center bg-red-50 rounded-lg p-6">
              <CardHeader className="flex flex-col items-center">
                <Hospital className="text-red-600 w-16 h-16 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-700 mb-2">Hospital Signup</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href="/hospital-signup">
                  <Button className="bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-200">
                    Hospital Signup
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
