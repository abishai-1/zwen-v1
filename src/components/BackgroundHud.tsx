import React from 'react';

interface BackgroundHudProps {
  progress?: number;
}

export const BackgroundHud: React.FC<BackgroundHudProps> = ({ progress = 0 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-70" />

      {/* Grid crosshairs & technical lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/40 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/40 -translate-y-1/2" />
      </div>

      {/* Top Ruler */}
      <div className="absolute top-0 left-0 right-0 h-8 border-b border-black/10 flex items-center justify-between px-6 font-mono text-[10px] text-black/50">
        <div className="flex items-center space-x-6">
          <span className="font-semibold tracking-wider text-black/70">SYS.LOC // 2026.09</span>
          <span className="hidden md:inline">FREQ: 1420.405 MHz</span>
          <span className="hidden md:inline">LATENCY: {(0.2 + progress * 0.1).toFixed(2)}ms</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>PROGRESS: {Math.round(progress * 100)}%</span>
          <span className="font-bold text-black/80">ZWEN / ARCHITECTURE</span>
        </div>
      </div>

      {/* Left Axis Ruler Ticks */}
      <div className="absolute left-0 top-12 bottom-12 w-6 border-r border-black/10 hidden md:flex flex-col justify-between py-4 items-center font-mono text-[8px] text-black/40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center w-full justify-between px-1">
            <span className="h-[1px] w-2 bg-black/30" />
            <span className="text-[7px]">0{i}</span>
          </div>
        ))}
      </div>

      {/* Right Axis Ruler Ticks */}
      <div className="absolute right-0 top-12 bottom-12 w-6 border-l border-black/10 hidden md:flex flex-col justify-between py-4 items-center font-mono text-[8px] text-black/40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center w-full justify-between px-1">
            <span className="text-[7px]">{(i * 30).toString().padStart(3, '0')}</span>
            <span className="h-[1px] w-2 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Floating Ambient Sci-Fi Stamps (Matching Reference Image) */}
      {/* Top right "2019" stamp from reference */}
      <div className="absolute top-14 right-[25%] font-mono text-[11px] font-bold text-black/60 tracking-wider">
        2019
      </div>

      {/* Top left tiny "ir" glyph */}
      <div className="absolute top-16 left-[28%] font-mono text-[10px] text-black/50">
        ir
      </div>

      {/* Bottom left "128" pill box from reference */}
      <div className="absolute bottom-10 left-[24%] bg-white/90 border border-black/20 shadow-sm px-3 py-0.5 rounded-[3px] font-mono text-[11px] font-bold text-black tracking-widest">
        128
      </div>

      {/* Bottom right "@C" stamp from reference */}
      <div className="absolute bottom-10 right-[28%] font-mono text-[11px] text-black/60 tracking-wider">
        @C
      </div>

      {/* Corner crosshair anchors */}
      <div className="absolute top-12 left-10 font-mono text-black/40 text-xs">+</div>
      <div className="absolute top-12 right-10 font-mono text-black/40 text-xs">+</div>
      <div className="absolute bottom-12 left-10 font-mono text-black/40 text-xs">+</div>
      <div className="absolute bottom-12 right-10 font-mono text-black/40 text-xs">+</div>
    </div>
  );
};
