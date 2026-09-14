import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Compass } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavigationProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigateSection }) => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(' ')[0] + '.' + Math.floor(now.getMilliseconds() / 100));
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    if (next) sound.playClick();
  };

  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'CAPABILITIES', id: 'capabilities' },
    { label: 'ABOUT', id: 'about' },
    { label: 'TEAM', id: 'team' },
    { label: 'EXPLORE', id: 'explore' },
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
    <header className="fixed top-8 left-0 right-0 z-50 px-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand & Status */}
        <div className="flex items-center space-x-6 pointer-events-auto">
          <div 
            onClick={() => { sound.playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group cursor-pointer flex items-center space-x-3 bg-black/90 hover:bg-black text-white px-4 py-2 rounded-sm shadow-md transition-all duration-200 border border-white/10"
          >
            {/* Geometric ZWEN Emblem */}
            <div className="w-5 h-5 flex items-center justify-center relative">
              <span className="w-3 h-3 border border-white rotate-45 group-hover:scale-110 transition-transform duration-300" />
              <span className="w-1 h-1 bg-white absolute" />
            </div>
            <span className="font-extrabold tracking-widest text-sm font-sans">ZWEN</span>
            <span className="text-[9px] font-mono text-white/50 border-l border-white/20 pl-2">CREATIVE TECH</span>
          </div>

          <div className="hidden xl:flex items-center space-x-2 font-mono text-[10px] text-black/70 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-sm border border-black/10 shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">SYS.001 // ONLINE</span>
            <span className="text-black/30">|</span>
            <span className="text-black/60 font-mono">60FPS</span>
          </div>
        </div>

        {/* Center: Minimal Agency Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/85 backdrop-blur-md border border-black/15 p-1 rounded-sm shadow-sm pointer-events-auto">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => sound.playHover()}
              className="px-3.5 py-1.5 rounded-xs font-mono text-[11px] font-medium text-black/80 hover:text-black hover:bg-black/5 transition-all duration-150"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Live Timecode & Audio Toggle */}
        <div className="flex items-center space-x-3 pointer-events-auto">
          <div className="hidden sm:flex items-center space-x-2 font-mono text-[10px] text-black/70 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-sm border border-black/10 shadow-sm">
            <Compass className="w-3 h-3 text-black/50 animate-spin" style={{ animationDuration: '14s' }} />
            <span>UTC {timeStr || '00:00:00'}</span>
          </div>

          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
            className="flex items-center justify-center w-9 h-9 bg-white/85 hover:bg-white text-black rounded-sm border border-black/15 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-black" />
            ) : (
              <VolumeX className="w-4 h-4 text-black/40" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
