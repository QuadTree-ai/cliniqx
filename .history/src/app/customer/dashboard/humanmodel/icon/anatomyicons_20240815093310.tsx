import React from 'react';
import {
  GiBrain,
  GiHeartOrgan,
  GiLungs,
  GiHand,
  GiStomach,
  GiMuscleUp,
  GiSkeleton,
  GiLiver,
  GiKidneys,
  GiKneeCap,
  GiRibcage,
} from 'react-icons/gi'; // Game Icons
import { FaEye, FaTooth } from 'react-icons/fa'; // Font Awesome Icons
import { LucideHand, Eye } from 'lucide-react'; // Lucide React Icons

// Define a mapping of anatomy parts to icons
export const iconsMap = {
  Brain: GiBrain,
  Heart: GiHeartOrgan,
  Lungs: GiLungs,
  Eye: FaEye, // You can switch to LucideEye if preferred
  Hand: GiHand, // You can switch to LucideHand if preferred
  Stomach: GiStomach,
  Muscle: GiMuscleUp,
  Skeleton: GiSkeleton,
  Liver: GiLiver,
  Kidney: GiKidneys,
  Knee: GiKneeCap,
  Ribcage: GiRibcage,
  Tooth: FaTooth
};

type HumanAnatomyIconsProps = {
  icon: keyof typeof iconsMap; // Restrict the icon prop to valid keys in the iconsMap
  size?: number; // Optional size prop
  color?: string; // Optional color prop for the icon
};

const HumanAnatomyIcons: React.FC<HumanAnatomyIconsProps> = ({ icon, size = 24, color = "currentColor" }) => {
  // Look up the component from the iconsMap based on the provided icon name
  const IconComponent = iconsMap[icon];

  // If the icon is not found, return a placeholder or null
  if (!IconComponent) {
    console.warn(`Icon for ${icon} not found. Please ensure it's defined in the iconsMap.`);
    return null; // You can return a fallback icon or a message instead
  }

  // Render the found icon with the provided size and color
  return <IconComponent size={size} color={color} />;
};

export default HumanAnatomyIcons;
