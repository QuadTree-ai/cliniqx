import React, { useEffect, useRef } from 'react';
import HumanAnatomyFront from './anatomyFront';
import { bodyParts } from './bodyParts';

interface ClickableAnatomyProps {
  onPartClick: (partId: string) => void;
}

const ClickableAnatomy: React.FC<ClickableAnatomyProps> = ({ onPartClick }) => {
  const ref = useRef<HTMLElement>(null);  // Changed to HTMLElement to be more generic

  useEffect(() => {
    const svgElement = ref.current as SVGSVGElement;  // Cast to SVGSVGElement here
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

      return () => {
        part.removeEventListener('mouseenter', enterHandler);
        part.removeEventListener('mouseleave', leaveHandler);
        part.removeEventListener('click', clickHandler);
      };
    });
  }, [onPartClick]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront ref={ref} className="w-full h-auto" /> 
    </div>
  );
};

export default ClickableAnatomy;
