import { useState } from 'react';
import { BANQUET_MENUS } from '../data/eventsData';
import { BanquetMenu } from '../types';
import { Utensils, CheckCircle2, ArrowRight, Sparkles, ChefHat } from 'lucide-react';

interface BanquetsShowcaseProps {
  onOpenConsultation: (context: string) => void;
}

export default function BanquetsShowcase({ onOpenConsultation }: BanquetsShowcaseProps) {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const currentMenu = BANQUET_MENUS[selectedMenuIndex];

  return (
    <section id="banquets" className="py-24 bg-[#0A0B0E] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 07 • REGIONAL ROYAL BANQUETS & CATERING
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              Culinary Artistry: Sacred Bhojanam to Nizami Dastarkhwan
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              We contract and coordinate authentic regional master chefs, traditional Khansamas, and live artisanal culinary stations with pure silver and brass urli hospitality.
            </p>
          </div>

          {/* Menu Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {BANQUET_MENUS.map((menu, idx) => (
              <button
                key={menu.id}
                onClick={() => setSelectedMenuIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono-cad tracking-wider uppercase transition-all ${
                  selectedMenuIndex === idx
                    ? 'bg-[#C5A880] text-[#0A0B0E] font-semibold shadow-lg'
                    : 'bg-[#17181C] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                {menu.title.split(' ')[0]} {menu.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Culinary Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-[#12141A] border border-white/10 p-6 sm:p-8 shadow-2xl">
          {/* Menu Image & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black border border-white/10">
              <img
                src={currentMenu.image}
                alt={currentMenu.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between text-xs font-mono-cad">
                  <span className="text-[#C5A880] font-semibold">{currentMenu.cuisineStyle}</span>
                  <span className="px-2 py-0.5 rounded bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40">
                    {currentMenu.coursesCount} Signature Delicacies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Details & Dish List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880]">
                <ChefHat className="w-4 h-4" />
                <span>MASTER CULINARY BRIGADE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
                {currentMenu.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D0C9BD] leading-relaxed">
                {currentMenu.tagline}
              </p>
            </div>

            {/* Signature Dishes List */}
            <div className="space-y-2">
              <span className="text-xs font-mono-cad text-[#C5A880] uppercase block">
                Highlighted Courses & Live Counter Stations:
              </span>
              <div className="space-y-2">
                {currentMenu.highlightDishes.map((dish, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#0A0B0E] border border-white/5 flex items-start gap-2.5 text-xs text-[#E4DFD5]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{dish}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Hospitality Feature */}
            <div className="p-4 rounded-xl bg-[#17181F] border-l-4 border-[#C5A880] text-xs text-[#D0C9BD] space-y-1">
              <span className="font-mono-cad text-[10px] text-[#C5A880] uppercase block font-semibold">
                Contractor Service Standard:
              </span>
              <p className="text-[#F3EFE6] leading-relaxed">{currentMenu.specialServiceFeature}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
              <span className="text-xs font-mono-cad text-[#A69F92]">
                Ideal for: <span className="text-[#F3EFE6]">{currentMenu.idealFor}</span>
              </span>

              <button
                onClick={() => onOpenConsultation(`Culinary Menu: ${currentMenu.title}`)}
                className="px-6 py-2.5 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#0A0B0E] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
              >
                <span>Customize Menu & Tasting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
