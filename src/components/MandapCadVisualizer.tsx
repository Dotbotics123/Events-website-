import { useState } from 'react';
import { MANDAP_BLUEPRINTS } from '../data/eventsData';
import { MandapBlueprint } from '../types';
import { Layers, ShieldCheck, Box, Compass, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

interface MandapCadVisualizerProps {
  onOpenConsultation: (context: string) => void;
}

export default function MandapCadVisualizer({ onOpenConsultation }: MandapCadVisualizerProps) {
  const [activeMandapIndex, setActiveMandapIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'textured' | 'blueprint'>('textured');

  const currentMandap = MANDAP_BLUEPRINTS[activeMandapIndex];

  return (
    <section id="cad-blueprints" className="py-24 bg-[#0D0F14] relative overflow-hidden border-t border-[#C5A880]/15">
      {/* Background CAD grid */}
      <div className="absolute inset-0 cad-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 06 • 3D CAD MANDAP & BLUEPRINT VISUALIZER
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              Pre-Engineered 3D Blueprints Before Fabrication
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              We eliminate guesswork. Every custom mandap is modeled in 3D CAD with exact structural load calculations, wind ratings, and photometrics before a single wood beam is carved.
            </p>
          </div>

          {/* Model Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {MANDAP_BLUEPRINTS.map((mandap, idx) => (
              <button
                key={mandap.id}
                onClick={() => setActiveMandapIndex(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-cad tracking-wider uppercase transition-all ${
                  activeMandapIndex === idx
                    ? 'bg-[#17181C] border border-[#C5A880] text-[#C5A880] font-semibold shadow-md ring-1 ring-[#C5A880]/40'
                    : 'bg-[#0A0B0E] border border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {mandap.name.split(' ')[1]} {mandap.name.split(' ')[2] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visualizer Canvas & Mode Toggle (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#12141A] border border-white/15 overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4">
            {/* Top Bar: View Mode Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-[#C5A880]" />
                <span className="text-xs font-mono-cad text-[#F3EFE6] tracking-wider uppercase">
                  {currentMandap.name}
                </span>
              </div>

              {/* Textured vs Blueprint Toggle */}
              <div className="flex items-center p-1 rounded-lg bg-[#0A0B0E] border border-white/10 text-xs font-mono-cad">
                <button
                  onClick={() => setViewMode('textured')}
                  className={`px-3 py-1 rounded transition-all ${
                    viewMode === 'textured'
                      ? 'bg-[#C5A880] text-[#0A0B0E] font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  3D Render
                </button>
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`px-3 py-1 rounded transition-all ${
                    viewMode === 'blueprint'
                      ? 'bg-[#2563EB] text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  CAD Wireframe
                </button>
              </div>
            </div>

            {/* Display Canvas with Active View Mode */}
            <div className="relative h-[320px] sm:h-[420px] w-full rounded-xl overflow-hidden bg-black border border-white/10">
              {viewMode === 'textured' ? (
                <div className="relative w-full h-full animate-in fade-in duration-300">
                  <img
                    src={currentMandap.renderImage}
                    alt={currentMandap.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono-cad text-[#C5A880]">
                    PHOTOREALISTIC 3D ATELIER TEXTURE
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full bg-[#051124] animate-in fade-in duration-300 flex items-center justify-center p-4">
                  {/* Blueprint Grid & Wireframe Graphic Simulation */}
                  <img
                    src={currentMandap.blueprintImage}
                    alt="CAD Blueprint"
                    className="w-full h-full object-cover filter invert hue-rotate-180 contrast-125 opacity-70"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-transparent to-transparent" />

                  {/* CAD Wireframe Dimension Markers */}
                  <div className="absolute top-4 left-4 p-2.5 rounded bg-[#0A1A35]/90 border border-[#3B82F6]/50 text-[11px] font-mono-cad text-[#93C5FD] space-y-1">
                    <div>LAYER: STR_TRUSS_TEAK_01</div>
                    <div>STATUS: LOAD CERTIFIED (2.5T)</div>
                    <div>GRID COORD: 17.3850° N, 78.4867° E</div>
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-[#0A1A35]/90 border border-[#3B82F6]/50 text-xs font-mono-cad text-[#93C5FD]">
                    ARCHITECTURAL VECTOR DWG
                  </div>
                </div>
              )}
            </div>

            {/* Bottom CAD Specs Log */}
            <div className="p-3 rounded-xl bg-[#0A0B0E] border border-white/10 space-y-1.5 text-xs font-mono-cad">
              <div className="text-[10px] text-[#A69F92] uppercase">CAD Engineering Highlights:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-[#E4DFD5]">
                {currentMandap.cadSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blueprint Engineering Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#12141A] border border-white/10 space-y-5">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>STRUCTURAL CAD CERTIFICATION</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F3EFE6]">
                  {currentMandap.name}
                </h3>
                <p className="text-xs text-[#D0C9BD]">
                  Style: <span className="text-[#C5A880] font-medium">{currentMandap.style}</span>
                </p>
              </div>

              {/* Dimensions Quad Box */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono-cad">
                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/10 space-y-0.5">
                  <span className="text-[10px] text-[#A69F92] uppercase block">Apex Height</span>
                  <span className="text-[#F3EFE6] font-semibold">{currentMandap.dimensions.height}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/10 space-y-0.5">
                  <span className="text-[10px] text-[#A69F92] uppercase block">Clear Span</span>
                  <span className="text-[#F3EFE6] font-semibold">{currentMandap.dimensions.span}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/10 space-y-0.5">
                  <span className="text-[10px] text-[#A69F92] uppercase block">Footprint Plinth</span>
                  <span className="text-[#F3EFE6] font-semibold">{currentMandap.dimensions.footprint}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/10 space-y-0.5">
                  <span className="text-[10px] text-[#A69F92] uppercase block">Truss Load Rating</span>
                  <span className="text-[#C5A880] font-semibold">{currentMandap.dimensions.loadCapacity}</span>
                </div>
              </div>

              {/* Material Craftsmanship */}
              <div className="space-y-2.5 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase block">
                    Woodwork & Framework
                  </span>
                  <p className="text-[#E4DFD5]">{currentMandap.woodwork}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase block">
                    Brass & Gold Elements
                  </span>
                  <p className="text-[#E4DFD5]">{currentMandap.brassElements}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase block">
                    Photometric Temperature
                  </span>
                  <p className="text-[#E4DFD5]">{currentMandap.lightingTemp}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase block">
                    Floral Stem Estimate
                  </span>
                  <p className="text-[#F3EFE6] font-medium">{currentMandap.floralStemEstimate}</p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onOpenConsultation(`Custom Mandap Commission: ${currentMandap.name}`)}
                className="w-full py-3 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Commission This Mandap Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
