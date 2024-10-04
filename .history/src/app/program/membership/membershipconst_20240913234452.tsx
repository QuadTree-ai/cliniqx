import { CheckCircle, Shield, Heart, User, Users, Briefcase, Star, Calendar, Tag, Phone, Activity, Award, MapPin } from "lucide-react";

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
      },
      {
        icon: Shield,
        title: "Standard Appointments",
      },
      {
        icon: Heart,
        title: "Basic Health Plans",
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
      },
      {
        icon: Calendar,
        title: "Priority Appointments",
      },
      {
        icon: Tag,
        title: "Exclusive Discounts",
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
        icon: Activity,
        title: "Additional Coverage",
      },
      {
        icon: Phone,
        title: "24/7 Telehealth Access",
      },
      {
        icon: Heart,
        title: "Personalized Health Plans",
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
        icon: Award,
        title: "Comprehensive Enterprise Coverage",
      },
      {
        icon: MapPin,
        title: "Enterprise Priority Appointments",
      },
      {
        icon: Heart,
        title: "Enterprise Health Plans",
      },
    ],
  },
];
