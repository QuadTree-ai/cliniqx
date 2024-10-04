"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { userPlans, enterprisePlans } from "./membershipconst";
import PlanCard from "./PlanCard";
import { Button } from "@/components/ui/button";
import { CompareArrows } from "lucide-react";

const MembershipPage: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

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
        
        <Button
          onClick={() => setShowComparison(!showComparison)}
          className="mx-auto flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <CompareArrows className="w-5 h-5" />
          <span>{showComparison ? "Hide Comparison" : "Compare Plans"}</span>
        </Button>

        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-x-auto"
          >
            {/* Add comparison table here */}
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
                <PlanCard plan={plan} />
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
                <PlanCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MembershipPage;