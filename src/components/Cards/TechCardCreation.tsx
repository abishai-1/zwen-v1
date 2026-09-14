import React, { useState } from 'react';
import { sound } from '../../utils/audio';

interface TechCardCreationProps {
  position: 'top-left' | 'bottom-right';
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

export const TechCardCreation: React.FC<TechCardCreationProps> = ({
  position,
  isActive,
  onClick,
  progress,
}) => {
  const isTL = position === 'top-left';
  const [imgLoaded, setImgLoaded] = useState(false);

  // Responsive floating offsets driven by scroll progress
  const offsetX = isTL ? -progress * 40 : progress * 40;
  const offsetY = isTL ? -progress * 30 : progress * 30;

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
      {/* Outer Card Shell with Chamfers and Heavy Sci-Fi Shadow */}
      <div 
        className={`relative w-64 md:w-72 bg-white text-black p-4 rounded-xs border-2 shadow-2xl transition-all duration-300 ${
          isActive 
            ? 'border-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-2 ring-black/20' 
            : 'border-black/70 hover:border-black'
        }`}
        style={{
          clipPath: isTL
            ? 'polygon(0 0, 100% 0, 100% 78%, 82% 100%, 0 100%)'
            : 'polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 22%)',
        }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-black/15 pb-2 mb-3 font-mono text-[9px]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-black rounded-xs" />
            <span className="font-bold tracking-wider">SEC // 03</span>
            <span className="text-black/50">ARCHIVE.SYS</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-[8px] text-black/60">
            <span className="pattern-stripes w-8 h-2 inline-block opacity-60" />
            <span>CR-99</span>
          </div>
        </div>

        {/* Main Content Area: Art Studio Visual + Bold Kanji + Big 03 */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Visual Canvas Easel Viewport */}
          <div className="col-span-5 relative aspect-square rounded-xs overflow-hidden border border-black/30 bg-[#E3E5E3] shadow-inner flex items-center justify-center">
            {/* SVG Easel / Art Studio Graphic (Accurately representing reference easel) */}
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              {/* Studio Backdrop Wall */}
              <rect x="0" y="0" width="100" height="100" fill="#E8EAE7" />
              
              {/* Easel Tripod Wooden Legs */}
              <line x1="50" y1="20" x2="25" y2="88" stroke="#8A6B48" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1="20" x2="75" y2="88" stroke="#8A6B48" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1="20" x2="50" y2="85" stroke="#684E32" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Horizontal Easel Shelf */}
              <rect x="22" y="62" width="56" height="4" rx="1" fill="#684E32" />
              <circle cx="26" cy="64" r="1" fill="#FFFFFF" />
              <circle cx="74" cy="64" r="1" fill="#FFFFFF" />

              {/* Main White Canvas on Easel */}
              <rect x="28" y="28" width="44" height="34" rx="1" fill="#FFFFFF" stroke="#333333" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
              
              {/* Minimal artwork on canvas */}
              <circle cx="50" cy="45" r="8" fill="#121316" />
              <line x1="36" y1="52" x2="64" y2="52" stroke="#121316" strokeWidth="1" />
              <circle cx="50" cy="45" r="3" fill="#00E5FF" />

              {/* Secondary Leaning Canvases */}
              <rect x="12" y="42" width="20" height="40" rx="1" fill="#D5D8D4" stroke="#999" strokeWidth="0.5" opacity="0.7" transform="rotate(-6 12 42)" />
              <rect x="68" y="45" width="22" height="38" rx="1" fill="#DDE0DC" stroke="#999" strokeWidth="0.5" opacity="0.8" transform="rotate(5 68 45)" />
            </svg>

            {/* Viewport Reticle */}
            <div className="absolute inset-1 border border-white/60 pointer-events-none" />
            <div className="absolute bottom-1 left-1 font-mono text-[6px] text-white bg-black/80 px-1 rounded-2xs">
              03.STUDIO
            </div>
          </div>

          {/* Bold Kanji & Number 03 */}
          <div className="col-span-7 flex flex-col justify-between h-full pl-1">
            <div className="flex items-start justify-between">
              {/* Bold Kanji Characters: 创造 (Creation) */}
              <div className="font-jp font-black text-3xl md:text-4xl tracking-tighter text-black leading-none">
                创造
              </div>
              
              {/* Big Bold Number 03 */}
              <div className="font-tech font-extrabold text-2xl md:text-3xl text-black leading-none">
                03
              </div>
            </div>

            {/* Technical Subtext & Barcode */}
            <div className="mt-2 pt-2 border-t border-black/10 flex flex-col space-y-1">
              <div className="flex items-center justify-between text-[8px] font-mono text-black/70">
                <span>SPATIAL / ART</span>
                <span className="font-bold">60FPS</span>
              </div>

              {/* Barcode Graphic */}
              <div className="flex items-center space-x-[2px] h-3 opacity-70">
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[3px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[4px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Side Tab: "Creation" with Arrow & QR Glyph (Matching Reference) */}
        <div 
          className={`absolute ${
            isTL ? '-right-7 top-1/2 -translate-y-1/2' : '-left-7 top-1/2 -translate-y-1/2'
          } bg-black text-white px-3 py-1 rounded-xs flex items-center space-x-1.5 shadow-xl border border-white/20 z-30`}
        >
          {/* Mini QR / Grid Matrix */}
          <div className="w-2.5 h-2.5 border border-white grid grid-cols-2 gap-0.5 p-0.5">
            <span className="bg-white" />
            <span className="bg-transparent" />
            <span className="bg-transparent" />
            <span className="bg-white" />
          </div>
          <span className="font-sans font-bold text-[10px] tracking-wider uppercase">Creation</span>
          <span className="text-[9px] font-mono text-cyan-300">↗</span>
        </div>

        {/* Fastener Bolts on corners */}
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">
          +
        </div>
        <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-black/50 flex items-center justify-center text-[5px] text-black/50">
          +
        </div>
      </div>
    </div>
  );
};
