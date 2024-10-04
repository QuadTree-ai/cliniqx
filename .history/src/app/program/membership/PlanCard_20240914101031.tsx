import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Plan } from "./membershipconst";

interface PlanCardProps {
  plan: Plan;
  isEnterprise: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isEnterprise }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-700 overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-bl-full opacity-10" />
        <CardHeader className="relative pb-6">
          <div className="absolute top-3 right-3 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
          <CardDescription className="text-2xl font-bold text-blue-300 mt-1">
            {plan.price}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {plan.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.title}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-4">
          {isEnterprise ? (
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm transition-all duration-300">
                Schedule a Call
              </Button>
            </a>
          ) : (
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm transition-all duration-300">
              Get Started
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PlanCard;
