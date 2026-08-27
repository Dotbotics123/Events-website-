import React, { useState, FormEvent } from 'react';
import { Phone, Calendar, Users, MapPin, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, Download, Clock } from 'lucide-react';

interface QuickContactDrawerProps {
  onSuccessSubmit?: (data: any) => void;
}

export default function QuickContactDrawer({ onSuccessSubmit }: QuickContactDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Traditional Telugu Vedic Muhurtham',
    eventDate: '',
    guestCount: '350 – 600 Guests',
    location: 'Hyderabad - Gachibowli / Hitec City',
    budgetBand: '₹15L – ₹35L (Royal Architecture)',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    if (onSuccessSubmit) {
      onSuccessSubmit(formData);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsExpanded(false);
    setFormData({
      name: '',
      phone: '',
      eventType: 'Traditional Telugu Vedic Muhurtham',
      eventDate: '',
      guestCount: '350 – 600 Guests',
      location: 'Hyderabad - Gachibowli / Hitec City',
      budgetBand: '₹15L – ₹35L (Royal Architecture)',
      requirements: ''
    });
  };

  return (
    <>
      {/* Collapsed Vertical Tab Pinned to Right Edge */}
      {!isExpanded && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
          <button
            id="quick-contact-expand-btn"
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2.5 px-3.5 py-4 rounded-l-2xl bg-gradient-to-b from-[#1C1E26] to-[#12141A] border-l-2 border-y border-[#C5A880] text-[#F3EFE6] shadow-2xl hover:bg-[#252834] transition-all transform hover:-translate-x-1 group"
            style={{ writingMode: 'vertical-rl' }}
            title="Expand 15-Minute Instant Callback Form"
          >
            <div className="flex items-center gap-2 text-xs font-mono-cad tracking-widest uppercase font-bold text-[#C5A880] rotate-180">
              <span className="inline-block animate-pulse text-[#E4DFD5]">⚡</span>
              <span>15-MIN FAST QUOTE & CALLBACK</span>
            </div>
            <div className="rotate-180 text-[10px] text-[#A69F92] font-mono-cad group-hover:text-white">
              +91 94411 00609
            </div>
          </button>
        </div>
      )}

      {/* Expanded Right-Side Slide-Out Panel */}
      {isExpanded && (
        <aside
          id="quick-contact-drawer-panel"
          aria-label="Quick inquiry and callback drawer"
          className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[440px] bg-[#0E1015] border-l border-[#C5A880]/40 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#171822] to-[#12141B] border-b border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#C5A880]/20 border border-[#C5A880]/50 text-[10px] font-mono-cad text-[#C5A880] font-bold">
                  S RAJA MARRIAGE CONTRACTOR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#94C999] animate-ping" />
              </div>
              <h3 className="text-base font-serif text-[#F3EFE6] font-medium flex items-center gap-2">
                <span>Fast Quote & Callback</span>
              </h3>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono-cad"
              title="Collapse form"
            >
              <span>Collapse</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Guarantee Banner */}
          <div className="px-4 py-2.5 bg-[#C5A880]/15 border-b border-[#C5A880]/25 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-[#C5A880] font-mono-cad">
              <Clock className="w-3.5 h-3.5 text-[#94C999]" />
              <span className="font-semibold">15-Min Guaranteed Callback</span>
            </div>
            <a
              href="tel:+919441100609"
              className="text-[11px] font-mono-cad text-[#F3EFE6] hover:text-[#C5A880] flex items-center gap-1 font-bold"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              +91 94411 00609
            </a>
          </div>

          {/* Form Content / Submitted View */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sridhar Reddy"
                      className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] placeholder-[#6C717E] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98850 XXXXX"
                      className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] placeholder-[#6C717E] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                    Occasion / Ceremony Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Traditional Telugu Vedic Muhurtham">Traditional Telugu Vedic Muhurtham & Mandapam</option>
                    <option value="Grand Royal Palace Reception">Grand Royal Palace Reception Architecture</option>
                    <option value="Pellikuthuru & Haldi Ceremony">Pellikuthuru & Haldi Ceremony (Turmeric Courtyard)</option>
                    <option value="Sangeet & Kinetic AV Gala">Sangeet & Kinetic Concert AV Gala</option>
                    <option value="Nishchitartham & Ring Ceremony">Nishchitartham & Ring Ceremony</option>
                    <option value="Seemantham & Valaikaappu">Seemantham & Valaikaappu (Bangles Ritual)</option>
                    <option value="Half-Saree (Ritu Kala Samskara)">Half-Saree / Ritu Kala Samskara Celebration</option>
                    <option value="Princess / Prince 1st Birthday Theme">Princess / Prince 1st Birthday Theme Bash</option>
                    <option value="Barasala & Cradle Ceremony">Barasala & Cradle Naming Ceremony</option>
                    <option value="Gruhapravesam & Vaastu Puja">Gruhapravesam & Vaastu Housewarming</option>
                    <option value="Shashti Poorthi / Satabhishekam">Shashti Poorthi (60th) / Satabhishekam (80th)</option>
                    <option value="Private Farmhouse Estate Soirée">Private Farmhouse & Lake Estate Soirée</option>
                    <option value="Corporate Summit & Mega Stage">Corporate Summit & Awards Mega Stage</option>
                  </select>
                </div>

                {/* Date & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                      Target Muhurtham / Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                      Guest Capacity
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="100 – 250 Guests">100 – 250 Guests (Intimate)</option>
                      <option value="350 – 600 Guests">350 – 600 Guests (Grand)</option>
                      <option value="600 – 1,200 Guests">600 – 1,200 Guests (Palatial)</option>
                      <option value="1,500 – 3,500+ Guests">1,500 – 3,500+ Guests (Imperial Arena)</option>
                    </select>
                  </div>
                </div>

                {/* Location in Hyderabad */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                    Venue / Preferred Locality
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Hyderabad - Gachibowli / Hitec City">Hyderabad - Gachibowli / Hitec City</option>
                    <option value="Hyderabad - Banjara Hills / Jubilee Hills">Hyderabad - Banjara Hills / Jubilee Hills</option>
                    <option value="Hyderabad - Taj Falaknuma / Old City">Hyderabad - Taj Falaknuma / Heritage Palaces</option>
                    <option value="Hyderabad - Shamshabad / Airport Conventions">Hyderabad - Shamshabad / Airport Conventions</option>
                    <option value="Hyderabad - Kokapet / Financial District">Hyderabad - Kokapet / Gandipet Farmhouses</option>
                    <option value="Secunderabad / Bowenpally">Secunderabad / Bowenpally</option>
                    <option value="Vijayawada / Guntur (AP)">Vijayawada / Guntur (AP)</option>
                    <option value="Visakhapatnam (Beach Destination)">Visakhapatnam (Beach Destination)</option>
                    <option value="Destination (Udaipur / Jaipur / Goa)">Destination (Udaipur / Jaipur / Goa)</option>
                  </select>
                </div>

                {/* Budget Band */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                    Estimated Contractor Budget Band
                  </label>
                  <select
                    value={formData.budgetBand}
                    onChange={(e) => setFormData({ ...formData, budgetBand: e.target.value })}
                    className="w-full bg-[#171822] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="₹4.5L – ₹12L (Artisan Craft Package)">₹4.5L – ₹12L (Artisan Craft Package)</option>
                    <option value="₹15L – ₹35L (Royal Architecture & Mandap)">₹15L – ₹35L (Royal Architecture & Mandap)</option>
                    <option value="₹40L – ₹90L (Palatial Turnkey Multi-Event)">₹40L – ₹90L (Palatial Turnkey Multi-Event)</option>
                    <option value="₹1.2Cr+ (Imperial Destination Experience)">₹1.2Cr+ (Imperial Destination Experience)</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-cad text-[#A69F92] uppercase block">
                    Special Requirements (Mandap style, Homam, AV, Catering)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="e.g., Authentic Teakwood Mandapam, 28-item traditional bhojanam, P3 LED screen..."
                    className="w-full bg-[#171822] border border-white/15 rounded-lg p-2.5 text-xs text-[#F3EFE6] placeholder-[#6C717E] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl transition-all transform hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Instant 15-Min Callback</span>
                </button>
              </form>
            ) : (
              /* Success confirmation state */
              <div className="p-6 rounded-2xl bg-[#13151D] border border-[#C5A880]/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-[#94C999]/20 border border-[#94C999] flex items-center justify-center mx-auto text-[#94C999]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-serif text-[#F3EFE6]">Inquiry Dispatched!</h4>
                  <p className="text-xs text-[#C5A880] font-mono-cad">
                    Ref: SRMC-{Date.now().toString().slice(-6)}
                  </p>
                </div>
                <p className="text-xs text-[#D0C9BD] leading-relaxed">
                  Thank you, <span className="text-[#F3EFE6] font-semibold">{formData.name}</span>. Our master contractor coordinator is reviewing your requirements and will connect via phone/WhatsApp within 15 minutes.
                </p>

                <div className="p-3 bg-[#0A0B0E] rounded-xl text-left space-y-1 text-[11px] font-mono-cad text-[#A69F92]">
                  <div>Occasion: <span className="text-[#F3EFE6]">{formData.eventType}</span></div>
                  <div>Scale: <span className="text-[#F3EFE6]">{formData.guestCount}</span></div>
                  <div>Locality: <span className="text-[#F3EFE6]">{formData.location}</span></div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => {
                      alert(`Downloading preliminary PDF proposal for "${formData.eventType}" at ${formData.location}`);
                    }}
                    className="w-full py-2.5 rounded-lg bg-[#171822] hover:bg-[#20222F] border border-[#C5A880]/30 text-xs text-[#C5A880] font-mono-cad flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Instant Estimate PDF</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full py-2 text-xs text-[#A69F92] hover:text-[#F3EFE6]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Direct Actions Footer */}
          <div className="p-3 bg-[#0B0C10] border-t border-white/10 flex items-center justify-between gap-2">
            <a
              href="https://wa.me/919441100609?text=Hello%20S%20Raja%20Marriage%20Contractor,%20I%20would%20like%20to%20request%20a%2015-minute%20callback%20and%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-[11px] font-mono-cad font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+919441100609"
              className="flex-1 py-2 rounded-lg bg-[#C5A880]/20 hover:bg-[#C5A880]/30 border border-[#C5A880]/50 text-[#C5A880] text-[11px] font-mono-cad font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call +91 94411 00609</span>
            </a>
          </div>
        </aside>
      )}
    </>
  );
}
