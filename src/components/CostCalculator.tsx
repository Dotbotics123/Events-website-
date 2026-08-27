import { useState, useMemo } from 'react';
import { CalculatorParameters } from '../types';
import { Compass, Users, Calendar, ArrowRight, ShieldCheck, Download, Sparkles, CheckCircle2 } from 'lucide-react';

interface CostCalculatorProps {
  onOpenConsultationWithEstimates: (estimateSummary: string) => void;
}

export default function CostCalculator({ onOpenConsultationWithEstimates }: CostCalculatorProps) {
  const [params, setParams] = useState<CalculatorParameters>({
    eventType: 'wedding',
    guestCount: 350,
    days: 2,
    decorTier: 'haute',
    cateringOption: 'traditional-bhojanam',
    avTier: 'concert-kinetic',
    city: 'hyderabad'
  });

  // Calculate live itemized estimates in INR (Lakhs)
  const calculation = useMemo(() => {
    // 1. Decor & Mandap base calculation
    let decorBase = 0;
    if (params.decorTier === 'artisan') decorBase = 6.5;
    else if (params.decorTier === 'haute') decorBase = 18.0;
    else if (params.decorTier === 'royal') decorBase = 45.0;

    // Scale decor with days and venue scale
    const decorTotal = decorBase * (1 + (params.days - 1) * 0.45);

    // 2. Catering & Banquet calculation
    let plateCost = 0;
    if (params.cateringOption === 'traditional-bhojanam') plateCost = 1400;
    else if (params.cateringOption === 'royal-dastarkhwan') plateCost = 2200;
    else if (params.cateringOption === 'global-gourmet') plateCost = 3500;

    const cateringTotal = (plateCost * params.guestCount * params.days) / 100000; // in Lakhs

    // 3. Audio / Lighting / Kinetic Rig
    let avBase = 0;
    if (params.avTier === 'acoustic') avBase = 2.5;
    else if (params.avTier === 'concert-kinetic') avBase = 8.5;
    else if (params.avTier === 'ultra-stadium') avBase = 22.0;

    const avTotal = avBase * (1 + (params.days - 1) * 0.35);

    // 4. Logistics, Shadow Butlers & Permits
    let logisticsBase = 1.5;
    if (params.city === 'udaipur' || params.city === 'jaipur' || params.city === 'destination-intl') {
      logisticsBase = 5.5;
    }
    const logisticsTotal = logisticsBase * (1 + (params.days - 1) * 0.4);

    const grandTotalMin = decorTotal + cateringTotal + avTotal + logisticsTotal;
    const grandTotalMax = grandTotalMin * 1.22;

    return {
      decorTotal: decorTotal.toFixed(1),
      cateringTotal: cateringTotal.toFixed(1),
      avTotal: avTotal.toFixed(1),
      logisticsTotal: logisticsTotal.toFixed(1),
      grandTotalMin: grandTotalMin.toFixed(1),
      grandTotalMax: grandTotalMax.toFixed(1)
    };
  }, [params]);

  const summaryString = `Live Estimate: ${params.eventType.toUpperCase()} (${params.guestCount} Guests, ${params.days} Days, ${params.city.toUpperCase()}) -> Approx ₹${calculation.grandTotalMin}L - ₹${calculation.grandTotalMax}L`;

  return (
    <section id="calculator" className="py-24 bg-[#0D0F14] relative overflow-hidden border-t border-[#C5A880]/15">
      {/* Background CAD grid */}
      <div className="absolute inset-0 cad-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 08 • TRANSPARENT CONTRACTOR COST CALCULATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              Interactive Investment & Production Estimator
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              Configure your expected celebration parameters below. Get real-time itemized cost modeling based on current wholesale floral rates, truss rigging, and master catering standards.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17181C] border border-[#C5A880]/30 text-xs font-mono-cad text-[#C5A880]">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Contractor Kickbacks Guarantee</span>
          </div>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#12141A] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
            {/* 1. Event Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'wedding', label: 'Royal Wedding' },
                  { id: 'sangeet', label: 'Sangeet & Gala' },
                  { id: 'sacred-rituals', label: 'Vedic Ceremonies' },
                  { id: 'corporate', label: 'Corporate Summit' },
                  { id: 'milestone', label: 'Farmhouse Soirée' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setParams({ ...params, eventType: type.id as any })}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                      params.eventType === type.id
                        ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-semibold'
                        : 'bg-[#0A0B0E] border-white/10 text-white/70 hover:text-white hover:border-white/25'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-cad">
                <span className="text-[#C5A880] uppercase">2. Estimated Royal Attendees</span>
                <span className="text-[#F3EFE6] font-semibold px-2 py-0.5 rounded bg-[#17181C] border border-white/10">
                  {params.guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={params.guestCount}
                onChange={(e) => setParams({ ...params, guestCount: Number(e.target.value) })}
                className="w-full h-2 bg-[#0A0B0E] rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
              />
              <div className="flex justify-between text-[10px] font-mono-cad text-[#A69F92]">
                <span>50 (Intimate)</span>
                <span>500 (Grand)</span>
                <span>2,500 (Monumental)</span>
              </div>
            </div>

            {/* 3. Number of Days */}
            <div className="space-y-2">
              <label className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                3. Celebration Span / Number of Days
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setParams({ ...params, days: d })}
                    className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                      params.days === d
                        ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-semibold'
                        : 'bg-[#0A0B0E] border-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    {d} {d === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Decor & Mandap Architecture Tier */}
            <div className="space-y-2">
              <label className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                4. Decor & Mandap Architecture Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'artisan', title: 'Artisan Essential', sub: 'Refined Florals & Styling' },
                  { id: 'haute', title: 'Haute Grandeur', sub: 'Teak Mandap + 15k Stems' },
                  { id: 'royal', title: 'Royal Imperial', sub: 'Palace Facade + 50k Stems' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setParams({ ...params, decorTier: tier.id as any })}
                    className={`p-2.5 rounded-lg text-left border transition-all ${
                      params.decorTier === tier.id
                        ? 'bg-[#17181F] border-[#C5A880] text-[#F3EFE6] ring-1 ring-[#C5A880]'
                        : 'bg-[#0A0B0E] border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-medium text-[#F3EFE6]">{tier.title}</div>
                    <div className="text-[10px] text-[#A69F92]">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Royal Catering Option */}
            <div className="space-y-2">
              <label className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                5. Royal Catering & Banqueting
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'traditional-bhojanam', title: 'Banana Leaf Bhojanam', sub: '28 Traditional Items (₹1,400/plate)' },
                  { id: 'royal-dastarkhwan', title: 'Nizami Dastarkhwan', sub: 'Dum Biryani & Kebabs (₹2,200/plate)' },
                  { id: 'global-gourmet', title: 'Global Live Counters', sub: 'Truffle & Artisanal (₹3,500/plate)' },
                  { id: 'none', title: 'Venue / Self Catering', sub: 'Contractor Decor & AV Only' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setParams({ ...params, cateringOption: cat.id as any })}
                    className={`p-2.5 rounded-lg text-left border transition-all ${
                      params.cateringOption === cat.id
                        ? 'bg-[#17181F] border-[#C5A880] text-[#F3EFE6] ring-1 ring-[#C5A880]'
                        : 'bg-[#0A0B0E] border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-medium text-[#F3EFE6]">{cat.title}</div>
                    <div className="text-[10px] text-[#A69F92]">{cat.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 6. Technical Audio / Lighting Tier */}
            <div className="space-y-2">
              <label className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                6. Stage AV, Kinetic Lights & Trussing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'acoustic', title: 'Acoustic & Ambient', sub: 'Warm Architectural Uplights' },
                  { id: 'concert-kinetic', title: 'Concert & Kinetic', sub: 'Sharpy Lights + 4K LED' },
                  { id: 'ultra-stadium', title: 'Stadium Rig', sub: 'L-Acoustics + Lasers + Pyros' }
                ].map((av) => (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setParams({ ...params, avTier: av.id as any })}
                    className={`p-2.5 rounded-lg text-left border transition-all ${
                      params.avTier === av.id
                        ? 'bg-[#17181F] border-[#C5A880] text-[#F3EFE6] ring-1 ring-[#C5A880]'
                        : 'bg-[#0A0B0E] border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-medium text-[#F3EFE6]">{av.title}</div>
                    <div className="text-[10px] text-[#A69F92]">{av.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#17181F] border border-[#C5A880]/40 p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                    <Sparkles className="w-4 h-4" />
                    <span>ESTIMATED CONTRACTOR INVESTMENT</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F3EFE6]">
                    Itemized Cost Breakdown
                  </h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#C5A880]/20 text-[#C5A880] font-mono-cad uppercase">
                  LIVE MODEL
                </span>
              </div>

              {/* Itemized Line Items */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[#F3EFE6] font-medium block">Floral & Structural Decor</span>
                    <span className="text-[10px] text-[#A69F92] capitalize">{params.decorTier} Architecture • {params.days} Days</span>
                  </div>
                  <span className="font-mono-cad font-semibold text-[#F3EFE6]">₹{calculation.decorTotal} L</span>
                </div>

                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[#F3EFE6] font-medium block">Royal Food & Beverage</span>
                    <span className="text-[10px] text-[#A69F92]">{params.guestCount} Guests • {params.days} Days</span>
                  </div>
                  <span className="font-mono-cad font-semibold text-[#F3EFE6]">₹{calculation.cateringTotal} L</span>
                </div>

                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[#F3EFE6] font-medium block">Sound, Stage & Kinetic AV</span>
                    <span className="text-[10px] text-[#A69F92] capitalize">{params.avTier} Rig</span>
                  </div>
                  <span className="font-mono-cad font-semibold text-[#F3EFE6]">₹{calculation.avTotal} L</span>
                </div>

                <div className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[#F3EFE6] font-medium block">Logistics, Manpower & Permits</span>
                    <span className="text-[10px] text-[#A69F92]">Turnkey Site Coordination</span>
                  </div>
                  <span className="font-mono-cad font-semibold text-[#F3EFE6]">₹{calculation.logisticsTotal} L</span>
                </div>
              </div>

              {/* Total Band Display */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#1F222B] to-[#12141A] border border-[#C5A880]/50 space-y-1 text-center">
                <span className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                  Total Estimated Turnkey Range
                </span>
                <div className="text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold">
                  ₹{calculation.grandTotalMin} L – ₹{calculation.grandTotalMax} L
                </div>
                <span className="text-[10px] text-[#D0C9BD] block">
                  (Estimated ₹ INR • Subject to exact venue site survey)
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenConsultationWithEstimates(summaryString)}
                className="w-full py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl"
              >
                <span>Reserve Consultation with This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  alert(`Quotation summary copied:\n\n${summaryString}\nDecor: ₹${calculation.decorTotal}L\nCatering: ₹${calculation.cateringTotal}L\nAV Rig: ₹${calculation.avTotal}L`);
                }}
                className="w-full py-2.5 rounded-xl bg-[#0A0B0E] hover:bg-[#12141A] border border-white/15 text-xs text-[#E4DFD5] font-mono-cad flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Export Estimated Scope Summary</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
