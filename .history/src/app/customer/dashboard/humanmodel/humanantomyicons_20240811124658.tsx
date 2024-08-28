// src/app/customer/dashboard/humanmodel/humananatomyicons.tsx

import React from 'react';

// Importing icons from lucide-react
import { Heart as LucideHeart, Brain as LucideBrain, Eye as LucideEye, Hand as LucideHand } from 'lucide-react';

// Importing icons from tabler-icons-react
import { Heart as TablerHeart, Brain as TablerBrain, Eye as TablerEye } from 'tabler-icons-react';

// Importing icons from react-icons (gi pack)
import { GiHeartOrgan, GiBrain, GiLungs, GiHand } from 'react-icons/gi';

const icons = [
  { component: LucideHeart, label: 'Heart', source: 'Lucide' },
  { component: LucideBrain, label: 'Brain', source: 'Lucide' },
  { component: LucideEye, label: 'Eye', source: 'Lucide' },
  { component: LucideHand, label: 'Hand', source: 'Lucide' },

  { component: TablerHeart, label: 'Heart', source: 'Tabler' },
  { component: TablerBrain, label: 'Brain', source: 'Tabler' },
  { component: TablerEye, label: 'Eye', source: 'Tabler' },

  { component: GiHeartOrgan, label: 'Heart', source: 'React-Icons' },
  { component: GiBrain, label: 'Brain', source: 'React-Icons' },
  { component: GiLungs, label: 'Lungs', source: 'React-Icons' },
  { component: GiHand, label: 'Hand', source: 'React-Icons' },
];

const HumanAnatomyIcons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {icons.map(({ component: IconComponent, label, source }, index) => (
        <div key={index} className="flex flex-col items-center">
          <IconComponent size={32} />
          <p className="text-sm text-center mt-2">
            {label} <br /> ({source})
          </p>
        </div>
      ))}
    </div>
  );
};

export default HumanAnatomyIcons;
