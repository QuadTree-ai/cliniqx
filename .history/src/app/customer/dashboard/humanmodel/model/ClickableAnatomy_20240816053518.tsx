import React, { useEffect } from 'react';
import HumanAnatomyFront from './anatomyFront';

const ClickableAnatomy: React.FC<{ onPartClick: (partId: string) => void }> = ({ onPartClick }) => {
  useEffect(() => {
    // Select elements and assert them as HTMLElement to access style and other HTMLElement-specific properties
    const parts = document.querySelectorAll('.body-part') as NodeListOf<HTMLElement>;

    parts.forEach(part => {
      part.addEventListener('click', () => onPartClick(part.id));
      part.style.cursor = 'pointer'; // Now accessible because part is asserted as HTMLElement
    });

    return () => {
      parts.forEach(part => {
        part.removeEventListener('click', () => onPartClick(part.id));
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
