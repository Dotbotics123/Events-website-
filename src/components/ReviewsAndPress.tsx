import React, { useState, useEffect, useRef } from 'react';
import { CLIENT_REVIEWS } from '../data/eventsData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';

export default function ReviewsAndPress() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards per page calculation (1 on mobile, 2 on tablet, 3 on desktop, 4 on xl)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(4);
      } else if (window.innerWidth >= 1024) {
        setCardsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, CLIENT_REVIEWS.length - cardsPerPage);

  // Auto-advance slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0B0E] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header with Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-cad text-[#C5A880] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              SECTION 09 • VERIFIED CLIENT STORIES & REVIEWS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] leading-tight">
              Trusted by Families Across Telangana & Andhra Pradesh
            </h2>
            <p className="text-sm sm:text-base text-[#D0C9BD] font-light leading-relaxed">
              Real experiences from wedding hosts, Vedic Muhurtham families, and milestone celebrations executed with master contractor precision.
            </p>
          </div>

          {/* Slider Controls & Rating Pill */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#17181C] border border-[#C5A880]/40 text-xs font-mono-cad text-[#C5A880]">
              <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
              <span>5.0 / 5.0 Google Verified</span>
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#17181C] hover:bg-[#C5A880] text-[#F3EFE6] hover:text-[#0A0B0E] transition-all border border-white/10 shadow-lg active:scale-95"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#17181C] hover:bg-[#C5A880] text-[#F3EFE6] hover:text-[#0A0B0E] transition-all border border-white/10 shadow-lg active:scale-95"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Slider Track Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${startIndex * (100 / cardsPerPage)}%)`
            }}
          >
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                style={{ flex: `0 0 ${100 / cardsPerPage}%` }}
                className="px-3"
              >
                <div className="h-full rounded-2xl bg-[#12141A] border border-white/10 hover:border-[#C5A880]/50 p-6 flex flex-col justify-between space-y-4 shadow-xl hover:shadow-2xl hover:shadow-[#C5A880]/10 transition-all duration-300 group">
                  {/* Top: Avatar, Stars & Quote mark */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                          <img
                            src={review.avatar}
                            alt={review.clientName}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A880]/70"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 p-0.5 rounded-full bg-[#C5A880] text-[#0A0B0E]">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-serif text-base text-[#F3EFE6] font-medium leading-snug group-hover:text-[#C5A880] transition-colors">
                            {review.clientName}
                          </h4>
                          <span className="text-[10.5px] font-mono-cad text-[#C5A880] block">
                            {review.badge}
                          </span>
                        </div>
                      </div>

                      <Quote className="w-6 h-6 text-[#C5A880]/20 shrink-0" />
                    </div>

                    {/* Star Rating & Occasion Tag */}
                    <div className="flex items-center justify-between pt-1 border-t border-white/5">
                      <div className="flex items-center gap-1 text-[#C5A880]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono-cad px-2 py-0.5 rounded bg-white/5 text-[#A69F92] truncate max-w-[140px]">
                        {review.eventDate}
                      </span>
                    </div>

                    {/* Review text */}
                    <blockquote className="text-xs text-[#D0C9BD] leading-relaxed font-light line-clamp-4 pt-1">
                      "{review.review}"
                    </blockquote>
                  </div>

                  {/* Bottom: Event Details & Location */}
                  <div className="pt-3 border-t border-white/10 space-y-1">
                    <p className="text-xs font-serif text-[#F3EFE6] font-medium truncate">
                      {review.occasion}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] font-mono-cad text-[#A69F92]">
                      <MapPin className="w-3 h-3 text-[#C5A880] shrink-0" />
                      <span className="truncate">{review.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                startIndex === idx ? 'w-8 bg-[#C5A880]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

