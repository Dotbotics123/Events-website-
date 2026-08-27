import { MUHURTHAM_DATES_2026_2027 } from '../data/eventsData';
import { ArrowRight } from 'lucide-react';

interface MuhurthamAndFaqProps {
  onOpenConsultation: (context: string) => void;
}

export default function MuhurthamAndFaq({ onOpenConsultation }: MuhurthamAndFaqProps) {
  return (
    <section id="muhurtham-faq" className="py-24 bg-[#0D0F14] relative overflow-hidden border-t border-[#C5A880]/15">
      {/* Background CAD grid */}
      <div className="absolute inset-0 cad-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Auspicious Muhurtham Dates 2026/2027 Guide */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION • 2026 & 2027 AUSPICIOUS MUHURTHAM DATES
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              Vedic Planetary Alignments & Wedding Calendar
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              Curated in consultation with Vedic scholars. Key auspicious Muhurthams across Telugu, Tamil, and South Indian traditions to lock in turnkey structural fabrication and venue dates in advance.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Inquiring for Auspicious Muhurtham Date')}
            className="self-start md:self-auto px-6 py-2.5 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
          >
            <span>Lock a Muhurtham Date</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Muhurtham Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MUHURTHAM_DATES_2026_2027.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#12141A] border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 space-y-4 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#C5A880]/10"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-cad px-2.5 py-0.5 rounded bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30 font-semibold">
                    {item.monthYear}
                  </span>
                  <span className="text-[11px] font-mono-cad text-[#A69F92]">{item.timing}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F3EFE6] font-medium group-hover:text-[#C5A880] transition-colors">
                  {item.date}
                </h3>

                <div className="space-y-1 text-xs font-mono-cad text-[#D0C9BD] pt-1">
                  <div>
                    <span className="text-[#A69F92]">Nakshatram:</span> {item.nakshatram}
                  </div>
                  <div>
                    <span className="text-[#A69F92]">Thithi:</span> {item.thithi}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-[#A69F92] italic line-clamp-1">
                  {item.significance}
                </span>
                <button
                  onClick={() => onOpenConsultation(`Muhurtham Date: ${item.date}`)}
                  className="text-xs font-mono-cad text-[#C5A880] hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Check Slot</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
