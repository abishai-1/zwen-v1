import React, { useMemo } from 'react';
import { HeroCardConfig } from '../../types';
import { getInterpolatedShapes } from './MorphPathEngine';
import { CentralImage } from './CentralImage';
import { CentralTelemetry } from './CentralTelemetry';

interface CentralChassisProps {
  currentCard: HeroCardConfig;
  progress: number;
}

export const CentralChassis: React.FC<CentralChassisProps> = ({ currentCard, progress }) => {
  // Compute outer and inner concentric polygon coordinates dynamically
  const { outerPolygon, innerClipPathCss } = useMemo(() => {
    return getInterpolatedShapes(progress);
  }, [progress]);

  // Rotation: starts at 0deg (rhombus orientation), smoothly rotates +30deg during scroll zoom
  const rotation = progress * 30;
  const scale = 1.0 + progress * 0.28;

  return (
    <div 
      className="relative flex items-center justify-center pointer-events-auto gpu-layer"
      style={{
        width: 'min(72vw, 520px)',
        height: 'min(72vw, 520px)',
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transition: 'transform 0.05s linear',
      }}
    >
      {/* 1. SVG Dynamic Morphing Chassis Frame */}
      <svg 
        viewBox="0 0 430 430" 
        className="absolute inset-0 w-full h-full filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
      >
        <defs>
          <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F7F8F6" />
            <stop offset="100%" stopColor="#E6E8E5" />
          </linearGradient>
        </defs>

        {/* Outer Shadow Plate */}
        <polygon 
          points={outerPolygon} 
          fill="#9EA19D" 
          transform="translate(4, 7)"
          opacity="0.5"
        />

        {/* Main Solid Chassis Body (Matte White Sci-Fi Plate) */}
        <polygon 
          points={outerPolygon} 
          fill="url(#chassisGrad)" 
          stroke="#121316" 
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Dashed Secondary Technical Inset Line */}
        <polygon 
          points={outerPolygon} 
          fill="none" 
          stroke="#121316" 
          strokeWidth="1.2"
          strokeDasharray="10 4"
          transform="scale(0.95) translate(11, 11)"
          opacity="0.3"
        />

        {/* Corner alignment crosshair anchors */}
        <g stroke="#121316" strokeWidth="1" opacity="0.4">
          <line x1="200" y1="2" x2="200" y2="20" />
          <line x1="410" y1="215" x2="428" y2="215" />
          <line x1="200" y1="410" x2="200" y2="428" />
          <line x1="2" y1="215" x2="20" y2="215" />
        </g>
      </svg>

      {/* 2. Concentric Clipped Inner Viewport */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden shadow-inner transition-all duration-75"
        style={{
          clipPath: innerClipPathCss,
        }}
      >
        <CentralImage currentCard={currentCard} progress={progress} />
      </div>

      {/* 3. Outer HUD Telemetry Overlays: ZWEN CORE Badge, Telemetry, Radar, Dials */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <CentralTelemetry currentCard={currentCard} progress={progress} />
      </div>
    </div>
  );
};
