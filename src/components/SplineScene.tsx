'use client';

import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = '' }: SplineSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline
        scene={scene}
        onLoad={(spline) => {
          console.log('Spline scene loaded');
        }}
        onError={(error) => {
          console.error('Spline scene error:', error);
        }}
      />
    </div>
  );
}