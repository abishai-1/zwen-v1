import React from 'react';
import { sound } from '../../utils/audio';
import { HERO_CARDS } from '../../data/zwenData';

interface TechCardProps {
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

export const TechCardWhatWeDo: React.FC<TechCardProps> = ({
  isActive,
  onClick,
  progress,
}) => {
  const cardData = HERO_CARDS[0];
  const offsetX = -progress * 40;
  const offsetY = -progress * 30;

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
          clipPath: 'polygon(0 0, 100% 0, 100% 78%, 82% 100%, 0 100%)',
        }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-black/15 pb-2 mb-3 font-mono text-[9px]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-black rounded-xs" />
            <span className="font-bold tracking-wider">SEC // 01</span>
            <span className="text-black/50">ZWEN.AGENCY</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-[8px] text-black/60">
            <span className="pattern-stripes w-8 h-2 inline-block opacity-60" />
            <span>EXP-01</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Visual Digital Waveform Viewport */}
          <div className="col-span-5 relative aspect-square rounded-xs overflow-hidden border border-black/30 bg-[#E8EAE7] shadow-inner flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <rect width="100" height="100" fill="#E8EAE7" />
              {/* Dynamic Waveform Lines */}
              <path d="M 10 50 Q 30 20 50 50 T 90 50" fill="none" stroke="#121316" strokeWidth="2.5" />
              <path d="M 10 50 Q 30 70 50 50 T 90 50" fill="none" stroke="#666" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="4" fill="#00E5FF" stroke="#121316" strokeWidth="1.5" />
              {/* Vertical coordinate lines */}
              <line x1="30" y1="20" x2="30" y2="80" stroke="#000" strokeWidth="0.5" opacity="0.2" />
              <line x1="70" y1="20" x2="70" y2="80" stroke="#000" strokeWidth="0.5" opacity="0.2" />
            </svg>

            <div className="absolute inset-1 border border-white/60 pointer-events-none" />
            <div className="absolute bottom-1 left-1 font-mono text-[6px] text-white bg-black/80 px-1 rounded-2xs">
              01.SYS
            </div>
          </div>

          {/* Title & Number */}
          <div className="col-span-7 flex flex-col justify-between h-full pl-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[8px] text-black/50 tracking-widest block uppercase">SECTION</span>
                <div className="font-sans font-black text-sm md:text-base tracking-tight text-black leading-tight">
                  WHAT WE DO
                </div>
              </div>
              <div className="font-tech font-extrabold text-2xl md:text-3xl text-black leading-none">
                01
              </div>
            </div>

            {/* Technical Subtext & Barcode */}
            <div className="mt-2 pt-2 border-t border-black/10 flex flex-col space-y-1">
              <div className="flex items-center justify-between text-[8px] font-mono text-black/70">
                <span>IDEAS → EXP</span>
                <span className="font-bold">60FPS</span>
              </div>

              {/* Barcode Graphic */}
              <div className="flex items-center space-x-[2px] h-2.5 opacity-70">
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[3px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
                <span className="w-[4px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Side Tab */}
        <div 
          className="absolute -right-7 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-xs flex items-center space-x-1.5 shadow-xl border border-white/20 z-30"
        >
          <div className="w-2 h-2 border border-white grid grid-cols-2 gap-0.5 p-0.5">
            <span className="bg-white" />
            <span className="bg-transparent" />
            <span className="bg-transparent" />
            <span className="bg-white" />
          </div>
          <span className="font-sans font-bold text-[9px] tracking-wider uppercase">{cardData.tag}</span>
          <span className="text-[8px] font-mono text-cyan-300">↗</span>
        </div>

        {/* Fasteners */}
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">+</div>
        <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">+</div>
      </div>
    </div>
  );
};
