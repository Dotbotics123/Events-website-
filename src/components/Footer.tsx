import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Sparkles, ShieldCheck, ArrowRight, Check, Clock } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (context: string) => void;
  onOpenAuraAi: () => void;
  onOpenPortal: () => void;
  onOpenCalculator: () => void;
}

export default function Footer({
  onOpenConsultation,
  onOpenAuraAi,
  onOpenPortal,
  onOpenCalculator
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#07080A] text-[#F3EFE6] relative overflow-hidden border-t border-[#C5A880]/20 pt-20 pb-12">
      {/* Background CAD grid */}
      <div className="absolute inset-0 cad-grid opacity-15 pointer-events-none" />

      {/* Top Banner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#171822] via-[#12141C] to-[#0D0F14] border border-[#C5A880]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>COMMISSION AN UNFORGETTABLE CELEBRATION</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#F3EFE6]">
              Have Something Royal to Celebrate?
            </h3>
            <p className="text-xs sm:text-sm text-[#D0C9BD] font-light leading-relaxed">
              Tell us your target muhurtham date, venue, and scale. S Raja Marriage Contractor guarantees turnkey execution with 15-minute inquiry turnaround.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenConsultation('Footer CTA Banner')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Consultation</span>
            </button>

            <a
              href="tel:+919441100609"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#17181F] hover:bg-[#202229] border border-[#C5A880]/40 text-[#C5A880] hover:text-[#F3EFE6] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>+91 94411 00609</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-xs">
        {/* Col 1: Brand Atelier Bio */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl border border-[#C5A880] flex items-center justify-center bg-[#17181F] text-[#C5A880] font-serif font-bold text-lg">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.16em] text-xl text-[#F3EFE6] font-bold uppercase">
                S RAJA MARRIAGE CONTRACTOR
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase -mt-0.5 font-mono-cad">
                EVENT ARCHITECTURE & PRODUCTION • HYDERABAD
              </span>
            </div>
          </div>

          <p className="text-[#A69F92] leading-relaxed text-xs max-w-sm">
            Haute event architecture, sacred Vedic mandapams, 16 cultural disciplines, and royal banquets. Operating with licensed master craftspersons across Hyderabad, Telangana, and Andhra Pradesh.
          </p>

          <div className="space-y-1.5 text-xs font-mono-cad text-[#D0C9BD] pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-[#F3EFE6] font-bold">Contractor Hotline: +91 94411 00609</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#94C999]" />
              <span className="text-[#94C999]">15-Minute Instant Callback Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Inquiries: srajamarriage@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Col 2: Hub Locations */}
        <div className="space-y-3">
          <span className="text-xs font-mono-cad text-[#C5A880] uppercase tracking-wider block font-semibold">
            Regional Hubs
          </span>
          <div className="space-y-2.5 text-[#D0C9BD]">
            <div>
              <span className="text-[#F3EFE6] font-medium block">Hyderabad (HQ)</span>
              <span className="text-[11px] text-[#A69F92]">Kondapur / Gachibowli / Jubilee Hills</span>
            </div>
            <div>
              <span className="text-[#F3EFE6] font-medium block">Vijayawada & Guntur</span>
              <span className="text-[11px] text-[#A69F92]">MG Road, Krishna District</span>
            </div>
            <div>
              <span className="text-[#F3EFE6] font-medium block">Visakhapatnam</span>
              <span className="text-[11px] text-[#A69F92]">Beach Road & MVP Colony</span>
            </div>
            <div>
              <span className="text-[#F3EFE6] font-medium block">Destination Services</span>
              <span className="text-[11px] text-[#A69F92]">Udaipur, Jaipur, Goa & Bangalore</span>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="space-y-3">
          <span className="text-xs font-mono-cad text-[#C5A880] uppercase tracking-wider block font-semibold">
            Experience Map
          </span>
          <ul className="space-y-2 text-[#D0C9BD]">
            <li><a href="#services" className="hover:text-[#C5A880] transition-colors">16 Cultural Occasions</a></li>
            <li><a href="#showcase" className="hover:text-[#C5A880] transition-colors">6 Dream Wedding Archetypes</a></li>
            <li><a href="#disciplines" className="hover:text-[#C5A880] transition-colors">Turnkey Contractor Disciplines</a></li>
            <li><a href="#metamorphosis" className="hover:text-[#C5A880] transition-colors">Spatial Before/After Slider</a></li>
            <li><a href="#cad-blueprints" className="hover:text-[#C5A880] transition-colors">3D Mandap Blueprints</a></li>
            <li><a href="#banquets" className="hover:text-[#C5A880] transition-colors">Royal Banana Leaf Bhojanam</a></li>
            <li><a href="#calculator" className="hover:text-[#C5A880] transition-colors">Contractor Cost Estimator</a></li>
            <li><a href="#muhurtham-faq" className="hover:text-[#C5A880] transition-colors">2026/2027 Muhurtham Guide</a></li>
          </ul>
        </div>

        {/* Col 4: Newsletter & Confidentiality */}
        <div className="space-y-3">
          <span className="text-xs font-mono-cad text-[#C5A880] uppercase tracking-wider block font-semibold">
            Muhurtham Gazette
          </span>
          <p className="text-[11px] text-[#A69F92] leading-relaxed">
            Receive private Telugu panchangam dates, auspicious wedding calendars, and floral trend decks.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-[#141720] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none text-xs"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#17181F] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#0A0B0E] border border-[#C5A880]/30 font-mono-cad text-[11px] tracking-wider uppercase transition-all"
              >
                Join Gazette
              </button>
            </form>
          ) : (
            <div className="p-2.5 rounded-lg bg-[#253026] text-[#94C999] text-xs flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Subscribed to Gazette</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-cad text-[#A69F92]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          <span>© 2026 S Raja Marriage Contractor. Event Architecture & Production. Hyderabad, Telangana & AP.</span>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={onOpenPortal} className="hover:text-[#C5A880] transition-colors">
            Client Portal OS
          </button>
          <button onClick={onOpenCalculator} className="hover:text-[#C5A880] transition-colors">
            Live Cost Calculator
          </button>
          <a href="tel:+919441100609" className="text-[#C5A880] hover:underline">
            +91 94411 00609
          </a>
        </div>
      </div>
    </footer>
  );
}

