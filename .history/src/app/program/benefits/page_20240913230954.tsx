import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Calendar, Tag, Phone, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Comprehensive Health Coverage",
    description: "Get access to a wide range of health services including consultations, diagnostics, and treatments.",
    icon: ShieldCheck,
  },
  {
    title: "Priority Appointments",
    description: "Enjoy priority booking for all your medical appointments, ensuring you get timely care.",
    icon: Calendar,
  },
  {
    title: "Exclusive Discounts",
    description: "Receive exclusive discounts on various health services and products.",
    icon: Tag,
  },
  {
    title: "24/7 Telehealth Access",
    description: "Consult with healthcare professionals anytime, anywhere with our 24/7 telehealth service.",
    icon: Phone,
  },
  {
    title: "Personalized Health Plans",
    description: "Get personalized health plans tailored to your specific needs and health goals.",
    icon: Heart,
  },
  {
    title: "Wellness Programs",
    description: "Participate in wellness programs designed to improve your overall health and well-being.",
    icon: Star,
  },
];

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-12">
        <motion.h1
          className="text-4xl font-extrabold text-left text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CliniQX Membership Benefits
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-start space-y-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Icon className="w-8 h-8 text-blue-500" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">{benefit.title}</h2>
                  <p className="text-white mt-2">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="text-left">
          <Button className="mt-12 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Join CliniQX Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;