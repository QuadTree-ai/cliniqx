"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { plans } from "./membershipconst";

const MembershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-12">
        <h1 className="text-4xl font-extrabold text-left text-white mb-8">
          CliniQX Membership Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card key={index} className="w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 p-4 rounded-lg shadow-md">
                <CardHeader className="flex items-center space-x-4">
                  <Icon className="w-8 h-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-xl font-bold text-white">{plan.title}</CardTitle>
                    <CardDescription className="text-white mt-2">{plan.price}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 space-y-4">
                    {plan.benefits.map((benefit, benefitIndex) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div key={benefitIndex} className="flex items-start space-x-2">
                          <BenefitIcon className="w-6 h-6 text-blue-500" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
