import React from 'react';
import { ChevronDown, ArrowDownRight, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface TimelineControlsProps {
  progress: number;
  activeStageIndex: number;
  onSelectStage: (index: number) => void;
}

export const TimelineControls: React.FC<TimelineControlsProps> = ({
  progress,
  activeStageIndex,
  onSelectStage,
}) => {
  const stages = [
    { title: 'RHOMBUS', sub: '01 INITIAL' },
    { title: 'HEXAGON', sub: '02 MORPH' },
    { title: 'APERTURE', sub: '03 FOCUS' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-6 pointer-events-none flex items-center justify-between max-w-7xl mx-auto">
      {/* Left: Scroll Prompt & Status */}
      <div className="hidden lg:flex items-center space-x-3 pointer-events-auto bg-white/80 backdrop-blur-md px-4 py-2 rounded-xs border border-black/15 shadow-sm font-mono text-[10px] text-black">
        <div className="flex items-center space-x-1.5">
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-black/70" />
          <span className="font-bold tracking-wider">SCROLL TO MORPH</span>
        </div>
        <span className="text-black/30">|</span>
        <span className="text-black/60">SCRUB: {(progress * 100).toFixed(0)}%</span>
      </div>

      {/* Center: Interactive Stage Pills */}
      <div className="flex items-center space-x-2 pointer-events-auto bg-white/90 backdrop-blur-md p-1.5 rounded-sm border border-black/15 shadow-lg mx-auto lg:mx-0">
        <div className="px-2 font-mono text-[9px] text-black/50 font-bold hidden sm:inline flex items-center space-x-1">
          <Layers className="w-3 h-3 inline mr-1 text-black/70" />
          <span>PHASE:</span>
        </div>

        {stages.map((stage, idx) => {
          const isActive = activeStageIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                onSelectStage(idx);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-3 py-1 rounded-xs font-mono text-[10px] flex items-center space-x-1.5 transition-all duration-200 ${
                isActive
                  ? 'bg-black text-white font-bold shadow-xs scale-102'
                  : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 animate-pulse' : 'bg-black/30'}`} />
              <span className="font-semibold">{stage.title}</span>
              <span className="text-[8px] opacity-60 hidden sm:inline">[{stage.sub}]</span>
            </button>
          );
        })}
      </div>

      {/* Right: Technical Spec Label */}
      <div className="hidden lg:flex items-center space-x-2 pointer-events-auto bg-black text-white px-3.5 py-1.5 rounded-xs shadow-md border border-white/20 font-mono text-[10px]">
        <span className="text-white/60">SPEC:</span>
        <span className="font-bold tracking-widest text-cyan-300">ZWEN.V1-SYS</span>
        <ArrowDownRight className="w-3 h-3 text-white/70" />
      </div>
    </div>
  );
};
