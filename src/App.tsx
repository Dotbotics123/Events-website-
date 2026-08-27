import { useState } from 'react';
import Navbar from './components/Navbar';
import CinematicHero from './components/CinematicHero';
import ServiceOccasionExplorer from './components/ServiceOccasionExplorer';
import DreamWeddingsGrid from './components/DreamWeddingsGrid';
import CoreDisciplines from './components/CoreDisciplines';
import SpatialMetamorphosis from './components/SpatialMetamorphosis';
import MandapCadVisualizer from './components/MandapCadVisualizer';
import BanquetsShowcase from './components/BanquetsShowcase';
import CostCalculator from './components/CostCalculator';
import ReviewsAndPress from './components/ReviewsAndPress';
import MuhurthamAndFaq from './components/MuhurthamAndFaq';
import Footer from './components/Footer';

// Floating interactive widgets
import FloatingAiChat from './components/FloatingAiChat';
import QuickContactDrawer from './components/QuickContactDrawer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

// Modals
import AuraAiPlannerModal from './components/AuraAiPlannerModal';
import ClientPortalModal from './components/ClientPortalModal';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  // Modal states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState('');
  const [isAuraAiOpen, setIsAuraAiOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Handlers for opening consultation with pre-filled context
  const handleOpenConsultation = (context: string = '') => {
    setConsultationContext(context);
    setIsConsultationOpen(true);
  };

  const handleOpenConsultationWithEstimates = (estimateSummary: string) => {
    setConsultationContext(estimateSummary);
    setIsConsultationOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F3EFE6] selection:bg-[#C5A880] selection:text-[#0A0B0E] font-sans antialiased overflow-x-hidden pt-[24px]">
      {/* 1. Global Navigation Bar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation('Navbar Direct Inquiry')}
        onOpenAuraAi={() => setIsAuraAiOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenCalculator={handleScrollToCalculator}
      />

      <main>
        {/* 2. Section 01: The Master Cinematic Hero */}
        <CinematicHero
          onOpenConsultation={() => handleOpenConsultation('Cinematic Hero')}
          onOpenAuraAi={() => setIsAuraAiOpen(true)}
          onOpenCalculator={handleScrollToCalculator}
        />

        {/* 3. Section 02: 16 Cultural Occasions & Services Grid */}
        <ServiceOccasionExplorer
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Section 03: 6 Master Dream Wedding Archetypes */}
        <DreamWeddingsGrid
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. Section 04: Turnkey Contractor Disciplines */}
        <CoreDisciplines
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 6. Section 05: Spatial Metamorphosis (Before / After Slider) */}
        <SpatialMetamorphosis
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 7. Section 06: 3D CAD Mandap & Blueprint Visualizer */}
        <MandapCadVisualizer
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 8. Section 07: Regional Royal Banquets & Catering */}
        <BanquetsShowcase
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 9. Section 08: Transparent Contractor Cost Calculator */}
        <CostCalculator
          onOpenConsultationWithEstimates={handleOpenConsultationWithEstimates}
        />

        {/* 10. Section 09: Verified Client Stories & Press Accolades */}
        <ReviewsAndPress />

        {/* 11. Section 10: 2026/2027 Muhurtham Guide & Contractor FAQ */}
        <MuhurthamAndFaq
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* 12. Editorial Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenAuraAi={() => setIsAuraAiOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenCalculator={handleScrollToCalculator}
      />

      {/* Persistent Floating AI Chat Support Widget */}
      <FloatingAiChat
        onOpenConsultation={handleOpenConsultation}
        onOpenAuraAiModal={() => setIsAuraAiOpen(true)}
      />

      {/* Right Side Expand and Collapse Quick Contact Form */}
      <QuickContactDrawer
        onSuccessSubmit={(data) => {
          handleOpenConsultation(`Quick Callback Inquiry for ${data.name} (${data.eventType})`);
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsAppButton />

      {/* Global Interactive Modals */}
      <AuraAiPlannerModal
        isOpen={isAuraAiOpen}
        onClose={() => setIsAuraAiOpen(false)}
        onBookWithPlan={(planSummary) => {
          handleOpenConsultation(planSummary);
        }}
      />

      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialContext={consultationContext}
      />
    </div>
  );
}

