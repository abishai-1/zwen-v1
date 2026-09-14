import React from 'react';
import { sound } from '../../utils/audio';

export type TriangleCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface SoftTriangleCardProps {
  corner: TriangleCorner;
  number: string;
  sectionCode: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  arrowDir: '↗' | '↘' | '↖' | '↙';
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

export const SoftTriangleCard: React.FC<SoftTriangleCardProps> = ({
  corner,
  number,
  sectionCode,
  title,
  subtitle,
  category,
  tag,
  arrowDir,
  icon,
  isActive,
  onClick,
  progress,
}) => {
  // Compute floating offsets driven by scroll progress
  let offsetX = 0;
  let offsetY = 0;

  if (corner === 'top-left') {
    offsetX = -progress * 35;
    offsetY = -progress * 25;
  } else if (corner === 'top-right') {
    offsetX = progress * 35;
    offsetY = -progress * 25;
  } else if (corner === 'bottom-left') {
    offsetX = -progress * 35;
    offsetY = progress * 25;
  } else if (corner === 'bottom-right') {
    offsetX = progress * 35;
    offsetY = progress * 25;
  }

  // Soft triangular SVG paths with smoothly rounded corners (Width: 320, Height: 200)
  const getTrianglePath = (c: TriangleCorner) => {
    switch (c) {
      case 'top-left':
        // Soft rounded triangle pointing towards Top-Left (hypotenuse from bottom-left to top-right)
        return 'M 35 15 Q 15 15 15 35 L 15 170 Q 15 190 35 190 L 220 190 Q 245 190 260 175 L 305 130 Q 320 115 305 100 L 220 25 Q 205 15 185 15 Z';
      case 'top-right':
        // Soft rounded triangle pointing towards Top-Right
        return 'M 100 15 Q 80 15 65 30 L 15 80 Q 0 95 15 110 L 60 155 Q 75 170 95 170 L 285 170 Q 305 170 305 150 L 305 35 Q 305 15 285 15 Z';
      case 'bottom-left':
        // Soft rounded triangle pointing towards Bottom-Left
        return 'M 15 30 Q 15 10 35 10 L 285 10 Q 305 10 305 30 L 305 85 Q 305 105 290 120 L 235 175 Q 220 190 200 190 L 35 190 Q 15 190 15 170 Z';
      case 'bottom-right':
        // Soft rounded triangle pointing towards Bottom-Right
        return 'M 35 10 Q 15 10 15 30 L 15 85 Q 15 105 30 120 L 85 175 Q 100 190 120 190 L 285 190 Q 305 190 305 170 L 305 30 Q 305 10 285 10 Z';
    }
  };

  const pathD = getTrianglePath(corner);

  return (
    <div
      onClick={() => {
        sound.playClick();
        onClick();
      }}
      onMouseEnter={() => sound.playHover()}
      className={`group cursor-pointer pointer-events-auto transition-all duration-300 select-none gpu-layer ${
        isActive ? 'scale-105 z-30' : 'hover:scale-[1.02] opacity-90 hover:opacity-100 z-20'
      }`}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        width: '310px',
        height: '190px',
      }}
    >
      {/* Soft Triangle SVG Background Container with Layered Drop Shadows */}
      <svg
        viewBox="0 0 320 200"
        className={`absolute inset-0 w-full h-full filter transition-all duration-300 ${
          isActive
            ? 'drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
            : 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.22)]'
        }`}
      >
        <defs>
          <linearGradient id={`softTriGrad-${corner}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FAFAFA" />
            <stop offset="100%" stopColor="#ECEEED" />
          </linearGradient>
        </defs>

        {/* Outer Shadow Bevel */}
        <path
          d={pathD}
          fill="#A8AAA7"
          transform="translate(2, 4)"
          opacity="0.4"
        />

        {/* Main Solid White Soft-Triangle Body */}
        <path
          d={pathD}
          fill={`url(#softTriGrad-${corner})`}
          stroke={isActive ? '#121316' : 'rgba(18, 19, 22, 0.75)'}
          strokeWidth={isActive ? '3' : '2'}
          strokeLinejoin="round"
        />

        {/* Inner Subtle Inset Dashed Stroke */}
        <path
          d={pathD}
          fill="none"
          stroke="#121316"
          strokeWidth="1"
          strokeDasharray="8 4"
          transform="scale(0.93) translate(11, 7)"
          opacity="0.25"
        />
      </svg>

      {/* Foreground Content Card Layout */}
      <div className="relative z-10 w-full h-full p-5 flex flex-col justify-between text-black">
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-black/15 pb-2 font-mono text-[9px]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-black rounded-xs" />
            <span className="font-bold tracking-wider">SEC // {number}</span>
            <span className="text-black/50">{category}</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-[8px] text-black/60">
            <span>{sectionCode}</span>
            <span className="pattern-stripes w-6 h-2 inline-block opacity-60" />
          </div>
        </div>

        {/* Main Content: Icon Viewport + Title & Number */}
        <div className="grid grid-cols-12 gap-3 items-center my-auto">
          {/* Icon Viewport */}
          <div className="col-span-4 relative aspect-square rounded-xs overflow-hidden border border-black/30 bg-[#E8EAE7] shadow-inner flex items-center justify-center p-1">
            {icon}
            <div className="absolute inset-0.5 border border-white/60 pointer-events-none" />
            <div className="absolute bottom-0.5 left-0.5 font-mono text-[6px] text-white bg-black/80 px-1 rounded-2xs">
              {number}.SYS
            </div>
          </div>

          {/* Title & Subtext */}
          <div className="col-span-8 flex flex-col justify-center pl-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[7px] text-black/50 tracking-widest block uppercase">ZWEN // CORE</span>
                <div className="font-sans font-black text-xs md:text-sm tracking-tight text-black leading-tight">
                  {title}
                </div>
              </div>
              <div className="font-tech font-extrabold text-xl md:text-2xl text-black leading-none">
                {number}
              </div>
            </div>

            <p className="text-[8px] font-mono text-black/70 mt-1 line-clamp-1">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-2 border-t border-black/10 flex items-center justify-between">
          <div className="flex items-center space-x-[2px] h-2 opacity-60">
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[2px] h-full bg-black" />
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[3px] h-full bg-black" />
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[2px] h-full bg-black" />
          </div>

          {/* Floating Tag Pill */}
          <div className="bg-black text-white px-2.5 py-0.5 rounded-xs flex items-center space-x-1 shadow-md border border-white/20">
            <span className="font-sans font-bold text-[8px] tracking-wider uppercase">{tag}</span>
            <span className="text-[8px] font-mono text-cyan-300">{arrowDir}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
