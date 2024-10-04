import { CheckCircle, Shield, Heart, User, Users, Briefcase, Star, Calendar, Tag, Phone, Activity, Award, MapPin, Clock, Zap, Database, Lock, Headphones, FileText, Layers } from "lucide-react";

export const userPlans = [
  {
    title: "Free Plan",
    price: "₹0/month",
    icon: User,
    benefits: [
      { icon: CheckCircle, title: "Single user access" },
      { icon: Shield, title: "Basic EHR features" },
      { icon: Heart, title: "Limited health insights" },
      { icon: Calendar, title: "Basic appointment scheduling" },
      { icon: Clock, title: "14-day trial period" },
      { icon: Zap, title: "Access to community features" },
    ],
  },
  {
    title: "Basic Plan",
    price: "₹599/month",
    icon: User,
    benefits: [
      { icon: Users, title: "Buyer + 3 family members" },
      { icon: Heart, title: "Enhanced health insights" },
      { icon: Calendar, title: "Advanced appointment scheduling" },
      { icon: Shield, title: "Full EHR access and sharing" },
      { icon: Tag, title: "Priority customer support" },
      { icon: Phone, title: "24/7 telehealth access" },
      { icon: Activity, title: "Basic wellness programs" },
    ],
  },
  {
    title: "Premium Plan",
    price: "₹1099/month",
    icon: Users,
    benefits: [
      { icon: Star, title: "Buyer + 5 family members" },
      { icon: Calendar, title: "AI-powered health insights" },
      { icon: Tag, title: "VIP customer support" },
      { icon: Phone, title: "Unlimited telehealth consultations" },
      { icon: Heart, title: "Personalized health plans" },
      { icon: Shield, title: "Comprehensive health coverage" },
      { icon: Activity, title: "Advanced wellness programs" },
      { icon: Database, title: "Health data analytics" },
    ],
  },
  {
    title: "Single Add-on",
    price: "₹149/month",
    icon: User,
    benefits: [
      { icon: CheckCircle, title: "Add one additional family member" },
      { icon: Phone, title: "Extended family coverage" },
      { icon: Heart, title: "Personalized health insights" },
      { icon: Calendar, title: "Flexible scheduling options" },
    ],
  },
];

export const enterprisePlans = [
  {
    title: "Small Business",
    price: "Contact Us",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/small-business",
    benefits: [
      { icon: Users, title: "Up to 50 employees" },
      { icon: Shield, title: "Enhanced security features" },
      { icon: Headphones, title: "Dedicated support team" },
      { icon: Activity, title: "Employee wellness programs" },
      { icon: Database, title: "Basic analytics and reporting" },
    ],
  },
  {
    title: "Corporate",
    price: "Custom Pricing",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/corporate",
    benefits: [
      { icon: Users, title: "51-500 employees" },
      { icon: Lock, title: "Advanced security and compliance" },
      { icon: Headphones, title: "24/7 premium support" },
      { icon: Activity, title: "Customized wellness initiatives" },
      { icon: Database, title: "Advanced analytics and insights" },
      { icon: FileText, title: "Custom integration options" },
    ],
  },
  {
    title: "Enterprise",
    price: "Tailored Solutions",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/enterprise",
    benefits: [
      { icon: Users, title: "500+ employees" },
      { icon: Shield, title: "Enterprise-grade security" },
      { icon: Layers, title: "Multi-tier admin controls" },
      { icon: Award, title: "Dedicated account manager" },
      { icon: Activity, title: "Comprehensive health programs" },
      { icon: Database, title: "Advanced data analytics platform" },
      { icon: MapPin, title: "Global coverage options" },
    ],
  },
];