// src/components/ProgressComponent.tsx
import React, { useEffect, useState } from 'react';

const ProgressComponent: React.FC = () => {
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/progress');
        if (response.ok) {
          const data = await response.json();
          setProgress(data.progress);
        } else {
          setError('Failed to fetch progress');
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
        setError('Error fetching progress');
      }
    };

    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Progress</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {progress !== null ? (
        <p>Progress: {progress}%</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProgressComponent;
