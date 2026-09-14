import React from 'react';

interface BackgroundHudProps {
  progress?: number;
}

export const BackgroundHud: React.FC<BackgroundHudProps> = ({ progress = 0 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Halftone / Dither Cloud Editorial Background */}
      <img
        src="/bg-halftone.jpg"
        alt="Background texture"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-102"
        style={{
          transform: `scale(${1.02 + progress * 0.05}) translate(${progress * -10}px, ${progress * -5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Subtle Fine Noise Overlay for Tactile Texture */}
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />

      {/* Technical Grid crosshairs & axis lines */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/50 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/50 -translate-y-1/2" />
      </div>

      {/* Top Ruler Header Bar */}
      <div className="absolute top-0 left-0 right-0 h-8 border-b border-black/15 bg-white/20 backdrop-blur-xs flex items-center justify-between px-6 font-mono text-[10px] text-black/60">
        <div className="flex items-center space-x-6">
          <span className="font-bold tracking-wider text-black/90">ZWEN // CREATIVE TECHNOLOGY</span>
          <span className="hidden md:inline">SYSTEM: 001 [ACTIVE]</span>
          <span className="hidden md:inline">LATENCY: {(0.2 + progress * 0.05).toFixed(2)}ms</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>PROGRESS: {Math.round(progress * 100)}%</span>
          <span className="font-bold text-black/90">DESIGN × CODE × EXPERIENCE</span>
        </div>
      </div>

      {/* Left Axis Ruler Ticks */}
      <div className="absolute left-0 top-12 bottom-12 w-6 border-r border-black/15 hidden md:flex flex-col justify-between py-4 items-center font-mono text-[8px] text-black/50">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center w-full justify-between px-1">
            <span className="h-[1px] w-2 bg-black/40" />
            <span className="text-[7px]">0{i + 1}</span>
          </div>
        ))}
      </div>

      {/* Right Axis Ruler Ticks */}
      <div className="absolute right-0 top-12 bottom-12 w-6 border-l border-black/15 hidden md:flex flex-col justify-between py-4 items-center font-mono text-[8px] text-black/50">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center w-full justify-between px-1">
            <span className="text-[7px]">{(i * 30).toString().padStart(3, '0')}</span>
            <span className="h-[1px] w-2 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Floating Ambient ZWEN Stamps */}
      {/* Top right "EST. 2026" stamp */}
      <div className="absolute top-24 right-[22%] font-mono text-[11px] font-bold text-black/70 tracking-wider bg-white/60 backdrop-blur-2xs px-1.5 py-0.5 rounded-2xs border border-black/10">
        EST. 2026
      </div>

      {/* Top left system code */}
      <div className="absolute top-24 left-[22%] font-mono text-[10px] text-black/70 bg-white/60 backdrop-blur-2xs px-1.5 py-0.5 rounded-2xs border border-black/10">
        ZWEN.SYS
      </div>

      {/* Bottom left "001" pill box */}
      <div className="absolute bottom-12 left-[22%] bg-white/95 border border-black/20 shadow-sm px-3 py-0.5 rounded-[3px] font-mono text-[11px] font-bold text-black tracking-widest">
        001
      </div>

      {/* Bottom right "© ZWEN" stamp */}
      <div className="absolute bottom-12 right-[22%] font-mono text-[11px] text-black/70 tracking-wider bg-white/60 backdrop-blur-2xs px-1.5 py-0.5 rounded-2xs border border-black/10">
        © ZWEN
      </div>

      {/* Corner crosshair anchors */}
      <div className="absolute top-12 left-10 font-mono text-black/50 text-xs">+</div>
      <div className="absolute top-12 right-10 font-mono text-black/50 text-xs">+</div>
      <div className="absolute bottom-12 left-10 font-mono text-black/50 text-xs">+</div>
      <div className="absolute bottom-12 right-10 font-mono text-black/50 text-xs">+</div>
    </div>
  );
};
