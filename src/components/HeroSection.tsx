import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_CARDS } from '../data/zwenData';
import { BackgroundHud } from './BackgroundHud';
import { CentralChassis } from './CentralObject/CentralChassis';
import { TechCardWhatWeDo } from './Cards/TechCardWhatWeDo';
import { TechCardAbout } from './Cards/TechCardAbout';
import { TechCardCapabilities } from './Cards/TechCardCapabilities';
import { TechCardWork } from './Cards/TechCardWork';
import { CardConnectorLines } from './Cards/CardConnectorLines';
import { Navigation } from './Navigation';
import { sound } from '../utils/audio';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateSection }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroPinRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (!containerRef.current || !heroPinRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=2500',
        pin: heroPinRef.current,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);

          if (p < 0.25) {
            setActiveCardIndex(0);
          } else if (p < 0.55) {
            setActiveCardIndex(1);
          } else if (p < 0.85) {
            setActiveCardIndex(2);
          } else {
            setActiveCardIndex(3);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentCard = HERO_CARDS[activeCardIndex] || HERO_CARDS[0];

  const handleCardClick = (cardIdx: number) => {
    sound.playClick();
    setActiveCardIndex(cardIdx);
    const targetProgress = cardIdx === 0 ? 0.05 : cardIdx === 1 ? 0.45 : cardIdx === 2 ? 0.75 : 0.95;
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop + targetProgress * 2500,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="hero" ref={containerRef} className="relative w-full bg-[#B8BAB7]">
      {/* Pinned Hero Viewport (100vh) */}
      <div
        ref={heroPinRef}
        className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center select-none"
      >
        {/* Ambient Halftone Background */}
        <BackgroundHud progress={progress} />

        {/* Top Minimal Navigation */}
        <Navigation onNavigateSection={onNavigateSection} />

        {/* Connector lines — very subtle */}
        <CardConnectorLines progress={progress} />

        {/* Main Composition Stage with subtle mouse parallax */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {/* Card 01: Top-Left — WHAT WE DO */}
          <div className="absolute" style={{ top: '9%', left: '2%' }}>
            <TechCardWhatWeDo
              isActive={activeCardIndex === 0}
              onClick={() => handleCardClick(0)}
              progress={progress}
            />
          </div>

          {/* Card 03: Top-Right — CAPABILITIES */}
          <div className="absolute" style={{ top: '9%', right: '2%' }}>
            <TechCardCapabilities
              isActive={activeCardIndex === 2}
              onClick={() => handleCardClick(2)}
              progress={progress}
            />
          </div>

          {/* CENTRAL OBJECT — dominant visual */}
          <div className="z-10 flex items-center justify-center">
            <CentralChassis
              currentCard={currentCard}
              progress={progress}
            />
          </div>

          {/* Card 02: Bottom-Left — ABOUT ZWEN */}
          <div className="absolute" style={{ bottom: '9%', left: '2%' }}>
            <TechCardAbout
              isActive={activeCardIndex === 1}
              onClick={() => handleCardClick(1)}
              progress={progress}
            />
          </div>

          {/* Card 04: Bottom-Right — OUR WORK */}
          <div className="absolute" style={{ bottom: '9%', right: '2%' }}>
            <TechCardWork
              isActive={activeCardIndex === 3}
              onClick={() => handleCardClick(3)}
              progress={progress}
            />
          </div>
        </div>

        {/* Minimal scroll hint — bottom center, very quiet */}
        <div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center space-y-1 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - progress * 5) }}
        >
          <span className="font-mono text-[8px] tracking-[0.3em] text-black/30 uppercase">scroll</span>
          <div className="w-[1px] h-5 bg-black/20" />
        </div>
      </div>

      {/* Scroll spacer for ScrollTrigger pinning */}
      <div className="h-[2500px] pointer-events-none" />
    </div>
  );
};
