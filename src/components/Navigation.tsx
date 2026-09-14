import React from 'react';
import { sound } from '../utils/audio';

interface NavigationProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigateSection }) => {
  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'CAPABILITIES', id: 'capabilities' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    sound.playClick();
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 pointer-events-none" style={{ paddingTop: '28px' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Minimal ZWEN wordmark */}
        <div
          onClick={() => { sound.playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center space-x-2.5 cursor-pointer pointer-events-auto group"
        >
          {/* Tiny geometric diamond emblem */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <span className="w-2.5 h-2.5 border border-black/70 rotate-45 group-hover:border-black transition-colors duration-200" />
            <span className="w-[3px] h-[3px] bg-black/70 absolute group-hover:bg-black transition-colors duration-200" />
          </div>
          <span className="font-mono font-bold tracking-[0.22em] text-[11px] text-black/80 group-hover:text-black transition-colors duration-200 uppercase">
            ZWEN
          </span>
        </div>

        {/* Center: Ultra-minimal nav links */}
        <nav className="hidden md:flex items-center space-x-6 pointer-events-auto">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => sound.playHover()}
              className="font-mono text-[10px] tracking-widest text-black/40 hover:text-black/80 transition-colors duration-200 uppercase"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Empty space to balance, or a single tiny label */}
        <div className="font-mono text-[9px] text-black/20 tracking-widest uppercase select-none hidden md:block">
          EST. 2026
        </div>
      </div>
    </header>
  );
};
