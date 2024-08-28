import React from 'react';
import { GiBrain, GiHeartOrgan, GiLungs, GiHand, GiStomach, GiMuscleUp, GiSkeleton, GiLiver, GiKidneys, GiKneeCap, GiRibcage, GiSpine } from 'react-icons/gi'; // Game icons
import { FaEye, FaTooth } from 'react-icons/fa'; // Font Awesome icons
import { LucideHand, LucideFoot, LucideEye } from 'lucide-react'; // Lucide React icons

// Mapping icon names to their corresponding components
export const iconsMap = {
  Brain: GiBrain,
  Heart: GiHeartOrgan,
  Lungs: GiLungs,
  Eye: FaEye,
  Hand: GiHand, // Replace with LucideHand if you want to use Lucide's version
  Stomach: GiStomach,
  Muscle: GiMuscleUp,
  Skeleton: GiSkeleton,
  Liver: GiLiver,
  Kidney: GiKidneys,
  Knee: GiKneeCap,
  Ribcage: GiRibcage,
  Spine: GiSpine,
  Foot: LucideFoot,
  Tooth: FaTooth,
};

type HumanAnatomyIconsProps = {
  icon: keyof typeof iconsMap;
  size?: number;
};

const HumanAnatomyIcons: React.FC<HumanAnatomyIconsProps> = ({ icon, size = 24 }) => {
  const IconComponent = iconsMap[icon];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export default HumanAnatomyIcons;
