import { useState, useEffect } from 'react';
import { SlidersHorizontal, LayoutGrid, Bot, Menu, X, ShieldCheck, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (initialContext?: string) => void;
  onOpenAuraAi: () => void;
  onOpenPortal: () => void;
  onOpenCalculator: () => void;
}

export default function Navbar({
  onOpenConsultation,
  onOpenAuraAi,
  onOpenPortal,
  onOpenCalculator
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Weddings', href: '#showcase' },
    { label: 'Archetypes', href: '#services' },
    { label: 'Services', href: '#services' },
    {
      label: 'Mandap DNA',
      href: '#cad-blueprints',
      icon: <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
    },
    {
      label: 'Cost Estimator',
      href: '#calculator',
      onClick: () => onOpenCalculator()
    },
    { label: 'Ceremonies', href: '#services' },
    { label: 'Portfolio', href: '#showcase' },
    { label: 'Run of Show', href: '#spatial-metamorphosis' },
    { label: 'Checklist', href: '#auspicious-muhurtham' },
    {
      label: 'Portal',
      href: '#portal',
      icon: <LayoutGrid className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />,
      onClick: () => onOpenPortal()
    }
  ];

  return (
    <>
      {/* Topmost Quick Guarantee & Direct Hotline Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#07080B] border-b border-white/5 py-1 px-4 text-[10.5px] font-mono-cad text-[#D0C9BD] flex items-center justify-between">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="px-1.5 py-0.5 rounded bg-[#17181F] text-[#C5A880] text-[9.5px] uppercase font-bold shrink-0">
              LIVE
            </span>
            <span className="truncate text-[#E4DFD5]/90">
              🌟 Royal Telugu Muhurtham & Reception • Taj Krishna, Hyderabad (18 Auspicious Dates Active)
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1 text-[#94C999]">
              <ShieldCheck className="w-3 h-3" />
              <span>15-Min Fast Callback Guarantee</span>
            </div>
            <a
              href="tel:+919441100609"
              className="flex items-center gap-1 text-[#C5A880] hover:text-[#F3EFE6] font-semibold transition-colors"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>+91 94411 00609</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Single-Line Header */}
      <header
        id="main-navbar"
        className={`fixed top-[27px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0C10]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2.5'
            : 'bg-[#0A0B0E]/95 backdrop-blur-sm border-b border-white/5 py-3'
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4 flex-nowrap">
            {/* Left: Brand Identity Matching Screenshot */}
            <a href="#" className="flex flex-col shrink-0 group pr-2">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-base sm:text-[17px] tracking-[0.24em] text-[#F3EFE6] font-normal leading-none">
                  S R A J A
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.18em] text-[#C5A880] font-mono-cad font-bold uppercase leading-none">
                  MARRIAGE CONTRACTOR
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[8px] tracking-[0.22em] text-[#A69F92] uppercase font-mono-cad pt-1 leading-tight group-hover:text-[#D0C9BD] transition-colors">
                TRADITIONAL & LUXURY WEDDING DECOR & PRODUCTION
              </span>
            </a>

            {/* Desktop Center/Right: Single-Line Nav Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-nowrap shrink-0">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="flex items-center gap-1.5 px-2 py-1 text-[11.5px] xl:text-[12px] 2xl:text-[12.5px] font-medium text-[#E4DFD5]/90 hover:text-[#C5A880] whitespace-nowrap transition-colors rounded hover:bg-white/[0.03]"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}

              {/* AURA AI Pill Button */}
              <button
                id="nav-aura-ai-btn"
                onClick={onOpenAuraAi}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181920] hover:bg-[#20232E] border border-white/20 hover:border-[#C5A880] text-[#F3EFE6] hover:text-[#C5A880] text-[11.5px] xl:text-[12px] font-mono-cad font-semibold tracking-wider transition-all ml-1 shadow-sm shrink-0 active:scale-95"
                title="Aura AI Concierge"
              >
                <Bot className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="tracking-wide">AURA AI</span>
              </button>
            </nav>

            {/* Mobile / Small Screen Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenAuraAi}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181920] border border-white/20 text-[#C5A880] text-[10.5px] font-mono-cad font-bold"
              >
                <Bot className="w-3 h-3" />
                <span>AI</span>
              </button>
              <button
                onClick={() => onOpenConsultation('Mobile Topbar')}
                className="px-2.5 py-1 rounded-full bg-[#C5A880] text-[#0A0B0E] text-[10.5px] font-bold tracking-wider uppercase"
              >
                PLAN
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-[#17181C] border border-white/10 text-[#F3EFE6]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 bg-[#0A0B0E]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden animate-in fade-in duration-300"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                <span>S RAJA MARRIAGE CONTRACTOR</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-white/10 text-[#F3EFE6]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="grid grid-cols-2 gap-2 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="flex items-center gap-2 text-xs font-serif text-[#F3EFE6] hover:text-[#C5A880] transition-colors py-2.5 px-3 rounded bg-[#17181F] border border-white/5"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuraAi();
              }}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-[#1F222B] border border-[#C5A880]/30 text-xs font-medium text-[#F3EFE6]"
            >
              <Bot className="w-4 h-4 text-[#C5A880]" />
              AURA AI Concierge
            </button>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Mobile Drawer CTA');
              }}
              className="w-full py-3 rounded-full bg-[#C5A880] text-[#0A0B0E] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              Commission / Plan Event
            </button>

            <a
              href="tel:+919441100609"
              className="w-full py-2.5 rounded-full bg-[#171822] border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Call +91 94411 00609
            </a>
          </div>
        </div>
      )}
    </>
  );
}

