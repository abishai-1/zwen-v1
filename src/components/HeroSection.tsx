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
import { TimelineControls } from './TimelineControls';
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
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
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
        end: '+=2500', // 2500px of smooth pinned scroll journey
        pin: heroPinRef.current,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);

          // Update active card based on scroll progress
          if (p < 0.25) {
            setActiveCardIndex(0); // 01 What We Do
          } else if (p < 0.55) {
            setActiveCardIndex(1); // 02 About ZWEN
          } else if (p < 0.85) {
            setActiveCardIndex(2); // 03 Capabilities
          } else {
            setActiveCardIndex(3); // 04 Our Work
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Compute active stage index (0: Rhombus, 1: Hexagon, 2: Aperture)
  const activeStageIndex = progress < 0.35 ? 0 : progress < 0.7 ? 1 : 2;
  const currentCard = HERO_CARDS[activeCardIndex] || HERO_CARDS[0];

  // Programmatic jump to a stage
  const handleSelectStage = (stageIdx: number) => {
    if (!containerRef.current) return;
    const targetProgress = stageIdx === 0 ? 0.05 : stageIdx === 1 ? 0.45 : 0.88;
    const scrollDistance = 2500;
    const targetY = containerRef.current.offsetTop + targetProgress * scrollDistance;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
    sound.playMorph();
  };

  const handleCardClick = (cardIdx: number) => {
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
        {/* Ambient HUD Background, Rulers & Reference Stamps */}
        <BackgroundHud progress={progress} />

        {/* Top Minimal Navigation */}
        <Navigation onNavigateSection={onNavigateSection} />

        {/* Dynamic Vector Guide Lines Linking Cards to Central Chassis */}
        <CardConnectorLines progress={progress} />

        {/* Main Composition Stage with Subtle Mouse Parallax */}
        <div 
          className="relative w-full max-w-7xl h-full flex items-center justify-center p-4 md:p-8"
          style={{
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
            transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {/* Card 1: Top-Left (01 WHAT WE DO) */}
          <div className="absolute top-[10%] left-[3%] lg:top-[12%] lg:left-[6%] z-20">
            <TechCardWhatWeDo
              isActive={activeCardIndex === 0}
              onClick={() => handleCardClick(0)}
              progress={progress}
            />
          </div>

          {/* Card 2: Top-Right (03 CAPABILITIES) */}
          <div className="absolute top-[10%] right-[3%] lg:top-[12%] right-[6%] z-20">
            <TechCardCapabilities
              isActive={activeCardIndex === 2}
              onClick={() => handleCardClick(2)}
              progress={progress}
            />
          </div>

          {/* CENTRAL OBJECT: ZWEN CORE (Morphing SVG Chassis, Imagery & Telemetry HUD) */}
          <div className="z-10 flex items-center justify-center">
            <CentralChassis 
              currentCard={currentCard} 
              progress={progress} 
            />
          </div>

          {/* Card 3: Bottom-Left (02 ABOUT ZWEN) */}
          <div className="absolute bottom-[10%] left-[3%] lg:bottom-[12%] lg:left-[6%] z-20">
            <TechCardAbout
              isActive={activeCardIndex === 1}
              onClick={() => handleCardClick(1)}
              progress={progress}
            />
          </div>

          {/* Card 4: Bottom-Right (04 SELECTED WORK) */}
          <div className="absolute bottom-[10%] right-[3%] lg:bottom-[12%] lg:right-[6%] z-20">
            <TechCardWork
              isActive={activeCardIndex === 3}
              onClick={() => handleCardClick(3)}
              progress={progress}
            />
          </div>
        </div>

        {/* Interactive Bottom Timeline Controls */}
        <TimelineControls 
          progress={progress} 
          activeStageIndex={activeStageIndex} 
          onSelectStage={handleSelectStage} 
        />
      </div>

      {/* Spacer to allow scroll length for the ScrollTrigger pinning */}
      <div className="h-[2500px] pointer-events-none" />
    </div>
  );
};
