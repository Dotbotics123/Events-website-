import React, { useState, useRef } from 'react';
import { METAMORPHOSIS_VENUES } from '../data/eventsData';
import { Sparkles, Clock, MoveHorizontal, CheckCircle2, ArrowRight } from 'lucide-react';

interface SpatialMetamorphosisProps {
  onOpenConsultation: (context: string) => void;
}

export default function SpatialMetamorphosis({ onOpenConsultation }: SpatialMetamorphosisProps) {
  const [activeVenueIndex, setActiveVenueIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentVenue = METAMORPHOSIS_VENUES[activeVenueIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="metamorphosis" className="py-24 bg-[#0A0B0E] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 05 • SPATIAL METAMORPHOSIS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              From Blank Canvas Ground to Monumental Atmosphere
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              Drag the gold handle to reveal how our turnkey engineering transforms raw empty fields, cobblestone courtyards, and standard halls into celestial architectural realms.
            </p>
          </div>

          {/* Venue Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {METAMORPHOSIS_VENUES.map((venue, idx) => (
              <button
                key={venue.id}
                onClick={() => {
                  setActiveVenueIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono-cad tracking-wider uppercase transition-all ${
                  activeVenueIndex === idx
                    ? 'bg-[#C5A880] text-[#0A0B0E] font-semibold shadow-lg'
                    : 'bg-[#17181C] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dual-Layer Wipe Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Slider (8 cols) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative h-[380px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 cursor-ew-resize select-none bg-black"
            >
              {/* Layer 1: AFTER / FINISHED TRANSFORMATION (Base layer) */}
              <img
                src={currentVenue.afterImage}
                alt="Finished Master Setup"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-md bg-[#0A0B0E]/85 backdrop-blur-md border border-[#C5A880]/50 text-xs font-mono-cad text-[#C5A880] font-semibold tracking-wider uppercase">
                FINISHED ATELIER SETUP
              </div>

              {/* Layer 2: BEFORE / RAW VENUE (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img
                  src={currentVenue.beforeImage}
                  alt="Raw Ground Before Setup"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/20 text-xs font-mono-cad text-white/80 tracking-wider uppercase">
                  RAW GROUND CANVAS
                </div>
              </div>

              {/* Draggable Gold Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-[#C5A880] shadow-[0_0_15px_rgba(197,168,128,0.8)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C5A880] text-[#0A0B0E] flex items-center justify-center shadow-2xl border-2 border-white cursor-ew-resize">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Helper prompt overlay on mobile */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono-cad text-white/80 pointer-events-none sm:hidden">
                Swipe Left / Right to Reveal
              </div>
            </div>
          </div>

          {/* Transformation Spec Sheet & Breakdown (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#12141A] border border-white/10 space-y-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentVenue.turnaroundTime}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F3EFE6]">
                  {currentVenue.name}
                </h3>
                <p className="text-xs text-[#A69F92] font-mono-cad">
                  {currentVenue.location}
                </p>
              </div>

              {/* Before vs After descriptions */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono-cad text-white/60 uppercase block">
                    Before Condition:
                  </span>
                  <p className="text-[#D0C9BD]">{currentVenue.beforeDesc}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#1F222B] border border-[#C5A880]/30 space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase block">
                    Transformed Atmosphere:
                  </span>
                  <p className="text-[#F3EFE6]">{currentVenue.afterDesc}</p>
                </div>
              </div>

              {/* Itemized Materials Used */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                  Turnaround Material Log:
                </span>
                <div className="space-y-1.5 text-xs">
                  {currentVenue.materialsBreakdown.map((mat, i) => (
                    <div key={i} className="flex items-center justify-between text-[#E4DFD5]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{mat.label}</span>
                      </div>
                      <span className="font-mono-cad text-[#C5A880] text-[11px]">{mat.qty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onOpenConsultation(`Metamorphosis Venue: ${currentVenue.name}`)}
                className="w-full py-3 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Transform My Venue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
