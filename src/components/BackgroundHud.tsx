import React from 'react';

interface BackgroundHudProps {
  progress?: number;
}

export const BackgroundHud: React.FC<BackgroundHudProps> = ({ progress = 0 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Halftone / Dither Cloud Editorial Background — reduced opacity for subtlety */}
      <img
        src="/bg-halftone.jpg"
        alt="Background texture"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{
          opacity: 0.62,
          transform: `scale(${1.02 + progress * 0.04}) translate(${progress * -8}px, ${progress * -4}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Subtle Fine Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      {/* Very faint center crosshair — structural reference only */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black -translate-y-1/2" />
      </div>

      {/* Ambient editorial stamps — sparse, very quiet */}
      {/* Top-center "if" style editorial mark */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 font-mono text-[10px] italic text-black/25 tracking-widest select-none">
        if
      </div>

      {/* Top-right year stamp */}
      <div className="absolute top-[5%] right-[18%] font-mono text-[10px] text-black/30 tracking-widest select-none">
        2026
      </div>

      {/* Bottom-left reference number */}
      <div className="absolute bottom-[5%] left-[18%] bg-white/80 border border-black/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-black/70 tracking-widest select-none rounded-[2px]">
        128
      </div>

      {/* Bottom-right code */}
      <div className="absolute bottom-[5%] right-[18%] font-mono text-[10px] text-black/30 tracking-widest select-none">
        gpc
      </div>

      {/* Corner + anchors — very faint */}
      <div className="absolute top-8 left-8 font-mono text-black/20 text-sm select-none">+</div>
      <div className="absolute top-8 right-8 font-mono text-black/20 text-sm select-none">+</div>
      <div className="absolute bottom-8 left-8 font-mono text-black/20 text-sm select-none">+</div>
      <div className="absolute bottom-8 right-8 font-mono text-black/20 text-sm select-none">+</div>
    </div>
  );
};
