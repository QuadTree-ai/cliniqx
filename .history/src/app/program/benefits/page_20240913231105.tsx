import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Calendar, Tag, Phone, Heart, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
        <h1 className="text-4xl font-extrabold text-left text-white mb-8">
          CliniQX Membership Benefits
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                <Card className="w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 p-4 rounded-lg shadow-md">
                  <CardHeader className="flex items-center space-x-4">
                    <Icon className="w-6 h-6 text-blue-500" />
                    <CardTitle className="text-xl font-bold text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white mt-2">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
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