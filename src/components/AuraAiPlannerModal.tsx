import { useState } from 'react';
import { Sparkles, X, ArrowRight, CheckCircle2, RefreshCw, Layers, Calendar, Palette, Clock } from 'lucide-react';

interface AuraAiPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithPlan: (planSummary: string) => void;
}

export default function AuraAiPlannerModal({
  isOpen,
  onClose,
  onBookWithPlan
}: AuraAiPlannerModalProps) {
  const [eventType, setEventType] = useState('Royal Destination Wedding');
  const [city, setCity] = useState('Udaipur / Lake Pichola');
  const [guestCount, setGuestCount] = useState('350');
  const [vibe, setVibe] = useState('Candlelit heritage palace with floating lotuses, Madurai jasmine canopies, and acoustic Sufi melodies under the stars.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setIsGenerating(true);

    // Simulate AI generation process with authentic editorial event styling
    setTimeout(() => {
      setGeneratedPlan({
        title: `The Celestial ${city.split(' ')[0]} Sanctuary`,
        concept: `An opulent sensory narrative marrying ${city}'s classical architecture with 2,400K candlelight lumens, unlacquered brass deepasthambams, and hand-woven floral canopies.`,
        palette: [
          { name: 'Mewar Sandstone', hex: '#D2A878' },
          { name: 'Pure Mogra White', hex: '#F7F5EC' },
          { name: 'Deep Crimson', hex: '#7A1C28' },
          { name: 'Antique 24K Gold', hex: '#C5A880' }
        ],
        cadSpecs: {
          mandapHeight: '19.5 Feet Multi-tier Octagonal',
          floralVolume: '18,500 Fresh Stems (Tuberoses & Lotuses)',
          photometricTemp: '2200K - 2700K Warm Dimmable Wash',
          soundProfile: 'L-Acoustics K2 Discreet Acoustic Rig'
        },
        runOfShow: [
          { time: '04:00 PM', event: 'Royal Shehnai & Nadaswaram Arrival on Private Jetty' },
          { time: '05:30 PM', event: 'Vedic Samagri Sanctification & Sacred Agnihotra Homa' },
          { time: '06:45 PM', event: 'Auspicious Varmala on Floating Lotus Hydraulic Stage' },
          { time: '08:00 PM', event: '28-Course Royal Banana Leaf Bhojanam & Live Sufi Ensemble' }
        ],
        budgetAllocation: {
          decorAndMandap: '45% (Architectural Teak & Fresh Florals)',
          cateringAndKhansama: '30% (Royal Bhojanam & Silver Service)',
          avAndKineticLights: '15% (L-Acoustics & Warm DMX Spotting)',
          logisticsAndButlers: '10% (VIP Transit & 24/7 Shadow Butlers)'
        }
      });
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div
      id="aura-ai-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#101217] border border-[#C5A880]/40 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
            <Sparkles className="w-4 h-4 text-[#C5A880] animate-spin" />
            <span>AURA AI EVENT CONCIERGE & ARCHITECTURAL PLANNER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
            Instant Concept, Floral & Budget Blueprint
          </h2>
          <p className="text-xs text-[#D0C9BD]">
            Describe your vision. Our intelligence engine synthesizes architectural specs, Vedic timelines, and investment allocations.
          </p>
        </div>

        {/* Input Form */}
        <div className="space-y-4 text-xs font-mono-cad">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[#A69F92] uppercase block">Occasion</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none"
              >
                <option>Royal Destination Wedding</option>
                <option>Sacred Vedic Mandapam</option>
                <option>Sangeet & Kinetic Gala</option>
                <option>Half-Saree / Seemantham</option>
                <option>Private Farmhouse Soirée</option>
                <option>Corporate Leadership Summit</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[#A69F92] uppercase block">Location / City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#A69F92] uppercase block">Guest Count</label>
              <input
                type="number"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[#A69F92] uppercase block">
              Describe the Dream Atmosphere & Elements
            </label>
            <textarea
              rows={2}
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
              placeholder="e.g. Floating lotus mandap, 2,400K candlelight, traditional South Indian Bhojanam..."
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Synthesizing Architectural Blueprint...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Aura Event Blueprint</span>
              </>
            )}
          </button>
        </div>

        {/* AI Generated Result Blueprint */}
        {generatedPlan && (
          <div className="space-y-5 pt-4 border-t border-white/10 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-[#17181F] border border-[#C5A880]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase tracking-wider">
                  GENERATED ARCHITECTURAL CONCEPT
                </span>
                <span className="text-[10px] font-mono-cad text-white/50">EST. BLUEPRINT #829</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F3EFE6] font-medium">
                {generatedPlan.title}
              </h3>
              <p className="text-xs text-[#D0C9BD] leading-relaxed">
                {generatedPlan.concept}
              </p>
            </div>

            {/* Color Palette */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Suggested Color & Material Palette:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {generatedPlan.palette.map((p: any, i: number) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-[#0A0B0E] border border-white/10 flex items-center gap-2.5 text-xs"
                  >
                    <div
                      className="w-5 h-5 rounded-full border border-white/20"
                      style={{ backgroundColor: p.hex }}
                    />
                    <span className="text-[#E4DFD5] text-[11px] truncate">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CAD & Lighting Specs */}
            <div className="p-3.5 rounded-xl bg-[#0A0B0E] border border-white/10 space-y-2 text-xs font-mono-cad">
              <span className="text-[10px] text-[#C5A880] uppercase block">
                CAD & Structural Engineering Specifications:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#E4DFD5]">
                <div>• Mandap: <span className="text-[#F3EFE6]">{generatedPlan.cadSpecs.mandapHeight}</span></div>
                <div>• Florals: <span className="text-[#F3EFE6]">{generatedPlan.cadSpecs.floralVolume}</span></div>
                <div>• Lighting: <span className="text-[#F3EFE6]">{generatedPlan.cadSpecs.photometricTemp}</span></div>
                <div>• Sound Rig: <span className="text-[#F3EFE6]">{generatedPlan.cadSpecs.soundProfile}</span></div>
              </div>
            </div>

            {/* Run of Show */}
            <div className="space-y-1.5 text-xs">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Estimated Run-of-Show Itinerary:
              </span>
              <div className="space-y-1">
                {generatedPlan.runOfShow.map((ros: any, i: number) => (
                  <div
                    key={i}
                    className="p-2 rounded bg-[#17181F] border border-white/5 flex items-center justify-between text-[#E4DFD5]"
                  >
                    <span className="font-mono-cad text-[#C5A880] text-[11px]">{ros.time}</span>
                    <span className="text-right text-xs truncate max-w-[70%]">{ros.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => {
                const summary = `Aura AI Blueprint: ${generatedPlan.title} (${city}, ${guestCount} Guests)`;
                onClose();
                onBookWithPlan(summary);
              }}
              className="w-full py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              <span>Reserve Consultation with this Generated Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
