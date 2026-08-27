import { useState } from 'react';
import { LayoutDashboard, CheckCircle2, Clock, Calendar, Users, DollarSign, FileText, Check, X, ShieldCheck, Sparkles, ChevronRight, Bed, Plane } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'budget' | 'vendors' | 'design' | 'guests'>('overview');

  // Interactive mock state for design approvals
  const [approvals, setApprovals] = useState([
    { id: 1, name: 'Octagonal Teak Mandapam 3D Blueprint (DWG-08)', status: 'Approved', date: 'Yesterday' },
    { id: 2, name: '28-Item South Indian Bhojanam Tasting Menu', status: 'Pending Review', date: 'Due in 2 days' },
    { id: 3, name: 'Sangeet Kinetic Ceiling DMX Choreography Cue', status: 'Pending Review', date: 'Due in 5 days' }
  ]);

  if (!isOpen) return null;

  const handleApprove = (id: number) => {
    setApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Approved' } : item))
    );
  };

  return (
    <div
      id="client-portal-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#0E1015] border border-[#C5A880]/40 rounded-2xl max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl relative flex flex-col animate-in fade-in zoom-in duration-200">
        {/* Portal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#141720]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center bg-[#0A0B0E] text-[#C5A880] font-serif font-bold">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-serif text-[#F3EFE6] font-semibold">
                  The Palace Weekend • Udaipur
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[10px] font-mono-cad border border-[#C5A880]/30">
                  CONFIRMED CLIENT PORTAL
                </span>
              </div>
              <p className="text-xs text-[#A69F92] font-mono-cad">
                Hosts: Aarav & Meera Singhania • Commission ID: AUR-2026-UD-084
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#0A0B0E] border border-white/10 text-xs font-mono-cad text-[#C5A880]">
              <span className="font-bold text-[#F3EFE6]">127 DAYS</span> TO GO
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 overflow-x-auto bg-[#0E1015]">
          {[
            { id: 'overview', label: 'Overview & Health' },
            { id: 'timeline', label: 'Run of Show & Schedule' },
            { id: 'budget', label: 'Budget & Invoices' },
            { id: 'vendors', label: 'Vendor Directory' },
            { id: 'design', label: 'CAD Approvals (3)' },
            { id: 'guests', label: 'Guest & Room Matrix' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs font-mono-cad tracking-wider uppercase border-b-2 whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'border-[#C5A880] text-[#C5A880] font-semibold'
                  : 'border-transparent text-white/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 bg-[#0A0B0E]">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Metric Widgets */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#141720] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#A69F92] uppercase block">
                    Planning Health
                  </span>
                  <div className="text-2xl font-serif text-[#94C999] font-bold">68% Complete</div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[68%] h-full bg-[#94C999]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141720] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#A69F92] uppercase block">
                    Budget Utilized
                  </span>
                  <div className="text-2xl font-serif text-[#C5A880] font-bold">54% Paid</div>
                  <span className="text-[10px] text-[#A69F92] font-mono-cad">₹1.15 Cr / ₹2.1 Cr</span>
                </div>

                <div className="p-4 rounded-xl bg-[#141720] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#A69F92] uppercase block">
                    Guest RSVPs
                  </span>
                  <div className="text-2xl font-serif text-[#F3EFE6] font-bold">196 / 280</div>
                  <span className="text-[10px] text-[#94C999] font-mono-cad">84 Rooms Confirmed</span>
                </div>

                <div className="p-4 rounded-xl bg-[#141720] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono-cad text-[#A69F92] uppercase block">
                    Pending Decisions
                  </span>
                  <div className="text-2xl font-serif text-[#E98074] font-bold">2 Approvals</div>
                  <span className="text-[10px] text-[#E98074] font-mono-cad">Tasting & Kinetic Cue</span>
                </div>
              </div>

              {/* Critical Upcoming Tasks */}
              <div className="p-5 rounded-xl bg-[#141720] border border-white/10 space-y-3">
                <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                  Critical Milestones This Week:
                </span>
                <div className="space-y-2 text-xs">
                  {[
                    { title: 'Finalize Madurai Jasmine Stem Count (Target: 22,000)', due: 'Oct 14', owner: 'Lead Floral Architect' },
                    { title: 'Approve L-Acoustics Sub-Woofer Rig for Lake Palace', due: 'Oct 16', owner: 'Technical Sound Lead' },
                    { title: 'VIP Shadow Butler Suite Allocation Final Roster', due: 'Oct 18', owner: 'Guest Logistics Concierge' }
                  ].map((task, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 flex items-center justify-between text-[#E4DFD5]"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                        <span>{task.title}</span>
                      </div>
                      <span className="text-[11px] font-mono-cad text-[#A69F92]">Due {task.due}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-4 animate-in fade-in duration-200 text-xs">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Master 3-Day Wedding Weekend Run-of-Show:
              </span>
              <div className="space-y-2">
                {[
                  { day: 'Day 1 • 03:00 PM', title: 'Royal Lake Welcome & Private Jetty Jet Boat Ferry', venue: 'Jagmandir Island Palace' },
                  { day: 'Day 1 • 07:30 PM', title: 'The Starlight Sufi Night & Rajasthani Folk Ensemble', venue: 'Courtyard Pavilion' },
                  { day: 'Day 2 • 10:00 AM', title: 'Sunlit Haldi & Marigold Rain Installation', venue: 'Zenana Terrace' },
                  { day: 'Day 2 • 08:00 PM', title: 'Cybernetic Sangeet & Kinetic Lighting Gala', venue: 'Grand Ballroom & Lawn' },
                  { day: 'Day 3 • 05:45 AM', title: 'Auspicious Vedic Muhurtham & Teak Mandapam Vows', venue: 'Sacred Water Pavilion' }
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#141720] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-mono-cad text-[#C5A880] text-[11px] block">{item.day}</span>
                      <span className="font-medium text-[#F3EFE6] text-sm">{item.title}</span>
                    </div>
                    <span className="text-[11px] font-mono-cad text-[#A69F92]">{item.venue}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BUDGET */}
          {activeTab === 'budget' && (
            <div className="space-y-4 animate-in fade-in duration-200 text-xs">
              <div className="flex items-center justify-between text-xs font-mono-cad text-[#C5A880]">
                <span>TOTAL CONTRACTOR QUOTATION: ₹2.10 Cr</span>
                <span className="text-[#94C999]">CURRENT STATUS: ON BUDGET (54% DISBURSED)</span>
              </div>
              <div className="space-y-2">
                {[
                  { cat: 'Teak Mandapam & Fresh Florals (24k Stems)', quoted: '₹85,00,000', paid: '₹50,00,000', status: 'Partially Paid' },
                  { cat: 'Royal Mewar Khansama Guild & Silver Service', quoted: '₹55,00,000', paid: '₹30,00,000', status: 'Partially Paid' },
                  { cat: 'Kinetic DMX Winches & L-Acoustics Rig', quoted: '₹40,00,000', paid: '₹25,00,000', status: 'Partially Paid' },
                  { cat: 'Shadow Butlers, VIP Flotilla & Site Restoration', quoted: '₹30,00,000', paid: '₹10,00,000', status: 'Pending Milestone' }
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#141720] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#F3EFE6] font-medium block">{item.cat}</span>
                      <span className="text-[11px] font-mono-cad text-[#A69F92]">Quoted: {item.quoted} • Paid: {item.paid}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#C5A880]/15 text-[#C5A880] font-mono-cad text-[10px]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: VENDORS */}
          {activeTab === 'vendors' && (
            <div className="space-y-4 animate-in fade-in duration-200 text-xs">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Contracted Master Artisans & Production Partners:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: 'Artisan Bloom Studios', role: 'Floral Architecture', contact: 'Direct Line via Atelier' },
                  { name: 'Luminary Kinetics DMX', role: 'Lighting & AV Rig', contact: 'Lead: Arjun Sen' },
                  { name: 'Royal Mewar Khansama', role: 'Authentic Banquet', contact: 'Udaipur Heritage Team' },
                  { name: 'Apex Rigging & Safety', role: 'Structural Engineering', contact: 'Certified Inspector' }
                ].map((v, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#141720] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono-cad text-[#C5A880] uppercase block">{v.role}</span>
                    <span className="text-sm font-serif text-[#F3EFE6] block">{v.name}</span>
                    <span className="text-[11px] text-[#A69F92]">{v.contact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CAD & DESIGN APPROVALS */}
          {activeTab === 'design' && (
            <div className="space-y-4 animate-in fade-in duration-200 text-xs">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Pending Client Approvals & CAD Blueprints:
              </span>
              <div className="space-y-3">
                {approvals.map((app) => (
                  <div key={app.id} className="p-4 rounded-xl bg-[#141720] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#F3EFE6] font-medium block">{app.name}</span>
                      <span className="text-[11px] font-mono-cad text-[#A69F92]">{app.date}</span>
                    </div>

                    {app.status === 'Approved' ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#253026] text-[#94C999] font-mono-cad text-xs">
                        <Check className="w-3.5 h-3.5" />
                        Approved
                      </span>
                    ) : (
                      <button
                        onClick={() => handleApprove(app.id)}
                        className="px-4 py-1.5 rounded-lg bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold font-mono-cad text-xs uppercase transition-all shadow-md"
                      >
                        Click to Approve
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: GUEST & ROOM MATRIX */}
          {activeTab === 'guests' && (
            <div className="space-y-4 animate-in fade-in duration-200 text-xs">
              <div className="flex items-center justify-between text-xs font-mono-cad text-[#C5A880]">
                <span>280 TOTAL GUESTS • 196 CONFIRMED • 84 SUITES ALLOCATED</span>
                <span className="text-[#94C999]">LEELA PALACE & JAGMANDIR WING</span>
              </div>
              <div className="space-y-2">
                {[
                  { family: 'Singhania Core Family (14 Guests)', suites: 'Maharaja Royal Suite & Heritage Rooms (6)', transfers: 'VIP Audi Fleet Confirmed' },
                  { family: 'Reddy Delegation (28 Guests)', suites: 'Luxury Lake View Suites (14)', transfers: 'Chauffeur Bus & Luxury Vans' },
                  { family: 'International Guests USA/UK (42 Guests)', suites: 'Premier Garden Rooms (21)', transfers: 'Udaipur Airport Jet Welcome' }
                ].map((g, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#141720] border border-white/10 space-y-1">
                    <span className="text-sm font-medium text-[#F3EFE6] block">{g.family}</span>
                    <div className="flex items-center gap-4 text-[11px] text-[#A69F92] font-mono-cad">
                      <span className="flex items-center gap-1"><Bed className="w-3 h-3 text-[#C5A880]" /> {g.suites}</span>
                      <span className="flex items-center gap-1"><Plane className="w-3 h-3 text-[#C5A880]" /> {g.transfers}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Portal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#141720] flex items-center justify-between text-xs font-mono-cad text-[#A69F92]">
          <span>Aurelia Private Atelier Client Operating System (V4.2)</span>
          <span className="text-[#C5A880]">24/7 Dedicated Shadow Butler Support</span>
        </div>
      </div>
    </div>
  );
}
