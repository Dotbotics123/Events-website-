import { useState } from 'react';
import { SERVICE_VERTICALS, CULTURAL_OCCASIONS } from '../data/eventsData';
import { CulturalOccasion, ServiceVerticalId } from '../types';
import { Sparkles, Clock, Users, ArrowRight, FileText, CheckCircle2, X, Download, ShieldCheck, Flame, Crown, Zap } from 'lucide-react';

interface ServiceOccasionExplorerProps {
  onSelectOccasion?: (occasion: CulturalOccasion) => void;
  onOpenConsultation: (context: string) => void;
}

export default function ServiceOccasionExplorer({
  onSelectOccasion,
  onOpenConsultation
}: ServiceOccasionExplorerProps) {
  const [activeVertical, setActiveVertical] = useState<ServiceVerticalId | 'all'>('all');
  const [selectedOccasionForModal, setSelectedOccasionForModal] = useState<CulturalOccasion | null>(null);

  const filteredOccasions =
    activeVertical === 'all'
      ? CULTURAL_OCCASIONS
      : CULTURAL_OCCASIONS.filter((occ) => occ.verticalId === activeVertical);

  const getVerticalIcon = (id: string) => {
    switch (id) {
      case 'wedding-reception':
        return <Crown className="w-4 h-4 text-[#C5A880]" />;
      case 'sacred-rituals':
        return <Flame className="w-4 h-4 text-[#C5A880]" />;
      case 'milestones':
        return <Sparkles className="w-4 h-4 text-[#C5A880]" />;
      case 'stage-production':
        return <Zap className="w-4 h-4 text-[#C5A880]" />;
      default:
        return <Crown className="w-4 h-4 text-[#C5A880]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0D0F14] relative overflow-hidden border-t border-[#C5A880]/15">
      {/* Background CAD grid */}
      <div className="absolute inset-0 cad-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 02 • SERVICES & CULTURAL OCCASIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              {CULTURAL_OCCASIONS.length} Specialized Wedding & Cultural Traditions
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              Find your exact occasion in one click. Every ceremony is executed with deep Vedic adherence, master craftsmanship, and turn-key structural engineering.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Custom Occasion Scope')}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-[#17181C] hover:bg-[#202229] border border-[#C5A880]/40 text-[#C5A880] text-xs font-mono-cad tracking-wider uppercase flex items-center gap-2 transition-all"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Primary Service Discipline Categories (No All Disciplines box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {SERVICE_VERTICALS.map((vert, index) => {
            const count = CULTURAL_OCCASIONS.filter((o) => o.verticalId === vert.id).length;
            const isSelected = activeVertical === vert.id;
            return (
              <button
                key={vert.id}
                onClick={() => setActiveVertical(activeVertical === vert.id ? 'all' : vert.id)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#17181C] border-[#C5A880] text-[#F3EFE6] shadow-xl ring-1 ring-[#C5A880]/50'
                    : 'bg-[#0A0B0E]/70 border-white/10 text-white/80 hover:bg-[#17181C]/60 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getVerticalIcon(vert.id)}
                    <span className="text-xs font-mono-cad text-[#C5A880]">0{index + 1}</span>
                  </div>
                  <span className="text-[10.5px] px-2 py-0.5 rounded bg-white/10 text-white font-mono-cad">
                    {count} Events
                  </span>
                </div>
                <h3 className="font-serif text-base text-[#F3EFE6] font-medium group-hover:text-[#C5A880] transition-colors">
                  {vert.name}
                </h3>
                <p className="text-[11px] text-[#A69F92] mt-1 line-clamp-1">{vert.shortDesc}</p>
              </button>
            );
          })}
        </div>

        {/* Category Pill Filter Quick Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveVertical('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono-cad tracking-wider transition-all whitespace-nowrap ${
              activeVertical === 'all'
                ? 'bg-[#C5A880] text-[#0A0B0E] font-bold shadow-md'
                : 'bg-[#17181C] border border-white/10 text-[#D0C9BD] hover:text-[#C5A880]'
            }`}
          >
            All {CULTURAL_OCCASIONS.length} Occasions
          </button>
          {CULTURAL_OCCASIONS.map((occ) => (
            <button
              key={occ.id}
              onClick={() => setSelectedOccasionForModal(occ)}
              className="px-3 py-1.5 rounded-full bg-[#17181C]/80 hover:bg-[#202229] border border-white/10 hover:border-[#C5A880]/40 text-xs text-[#D0C9BD] hover:text-[#C5A880] transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <span>{occ.name}</span>
            </button>
          ))}
        </div>

        {/* 3-Column Image-First Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOccasions.map((occ) => (
            <div
              key={occ.id}
              className="group rounded-2xl bg-[#13151A] border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-[#C5A880]/15"
            >
              {/* Image Container - High Clarity & Prominence */}
              <div
                onClick={() => setSelectedOccasionForModal(occ)}
                className="relative h-60 sm:h-64 w-full overflow-hidden bg-black cursor-pointer"
              >
                <img
                  src={occ.image}
                  alt={occ.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.90] group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13151A] via-[#13151A]/20 to-transparent" />

                {/* Estimated Setup Time Tag */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A0B0E]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono-cad text-[#F3EFE6]">
                  <Clock className="w-3 h-3 text-[#C5A880]" />
                  <span>{occ.setupTime}</span>
                </div>

                {/* Budget Band Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#1F222B]/90 backdrop-blur-md border border-[#C5A880]/40 text-[11px] font-mono-cad text-[#C5A880] font-semibold">
                  {occ.budgetRange}
                </div>

                {/* Guest Scale Indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-[#E4DFD5] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{occ.guestScale}</span>
                </div>
              </div>

              {/* Card Body - Streamlined to Title + 1-2 lines description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3
                    onClick={() => setSelectedOccasionForModal(occ)}
                    className="font-serif text-xl text-[#F3EFE6] font-medium group-hover:text-[#C5A880] transition-colors cursor-pointer leading-snug"
                  >
                    {occ.name}
                  </h3>

                  <p className="text-xs text-[#D0C9BD] line-clamp-2 leading-relaxed font-light">
                    {occ.description}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedOccasionForModal(occ)}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#17181C] hover:bg-[#202229] border border-white/10 hover:border-white/30 text-xs text-[#F3EFE6] font-mono-cad flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>View Spec Sheet</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultation(`Inquiry for ${occ.name} (${occ.budgetRange})`)}
                    className="py-2 px-3.5 rounded-lg bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] text-xs font-semibold tracking-wider flex items-center gap-1 transition-colors"
                    title="Inquire for this occasion"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1-Page Spec Sheet Preview Modal */}
      {selectedOccasionForModal && (
        <div
          id="spec-sheet-modal"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-[#12141A] border border-[#C5A880]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedOccasionForModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                <ShieldCheck className="w-4 h-4" />
                <span>CONTRACTOR SPECIFICATION SHEET & INCLUSIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
                {selectedOccasionForModal.name}
              </h3>
              {selectedOccasionForModal.teluguName && (
                <p className="text-sm text-[#C5A880]/90">
                  {selectedOccasionForModal.teluguName}
                </p>
              )}
              <p className="text-xs text-[#D0C9BD] pt-1">
                {selectedOccasionForModal.tagline}
              </p>
            </div>

            {/* Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#17181C] border border-white/10 text-xs font-mono-cad">
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Turnaround</span>
                <span className="text-[#F3EFE6] font-semibold">{selectedOccasionForModal.setupTime}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Guest Scale</span>
                <span className="text-[#F3EFE6] font-semibold">{selectedOccasionForModal.guestScale}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A69F92] uppercase block">Contractor Band</span>
                <span className="text-[#C5A880] font-semibold">{selectedOccasionForModal.budgetRange}</span>
              </div>
            </div>

            {/* Detailed Spec Sheet */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  1. Architectural & Spatial Concept
                </span>
                <p className="text-[#E4DFD5] leading-relaxed">
                  {selectedOccasionForModal.specSheet.architecturalStyle}
                </p>
                <div className="text-[11px] text-[#A69F92]">
                  Stage Dimensions: <span className="text-[#F3EFE6]">{selectedOccasionForModal.specSheet.stageDimensions}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  2. Floral Procurement & Botanical Elements
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedOccasionForModal.specSheet.floralVarieties.map((floral, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#17181C] border border-white/10 text-[#D0C9BD] text-xs"
                    >
                      {floral}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  3. Photometric Lighting & Rigging Blueprint
                </span>
                <p className="text-[#E4DFD5] leading-relaxed">
                  {selectedOccasionForModal.specSheet.lightingDesign}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                  4. Raw Materials & Structural Fabrication
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedOccasionForModal.specSheet.fabricationMaterials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#1F222B] border border-[#C5A880]/20 text-[#C5A880] text-xs"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase">
                Complete Contractor Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedOccasionForModal.keyInclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#E4DFD5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  alert(`1-Page Decor Specification PDF for "${selectedOccasionForModal.name}" generated and ready.`);
                }}
                className="px-4 py-2.5 rounded-lg bg-[#17181C] hover:bg-[#202229] border border-white/15 text-xs text-[#E4DFD5] font-mono-cad flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Save Spec PDF</span>
              </button>

              <button
                onClick={() => {
                  const name = selectedOccasionForModal.name;
                  setSelectedOccasionForModal(null);
                  onOpenConsultation(`Commissioning for ${name}`);
                }}
                className="px-6 py-2.5 rounded-lg bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg"
              >
                <span>Reserve Consultation for This Occasion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
