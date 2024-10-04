import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Plan } from "./membershipconst";

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-700 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-bl-full opacity-20 transform rotate-12" />
        <CardHeader className="relative pb-10">
          <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold">{plan.title}</CardTitle>
          <CardDescription className="text-3xl md:text-4xl font-extrabold text-blue-400 mt-2">
            {plan.price}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {plan.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.title}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-6">
          {plan.link ? (
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:translate-y-[-2px]">
                Schedule a Call
              </Button>
            </a>
          ) : (
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:translate-y-[-2px]">
              Get Started
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PlanCard;
