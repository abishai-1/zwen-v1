import React from 'react';
import { sound } from '../../utils/audio';

export type SciTriangleCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface SciTriangleCardProps {
  corner: SciTriangleCorner;
  number: string;
  chineseLabel: string;
  category: string;
  tag: string;
  imageSrc: string;
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

const getPath = (corner: SciTriangleCorner) => {
  const W = 240;
  const H = 185;
  const R = 14;
  const C = 80;
  switch (corner) {
    case 'top-left':
      return `M ${R} 0 L ${W} 0 L ${W} ${H - C - R} Q ${W} ${H - C} ${W - R * 0.7} ${H - C} L ${W - C} ${H - R} Q ${W - C} ${H} ${W - C - R} ${H} L ${R} ${H} Q 0 ${H} 0 ${H - R} L 0 ${R} Q 0 0 ${R} 0 Z`;
    case 'top-right':
      return `M ${R} 0 L ${W - R} 0 Q ${W} 0 ${W} ${R} L ${W} ${H - R} Q ${W} ${H} ${W - R} ${H} L ${C + R} ${H} Q ${C} ${H} ${C * 0.7} ${H - R * 0.7} L ${R} ${H - C} Q 0 ${H - C} 0 ${H - C - R} L 0 ${R} Q 0 0 ${R} 0 Z`;
    case 'bottom-left':
      return `M ${W - C + R} 0 L ${W - R} 0 Q ${W} 0 ${W} ${R} L ${W} ${H - R} Q ${W} ${H} ${W - R} ${H} L ${R} ${H} Q 0 ${H} 0 ${H - R} L 0 ${C + R} Q 0 ${C} ${R * 0.7} ${C} L ${W - C} ${R} Q ${W - C} 0 ${W - C + R} 0 Z`;
    case 'bottom-right':
      return `M ${C + R} 0 L ${W - R} 0 Q ${W} 0 ${W} ${R} L ${W} ${H - R} Q ${W} ${H} ${W - R} ${H} L ${R} ${H} Q 0 ${H} 0 ${H - R} L 0 ${C + R} Q 0 ${C} ${R * 0.7} ${C} L ${C} ${R} Q ${C} 0 ${C + R} 0 Z`;
  }
};

export const SciTriangleCard: React.FC<SciTriangleCardProps> = ({
  corner,
  number,
  chineseLabel,
  category,
  tag,
  imageSrc,
  isActive,
  onClick,
  progress,
}) => {
  let offsetX = 0;
  let offsetY = 0;
  if (corner === 'top-left') { offsetX = -progress * 24; offsetY = -progress * 18; }
  else if (corner === 'top-right') { offsetX = progress * 24; offsetY = -progress * 18; }
  else if (corner === 'bottom-left') { offsetX = -progress * 24; offsetY = progress * 18; }
  else if (corner === 'bottom-right') { offsetX = progress * 24; offsetY = progress * 18; }

  const pathD = getPath(corner);
  const isMirrored = corner === 'bottom-left';
  const isBottomRight = corner === 'bottom-right';
  const rotated = corner === 'top-left' ? 9 : corner === 'top-right' ? -9 : corner === 'bottom-right' ? -7 : 0;
  const innerImageRot = corner === 'top-left' ? -8 : corner === 'top-right' ? 8 : corner === 'bottom-right' ? 7 : 0;

  return (
    <div
      onClick={() => { sound.playClick(); onClick(); }}
      onMouseEnter={() => sound.playHover()}
      className={`group cursor-pointer pointer-events-auto transition-all duration-300 select-none gpu-layer ${isActive ? 'scale-105 z-30' : 'hover:scale-[1.02] opacity-92 hover:opacity-100 z-20'}`}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px) rotate(${isMirrored ? '0deg' : `${rotated * (1 + progress * 0.5)}deg`})`,
        width: 'clamp(190px, 31vw, 240px)',
        height: 'clamp(148px, 24vw, 185px)',
      }}
    >
      <svg
        viewBox="0 0 240 185"
        className={`absolute inset-0 w-full h-full filter transition-all duration-300 ${isActive ? 'drop-shadow-[0_16px_32px_rgba(0,0,0,0.34)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.16)]' : 'drop-shadow-[0_12px_22px_rgba(0,0,0,0.22)]'}`}
      >
        <defs>
          <linearGradient id={`sciTri2-${corner}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F7F8F6" />
          <stop offset="100%" stopColor="#E9EBE9" />
        </linearGradient>
      </defs>

      <path d={pathD} fill="#A6A9A5" transform="translate(2, 4)" opacity="0.42" />
      <path d={pathD} fill={`url(#sciTri2-${corner})`} stroke={isActive ? '#121316' : 'rgba(18,19,22,0.82)'} strokeWidth={isActive ? 2.4 : 1.8} strokeLinejoin="round" />
      <path d={pathD} fill="none" stroke="#121316" strokeWidth="0.9" strokeDasharray="6 3" transform="scale(0.945) translate(7, 5.5)" opacity="0.28" />
      </svg>

      <div className={`relative z-10 w-full h-full p-3.5 flex text-black ${isMirrored ? 'rotate-180' : ''}`}>
        <div className="flex flex-col w-full h-full">
          <div className={`flex items-center justify-between border-b border-black/15 pb-1 mb-1.5 font-mono ${isBottomRight ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center ${isBottomRight ? '' : 'space-x-1.5'}`}>
              <div className="w-4 h-4 rounded-[2px] border border-black/40 bg-black/5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5"><path d="M4 4h4v4H4zM8 6h12M6 4v16M6 12h14M18 8h4v4h-4z" fill="none" stroke="#121316" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-[9px] font-bold tracking-widest">{category.toUpperCase()}</span>
            </div>
            <div className={`flex items-center space-x-1 text-black/60 ${isBottomRight ? 'space-x-reverse' : ''}`}>
              <svg viewBox="0 0 24 24" className="w-3 h-3"><circle cx="12" cy="12" r="9" fill="none" stroke="#121316" strokeWidth="1.4"/><path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3" stroke="#121316" strokeWidth="1.4"/><text x="12" y="15.2" fontSize="5.5" fill="#121316" textAnchor="middle" fontFamily="monospace" fontWeight="700">∞</text></svg>
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5"><rect x="3.5" y="3.5" width="17" height="17" fill="none" stroke="#121316" strokeWidth="1.4" rx="1"/><circle cx="12" cy="12" r="2.2" fill="#121316"/></svg>
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="none" stroke="#121316" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
          </div>

          <div className={`flex-1 flex items-stretch gap-2 ${isBottomRight ? 'flex-row-reverse' : ''}`}>
            <div className="flex flex-col justify-center flex-shrink-0 w-[46%]">
              <div
                className="font-black leading-[0.92] tracking-tight text-black"
                style={{
                  fontSize: chineseLabel.length > 1 ? 'clamp(1.6rem, 4.3vw, 2.25rem)' : 'clamp(1.9rem, 5.2vw, 2.7rem)',
                  fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif',
                }}
              >
                {chineseLabel}
              </div>
              <div className={`mt-1.5 flex items-center space-x-1 ${isBottomRight ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="w-5 h-[1px] bg-black/50" />
                <div className="flex space-x-[2px]">
                  <span className="w-[3px] h-[3px] rounded-full bg-black/70" />
                  <span className="w-[3px] h-[3px] rounded-full bg-black/50" />
                  <span className="w-[3px] h-[3px] rounded-full bg-black/30" />
                </div>
                <svg viewBox="0 0 24 24" className="w-3 h-3 opacity-70"><path d="M5 8 L12 3 L19 8 L19 16 L12 21 L5 16 Z" fill="none" stroke="#121316" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div
                className="relative overflow-hidden border-[1.8px] border-black rounded-[3px] bg-[#EDEEEB] shadow-inner"
                style={{ width: '100%', height: '86px', transform: `rotate(${innerImageRot}deg)` }}
              >
                <img src={imageSrc} alt={tag} className="w-full h-full object-cover" style={{ filter: 'grayscale(0.15) contrast(1.05)' }} />
                <div className="absolute inset-[2px] border border-white/55 pointer-events-none" />
                <div className="absolute top-[3px] left-[3px] w-2 h-2 border-t border-l border-cyan-400/95" />
                <div className="absolute top-[3px] right-[3px] w-2 h-2 border-t border-r border-cyan-400/95" />
                <div className="absolute bottom-[3px] left-[3px] w-2 h-2 border-b border-l border-cyan-400/95" />
                <div className="absolute bottom-[3px] right-[3px] w-2 h-2 border-b border-r border-cyan-400/95" />
                <div className="absolute top-[4px] right-[4px] font-mono text-[6px] text-white bg-black/80 px-1 py-[0.5px] rounded-sm">
                  {number}.V
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-1.5 pt-1.5 border-t border-black/12 flex items-end justify-between ${isBottomRight ? 'flex-row-reverse' : ''}`}>
            <div className="font-tech font-black leading-none text-black" style={{ fontSize: 'clamp(1.9rem, 5.2vw, 2.5rem)' }}>
              {number}
            </div>
            <div className={`flex items-center ${isBottomRight ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center space-x-[1.5px] h-2 opacity-70 mr-1.5 ${isBottomRight ? 'space-x-reverse mr-0 ml-1.5' : ''}`}>
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[3px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
              </div>
              <div className={`bg-[#121316] text-white px-2.5 py-[3px] rounded-[2px] shadow-md border border-white/15 flex items-center space-x-1.5 ${isBottomRight ? 'space-x-reverse' : ''}`}>
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 opacity-90">
                  <rect x="3" y="3" width="7" height="7" fill="none" stroke="#FFFFFF" strokeWidth="1.5" rx="0.5" />
                  <rect x="4.8" y="4.8" width="1.4" height="1.4" fill="#FFFFFF" />
                  <rect x="7.2" y="4.8" width="1.4" height="1.4" fill="#FFFFFF" />
                  <rect x="4.8" y="7.2" width="1.4" height="1.4" fill="#FFFFFF" />
                  <rect x="12" y="3" width="2" height="2" fill="#FFFFFF" />
                  <rect x="16" y="3" width="4.5" height="2" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
                  <rect x="12" y="7" width="2" height="4" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
                  <rect x="16" y="13" width="4.5" height="8" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
                  <rect x="3" y="13.5" width="7" height="7" fill="none" stroke="#FFFFFF" strokeWidth="1.5" rx="0.5" />
                  <rect x="4.8" y="15.3" width="1.4" height="1.4" fill="#FFFFFF" />
                  <rect x="7.2" y="15.3" width="1.4" height="1.4" fill="#FFFFFF" />
                  <rect x="4.8" y="17.7" width="1.4" height="1.4" fill="#FFFFFF" />
                  <rect x="7.2" y="17.7" width="1.4" height="1.4" fill="#FFFFFF" />
                </svg>
                <span className="font-sans font-bold text-[10px] tracking-[0.14em] uppercase">{tag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
