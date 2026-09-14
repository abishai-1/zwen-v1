import React from 'react';
import { SectionData } from '../../types';

interface CentralTelemetryProps {
  currentSection: SectionData;
  progress: number;
}

export const CentralTelemetry: React.FC<CentralTelemetryProps> = ({ currentSection, progress }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* 1. UPPER-LEFT DIAGONAL EDGE: Prominent Black Chamfered Badge "05 Talon" (Matching Reference) */}
      <div 
        className="absolute z-20 transition-all duration-300 ease-out"
        style={{
          top: '12%',
          left: '1%',
          transform: `translate(${progress * -15}px, ${progress * -10}px) rotate(-38deg)`,
        }}
      >
        <div 
          className="relative flex items-center bg-[#121316] text-white px-4 py-2 rounded-xs shadow-2xl border border-white/20"
          style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)' }}
        >
          {/* Index prefix */}
          <div className="flex items-baseline space-x-1 mr-2.5 pr-2.5 border-r border-white/30">
            <span className="font-mono text-sm md:text-base font-extrabold text-white">{currentSection.index}</span>
            <span className="font-mono text-[8px] text-white/50">0.7</span>
          </div>

          {/* Title */}
          <div className="flex flex-col pr-4">
            <span className="font-sans font-black text-sm md:text-base tracking-wider uppercase text-white leading-none">
              {currentSection.title}
            </span>
            <span className="font-mono text-[7px] text-white/60 tracking-widest mt-0.5 uppercase">
              {currentSection.category}
            </span>
          </div>

          {/* Diagonal hash pattern accent on right edge */}
          <div className="w-5 h-5 pattern-stripes-dark opacity-60 mr-1" />
        </div>
      </div>

      {/* 2. TOP CORNER / OCULAR RADAR: Circular Radar Sensor (Matching Reference) */}
      <div 
        className="absolute z-20 flex flex-col items-center transition-all duration-300"
        style={{
          top: '-4%',
          right: '34%',
          transform: `translate(${progress * 15}px, ${progress * -8}px) rotate(${progress * 60}deg)`,
        }}
      >
        <div className="relative w-13 h-13 md:w-15 md:h-15 rounded-full bg-[#121316] p-1 shadow-2xl border-2 border-white/80 flex items-center justify-center">
          {/* Radial Angle Stamp "38" */}
          <span className="absolute -top-3.5 right-0 font-mono text-[8px] font-bold text-black bg-white px-1 rounded shadow-xs">
            {currentSection.telemetry.bearing}°
          </span>

          {/* Inner Mini Satellite View */}
          <div className="w-full h-full rounded-full overflow-hidden relative border border-white/40">
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300&auto=format&fit=crop" 
              alt="sensor"
              className="w-full h-full object-cover filter brightness-110 contrast-125"
            />
            {/* Ocular reticle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full border border-cyan-400 animate-ping" />
              <div className="w-full h-[0.5px] bg-cyan-400/70 absolute" />
              <div className="h-full w-[0.5px] bg-cyan-400/70 absolute" />
            </div>
          </div>

          {/* Outer Mechanical Tick Arc */}
          <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none animate-spin" style={{ animationDuration: '40s' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" className="text-black/60" />
          </svg>
        </div>
      </div>

      {/* 3. CENTER-RIGHT WATERMARK: "A92" */}
      <div 
        className="absolute right-6 top-1/2 -translate-y-1/2 font-tech font-bold text-4xl md:text-5xl text-black/15 tracking-widest pointer-events-none z-10"
        style={{
          transform: `translateY(-50%) scale(${1 + progress * 0.15})`,
        }}
      >
        A92
      </div>

      {/* 4. CENTER-LEFT: Coordinates Tag */}
      <div 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center space-x-1.5 bg-[#121316] text-white px-2.5 py-1 rounded shadow-md font-mono text-[8px]"
        style={{
          transform: `translateY(-50%) translate(${progress * -8}px, 0)`,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="font-semibold">{currentSection.telemetry.coordinates}</span>
      </div>

      {/* 5. LOWER-LEFT DIAGONAL: Moon Phases "CH 42" & Gas Telemetry Panel (Matching Reference) */}
      <div 
        className="absolute z-20 flex flex-col space-y-1.5 transition-all duration-300"
        style={{
          bottom: '12%',
          left: '0%',
          transform: `translate(${progress * -15}px, ${progress * 15}px) rotate(-38deg)`,
        }}
      >
        {/* CH 42 + Moon Phase Icons */}
        <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded shadow border border-black/15 self-start">
          <span className="font-mono text-[9px] font-bold text-black">{currentSection.telemetry.ch}</span>
          <div className="flex items-center space-x-1 text-black/80">
            <span className="inline-block w-2 h-2 rounded-full bg-black/80" />
            <span className="inline-block w-2 h-2 rounded-full border border-black/80 bg-gradient-to-r from-black/80 to-transparent" />
            <span className="inline-block w-2 h-2 rounded-full border border-black/80" />
          </div>
        </div>

        {/* Stepped Trapezoid Telemetry Bars */}
        <div 
          className="bg-[#121316] text-white p-2.5 rounded-xs shadow-2xl border border-white/20 text-[8px] font-mono w-44 md:w-48"
          style={{ clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' }}
        >
          <div className="space-y-1 pr-3">
            <div className="flex items-center justify-between">
              <span className="text-white/70">Carbon Dioxide</span>
              <div className="flex items-center space-x-1.5">
                <div className="w-14 h-1 bg-white/20 rounded-xs overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-xs transition-all duration-500" style={{ width: `${currentSection.telemetry.co2}%` }} />
                </div>
                <span className="font-bold">{currentSection.telemetry.co2}%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/70">Nitrogen</span>
              <div className="flex items-center space-x-1.5">
                <div className="w-14 h-1 bg-white/20 rounded-xs overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-xs transition-all duration-500" style={{ width: `${currentSection.telemetry.n2}%` }} />
                </div>
                <span className="font-bold">{currentSection.telemetry.n2}%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/70">Oxygen</span>
              <div className="flex items-center space-x-1.5">
                <div className="w-14 h-1 bg-white/20 rounded-xs overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-xs transition-all duration-500" style={{ width: `${currentSection.telemetry.o2}%` }} />
                </div>
                <span className="font-bold">{currentSection.telemetry.o2}%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/70">Carbon</span>
              <div className="flex items-center space-x-1.5">
                <div className="w-14 h-1 bg-white/20 rounded-xs overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-xs transition-all duration-500" style={{ width: `${currentSection.telemetry.carbon}%` }} />
                </div>
                <span className="font-bold">{currentSection.telemetry.carbon}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. BOTTOM CORNER: Concentric Mechanical Rotary Dial */}
      <div 
        className="absolute z-20 transition-all duration-300"
        style={{
          bottom: '-3%',
          right: '34%',
          transform: `translate(${progress * 15}px, ${progress * 12}px) rotate(${progress * -90}deg)`,
        }}
      >
        <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#121316] border-2 border-white/80 shadow-2xl flex items-center justify-center p-0.5 relative">
          <div className="w-full h-full rounded-full border border-dashed border-white/60 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center">
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          </div>
          {/* Radial notch lines */}
          <div className="absolute top-0 w-[1.5px] h-1.5 bg-white" />
          <div className="absolute bottom-0 w-[1.5px] h-1.5 bg-white" />
          <div className="absolute left-0 h-[1.5px] w-1.5 bg-white" />
          <div className="absolute right-0 h-[1.5px] w-1.5 bg-white" />
        </div>
      </div>

      {/* 7. Perimeter Screw Fasteners (Reference Details) */}
      <div className="absolute bottom-10 right-10 flex items-center space-x-1.5 opacity-60">
        <span className="w-1.5 h-1.5 rounded-full border border-black flex items-center justify-center text-[5px]">×</span>
        <span className="w-1.5 h-1.5 rounded-full border border-black flex items-center justify-center text-[5px]">×</span>
        <span className="w-1.5 h-1.5 rounded-full border border-black flex items-center justify-center text-[5px]">×</span>
      </div>

      {/* Diagonal hash vents on upper-right perimeter */}
      <div className="absolute top-10 right-8 w-10 h-3 pattern-stripes opacity-40 rotate-45" />
    </div>
  );
};
