import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlanCard = ({ plan }) => {
  const Icon = plan.icon;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-700 overflow-hidden">
        <CardHeader className="relative pb-10">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-bl-full flex items-center justify-center">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
          <CardDescription className="text-3xl font-extrabold text-blue-400">
            {plan.price}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {plan.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <li key={index} className="flex items-center space-x-2">
                  <BenefitIcon className="w-5 h-5 text-blue-400" />
                  <span>{benefit.title}</span>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter className="mt-4">
          {plan.link ? (
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center py-2 transition-colors duration-200"
            >
              Schedule a Call
            </a>
          ) : (
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
              Get Started
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PlanCard;
