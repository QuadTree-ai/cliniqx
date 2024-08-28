import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the import path according to your file structure
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assume we have a Card component
import { cn } from '@/lib/utils'; // Utility function for conditional classnames
import { ShoppingCart, Package, Hospital } from 'lucide-react'; // Using lucide-react for icons
import Logo from '../Logo'; // Adjust the import path according to your file structure
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MainSignup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-6xl w-full border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-2xl font-semibold text-gray-700">Signup Portal</h2>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">Create Your Account</h1>
        <p className="text-center text-gray-600 mb-12">
          Choose your signup category below to get started.
        </p>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
          <Card className="flex flex-col items-center bg-blue-50 p-6">
            <CardHeader>
              <ShoppingCart className="text-blue-600 w-16 h-16 mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-700 mb-4">Customer Signup</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/customer-signup">
                <Button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center bg-green-50 p-6">
            <CardHeader>
              <Package className="text-green-600 w-16 h-16 mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-700 mb-4">Pharmacy Signup</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/pharmacy-signup">
                <Button className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-200">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center bg-red-50 p-6">
            <CardHeader>
              <Hospital className="text-red-600 w-16 h-16 mb-4" />
              <CardTitle className="text-2xl font-semibold text-gray-700 mb-4">Hospital Signup</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/hospital-signup">
                <Button className="bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-200">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-6">Or Create Your Account Here</h2>
          <form className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col mb-4">
              <Label htmlFor="fullName" className="mb-2 text-gray-700">Full Name</Label>
              <Input id="fullName" type="text" className="border-gray-300 rounded-md bg-white" required />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="email" className="mb-2 text-gray-700">Email</Label>
              <Input id="email" type="email" className="border-gray-300 rounded-md bg-white" required />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="password" className="mb-2 text-gray-700">Password</Label>
              <Input id="password" type="password" className="border-gray-300 rounded-md bg-white" required />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="confirmPassword" className="mb-2 text-gray-700">Confirm Password</Label>
              <Input id="confirmPassword" type="password" className="border-gray-300 rounded-md bg-white" required />
            </div>
            <div className="flex flex-col mb-4">
              <Label htmlFor="phone" className="mb-2 text-gray-700">Phone Number</Label>
              <Input id="phone" type="tel" className="border-gray-300 rounded-md bg-white" required />
            </div>
            <div className="flex items-center justify-center col-span-full mt-6">
              <Button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
