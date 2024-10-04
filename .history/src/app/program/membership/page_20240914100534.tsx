"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { userPlans, enterprisePlans, Plan } from "./membershipconst";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { GitCompareArrows, Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const PlanCard = dynamic(() => import('./PlanCard'), {
  loading: () => <p>Loading...</p>,
});

const MembershipPage: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  const calculateYearlyPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
    return `₹${(price * 10).toLocaleString()}/year`;
  };

  const ComparisonTable: React.FC<{ plans: Plan[] }> = ({ plans }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3">Feature</th>
            {plans.map((plan) => (
              <th key={plan.title} className="px-6 py-3">{plan.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans[0].benefits.map((benefit, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="px-6 py-4">{benefit.title}</td>
              {plans.map((plan) => (
                <td key={`${plan.title}-${index}`} className="px-6 py-4">
                  {plan.benefits[index] ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CliniQX Membership Plans
        </motion.h1>
        
        <div className="flex justify-center items-center space-x-4">
          <span className="text-white">Monthly</span>
          <Switch checked={isYearly} onCheckedChange={togglePricing} />
          <span className="text-white">Yearly (2 months free)</span>
        </div>

        <Button
          onClick={() => setShowComparison(!showComparison)}
          className="mx-auto flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <GitCompareArrows className="w-5 h-5" />
          <span>{showComparison ? "Hide Comparison" : "Compare Plans"}</span>
        </Button>

        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-x-auto"
          >
            <ComparisonTable plans={userPlans} />
          </motion.div>
        )}
        
        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            User Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PlanCard 
                  plan={{
                    ...plan,
                    price: isYearly ? calculateYearlyPrice(plan.price) : plan.price
                  }} 
                  isEnterprise={false}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Enterprise Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterprisePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              >
                <PlanCard plan={plan} isEnterprise={true} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MembershipPage;