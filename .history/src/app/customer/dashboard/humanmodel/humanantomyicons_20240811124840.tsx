// src/app/customer/dashboard/humanmodel/humananatomyicons.tsx

import React from 'react';

// Importing icons from lucide-react
import { Heart as LucideHeart, Brain as LucideBrain, Eye as LucideEye, Hand as LucideHand } from 'lucide-react';

// Importing icons from tabler-icons-react
import { Heart as TablerHeart, Brain as TablerBrain, Eye as TablerEye } from 'tabler-icons-react';

// Importing icons from react-icons (gi pack)
import { GiHeartOrgan, GiBrain, GiLungs, GiHand } from 'react-icons/gi';

// Mapping icon names to their corresponding components
const iconsMap = {
  Brain: GiBrain,
  Heart: GiHeartOrgan,
  Lungs: GiLungs,
  Eye: LucideEye,
  Hand: GiHand,
  Stomach: LucideBrain, // Replace with actual stomach icon if available
  Muscle: LucideHand, // Replace with actual muscle icon if available
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
