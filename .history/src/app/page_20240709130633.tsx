/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/app/Logo";
import { User, CheckCircle, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo className="w-24 h-auto" />
          <div className="space-x-4">
            <Link href="#features" passHref>
              <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Features
              </Button>
            </Link>
            <Link href="#services" passHref>
              <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Services
              </Button>
            </Link>
            <Link href="#testimonials" passHref>
              <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Testimonials
              </Button>
            </Link>
            <Link href="#contact" passHref>
              <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Welcome to CliniQX
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Revolutionizing Healthcare with Advanced EHR Solutions
          </p>
          <Link href="/signup" passHref>
            <Button className="rounded-md py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature 1</h3>
              <p className="text-gray-600">Description of the first feature.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature 2</h3>
              <p className="text-gray-600">Description of the second feature.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature 3</h3>
              <p className="text-gray-600">Description of the third feature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 1</h3>
              <p className="text-gray-600">Description of the first service.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 2</h3>
              <p className="text-gray-600">Description of the second service.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 3</h3>
              <p className="text-gray-600">Description of the third service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"This is a testimonial from a satisfied customer."</p>
              <h3 className="text-xl font-semibold text-gray-800">Customer Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"This is another testimonial from a happy client."</p>
              <h3 className="text-xl font-semibold text-gray-800">Client Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"More positive feedback from our users."</p>
              <h3 className="text-xl font-semibold text-gray-800">User Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <form className="w-full max-w-lg mx-auto space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="mt-2 p-3 border rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="mt-2 p-3 border rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                className="mt-2 p-3 border rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button className="w-full py-3 px-8 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Send Message
            </Button>
          </form>
          <div className="mt-12 text-gray-700">
            <p className="mb-2">
              <Phone className="inline-block mr-2" /> +123 456 7890
            </p>
            <p>
              <Mail className="inline-block mr-2" /> info@cliniqx.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
