"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const plans = [
  {
    title: "Basic Plan",
    price: "₹499",
    description: "Access to basic features and services.",
  },
  {
    title: "Premium Plan",
    price: "₹999",
    description: "Access to premium features and services.",
  },
  {
    title: "Enterprise Plan",
    price: "Contact Us",
    description: "Book and schedule a call for enterprise solutions.",
    link: "https://calendly.com/priteshraj41/30min",
  },
];

const MembershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
};

export default MembershipPage;
