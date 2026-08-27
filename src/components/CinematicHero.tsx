import React, { useState, useEffect, useRef } from 'react';
import { HERO_SCENES } from '../data/eventsData';
import { Sparkles, Calendar, ArrowRight, Compass, ShieldCheck, MapPin, Layers, Users, Zap } from 'lucide-react';

interface CinematicHeroProps {
  onOpenConsultation: (initialContext?: string) => void;
  onOpenAuraAi: () => void;
  onOpenCalculator?: () => void;
}

export default function CinematicHero({
  onOpenConsultation,
  onOpenAuraAi,
  onOpenCalculator
}: CinematicHeroProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const currentScene = HERO_SCENES[activeSceneIndex];

  // Auto rotate scenes every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = window.setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Subtle mouse tracking for parallax depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="cinematic-hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[94vh] lg:min-h-screen w-full bg-[#0A0B0E] overflow-hidden flex flex-col justify-between pt-24 pb-8"
    >
      {/* Background Image Carousel with Parallax & Radiant Contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SCENES.map((scene, index) => {
          const isActive = index === activeSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              style={{
                transform: isActive
                  ? `scale(1.03) translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`
                  : 'scale(1.06)',
                transition: 'opacity 1000ms ease-in-out, transform 400ms ease-out'
              }}
            >
              <img
                src={scene.image}
                alt={scene.title}
                className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08]"
                referrerPolicy="no-referrer"
              />
              {/* Asymmetric lighting gradient: darker on left 60% for text contrast, open and vibrant on right 40% */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E] via-[#0A0B0E]/80 to-transparent w-full lg:w-[70%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/30 to-transparent" />
              {/* Ambient Warm Candlelight Bloom */}
              <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/15 rounded-full blur-[130px] pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Subtle CAD Grid Overlay */}
      <div className="absolute inset-0 z-10 cad-grid opacity-20 pointer-events-none" />

      {/* Main Content Area - 60% Left-Aligned Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (approx 60% width) with streamlined content */}
          <div className="lg:col-span-7 xl:col-span-7 text-left space-y-5">
            {/* Category & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17181C]/90 border border-[#C5A880]/50 backdrop-blur-md text-[10.5px] font-mono-cad text-[#C5A880] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-ping" />
                {currentScene.category}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-sm text-xs text-[#E4DFD5]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{currentScene.location}</span>
              </div>
            </div>

            {/* Master Display Heading */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F3EFE6] leading-[1.12] tracking-tight">
                {currentScene.title}
              </h1>
              <p className="text-sm sm:text-lg text-[#D0C9BD] font-light max-w-xl leading-relaxed">
                {currentScene.subtitle}
              </p>
            </div>

            {/* Streamlined Architectural Blueprint Metric Pill */}
            <div className="inline-flex flex-wrap items-center gap-3 p-3 rounded-xl bg-[#0D0F14]/90 border border-[#C5A880]/30 backdrop-blur-md text-xs font-mono-cad text-[#D0C9BD]">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-[#F3EFE6] font-semibold">{currentScene.specs.area}</span>
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span className="text-[#A69F92]">Cap:</span> <span className="text-[#F3EFE6] font-medium">{currentScene.specs.attendees}</span>
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span className="text-[#A69F92]">Lighting:</span> <span className="text-[#C5A880] font-medium">{currentScene.specs.lumens}</span>
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span className="text-[#A69F92]">Setup:</span> <span className="text-[#94C999] font-medium">{currentScene.specs.setupHours}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                id="hero-reserve-btn"
                onClick={() => onOpenConsultation(`Hero Scene: ${currentScene.title}`)}
                className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#C5A880]/20"
              >
                <Calendar className="w-4 h-4 text-[#0A0B0E]" />
                <span>Reserve Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-aura-ai-btn"
                onClick={onOpenAuraAi}
                className="px-5 py-3 rounded-full bg-[#17181C]/90 hover:bg-[#202229] border border-[#C5A880]/40 text-[#F3EFE6] font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all hover:border-[#C5A880]"
              >
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Aura AI Planner</span>
              </button>

              <button
                id="hero-calculator-btn"
                onClick={onOpenCalculator}
                className="px-4 py-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-[#D0C9BD] hover:text-[#C5A880] text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center gap-2 transition-all"
              >
                <Compass className="w-4 h-4 text-[#C5A880]" />
                <span>Cost Estimator</span>
              </button>
            </div>
          </div>

          {/* Right Column (approx 40% width) - Intentionally open for scenic background visibility */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col justify-end items-end h-full">
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md max-w-xs space-y-1.5 shadow-2xl text-right animate-in fade-in duration-500">
              <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono-cad text-[#C5A880] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#94C999]" />
                <span>Featured Execution #{activeSceneIndex + 1}</span>
              </div>
              <h4 className="text-sm font-serif text-[#F3EFE6] font-medium">{currentScene.title}</h4>
              <p className="text-[11px] text-[#A69F92] font-mono-cad">{currentScene.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scene Switcher Dock & Live Metric Tickers */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* 01, 02, 03, 04 Scene Dock */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full pb-2 md:pb-0">
            {HERO_SCENES.map((scene, idx) => {
              const isActive = idx === activeSceneIndex;
              return (
                <button
                  key={scene.id}
                  onClick={() => setActiveSceneIndex(idx)}
                  className={`flex items-center gap-3 px-3.5 py-2 rounded-lg border text-left transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#17181C] border-[#C5A880] text-[#F3EFE6]'
                      : 'bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/25'
                  }`}
                >
                  <span className={`text-xs font-mono-cad font-bold ${isActive ? 'text-[#C5A880]' : 'text-white/40'}`}>
                    {scene.number}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium tracking-wide leading-tight">
                      {scene.title}
                    </span>
                    <span className="text-[10px] text-[#A69F92] font-mono-cad truncate max-w-[130px]">
                      {scene.location}
                    </span>
                  </div>
                  {/* Active scene progress bar */}
                  {isActive && !isPaused && (
                    <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden ml-1 hidden sm:block">
                      <div className="h-full bg-[#C5A880] animate-[shimmer_6s_linear_infinite]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
