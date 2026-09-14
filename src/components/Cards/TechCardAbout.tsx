import React from 'react';
import { sound } from '../../utils/audio';

interface TechCardProps {
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

// Bottom-left card: 02 ABOUT ZWEN — angled bottom-right corner cut
export const TechCardAbout: React.FC<TechCardProps> = ({
  isActive,
  onClick,
  progress,
}) => {
  const offsetX = -progress * 30;
  const offsetY = progress * 22;

  return (
    <div
      onClick={() => {
        sound.playClick();
        onClick();
      }}
      onMouseEnter={() => sound.playHover()}
      className={`group cursor-pointer pointer-events-auto transition-all duration-300 select-none gpu-layer ${
        isActive ? 'opacity-100 z-30' : 'opacity-75 hover:opacity-95 z-20'
      }`}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
    >
      {/* HUD Fragment — angled top-right + bottom-right corner */}
      <div
        className={`relative bg-white text-black shadow-xl transition-all duration-300 border ${
          isActive ? 'border-black shadow-[0_16px_40px_rgba(0,0,0,0.25)]' : 'border-black/60 hover:border-black'
        }`}
        style={{
          width: '186px',
          clipPath: 'polygon(0 0, 76% 0, 100% 22%, 100% 100%, 24% 100%, 0 80%)',
          padding: '12px 18px 18px 14px',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center space-x-1.5">
            <span className="w-1 h-1 bg-black" />
            <span className="font-mono text-[8px] tracking-widest text-black/50">02 / ZWEN</span>
          </div>
          <span className="font-mono text-[7px] text-black/35">ABT-02</span>
        </div>

        <div className="w-full h-[1px] bg-black/10 mb-3" />

        {/* Content */}
        <div className="flex items-start gap-2.5">
          {/* Image viewport — dark architectural */}
          <div className="flex-shrink-0 w-14 h-14 bg-[#1A1C20] border border-black/20 overflow-hidden relative">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <rect width="100" height="100" fill="#1A1C20" />
              <polygon points="50,15 80,35 80,85 50,65" fill="#E8EAE7" stroke="#333" strokeWidth="0.8" />
              <polygon points="50,15 20,35 20,85 50,65" fill="#3A3D42" stroke="#444" strokeWidth="0.8" />
              <polygon points="50,15 20,35 50,45 80,35" fill="#F4F6F4" />
              <circle cx="50" cy="50" r="2.5" fill="#00E5FF" />
              <line x1="50" y1="50" x2="50" y2="12" stroke="#00E5FF" strokeWidth="0.8" strokeDasharray="2 2" />
            </svg>
            <div className="absolute bottom-0.5 right-0.5 font-mono text-[6px] text-white bg-black/80 px-0.5 leading-tight">02</div>
          </div>

          {/* Title block */}
          <div className="flex flex-col flex-1">
            <div className="font-mono text-[7px] text-black/35 tracking-widest uppercase mb-0.5">ABOUT ZWEN</div>
            <div className="font-tech font-black text-4xl text-black leading-none tracking-tighter">02</div>
          </div>
        </div>

        {/* Bottom detail */}
        <div className="mt-3 pt-2 border-t border-black/8 flex items-center justify-between">
          <span className="font-mono text-[7px] text-black/35">PHILOSOPHY</span>
          <div className="flex items-center space-x-[2px] h-2 opacity-60">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className={`w-[3px] h-full rounded-sm ${i < 6 ? 'bg-black' : 'bg-black/20'}`} />
            ))}
          </div>
        </div>

        {/* Corner fasteners */}
        <div className="absolute top-1 left-1 w-1 h-1 rounded-full border border-black/30" />
        <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full border border-black/30" />
      </div>
    </div>
  );
};
