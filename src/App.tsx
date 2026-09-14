import React from 'react';
import { HeroSection } from './components/HeroSection';

export const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#B8BAB7] text-[#121316]">
      {/* Pinned Futuristic Hero Interaction */}
      <HeroSection />

      {/* Brief Editorial Section Underneath */}
      <section className="relative z-30 bg-[#121316] text-white py-28 px-8 md:px-16 border-t-2 border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-12 mb-16">
            <div>
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                // SYSTEM MANIFESTO
              </span>
              <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
                AUTONOMOUS DIGITAL ARCHITECTURE
              </h2>
            </div>
            <p className="font-mono text-sm text-white/60 max-w-md mt-6 md:mt-0">
              We design high-precision digital ecosystems, spatial interfaces, and computational brand systems for visionary entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-white/70">
            <div className="border-t border-white/20 pt-4">
              <span className="text-white font-bold block mb-1">01 / GENESIS</span>
              <p className="text-[11px] text-white/50 leading-relaxed">Algorithmic strategy, computational modeling, and topological market reconnaissance.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <span className="text-white font-bold block mb-1">02 / STRUCTURE</span>
              <p className="text-[11px] text-white/50 leading-relaxed">State machines, low-latency rendering pipelines, and resilient design infrastructures.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <span className="text-white font-bold block mb-1">03 / ARTIFICE</span>
              <p className="text-[11px] text-white/50 leading-relaxed">Spatial interactive art, generative sensory canvases, and tactile micro-physics.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <span className="text-white font-bold block mb-1">04 / ARCHIVE</span>
              <p className="text-[11px] text-white/50 leading-relaxed">Zero-loss digital curation, deterministic telemetry, and immutable design tokens.</p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between font-mono text-[10px] text-white/40">
            <span>© 2026 ZWEN AGENCY. ALL RIGHTS RESERVED.</span>
            <span>COORDINATES: N 92.500 E 5.3 // ARCHITECTURE.V1</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
