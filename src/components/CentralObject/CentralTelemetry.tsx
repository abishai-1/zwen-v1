import React from 'react';
import { HeroCardConfig } from '../../types';
import { HERO_TELEMETRY } from '../../data/zwenData';

interface CentralTelemetryProps {
  currentCard: HeroCardConfig;
  progress: number;
}

export const CentralTelemetry: React.FC<CentralTelemetryProps> = ({ progress }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">

      {/* 1. UPPER-LEFT DIAGONAL EDGE: ZWEN CORE identity badge */}
      <div
        className="absolute z-20 transition-all duration-300 ease-out"
        style={{
          top: '12%',
          left: '1%',
          transform: `translate(${progress * -12}px, ${progress * -8}px) rotate(-38deg)`,
        }}
      >
        <div
          className="relative flex items-center bg-[#121316] text-white px-3.5 py-1.5 shadow-2xl border border-white/20"
          style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)' }}
        >
          {/* Index */}
          <div className="flex items-baseline space-x-1 mr-2 pr-2 border-r border-white/25">
            <span className="font-mono text-[11px] font-extrabold text-white">00</span>
            <span className="font-mono text-[7px] text-white/40">SYS</span>
          </div>

          {/* Title */}
          <div className="flex flex-col pr-3">
            <span className="font-sans font-black text-[12px] tracking-wider uppercase text-white leading-none">
              ZWEN / CORE
            </span>
            <span className="font-mono text-[6px] text-white/50 tracking-widest mt-0.5 uppercase">
              CREATIVE TECHNOLOGY
            </span>
          </div>

          {/* Hash accent */}
          <div className="w-4 h-4 pattern-stripes-dark opacity-50" />
        </div>
      </div>

      {/* 2. TOP: Ocular radar circle */}
      <div
        className="absolute z-20 flex flex-col items-center transition-all duration-300"
        style={{
          top: '-4%',
          right: '34%',
          transform: `translate(${progress * 12}px, ${progress * -6}px) rotate(${progress * 60}deg)`,
        }}
      >
        <div className="relative w-12 h-12 rounded-full bg-[#121316] p-[2px] shadow-2xl border-2 border-white/80 flex items-center justify-center">
          {/* Degree stamp */}
          <span className="absolute -top-3 right-0 font-mono text-[8px] font-bold text-black bg-white px-1 rounded shadow-xs">
            {HERO_TELEMETRY.bearing}°
          </span>

          {/* Inner mini lens */}
          <div className="w-full h-full rounded-full overflow-hidden relative border border-white/30">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300&auto=format&fit=crop"
              alt="sensor lens"
              className="w-full h-full object-cover filter brightness-110 contrast-125"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[0.5px] bg-white/60 absolute" />
              <div className="h-full w-[0.5px] bg-white/60 absolute" />
              <div className="w-1.5 h-1.5 rounded-full border border-white/80" />
            </div>
          </div>

          {/* Spinning tick arc */}
          <svg
            className="absolute pointer-events-none animate-spin"
            style={{ inset: '-8px', width: 'calc(100% + 16px)', height: 'calc(100% + 16px)', animationDuration: '40s' }}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" className="text-black/55" />
          </svg>
        </div>
      </div>

      {/* 3. Bottom rotary dial — subtle mechanical detail */}
      <div
        className="absolute z-20 transition-all duration-300"
        style={{
          bottom: '-3%',
          right: '34%',
          transform: `translate(${progress * 12}px, ${progress * 10}px) rotate(${progress * -90}deg)`,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-[#121316] border-2 border-white/75 shadow-xl flex items-center justify-center p-0.5 relative">
          <div className="w-full h-full rounded-full border border-dashed border-white/55 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center">
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          </div>
          <div className="absolute top-0 w-[1.5px] h-1.5 bg-white" />
          <div className="absolute bottom-0 w-[1.5px] h-1.5 bg-white" />
          <div className="absolute left-0 h-[1.5px] w-1.5 bg-white" />
          <div className="absolute right-0 h-[1.5px] w-1.5 bg-white" />
        </div>
      </div>

      {/* 4. Faint watermark ZWEN on right interior */}
      <div
        className="absolute right-5 top-1/2 font-mono font-black tracking-widest pointer-events-none z-10 select-none"
        style={{
          color: 'rgba(18,19,22,0.09)',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          transform: `translateY(-50%) scale(${1 + progress * 0.1})`,
        }}
      >
        ZWEN
      </div>

      {/* 5. Perimeter corner fasteners — very subtle */}
      <div className="absolute top-8 right-10 flex items-center space-x-1 opacity-45">
        <span className="w-[4px] h-[4px] rounded-full border border-black flex items-center justify-center text-[4px] font-bold">×</span>
        <span className="w-[4px] h-[4px] rounded-full border border-black flex items-center justify-center text-[4px] font-bold">×</span>
        <span className="w-[4px] h-[4px] rounded-full border border-black flex items-center justify-center text-[4px] font-bold">×</span>
      </div>

      {/* 6. Tiny vent stripes upper-right */}
      <div className="absolute top-9 right-7 w-8 h-2.5 pattern-stripes opacity-30 rotate-45" />
    </div>
  );
};
