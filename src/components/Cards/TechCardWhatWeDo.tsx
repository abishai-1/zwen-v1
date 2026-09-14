import React from 'react';
import { sound } from '../../utils/audio';

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
  const offsetX = -progress * 30;
  const offsetY = -progress * 22;

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
      {/* HUD Fragment — angular top-left silhouette */}
      <div
        className={`relative bg-white text-black shadow-xl transition-all duration-300 border ${
          isActive ? 'border-black shadow-[0_16px_40px_rgba(0,0,0,0.25)]' : 'border-black/60 hover:border-black'
        }`}
        style={{
          width: '188px',
          clipPath: 'polygon(0 0, 100% 0, 100% 72%, 76% 100%, 0 100%)',
          padding: '12px 14px 22px 14px',
        }}
      >
        {/* Top row: tiny label + index */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center space-x-1.5">
            <span className="w-1 h-1 bg-black" />
            <span className="font-mono text-[8px] tracking-widest text-black/50 uppercase">01 / ZWEN</span>
          </div>
          <span className="font-mono text-[7px] text-black/35 tracking-wider">EXP-01</span>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-black/10 mb-3" />

        {/* Main content: image thumbnail + title */}
        <div className="flex items-start gap-2.5">
          {/* Small SVG viewport */}
          <div className="flex-shrink-0 w-14 h-14 bg-[#E8EAE7] border border-black/20 overflow-hidden relative">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <rect width="100" height="100" fill="#E8EAE7" />
              <path d="M 10 50 Q 30 20 50 50 T 90 50" fill="none" stroke="#121316" strokeWidth="2.5" />
              <path d="M 10 50 Q 30 70 50 50 T 90 50" fill="none" stroke="#666" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="3.5" fill="#00E5FF" stroke="#121316" strokeWidth="1.5" />
              <line x1="30" y1="20" x2="30" y2="80" stroke="#000" strokeWidth="0.5" opacity="0.2" />
              <line x1="70" y1="20" x2="70" y2="80" stroke="#000" strokeWidth="0.5" opacity="0.2" />
            </svg>
            <div className="absolute bottom-0.5 left-0.5 font-mono text-[6px] text-white bg-black/80 px-0.5 leading-tight">01</div>
          </div>

          {/* Title block */}
          <div className="flex flex-col flex-1">
            <div className="font-mono text-[7px] text-black/35 tracking-widest uppercase mb-0.5">WHAT WE DO</div>
            <div className="font-tech font-black text-4xl text-black leading-none tracking-tighter">01</div>
          </div>
        </div>

        {/* Bottom micro detail row */}
        <div className="mt-3 pt-2 border-t border-black/8 flex items-center justify-between">
          <div className="flex items-center space-x-[2px] h-2 opacity-60">
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[3px] h-full bg-black" />
            <span className="w-[1px] h-full bg-black" />
            <span className="w-[2px] h-full bg-black" />
            <span className="w-[4px] h-full bg-black" />
            <span className="w-[1px] h-full bg-black" />
          </div>
          <span className="font-mono text-[7px] text-black/35">IDEAS → EXP</span>
        </div>

        {/* Corner fasteners */}
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full border border-black/30" />
        <div className="absolute bottom-4 left-1 w-1 h-1 rounded-full border border-black/30" />
      </div>
    </div>
  );
};
