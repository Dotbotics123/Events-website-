import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowRight, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialContext = ''
}: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    eventType: 'Royal Destination Wedding',
    eventDate: '2026-11-28',
    city: 'Hyderabad / Udaipur',
    guestCount: '350',
    servicesNeeded: ['Mandap Architecture', 'Fresh Florals (10k+ Stems)', 'Royal Banquets & Bhojanam'],
    budgetBand: '₹50L – ₹1.5Cr',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    notes: initialContext ? `Referenced: ${initialContext}` : '',
    consultationSlot: 'Tomorrow, 4:30 PM IST'
  });

  useEffect(() => {
    if (initialContext) {
      setFormData((prev) => ({ ...prev, notes: `Referenced: ${initialContext}` }));
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(srv);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== srv)
          : [...prev.servicesNeeded, srv]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="consultation-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#101217] border border-[#C5A880]/40 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                  <Calendar className="w-4 h-4" />
                  <span>RESERVE MASTER CONSULTATION • STEP {step} OF 3</span>
                </div>
                <span className="text-[10px] text-white/40 font-mono-cad">
                  S RAJA MARRIAGE CONTRACTOR ATELIER
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
                Commission Aurelia Events Atelier
              </h2>
              <p className="text-xs text-[#D0C9BD]">
                Share your expected dates and vision. We will review site viability, Vedic muhurthams, and schedule a 20-minute video or in-person consultation.
              </p>
            </div>

            {/* STEP 1: EVENT SCOPE & VENUE */}
            {step === 1 && (
              <div className="space-y-4 text-xs font-mono-cad animate-in fade-in duration-200">
                <div className="space-y-1.5">
                  <label className="text-[#C5A880] uppercase block">1. What are you planning?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Royal Destination Wedding',
                      'Sacred Vedic Mandapam',
                      'Sangeet & Kinetic Gala',
                      'Half-Saree / Seemantham',
                      'Private Farmhouse Soirée',
                      'Corporate Leadership Summit'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, eventType: type })}
                        className={`p-2.5 rounded-lg text-left border transition-all text-xs ${
                          formData.eventType === type
                            ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-semibold'
                            : 'bg-[#17181F] border-white/10 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#C5A880] uppercase block">2. Target Date / Muhurtham</label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#C5A880] uppercase block">3. City or Desired Venue</label>
                    <input
                      type="text"
                      placeholder="e.g. Hyderabad, Udaipur, Falaknuma"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#C5A880] uppercase block">4. Expected Royal Attendees / Guests</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['< 150', '150 - 400', '400 - 1,000', '1,000+'].map((count) => (
                      <button
                        type="button"
                        key={count}
                        onClick={() => setFormData({ ...formData, guestCount: count })}
                        className={`py-2 rounded-lg text-center border transition-all text-xs ${
                          formData.guestCount === count
                            ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-semibold'
                            : 'bg-[#17181F] border-white/10 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg mt-4"
                >
                  <span>Continue to Disciplines & Investment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 2: DISCIPLINES & BUDGET */}
            {step === 2 && (
              <div className="space-y-4 text-xs font-mono-cad animate-in fade-in duration-200">
                <div className="space-y-2">
                  <label className="text-[#C5A880] uppercase block">
                    Required Turnkey Contractor Disciplines:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Teak & Brass Mandap Architecture',
                      'Fresh Floral Supply Chain (10k+ Stems)',
                      'Concert Sound & Kinetic DMX Lighting',
                      'Royal Banquets (Banana Leaf / Mughlai)',
                      'VIP Logistics & 24/7 Shadow Butlers',
                      '4K Broadcast Livestream & Photography'
                    ].map((srv) => {
                      const isSelected = formData.servicesNeeded.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-3 rounded-lg text-left border flex items-center justify-between text-xs transition-all ${
                            isSelected
                              ? 'bg-[#17181F] border-[#C5A880] text-[#F3EFE6] ring-1 ring-[#C5A880]'
                              : 'bg-[#0A0B0E] border-white/10 text-white/60 hover:border-white/20'
                          }`}
                        >
                          <span className="truncate">{srv}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#C5A880] uppercase block">
                    Expected Investment Allocation (INR)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['₹15L – ₹35L', '₹35L – ₹75L', '₹75L – ₹1.5Cr', '₹1.5Cr – ₹5Cr+'].map((band) => (
                      <button
                        type="button"
                        key={band}
                        onClick={() => setFormData({ ...formData, budgetBand: band })}
                        className={`p-2.5 rounded-lg text-center border text-xs transition-all ${
                          formData.budgetBand === band
                            ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-semibold'
                            : 'bg-[#17181F] border-white/10 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {band}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#C5A880] uppercase block">Specific Vision / Notes</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
                    placeholder="Any specific family requirements, auspicious dates, or venue constraints..."
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-5 rounded-xl bg-[#17181F] border border-white/10 text-[#E4DFD5] text-xs uppercase"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>Proceed to Contact & Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT & CONSULTATION TIME */}
            {step === 3 && (
              <div className="space-y-4 text-xs font-mono-cad animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[#C5A880] uppercase block">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Harsha Varma"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#C5A880] uppercase block">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98850 00000"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#C5A880] uppercase block">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="harsha.varma@example.com"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#17181F] border border-white/15 text-[#F3EFE6] focus:border-[#C5A880] outline-none font-sans text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#C5A880] uppercase block">
                    Preferred 20-Min Discovery Call Slot (IST)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Today, 6:00 PM IST',
                      'Tomorrow, 11:30 AM IST',
                      'Tomorrow, 4:30 PM IST',
                      'Saturday, 10:00 AM IST',
                      'Sunday, 3:00 PM IST',
                      'Flexible / WhatsApp First'
                    ].map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, consultationSlot: slot })}
                        className={`p-2.5 rounded-lg text-center border text-xs transition-all ${
                          formData.consultationSlot === slot
                            ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-semibold'
                            : 'bg-[#17181F] border-white/10 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="py-3 px-5 rounded-xl bg-[#17181F] border border-white/10 text-[#E4DFD5] text-xs uppercase"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm & Schedule Consultation</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center mx-auto text-[#C5A880]">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase tracking-wider block">
                COMMISSION BRIEF RECEIVED • REF #AUR-2026-{Math.floor(1000 + Math.random() * 9000)}
              </span>
              <h2 className="text-3xl font-serif text-[#F3EFE6]">
                Your Story Begins Here, {formData.clientName || 'Valued Host'}
              </h2>
              <p className="text-xs text-[#D0C9BD] leading-relaxed">
                Our Master Contractor and Lead Floral Architect have logged your brief for <span className="text-[#F3EFE6] font-medium">{formData.eventType} in {formData.city}</span>. We will connect with you for your discovery consultation at <span className="text-[#C5A880] font-medium">{formData.consultationSlot}</span>.
              </p>
            </div>

            {/* Instant WhatsApp Master Planner Trigger */}
            <div className="pt-4 max-w-md mx-auto space-y-3">
              <a
                href={`https://wa.me/919885000000?text=Hi%20Aurelia%20Events,%20I%20just%20reserved%20a%20consultation%20for%20${encodeURIComponent(formData.eventType)}%20in%20${encodeURIComponent(formData.city)}%20around%20${encodeURIComponent(formData.eventDate)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Instant WhatsApp with Master Planner</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-[#17181F] hover:bg-[#202229] border border-white/10 text-xs font-mono-cad text-[#E4DFD5] transition-all"
              >
                Return to Atelier Experience
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
