import React, { useEffect, useRef } from 'react';
import HumanAnatomyFront from './anatomyFront';
import { bodyParts } from './bodyParts';

// Define the type for the props
interface ClickableAnatomyProps {
  onPartClick: (partId: string) => void;  // Properly type the 'onPartClick' prop
}

const ClickableAnatomy: React.FC<ClickableAnatomyProps> = ({ onPartClick }) => {
  const ref = useRef<SVGSVGElement | null>(null);  // Ensure the ref is typed to SVGSVGElement or null

  useEffect(() => {
    const svgElement = ref.current;
    if (!svgElement) return;

    const parts = bodyParts.map(partId => svgElement.querySelector(`#${partId}`)).filter(Boolean) as HTMLElement[];
    
    parts.forEach(part => {
      const enterHandler = () => part.classList.add('hover:fill-blue-300', 'hover:stroke-blue-700', 'hover:stroke-2');
      const leaveHandler = () => part.classList.remove('hover:fill-blue-300', 'hover:stroke-blue-700', 'hover:stroke-2');
      const clickHandler = () => onPartClick(part.id);

      part.addEventListener('mouseenter', enterHandler);
      part.addEventListener('mouseleave', leaveHandler);
      part.addEventListener('click', clickHandler);

      part.style.cursor = 'pointer';

      // Proper cleanup in useEffect
      return () => {
        part.removeEventListener('mouseenter', enterHandler);
        part.removeEventListener('mouseleave', leaveHandler);
        part.removeEventListener('click', clickHandler);
      };
    });
  }, [onPartClick]);

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />
    </div>
  );
};

export default ClickableAnatomy;
