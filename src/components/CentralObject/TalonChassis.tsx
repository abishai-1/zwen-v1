import React from 'react';
import { TALON_TELEMETRY } from '../../data/zwenData';

interface TalonChassisProps {
  progress: number;
}

export const TalonChassis: React.FC<TalonChassisProps> = ({ progress }) => {
  const t = TALON_TELEMETRY;
  const scale = 1 + progress * 0.22;
  const rotation = progress * 18;
  const HUDrot = -rotation;

  // Outer diamond with notches at each apex (430 canvas)
  const NOTCH = 16;
  const outer = `M 215 0 L ${215 + NOTCH / 2} ${NOTCH} L ${430 - NOTCH / 2} ${215 - NOTCH / 2} L 430 215 L ${430 - NOTCH / 2} ${215 + NOTCH / 2} L ${215 + NOTCH / 2} ${430 - NOTCH / 2} L 215 430 L ${215 - NOTCH / 2} ${430 - NOTCH / 2} L ${NOTCH / 2} ${215 + NOTCH / 2} L 0 215 L ${NOTCH / 2} ${215 - NOTCH / 2} L ${215 - NOTCH / 2} ${NOTCH / 2} Z`;

  return (
    <div
      className="relative flex items-center justify-center pointer-events-auto gpu-layer"
      style={{
        width: 'min(82vw, 460px)',
        height: 'min(82vw, 460px)',
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transition: 'transform 0.08s linear',
      }}
    >
      <svg
        viewBox="0 0 430 430"
        className="absolute inset-0 w-full h-full filter drop-shadow-[0_28px_56px_rgba(0,0,0,0.30)] drop-shadow-[0_8px_18px_rgba(0,0,0,0.17)]"
      >
        <defs>
          <linearGradient id="talonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F6F7F5" />
            <stop offset="100%" stopColor="#E3E5E2" />
          </linearGradient>
        </defs>

        {/* Outer shadow plate */}
        <path d={outer} fill="#9EA19D" transform="translate(5, 9)" opacity="0.45" />

        {/* Main chassis body */}
        <path d={outer} fill="url(#talonGrad2)" stroke="#121316" strokeWidth="3" strokeLinejoin="round" />

        {/* Inner dashed concentric diamond */}
        <g transform="translate(215 215) scale(0.90) translate(-215 -215)">
          <path d={outer} fill="none" stroke="#121316" strokeWidth="1" strokeDasharray="8 4" opacity="0.30" />
        </g>

        {/* Inner border around image viewport (rotated square) */}
        <rect x="82" y="82" width="266" height="266" rx="20" fill="none" stroke="#121316" strokeWidth="2.6" transform="rotate(45 215 215)" />

        {/* Corner crosshair ticks at the 4 axis points */}
        <g stroke="#121316" strokeWidth="0.9" opacity="0.55">
          <line x1="215" y1="22" x2="215" y2="44" />
          <line x1="204" y1="33" x2="226" y2="33" />
          <line x1="408" y1="215" x2="386" y2="215" />
          <line x1="397" y1="204" x2="397" y2="226" />
          <line x1="215" y1="408" x2="215" y2="386" />
          <line x1="204" y1="397" x2="226" y2="397" />
          <line x1="22" y1="215" x2="44" y2="215" />
          <line x1="33" y1="204" x2="33" y2="226" />
        </g>

        {/* Outer perimeter corner fasteners (4 corners of rotated square margin) */}
        <g fill="#FFFFFF" stroke="#121316" strokeWidth="1">
          <circle cx="100" cy="100" r="3" />
          <circle cx="330" cy="100" r="3" />
          <circle cx="330" cy="330" r="3" />
          <circle cx="100" cy="330" r="3" />
          <circle cx="100" cy="100" r="1" fill="#121316" stroke="none" />
          <circle cx="330" cy="100" r="1" fill="#121316" stroke="none" />
          <circle cx="330" cy="330" r="1" fill="#121316" stroke="none" />
          <circle cx="100" cy="330" r="1" fill="#121316" stroke="none" />
        </g>

        {/* Vent strips - upper right area */}
        <g transform="translate(340 96) rotate(45)" opacity="0.6">
          <rect x="0" y="0" width="26" height="3" fill="#121316" />
          <rect x="0" y="7" width="26" height="3" fill="#121316" />
          <rect x="0" y="14" width="26" height="3" fill="#121316" />
        </g>

        {/* Vent strips - lower left area */}
        <g transform="translate(90 334) rotate(45)" opacity="0.6">
          <rect x="0" y="0" width="26" height="3" fill="#121316" />
          <rect x="0" y="7" width="26" height="3" fill="#121316" />
          <rect x="0" y="14" width="26" height="3" fill="#121316" />
        </g>
      </svg>

      {/* Central landscape image + scope overlay */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{
          clipPath: 'polygon(50% 19%, 81% 50%, 50% 81%, 19% 50%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${HUDrot}deg) scale(1.55)`,
            transformOrigin: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop"
            alt="Talon aerial"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scope crosshairs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 300 300" className="w-[78%] h-[78%] opacity-95">
            <circle cx="150" cy="150" r="130" fill="none" stroke="#FFFFFF" strokeWidth="0.7" strokeDasharray="3 5" opacity="0.6" />
            <circle cx="150" cy="150" r="78" fill="none" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.8" />
            <line x1="150" y1="5" x2="150" y2="295" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.75" />
            <line x1="5" y1="150" x2="295" y2="150" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.75" />
            <polygon points="150,130 170,150 150,170 130,150" fill="none" stroke="#FFFFFF" strokeWidth="0.9" />
            <circle cx="150" cy="150" r="5" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="150" cy="150" r="1.6" fill="#FFFFFF" />
            {/* Triangle markers */}
            <polygon points="150,70 154,79 146,79" fill="#FFFFFF" />
            <polygon points="230,150 221,146 221,154" fill="#FFFFFF" />
            <polygon points="150,230 146,221 154,221" fill="#FFFFFF" />
            <polygon points="70,150 79,154 79,146" fill="#FFFFFF" />
            {/* Corner L brackets */}
            <polygon points="105,105 114,105 105,114" fill="none" stroke="#FFFFFF" strokeWidth="0.7" />
            <polygon points="195,105 186,105 195,114" fill="none" stroke="#FFFFFF" strokeWidth="0.7" />
            <polygon points="195,195 186,195 195,186" fill="none" stroke="#FFFFFF" strokeWidth="0.7" />
            <polygon points="105,195 114,195 105,186" fill="none" stroke="#FFFFFF" strokeWidth="0.7" />
          </svg>

          {/* Target label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 font-mono text-[8px] text-white bg-black/65 px-1.5 py-[1px] rounded">
            ● 3
          </div>
        </div>
      </div>

      {/* A92 watermark inside diamond (on right side of inner square margin) */}
      <div
        className="absolute right-[22%] top-1/2 font-tech font-black tracking-wider pointer-events-none select-none leading-none"
        style={{
          color: 'rgba(18,19,22,0.18)',
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          transform: `translateY(-50%) rotate(${rotation}deg) scale(${1 + progress * 0.1})`,
          transformOrigin: 'center',
          transition: 'transform 0.08s linear',
        }}
      >
        {t.watermark}
      </div>

      {/* HUD overlays (counter-rotated so they stay aligned with viewport) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          transform: `rotate(${HUDrot}deg)`,
          transition: 'transform 0.08s linear',
        }}
      >
        {/* 1. TOP-LEFT: 05 TALON Badge */}
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '7%',
            left: '-4%',
            transform: `rotate(-40deg) translate(${progress * -12}px, ${progress * -10}px)`,
          }}
        >
          <div
            className="relative flex items-center bg-[#121316] text-white shadow-2xl border border-white/18"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)',
              padding: '8px 22px 8px 14px',
            }}
          >
            <div className="flex items-baseline space-x-1 mr-2 pr-2 border-r border-white/30">
              <span className="font-mono font-extrabold text-white" style={{ fontSize: '1.05rem' }}>{t.index}</span>
              <span className="font-mono text-[8px] text-white/50 self-end mb-1">SA</span>
            </div>
            <span className="font-sans font-black uppercase text-white leading-none tracking-[0.16em]" style={{ fontSize: '1.1rem' }}>
              {t.codeName.toUpperCase()}
            </span>
            <div className="w-5 h-5 pattern-stripes-dark opacity-60 ml-1.5 self-center" />
          </div>
          <div
            className="mt-1 bg-black/80 text-white font-mono text-[7px] tracking-widest px-2 py-0.5 inline-flex items-center space-x-2 shadow"
            style={{ marginLeft: '12px' }}
          >
            <span>PLANETTYPE</span>
            <span className="text-cyan-300 font-bold">{t.planetType}</span>
          </div>
        </div>

        {/* 2. TOP-RIGHT: Ocular scope with landscape thumb */}
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '-6%',
            right: '8%',
            transform: `translate(${progress * 14}px, ${progress * -8}px) rotate(${progress * 45}deg)`,
          }}
        >
          <div className="relative flex flex-col items-center">
            <div
              className="rounded-full bg-[#121316] p-[2px] shadow-2xl border-2 border-white/85 flex items-center justify-center"
              style={{ width: '54px', height: '54px' }}
            >
              <span className="absolute -top-3.5 -right-0.5 font-mono text-[9px] font-bold text-black bg-white px-1.5 py-0.5 rounded shadow-xs border border-black/20">
                {t.bearing}
              </span>
              <div className="w-full h-full rounded-full overflow-hidden relative border border-white/40">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=300&auto=format&fit=crop"
                  alt="scope"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(1.15) contrast(1.25)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full border-2 border-cyan-400 animate-ping" />
                  <div className="w-full h-[0.5px] bg-cyan-400/80 absolute" />
                  <div className="h-full w-[0.5px] bg-cyan-400/80 absolute" />
                  <div className="absolute inset-[6px] rounded-full border border-cyan-400/40" />
                </div>
              </div>
              <svg className="absolute -inset-2.5 pointer-events-none animate-spin" style={{ width: 'calc(100% + 20px)', height: 'calc(100% + 20px)', animationDuration: '45s' }} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 5" className="text-black/70" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. RIGHT SIDE: Rotary gauge dial */}
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '43%',
            right: '-5%',
            transform: `translate(${progress * 14}px, 0) rotate(${progress * -50}deg)`,
          }}
        >
          <div
            className="rounded-full bg-[#121316] border-2 border-white/85 shadow-2xl flex items-center justify-center relative"
            style={{ width: '50px', height: '50px' }}
          >
            <svg className="absolute inset-0 w-full h-full -rotate-45" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="6" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="130 264" strokeLinecap="round" />
            </svg>
            <div className="w-[14px] h-[14px] rounded-full bg-white flex items-center justify-center z-10 shadow-inner">
              <div className="w-[5px] h-[5px] bg-black rounded-full" />
            </div>
            <div className="absolute top-0 w-[2px] h-2 bg-white rounded-full" />
            <div className="absolute right-0 h-[2px] w-2 bg-white rounded-full" />
            <div className="absolute bottom-0 w-[2px] h-2 bg-white rounded-full" />
            <div className="absolute left-0 h-[2px] w-2 bg-white rounded-full" />
          </div>
        </div>

        {/* 4. BOTTOM: Concentric rotary dial */}
        <div
          className="absolute transition-all duration-300"
          style={{
            bottom: '-5%',
            right: '34%',
            transform: `translate(${progress * 12}px, ${progress * 12}px) rotate(${progress * -70}deg)`,
          }}
        >
          <div
            className="rounded-full bg-[#121316] border-2 border-white/85 shadow-2xl flex items-center justify-center relative"
            style={{ width: '48px', height: '48px' }}
          >
            <div className="w-full h-full rounded-full border border-dashed border-white/60 flex items-center justify-center">
              <div className="w-[14px] h-[14px] rounded-full bg-white flex items-center justify-center shadow-inner">
                <div className="w-[5px] h-[5px] bg-black rounded-full" />
              </div>
            </div>
            <div className="absolute top-0 w-[2px] h-2 bg-white rounded-full" />
            <div className="absolute bottom-0 w-[2px] h-2 bg-white rounded-full" />
            <div className="absolute left-0 h-[2px] w-2 bg-white rounded-full" />
            <div className="absolute right-0 h-[2px] w-2 bg-white rounded-full" />
            <div className="absolute top-1 right-1 w-[1.5px] h-1.5 bg-white/80 rounded-full rotate-45" />
            <div className="absolute bottom-1 left-1 w-[1.5px] h-1.5 bg-white/80 rounded-full rotate-45" />
          </div>
        </div>

        {/* 5. LEFT SIDE UPPER: Coordinates N 92.599 pill */}
        <div
          className="absolute z-20 transition-all duration-300"
          style={{
            top: '28%',
            left: '-5%',
            transform: `translate(${progress * -12}px, 0) rotate(${progress * 35}deg)`,
          }}
        >
          <div className="relative bg-white text-[#121316] border-2 border-black rounded-[4px] px-3 py-1 shadow-lg font-mono flex items-center space-x-2">
            <span className="font-extrabold text-black" style={{ fontSize: '0.8rem' }}>{t.coordinates}</span>
            <span className="w-px h-4 bg-black/30" />
            <span className="text-[9px] text-black/70 font-bold">8 5.3</span>
            <div className="absolute -bottom-1 left-3 w-2 h-2 bg-white border-b-2 border-r-2 border-black rotate-45" />
          </div>
        </div>

        {/* 6. LEFT SIDE LOWER: CH 42 + two stacked dials */}
        <div
          className="absolute z-20 flex flex-col items-start space-y-2 transition-all duration-300"
          style={{
            top: '42%',
            left: '-3%',
            transform: `translate(${progress * -14}px, 0) rotate(${progress * 25}deg)`,
          }}
        >
          <div className="font-mono text-[10px] font-black text-black tracking-[0.2em] pl-1">
            CH {t.chValue}
          </div>
          {/* Dial 1 */}
          <div
            className="relative rounded-full bg-[#121316] border-2 border-white/80 shadow-lg flex items-center justify-center"
            style={{ width: '34px', height: '34px' }}
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeDasharray="175 264" strokeLinecap="round" />
            </svg>
            <div className="w-3 h-3 rounded-full bg-white shadow-inner z-10" />
          </div>
          {/* Dial 2 */}
          <div
            className="relative rounded-full bg-[#121316] border-2 border-white/80 shadow-lg flex items-center justify-center"
            style={{ width: '34px', height: '34px' }}
          >
            <svg className="absolute inset-0 w-full h-full -rotate-[135deg]" viewBox="0 0 100 100">
              <path d="M 20 75 A 42 42 0 1 1 80 75" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 20 75 A 42 42 0 1 1 65 25" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
            </svg>
            <div className="w-3 h-3 rounded-full bg-white shadow-inner z-10" />
          </div>
        </div>

        {/* 7. BOTTOM-LEFT: Atmospheric composition panel */}
        <div
          className="absolute z-20 transition-all duration-300"
          style={{
            bottom: '10%',
            left: '-4%',
            transform: `translate(${progress * -14}px, ${progress * 12}px) rotate(-38deg)`,
          }}
        >
          <div
            className="bg-[#121316] text-white shadow-2xl border border-white/20 py-2.5 px-3 text-[8px] font-mono"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)',
              minWidth: '160px',
            }}
          >
            {[
              { name: 'Carbon Dioxide', pct: t.co2Pct },
              { name: 'Nitrogen', pct: t.n2Pct },
              { name: 'Oxygen', pct: t.o2Pct },
              { name: 'Carbon', pct: t.cPct },
            ].map((row, i) => (
              <div key={row.name} className="flex items-center justify-between gap-2" style={{ marginTop: i === 0 ? 0 : '4px' }}>
                <span className="text-white/75 whitespace-nowrap">{row.name}</span>
                <div className="flex items-center space-x-1.5">
                  <div className="w-14 h-[3px] bg-white/20 rounded-xs overflow-hidden">
                    <div
                      className="h-full bg-white rounded-xs"
                      style={{ width: `${row.pct}%`, opacity: 0.5 + i * 0.12 }}
                    />
                  </div>
                  <span className="font-bold w-7 text-right">{row.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Perimeter decorative fasteners (× × ×) */}
        <div className="absolute top-9 right-12 flex items-center space-x-1 opacity-65">
          <span className="w-[5px] h-[5px] rounded-full border border-black flex items-center justify-center text-[5px] font-bold">×</span>
          <span className="w-[5px] h-[5px] rounded-full border border-black flex items-center justify-center text-[5px] font-bold">×</span>
          <span className="w-[5px] h-[5px] rounded-full border border-black flex items-center justify-center text-[5px] font-bold">×</span>
        </div>
        <div className="absolute bottom-9 left-12 flex items-center space-x-1 opacity-65">
          <span className="w-[5px] h-[5px] rounded-full border border-black flex items-center justify-center text-[5px] font-bold">×</span>
          <span className="w-[5px] h-[5px] rounded-full border border-black flex items-center justify-center text-[5px] font-bold">×</span>
          <span className="w-[5px] h-[5px] rounded-full border border-black flex items-center justify-center text-[5px] font-bold">×</span>
        </div>
      </div>
    </div>
  );
};
