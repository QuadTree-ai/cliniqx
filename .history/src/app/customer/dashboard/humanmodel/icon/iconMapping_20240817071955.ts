import { iconsMap } from './anatomyicons'; // Ensure this path matches your actual file structure

// Using TypeScript's Record utility type for a clean and safe type definition
export type IconMap = Record<string, keyof typeof iconsMap>;

export const iconMapping: IconMap = {
  brain: 'Brain',
  heart: 'Heart',
  lungs: 'Lungs',
  kidneys: 'Kidney',
  eyes: 'Eye',
  thymus: 'Muscle', // No specific icon for thymus, using Muscle as a placeholder
  thyroid: 'Muscle', // No specific icon for thyroid, using Muscle as a placeholder
  spleen: 'Muscle', // No specific icon for spleen, using Muscle as a placeholder
  pancreas: 'Muscle', // No specific icon for pancreas, using Muscle as a placeholder
  stomach: 'Stomach',
  liver: 'Liver',
  gallbladder: 'Muscle', // No specific icon for gallbladder, using Muscle as a placeholder
  smallIntestine: 'Muscle', // No specific icon for small intestine, using Muscle as a placeholder
  largeIntestine: 'Muscle', // No specific icon for large intestine, using Muscle as a placeholder
  appendix: 'Muscle', // No specific icon for appendix, using Muscle as a placeholder
  skeleton: 'Skeleton',
  tibia: 'Muscle', // No specific icon for tibia, using Muscle as a placeholder
  fibula: 'Muscle', // No specific icon for fibula, using Muscle as a placeholder
  femur: 'Muscle', // No specific icon for femur, using Muscle as a placeholder
  patella: 'Knee',
  foot: 'Muscle', // No specific icon for foot, using Muscle as a placeholder
  pelvis: 'Muscle', // No specific icon for pelvis, using Muscle as a placeholder
  sacrum: 'Muscle', // No specific icon for sacrum, using Muscle as a placeholder
  coccyx: 'Muscle', // No specific icon for coccyx, using Muscle as a placeholder
  scapulae: 'Muscle', // No specific icon for scapulae, using Muscle as a placeholder
  spine: 'Muscle', // No specific icon for spine, using Muscle as a placeholder
  ribs: 'Ribcage',
  sternum: 'Muscle', // No specific icon for sternum, using Muscle as a placeholder
  skull: 'Skeleton',
  mandible: 'Skeleton',
  clavicle: 'Muscle', // No specific icon for clavicle, using Muscle as a placeholder
  radius: 'Muscle', // No specific icon for radius, using Muscle as a placeholder
  ulna: 'Muscle', // No specific icon for ulna, using Muscle as a placeholder
  humerus: 'Muscle', // No specific icon for humerus, using Muscle as a placeholder
  handCarpals: 'Hand',
  metacarpals: 'Hand',
  phalanges: 'Hand',
  circulatorySystem: 'Heart' // Assuming a representative icon
};

export default iconMapping;