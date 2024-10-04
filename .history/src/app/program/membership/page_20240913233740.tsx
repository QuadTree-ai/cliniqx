"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { User, Users, Briefcase, CheckCircle, Shield, Heart } from "lucide-react";

const plans = [
  {
    title: "Basic Plan",
    price: "₹599/month",
    description: "Buyer + 3 family members\nCore EHR features (view/share medical records, basic insights)",
  },
  {
    title: "Premium Plan",
    price: "₹1099/month",
    description: "Buyer + 5 family members\nCore features + advanced AI-based health insights and priority customer support",
  },
  {
    title: "Single Add-on Plan",
    price: "₹149/month",
    description: "Per additional family member. Allows flexibility for customers to add more family members beyond the basic or premium plan.",
  },
  {
    title: "Enterprise Plan",
    price: "Contact Us",
    description: "Book and schedule a call for enterprise solutions.",
    link: "https://calendly.com/priteshraj41/30min",
  },
];

const keyPoints = [
  {
    icon: CheckCircle,
    title: "Comprehensive Coverage",
    description: "Access to a wide range of health services including consultations, diagnostics, and treatments.",
  },
  {
    icon: Shield,
    title: "Priority Appointments",
    description: "Enjoy priority booking for all your medical appointments, ensuring you get timely care.",
  },
  {
    icon: Heart,
    title: "Personalized Health Plans",
    description: "Get personalized health plans tailored to your specific needs and health goals.",
  },
];

const MembershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-12">
        <h1 className="text-4xl font-extrabold text-left text-white mb-8">
          CliniQX Membership Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 p-4 rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">{plan.title}</CardTitle>
                <CardDescription className="text-white mt-2">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mt-2">{plan.description}</p>
              </CardContent>
              <CardFooter>
                {plan.link ? (
                  <a href={plan.link} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center py-2">
                    Schedule Call
                  </a>
                ) : (
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Choose Plan
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex flex-col items-start space-y-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 p-6 rounded-lg">
                <Icon className="w-8 h-8 text-blue-500" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">{point.title}</h2>
                  <p className="text-white mt-2">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
