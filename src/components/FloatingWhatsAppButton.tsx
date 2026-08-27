import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919441100609';
  const defaultMessage = encodeURIComponent(
    'Hello S Raja Marriage Contractor, I would like to inquire about event architecture, mandap decor, and turnkey wedding contracting.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0A0B0E]/95 border border-[#25D366]/40 text-[#F3EFE6] text-xs font-mono-cad shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Chat on WhatsApp <strong className="text-[#25D366]">+91 94411 00609</strong></span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contact S Raja Marriage Contractor on WhatsApp"
        title="Chat with S Raja Marriage Contractor on WhatsApp"
      >
        {/* Pulsing Aura Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 text-white fill-white stroke-none" />

        {/* Notification indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A880] border-2 border-[#0A0B0E] rounded-full flex items-center justify-center text-[9px] font-bold text-[#0A0B0E]">
          1
        </span>
      </a>
    </div>
  );
}
