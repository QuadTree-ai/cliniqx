import React from "react";
import { cn } from "@/lib/utils";
import { IconUsers, IconActivity, IconCurrencyRupee, IconShield, IconTrendingUp, IconCircle } from "@tabler/icons-react";

// Interface for the feature object
interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

// Features array
const features: Feature[] = [
  {
    title: "Nationwide Reach",
    description: "Access to a network spanning 1000+ cities across India.",
    icon: <IconUsers />,
  },
  {
    title: "Increase Customer Base",
    description: "Expand your customer base by 10x with our marketing strategies.",
    icon: <IconActivity />,
  },
  {
    title: "Boost Revenue",
    description: "CliniQX partners see an average increase of 60% in revenue.",
    icon: <IconCurrencyRupee />,
  },
  {
    title: "Operational Support",
    description: "24/7 support to help you manage day-to-day operations efficiently.",
    icon: <IconShield />,
  },
  {
    title: "Insightful Analytics",
    description: "Detailed analytics provide insights to optimize your business.",
    icon: <IconTrendingUp />,
  },
  {
    title: "Proven Trust",
    description: "Join a trusted network of healthcare providers.",
    icon: <IconCircle />,
  },
];

const WhyCliniQX: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Why should you partner with CliniQX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div
      className={cn(
        "flex flex-col border py-10 relative group bg-white shadow-lg hover:bg-gray-100 transition duration-300",
        "hover:shadow-xl"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-center">
        {icon}
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </div>
      <p className="text-sm max-w-xs relative z-10 px-10 text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default WhyCliniQX;
