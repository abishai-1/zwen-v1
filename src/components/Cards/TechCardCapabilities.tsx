import React from 'react';
import { sound } from '../../utils/audio';

interface TechCardProps {
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

// Top-right card: 03 CAPABILITIES — angular, notched top-left corner
export const TechCardCapabilities: React.FC<TechCardProps> = ({
  isActive,
  onClick,
  progress,
}) => {
  const offsetX = progress * 30;
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
      {/* HUD Fragment — notched top-left, diagonal bottom-right */}
      <div
        className={`relative bg-white text-black shadow-xl transition-all duration-300 border ${
          isActive ? 'border-black shadow-[0_16px_40px_rgba(0,0,0,0.25)]' : 'border-black/60 hover:border-black'
        }`}
        style={{
          width: '192px',
          clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 0 100%, 0 28%)',
          padding: '14px 14px 14px 28px',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-mono text-[7px] text-black/35 tracking-wider">CAP-03</span>
          <div className="flex items-center space-x-1">
            <span className="w-1 h-1 bg-black" />
            <span className="font-mono text-[8px] tracking-widest text-black/50">03</span>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/10 mb-3" />

        {/* Content */}
        <div className="flex items-start gap-2.5">
          {/* Image viewport */}
          <div className="flex-shrink-0 w-14 h-14 bg-[#121316] border border-black/20 overflow-hidden relative">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <rect x="10" y="10" width="36" height="36" rx="2" fill="#24272D" stroke="#444" strokeWidth="1" />
              <text x="28" y="32" fill="#FFF" fontSize="10" textAnchor="middle" fontFamily="monospace">01</text>
              <rect x="54" y="10" width="36" height="36" rx="2" fill="#E8EAE7" stroke="#121316" strokeWidth="1" />
              <text x="72" y="32" fill="#000" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">02</text>
              <rect x="10" y="54" width="36" height="36" rx="2" fill="#E8EAE7" stroke="#121316" strokeWidth="1" />
              <text x="28" y="76" fill="#000" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03</text>
              <rect x="54" y="54" width="36" height="36" rx="2" fill="#24272D" stroke="#444" strokeWidth="1" />
              <text x="72" y="76" fill="#00E5FF" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">04</text>
            </svg>
            <div className="absolute bottom-0.5 right-0.5 font-mono text-[6px] text-white bg-black/80 px-0.5 leading-tight">03</div>
          </div>

          {/* Title block */}
          <div className="flex flex-col flex-1">
            <div className="font-mono text-[7px] text-black/35 tracking-widest uppercase mb-0.5">CAPABILITIES</div>
            <div className="font-tech font-black text-4xl text-black leading-none tracking-tighter">03</div>
          </div>
        </div>

        {/* Bottom detail */}
        <div className="mt-3 pt-2 border-t border-black/8 flex items-center justify-between">
          <span className="font-mono text-[7px] text-black/35">4 CORE GROUPS</span>
          <div className="flex items-center space-x-[1.5px] h-2 opacity-60">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={`w-[2px] h-full ${i < 8 ? 'bg-black' : 'bg-black/20'}`} />
            ))}
          </div>
        </div>

        {/* Corner fasteners */}
        <div className="absolute top-1 left-8 w-1 h-1 rounded-full border border-black/30" />
        <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full border border-black/30" />
      </div>
    </div>
  );
};
