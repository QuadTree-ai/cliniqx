import React from 'react';
import { GiBrain, GiHeartOrgan, GiLungs, GiHand } from 'react-icons/gi';
import { LucideEye, LucideHand } from 'lucide-react';

// Mapping icon names to their corresponding components
const iconsMap = {
  Brain: GiBrain,
  Heart: GiHeartOrgan,
  Lungs: GiLungs,
  Eye: LucideEye,
  Hand: GiHand,
  Stomach: GiBrain, // Replace with the actual stomach icon when available
  Muscle: LucideHand, // Replace with the actual muscle icon when available
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
