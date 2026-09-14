import React from 'react';
import { HeroCardConfig } from '../../types';

interface CentralImageProps {
  currentCard: HeroCardConfig;
  progress: number;
}

export const CentralImage: React.FC<CentralImageProps> = ({ currentCard, progress }) => {
  // Dynamic images representing the ZWEN core state
  const coreImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop', // Topographic Genesis
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1600&auto=format&fit=crop', // Creation Studio
    'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1600&auto=format&fit=crop', // Algorithmic Order
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop', // Omnidirectional Vision
  ];

  const activeImage = coreImages[parseInt(currentCard.number, 10) - 1] || coreImages[0];

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#1a1c20]">
      {/* Background Image */}
      <img
        src={activeImage}
        alt="ZWEN Core"
        className="w-full h-full object-cover object-center filter saturate-125 contrast-110 brightness-95 transition-all duration-700 ease-out"
        style={{
          transform: `scale(${1.05 + progress * 0.12}) rotate(${progress * 10}deg)`,
        }}
      />

      {/* Sci-Fi color grading */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 mix-blend-multiply pointer-events-none" />

      {/* Subtle reticle crosshair — visual, not textual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer dashed ring */}
        <div
          className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/30 border-dashed animate-spin"
          style={{ animationDuration: '60s' }}
        />

        {/* Inner crosshair */}
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/40 flex items-center justify-center">
          <div className="w-full h-[1px] bg-white/25" />
          <div className="h-full w-[1px] bg-white/25 absolute" />
        </div>

        {/* Center target box */}
        <div className="absolute w-10 h-10 border border-white/70 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white/90" />
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
        </div>
      </div>
    </div>
  );
};
