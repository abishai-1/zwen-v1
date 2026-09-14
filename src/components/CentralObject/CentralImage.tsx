import React from 'react';
import { SectionData } from '../../types';

interface CentralImageProps {
  currentSection: SectionData;
  progress: number;
}

export const CentralImage: React.FC<CentralImageProps> = ({ currentSection, progress }) => {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#1a1c20]">
      {/* Background Topographic Image */}
      <img
        src={currentSection.centralImageUrl}
        alt={currentSection.title}
        className="w-full h-full object-cover object-center filter saturate-125 contrast-110 brightness-95 scale-105 transition-all duration-700 ease-out"
        style={{
          transform: `scale(${1.05 + progress * 0.15}) rotate(${progress * 12}deg)`,
        }}
      />

      {/* Sci-Fi Color Grading / Duotone Film Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-[#00e5ff]/5 mix-blend-overlay pointer-events-none" />

      {/* Moving Scanline Laser */}
      <div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none opacity-60 shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"
        style={{
          top: `${((progress * 300) % 100)}%`,
          transition: 'top 0.1s linear',
        }}
      />

      {/* Reticle / Crosshair Overlay (Matching Reference Image) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Circular Reticle Ring */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-white/40 border-dashed animate-spin" style={{ animationDuration: '60s' }} />
        
        {/* Middle Solid Reticle with Ticks */}
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-white/50 flex items-center justify-center">
          <div className="w-full h-[1px] bg-white/30" />
          <div className="h-full w-[1px] bg-white/30 absolute" />
        </div>

        {/* Center Target Box [ + ] */}
        <div className="absolute w-12 h-12 border border-white/80 flex items-center justify-center">
          <div className="w-2 h-2 bg-white" />
          {/* Target Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
        </div>

        {/* Topographic Elevation Coordinates Overlay */}
        <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>{currentSection.telemetry.coordinates}</span>
        </div>

        <div className="absolute top-6 right-6 font-mono text-[8px] text-white/80 bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
          BEARING {currentSection.telemetry.bearing}°
        </div>
      </div>
    </div>
  );
};
