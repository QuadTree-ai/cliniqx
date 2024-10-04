import { CheckCircle, Shield, Heart, User, Users, Briefcase } from "lucide-react";

export const plans = [
  {
    title: "Basic Plan",
    price: "₹599/month",
    description: "Buyer + 3 family members\nCore EHR features (view/share medical records, basic insights)",
    icon: User,
    benefits: [
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
    ],
  },
  {
    title: "Premium Plan",
    price: "₹1099/month",
    description: "Buyer + 5 family members\nCore features + advanced AI-based health insights and priority customer support",
    icon: Users,
    benefits: [
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
    ],
  },
  {
    title: "Single Add-on Plan",
    price: "₹149/month",
    description: "Per additional family member. Allows flexibility for customers to add more family members beyond the basic or premium plan.",
    icon: User,
    benefits: [
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
    ],
  },
  {
    title: "Enterprise Plan",
    price: "Contact Us",
    description: "Book and schedule a call for enterprise solutions.",
    link: "https://calendly.com/priteshraj41/30min",
    icon: Briefcase,
    benefits: [
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
    ],
  },
];
