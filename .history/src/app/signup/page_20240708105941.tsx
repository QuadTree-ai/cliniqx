import Link from 'next/link';
import Button from '@/components/ui/button'; // Adjust the import path according to your file structure
import Logo from '../Logo'; // Adjust the import path according to your file structure

export default function MainSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <Logo className="w-24 h-auto" />
          <h2 className="text-xl font-semibold text-gray-700">Signup Portal</h2>
        </div>
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Choose your signup category below.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Customer Signup</h2>
            <Link href="/customer-signup">
              <Button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200">
                Customer Signup
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Pharmacy Signup</h2>
            <Link href="/pharmacy-signup">
              <Button className="bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 transition duration-200">
                Pharmacy Signup
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Hospital Signup</h2>
            <Link href="/hospital-signup">
              <Button className="bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition duration-200">
                Hospital Signup
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
