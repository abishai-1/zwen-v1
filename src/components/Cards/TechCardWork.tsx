import React from 'react';
import { sound } from '../../utils/audio';

interface TechCardProps {
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

// Bottom-right card: 04 OUR WORK — rotated label, layered project visual
export const TechCardWork: React.FC<TechCardProps> = ({
  isActive,
  onClick,
  progress,
}) => {
  const offsetX = progress * 30;
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
      {/* HUD Fragment — top-left notch, bottom-left angled */}
      <div
        className={`relative bg-white text-black shadow-xl transition-all duration-300 border ${
          isActive ? 'border-black shadow-[0_16px_40px_rgba(0,0,0,0.25)]' : 'border-black/60 hover:border-black'
        }`}
        style={{
          width: '190px',
          clipPath: 'polygon(22% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 22%)',
          padding: '14px 14px 16px 22px',
        }}
      >
        {/* Rotated index label — editorial touch */}
        <div
          className="absolute top-5 left-0 font-mono font-black text-[9px] text-black/30 tracking-widest uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '52px' }}
        >
          ORDER
        </div>

        {/* Top row */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-mono text-[7px] text-black/35 tracking-wider">WRK-04</span>
          <div className="flex items-center space-x-1">
            <span className="font-mono text-[8px] tracking-widest text-black/50">04</span>
            <span className="w-1 h-1 bg-black" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/10 mb-3" />

        {/* Content */}
        <div className="flex items-start gap-2.5">
          {/* Image viewport */}
          <div className="flex-shrink-0 w-14 h-14 bg-[#E8EAE7] border border-black/20 overflow-hidden relative">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <rect width="100" height="100" fill="#E8EAE7" />
              <rect x="15" y="25" width="55" height="40" rx="2" fill="#FFFFFF" stroke="#121316" strokeWidth="1.5" />
              <rect x="30" y="35" width="55" height="40" rx="2" fill="#121316" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="58" cy="55" r="4.5" fill="#00E5FF" />
              <line x1="40" y1="65" x2="75" y2="65" stroke="#FFF" strokeWidth="1" opacity="0.6" />
            </svg>
            <div className="absolute bottom-0.5 left-0.5 font-mono text-[6px] text-white bg-black/80 px-0.5 leading-tight">04</div>
          </div>

          {/* Title block */}
          <div className="flex flex-col flex-1">
            <div className="font-mono text-[7px] text-black/35 tracking-widest uppercase mb-0.5">OUR WORK</div>
            <div className="font-tech font-black text-4xl text-black leading-none tracking-tighter">04</div>
          </div>
        </div>

        {/* Bottom detail */}
        <div className="mt-3 pt-2 border-t border-black/8 flex items-center justify-between">
          <div className="flex items-center space-x-[2px] h-2 opacity-60">
            <span className="w-[2px] h-full bg-black" />
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[3px] h-full bg-black" />
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[4px] h-full bg-black" />
          </div>
          <span className="font-mono text-[7px] text-black/35">CASE STUDIES</span>
        </div>

        {/* Corner fasteners */}
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full border border-black/30" />
        <div className="absolute bottom-2 left-6 w-1 h-1 rounded-full border border-black/30" />
      </div>
    </div>
  );
};
