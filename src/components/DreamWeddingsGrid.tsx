import { useState } from 'react';
import { DREAM_WEDDINGS_SHOWCASE } from '../data/eventsData';
import { DreamWeddingCaseStudy } from '../types';
import { MapPin, Users, Calendar, ArrowRight, X, Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface DreamWeddingsGridProps {
  onOpenConsultation: (context: string) => void;
}

export default function DreamWeddingsGrid({ onOpenConsultation }: DreamWeddingsGridProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<DreamWeddingCaseStudy | null>(null);
  const [activeGalleryImgIndex, setActiveGalleryImgIndex] = useState(0);

  return (
    <section id="showcase" className="py-24 bg-[#0A0B0E] relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 03 • DREAM WEDDINGS WE CREATE
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              Curated Wedding Archetypes & Transparent Investment Scales
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              Explore real editorial case studies across palace destination buyouts, sacred Vedic sanctums, and high-tech kinetic galas. Clear pricing upfront with zero hidden contractor surprises.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-cad text-[#A69F92] hidden sm:inline">
              6 MASTER ARCHETYPES
            </span>
          </div>
        </div>

        {/* 3-Column × 2-Row Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DREAM_WEDDINGS_SHOWCASE.map((wedding) => (
            <div
              key={wedding.id}
              onClick={() => {
                setSelectedCaseStudy(wedding);
                setActiveGalleryImgIndex(0);
              }}
              className="group cursor-pointer rounded-2xl bg-[#12141A] border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-[#C5A880]/15 transform hover:-translate-y-1"
            >
              {/* Photo Card with Gold Pill & Budget Badge */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={wedding.coverImage}
                  alt={wedding.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-[#12141A]/25 to-transparent" />

                {/* Archetype Gold Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A0B0E]/85 backdrop-blur-md border border-[#C5A880]/50 text-[10px] font-mono-cad text-[#C5A880] font-semibold tracking-wider uppercase">
                  {wedding.archetype}
                </div>

                {/* Budget Spectrum Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-[#1F222B]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono-cad text-[#F3EFE6] font-semibold">
                  {wedding.budgetRange}
                </div>

                {/* Location & Guest Scale Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#E4DFD5]">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{wedding.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{wedding.guestCount}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono-cad text-[#A69F92]">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{wedding.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F3EFE6] font-normal group-hover:text-[#C5A880] transition-colors leading-snug">
                    {wedding.title}
                  </h3>
                  <p className="text-xs text-[#D0C9BD] line-clamp-2 leading-relaxed">
                    {wedding.subtitle}
                  </p>
                </div>

                {/* Client Quote Snippet */}
                <blockquote className="text-xs italic text-[#A69F92] border-l-2 border-[#C5A880]/40 pl-3 py-0.5 line-clamp-2">
                  "{wedding.clientQuote}"
                </blockquote>

                {/* Action Trigger */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-cad text-[#C5A880] group-hover:text-[#F3EFE6] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore Full Case Study</span>
                  </span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Reader Modal */}
      {selectedCaseStudy && (
        <div
          id="case-study-modal"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="bg-[#101217] border border-[#C5A880]/30 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header & Hero Gallery */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                <span className="px-2.5 py-0.5 rounded bg-[#C5A880]/15 border border-[#C5A880]/30 uppercase">
                  {selectedCaseStudy.archetype}
                </span>
                <span>•</span>
                <span>{selectedCaseStudy.venue}</span>
                <span>•</span>
                <span>{selectedCaseStudy.location}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F3EFE6]">
                {selectedCaseStudy.title}
              </h2>
              <p className="text-base text-[#D0C9BD] font-light">
                {selectedCaseStudy.subtitle}
              </p>

              {/* Main Gallery Display */}
              <div className="space-y-3 pt-2">
                <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black border border-white/10">
                  <img
                    src={selectedCaseStudy.gallery[activeGalleryImgIndex] || selectedCaseStudy.coverImage}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/70 backdrop-blur-sm text-xs font-mono-cad text-white">
                    Image {activeGalleryImgIndex + 1} of {selectedCaseStudy.gallery.length}
                  </div>
                </div>

                {/* Thumbnails row */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {selectedCaseStudy.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryImgIndex(idx)}
                      className={`h-16 w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        activeGalleryImgIndex === idx
                          ? 'border-[#C5A880] scale-95 shadow-md'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#17181F] border border-white/10 text-xs font-mono-cad">
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Clients</span>
                <span className="text-[#F3EFE6] font-medium">{selectedCaseStudy.clientNames}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Guest Count</span>
                <span className="text-[#F3EFE6] font-medium">{selectedCaseStudy.guestCount}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Duration</span>
                <span className="text-[#F3EFE6] font-medium">{selectedCaseStudy.duration}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Investment Spectrum</span>
                <span className="text-[#C5A880] font-semibold">{selectedCaseStudy.budgetRange}</span>
              </div>
            </div>

            {/* Editorial Story Chapters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div className="p-4 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  01. The Family Brief
                </span>
                <p className="text-[#E4DFD5]">{selectedCaseStudy.theBrief}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  02. Creative Direction & Concept
                </span>
                <p className="text-[#E4DFD5]">{selectedCaseStudy.theConcept}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  03. Contractor Execution
                </span>
                <p className="text-[#E4DFD5]">{selectedCaseStudy.theExecution}</p>
              </div>
            </div>

            {/* Bespoke Color Palette */}
            <div className="space-y-2">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Bespoke Event Color Palette & Textures:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedCaseStudy.decorPalette.map((palette, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#17181F] border border-white/10 flex items-center gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-full border border-white/20 shadow-sm shrink-0"
                      style={{ backgroundColor: palette.hex }}
                    />
                    <div>
                      <span className="text-xs font-medium text-[#F3EFE6] block">
                        {palette.name}
                      </span>
                      <span className="text-[10px] font-mono-cad text-[#A69F92]">
                        {palette.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Key Technical & Structural Highlights:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedCaseStudy.productionHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-[#E4DFD5]">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial & Quote */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#17181F] to-[#12141A] border-l-4 border-[#C5A880] space-y-1">
              <p className="font-serif italic text-base sm:text-lg text-[#F3EFE6]">
                "{selectedCaseStudy.clientQuote}"
              </p>
              <span className="text-xs font-mono-cad text-[#C5A880] block">
                — {selectedCaseStudy.clientNames} ({selectedCaseStudy.venue})
              </span>
            </div>

            {/* Vendor Credits */}
            <div className="space-y-2 border-t border-white/10 pt-4">
              <span className="text-xs font-mono-cad text-[#A69F92] uppercase block">
                Production Atelier Credits:
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-mono-cad text-[#D0C9BD]">
                {selectedCaseStudy.vendorCredits.map((vc, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-[#C5A880]">{vc.role}:</span>
                    <span>{vc.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono-cad text-[#D0C9BD]">
                Want an experience like {selectedCaseStudy.title}?
              </div>
              <button
                onClick={() => {
                  const title = selectedCaseStudy.title;
                  setSelectedCaseStudy(null);
                  onOpenConsultation(`Inspired by ${title}`);
                }}
                className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg"
              >
                <span>Reserve Consultation for this Archetype</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
