import React, { useEffect, useRef } from 'react';
import HumanAnatomyFront from './anatomyFront';
import { bodyParts } from '../../icon/bodyParts';

interface ClickableAnatomyProps {
  onPartClick: (partId: string) => void;
}

const ClickableAnatomy: React.FC<ClickableAnatomyProps> = ({ onPartClick }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgElement = ref.current;
    if (!svgElement) return;

    const parts = bodyParts.map(partId => svgElement.querySelector(`#${partId}`)).filter(Boolean) as HTMLElement[];

    // Define event handlers
    const enterHandler = (part: HTMLElement) => () => part.classList.add('hover:fill-blue-300', 'hover:stroke-blue-700', 'hover:stroke-2');
    const leaveHandler = (part: HTMLElement) => () => part.classList.remove('hover:fill-blue-300', 'hover:stroke-blue-700', 'hover:stroke-2');
    const clickHandler = (part: HTMLElement) => () => onPartClick(part.id);

    // Attach event handlers
    parts.forEach(part => {
      const enter = enterHandler(part);
      const leave = leaveHandler(part);
      const click = clickHandler(part);

      part.addEventListener('mouseenter', enter);
      part.addEventListener('mouseleave', leave);
      part.addEventListener('click', click);

      part.style.cursor = 'pointer';

      // Cleanup function
      return () => {
        part.removeEventListener('mouseenter', enter);
        part.removeEventListener('mouseleave', leave);
        part.removeEventListener('click', click);
      };
    });

    // Cleanup all event listeners when the component unmounts
    return () => {
      parts.forEach(part => {
        part.removeEventListener('mouseenter', enterHandler(part));
        part.removeEventListener('mouseleave', leaveHandler(part));
        part.removeEventListener('click', clickHandler(part));
      });
    };
  }, [onPartClick]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />
    </div>
  );
};

export default ClickableAnatomy;
