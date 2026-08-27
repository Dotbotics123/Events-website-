import { CORE_DISCIPLINES } from '../data/eventsData';
import { ShieldCheck, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';

interface CoreDisciplinesProps {
  onOpenConsultation: (context: string) => void;
}

export default function CoreDisciplines({ onOpenConsultation }: CoreDisciplinesProps) {
  return (
    <section id="disciplines" className="py-24 bg-[#0D0F14] relative overflow-hidden border-t border-[#C5A880]/15">
      {/* Background CAD grid lines */}
      <div className="absolute inset-0 cad-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 04 • CORE DISCIPLINES & CONTRACTOR CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              End-to-End Turnkey Execution Beyond Decor Alone
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              We own and operate our technical trussing, floral cold-chains, and power staging infrastructure. One master contractor responsible for every single wire, flower, and live moment.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17181C] border border-[#C5A880]/30 text-xs font-mono-cad text-[#C5A880]">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>ISO Certified Structural Safety</span>
          </div>
        </div>

        {/* 3-Column × 2-Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_DISCIPLINES.map((discipline) => (
            <div
              key={discipline.id}
              className="rounded-2xl bg-[#13151B] border border-white/10 hover:border-[#C5A880]/50 p-5 sm:p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A880]/10 group"
            >
              {/* Discipline Number & Title */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="font-mono-cad text-xl font-light text-[#C5A880]">
                    {discipline.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono-cad tracking-widest text-[#A69F92] px-2 py-0.5 rounded bg-white/5">
                    ATELIER DISCIPLINE
                  </span>
                </div>

                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-black mb-3">
                  <img
                    src={discipline.image}
                    alt={discipline.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13151B] via-transparent to-transparent" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE6] font-normal group-hover:text-[#C5A880] transition-colors leading-snug">
                  {discipline.title}
                </h3>
                <p className="text-xs text-[#D0C9BD] leading-relaxed line-clamp-2 font-light">
                  {discipline.description}
                </p>
              </div>

              {/* Lead Architect & Consultation Trigger */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono-cad text-[#A69F92]">
                  <UserCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="truncate max-w-[170px]">{discipline.leadArchitect}</span>
                </div>

                <button
                  onClick={() => onOpenConsultation(`Discipline: ${discipline.title}`)}
                  className="px-3.5 py-1.5 rounded-full bg-[#17181C] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#0A0B0E] transition-all text-xs font-mono-cad flex items-center gap-1.5 border border-white/10"
                  title="Inquire for this discipline"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
