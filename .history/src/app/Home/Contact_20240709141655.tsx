/* Contact.tsx */
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
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
              rows="4"
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
  );
}
