import React from 'react';
import { sound } from '../../utils/audio';

interface TechCardOrderProps {
  position: 'bottom-left' | 'top-right';
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

export const TechCardOrder: React.FC<TechCardOrderProps> = ({
  position,
  isActive,
  onClick,
  progress,
}) => {
  const isBL = position === 'bottom-left';

  // Responsive floating offsets driven by scroll progress
  const offsetX = isBL ? -progress * 35 : progress * 35;
  const offsetY = isBL ? progress * 35 : -progress * 35;

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
      {/* Outer Card Shell with Angled Cutout and Heavy Sci-Fi Shadow */}
      <div 
        className={`relative w-64 md:w-72 bg-white text-black p-4 rounded-xs border-2 shadow-2xl transition-all duration-300 ${
          isActive 
            ? 'border-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-2 ring-black/20' 
            : 'border-black/70 hover:border-black'
        }`}
        style={{
          clipPath: isBL
            ? 'polygon(0 0, 100% 0, 100% 65%, 65% 100%, 0 100%)'
            : 'polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0 35%)',
        }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-black/15 pb-2 mb-3 font-mono text-[9px]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-black rounded-xs" />
            <span className="font-bold tracking-wider">SEC // 04</span>
            <span className="text-black/50">LOGIC.CORE</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-[8px] text-black/60">
            <span>ORD-88</span>
            <span className="pattern-stripes w-8 h-2 inline-block opacity-60" />
          </div>
        </div>

        {/* Main Content Area: Chess Strategy Visual + Bold Kanji + Big 04 */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Visual Chessboard Viewport */}
          <div className="col-span-5 relative aspect-square rounded-xs overflow-hidden border border-black/30 bg-[#1A1C20] shadow-inner flex items-center justify-center">
            {/* High-Contrast Stylized Chess Perspective Artwork */}
            <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
              {/* Isometric Board Grid */}
              <polygon points="50,15 90,40 50,75 10,40" fill="#2A2D32" stroke="#4A4E57" strokeWidth="1" />
              <polygon points="50,15 70,27 50,42 30,27" fill="#E8EAE7" />
              <polygon points="70,27 90,40 70,55 50,42" fill="#1C1E22" />
              <polygon points="30,27 50,42 30,57 10,40" fill="#1C1E22" />
              <polygon points="50,42 70,55 50,70 30,57" fill="#E8EAE7" />

              {/* King / Queen Chess Piece Silhouette in Foreground */}
              {/* Base */}
              <ellipse cx="50" cy="74" rx="14" ry="4" fill="#E8EAE7" stroke="#121316" strokeWidth="1" />
              <path d="M 40 74 Q 48 50 44 38 L 56 38 Q 52 50 60 74 Z" fill="#F4F6F4" stroke="#121316" strokeWidth="1" />
              {/* Crown */}
              <path d="M 42 38 L 40 28 L 46 32 L 50 24 L 54 32 L 60 28 L 58 38 Z" fill="#E8EAE7" stroke="#121316" strokeWidth="1" />
              <circle cx="50" cy="20" r="2.5" fill="#00E5FF" />

              {/* Knight in Background */}
              <ellipse cx="68" cy="50" rx="8" ry="2.5" fill="#111" />
              <path d="M 64 50 Q 64 35 70 30 Q 75 32 72 38 L 74 44 Z" fill="#24272D" stroke="#555" strokeWidth="0.8" />
            </svg>

            {/* Viewport Reticle */}
            <div className="absolute inset-1 border border-white/60 pointer-events-none" />
            <div className="absolute bottom-1 right-1 font-mono text-[6px] text-white bg-black/80 px-1 rounded-2xs">
              04.STRAT
            </div>
          </div>

          {/* Bold Kanji & Number 04 */}
          <div className="col-span-7 flex flex-col justify-between h-full pl-1">
            <div className="flex items-start justify-between">
              {/* Bold Kanji Characters: 秩序 (Order) */}
              <div className="font-jp font-black text-3xl md:text-4xl tracking-tighter text-black leading-none">
                秩序
              </div>
              
              {/* Big Bold Number 04 */}
              <div className="font-tech font-extrabold text-2xl md:text-3xl text-black leading-none">
                04
              </div>
            </div>

            {/* Technical Subtext & Metrics */}
            <div className="mt-2 pt-2 border-t border-black/10 flex flex-col space-y-1">
              <div className="flex items-center justify-between text-[8px] font-mono text-black/70">
                <span>SYSTEM / LOGIC</span>
                <span className="font-bold">PARITY 100%</span>
              </div>

              {/* Mini Tick Slider Meter */}
              <div className="flex items-center justify-between space-x-1 pt-0.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 rounded-2xs ${
                      i < 6 ? 'bg-black' : 'bg-black/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Side Tab: "Order" with Arrow & QR Glyph (Matching Reference) */}
        <div 
          className={`absolute ${
            isBL ? '-left-7 top-1/2 -translate-y-1/2' : '-right-7 top-1/2 -translate-y-1/2'
          } bg-black text-white px-3 py-1 rounded-xs flex items-center space-x-1.5 shadow-xl border border-white/20 z-30`}
        >
          {/* Mini QR / Grid Matrix */}
          <div className="w-2.5 h-2.5 border border-white grid grid-cols-2 gap-0.5 p-0.5">
            <span className="bg-transparent" />
            <span className="bg-white" />
            <span className="bg-white" />
            <span className="bg-transparent" />
          </div>
          <span className="font-sans font-bold text-[10px] tracking-wider uppercase">Order</span>
          <span className="text-[9px] font-mono text-cyan-300">↘</span>
        </div>

        {/* Fastener Bolts on corners */}
        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">
          +
        </div>
        <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">
          +
        </div>
      </div>
    </div>
  );
};
