import { CheckCircle, Shield, Heart, User, Users, Briefcase, Star, Calendar, Tag, Phone } from "lucide-react";

export const plans = [
  {
    title: "Basic Plan",
    price: "₹599/month",
    description: "Buyer + 3 family members\nCore EHR features (view/share medical records, basic insights)",
    icon: User,
    benefits: [
      {
        icon: CheckCircle,
        title: "Basic Health Coverage",
        description: "Access to essential health services including consultations and diagnostics.",
      },
      {
        icon: Shield,
        title: "Standard Appointments",
        description: "Book appointments with standard priority.",
      },
      {
        icon: Heart,
        title: "Basic Health Plans",
        description: "Receive basic health plans tailored to your needs.",
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
        icon: Star,
        title: "Premium Health Coverage",
        description: "Access to a wide range of premium health services including advanced diagnostics.",
      },
      {
        icon: Calendar,
        title: "Priority Appointments",
        description: "Enjoy priority booking for all your medical appointments.",
      },
      {
        icon: Tag,
        title: "Exclusive Discounts",
        description: "Receive exclusive discounts on various health services and products.",
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
        title: "Additional Coverage",
        description: "Extend your health coverage to additional family members.",
      },
      {
        icon: Phone,
        title: "24/7 Telehealth Access",
        description: "Consult with healthcare professionals anytime, anywhere.",
      },
      {
        icon: Heart,
        title: "Personalized Health Plans",
        description: "Get personalized health plans for each additional member.",
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
        title: "Comprehensive Enterprise Coverage",
        description: "Access to a wide range of health services tailored for enterprises.",
      },
      {
        icon: Shield,
        title: "Enterprise Priority Appointments",
        description: "Enjoy priority booking for all your enterprise medical appointments.",
      },
      {
        icon: Heart,
        title: "Enterprise Health Plans",
        description: "Get personalized health plans tailored to your enterprise needs.",
      },
    ],
  },
];
