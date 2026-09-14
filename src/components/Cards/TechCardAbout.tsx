import React from 'react';
import { sound } from '../../utils/audio';
import { HERO_CARDS } from '../../data/zwenData';

interface TechCardProps {
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

export const TechCardAbout: React.FC<TechCardProps> = ({
  isActive,
  onClick,
  progress,
}) => {
  const cardData = HERO_CARDS[1];
  const offsetX = -progress * 35;
  const offsetY = progress * 35;

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
      }}
    >
      <div 
        className={`relative w-64 md:w-72 bg-white text-black p-4 rounded-xs border-2 shadow-2xl transition-all duration-300 ${
          isActive 
            ? 'border-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-2 ring-black/20' 
            : 'border-black/70 hover:border-black'
        }`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 65% 100%, 0 100%)',
        }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-black/15 pb-2 mb-3 font-mono text-[9px]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-black rounded-xs" />
            <span className="font-bold tracking-wider">SEC // 02</span>
            <span className="text-black/50">PHILOSOPHY</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-[8px] text-black/60">
            <span>ABT-02</span>
            <span className="pattern-stripes w-8 h-2 inline-block opacity-60" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Visual Monolithic Architectural Frame Viewport */}
          <div className="col-span-5 relative aspect-square rounded-xs overflow-hidden border border-black/30 bg-[#1A1C20] shadow-inner flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <rect width="100" height="100" fill="#1A1C20" />
              {/* Stepped Architectural Monolith */}
              <polygon points="50,15 80,35 80,85 50,65" fill="#E8EAE7" stroke="#333" strokeWidth="0.8" />
              <polygon points="50,15 20,35 20,85 50,65" fill="#3A3D42" stroke="#444" strokeWidth="0.8" />
              <polygon points="50,15 20,35 50,45 80,35" fill="#F4F6F4" />
              {/* Luminous Core Light */}
              <circle cx="50" cy="50" r="3" fill="#00E5FF" />
              <line x1="50" y1="50" x2="50" y2="10" stroke="#00E5FF" strokeWidth="0.8" strokeDasharray="2 2" />
            </svg>

            <div className="absolute inset-1 border border-white/60 pointer-events-none" />
            <div className="absolute bottom-1 right-1 font-mono text-[6px] text-white bg-black/80 px-1 rounded-2xs">
              02.ABT
            </div>
          </div>

          {/* Title & Number */}
          <div className="col-span-7 flex flex-col justify-between h-full pl-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[8px] text-black/50 tracking-widest block uppercase">SECTION</span>
                <div className="font-sans font-black text-sm md:text-base tracking-tight text-black leading-tight">
                  ABOUT ZWEN
                </div>
              </div>
              <div className="font-tech font-extrabold text-2xl md:text-3xl text-black leading-none">
                02
              </div>
            </div>

            {/* Technical Subtext & Metrics */}
            <div className="mt-2 pt-2 border-t border-black/10 flex flex-col space-y-1">
              <div className="flex items-center justify-between text-[8px] font-mono text-black/70">
                <span>IDEAS SEEN</span>
                <span className="font-bold">CORE 100%</span>
              </div>

              {/* Slider meter */}
              <div className="flex items-center justify-between space-x-1 pt-0.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 rounded-2xs ${
                      i < 7 ? 'bg-black' : 'bg-black/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Side Tab */}
        <div 
          className="absolute -left-7 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-xs flex items-center space-x-1.5 shadow-xl border border-white/20 z-30"
        >
          <div className="w-2 h-2 border border-white grid grid-cols-2 gap-0.5 p-0.5">
            <span className="bg-transparent" />
            <span className="bg-white" />
            <span className="bg-white" />
            <span className="bg-transparent" />
          </div>
          <span className="font-sans font-bold text-[9px] tracking-wider uppercase">{cardData.tag}</span>
          <span className="text-[8px] font-mono text-cyan-300">↘</span>
        </div>

        {/* Fasteners */}
        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">+</div>
        <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">+</div>
      </div>
    </div>
  );
};
