import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div ref={ref} style={{
        transform: inView ? 'none' : 'translateY(100px)',
        opacity: inView ? 1 : 0,
        transition: 'all 0.5s ease-out'
    }}>
      {children}
    </div>
  );
};

export default FadeInSection;