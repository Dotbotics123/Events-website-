import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot, User, ArrowRight, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

interface FloatingAiChatProps {
  onOpenConsultation: (context: string) => void;
  onOpenAuraAiModal: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; action: () => void }[];
}

export default function FloatingAiChat({
  onOpenConsultation,
  onOpenAuraAiModal
}: FloatingAiChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Namaste! I am Aura, your S Raja Marriage Contractor AI Concierge. How can I assist your celebration planning today in Hyderabad or AP?',
      timestamp: 'Just now',
      suggestedActions: [
        {
          label: '⚡ 15-Min Callback',
          action: () => onOpenConsultation('Quick Callback Request via AI Chat')
        },
        {
          label: '🏰 Telugu Mandapam Cost',
          action: () => handleSendPrompt('What is the cost for a traditional Telugu Vedic Mandapam in Hyderabad for 500 guests?')
        },
        {
          label: '📅 Muhurtham Dates 2026/27',
          action: () => handleSendPrompt('What are auspicious wedding muhurthams in 2026 and 2027?')
        }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSendPrompt = (promptText: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let aiReplyText = '';
      let actions: { label: string; action: () => void }[] = [];

      const lower = promptText.toLowerCase();

      if (lower.includes('cost') || lower.includes('budget') || lower.includes('price') || lower.includes('500')) {
        aiReplyText = 'For a 500-guest traditional wedding in Hyderabad (Taj Falaknuma, Novotel, or Gachibowli conventions), our turnkey contractor packages range from ₹14L to ₹45L. This includes hand-carved Teakwood Mandapam, 2200K temple lighting, fresh Madurai jasmine florals, and smokeless homam staging.';
        actions = [
          {
            label: 'Open Full 3D Estimator',
            action: () => {
              const el = document.getElementById('calculator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }
          },
          {
            label: 'Book Site Inspection',
            action: () => {
              onOpenConsultation('Site Inspection for 500 Pax Wedding');
              setIsOpen(false);
            }
          }
        ];
      } else if (lower.includes('muhurtham') || lower.includes('date') || lower.includes('2026') || lower.includes('2027')) {
        aiReplyText = 'Key upcoming auspicious muhurthams include: Nov 24 (Rohini Nakshatram), Dec 04 (Uttara Phalguni), and Feb 18 2027 (Magha Pournami). We guarantee locking your contractor dates with our 100% turnkey crew.';
        actions = [
          {
            label: 'View Muhurtham Calendar',
            action: () => {
              const el = document.getElementById('muhurtham-faq');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }
          },
          {
            label: 'Lock Auspicious Date',
            action: () => {
              onOpenConsultation('Lock Auspicious Muhurtham Date');
              setIsOpen(false);
            }
          }
        ];
      } else if (lower.includes('haldi') || lower.includes('pellikuthuru') || lower.includes('seemantham')) {
        aiReplyText = 'For Pellikuthuru & Haldi ceremonies, we construct sunlit turmeric courtyards with hammered brass urlis, lotus pools, and customized turmeric showers. Turnaround is 8 hours with authentic Mangala Vaadyam audio.';
        actions = [
          {
            label: 'View 16 Traditions Spec Sheet',
            action: () => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }
          }
        ];
      } else {
        aiReplyText = `Thank you for asking! S Raja Marriage Contractor provides end-to-end turnkey architectural decor, authentic Vedic mandapams, concert AV, and royal catering across Hyderabad, Telangana & AP. Would you like our master planner to call you within 15 minutes?`;
        actions = [
          {
            label: '📞 Request 15-Min Callback',
            action: () => {
              onOpenConsultation('Urgent 15-Min Callback via AI Chat');
              setIsOpen(false);
            }
          },
          {
            label: '✨ Open Aura AI Deep Planner',
            action: () => {
              onOpenAuraAiModal();
              setIsOpen(false);
            }
          }
        ];
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: actions
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const text = inputValue;
    setInputValue('');
    handleSendPrompt(text);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          id="floating-ai-chat-btn"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#13151A] hover:bg-[#1C1E26] border border-[#C5A880]/50 hover:border-[#C5A880] text-[#F3EFE6] shadow-2xl transition-all duration-300 transform hover:scale-105"
          aria-label="Open AI Assistant"
        >
          {/* Pulsing halo */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C5A880]" />
          </span>

          <div className="w-7 h-7 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880]">
            <Sparkles className="w-4 h-4 text-[#C5A880] animate-spin-slow" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-serif font-bold text-[#F3EFE6] tracking-wider uppercase flex items-center gap-1.5">
              <span>AURA AI</span>
              <span className="text-[9px] font-mono-cad text-[#94C999] font-normal">• ONLINE</span>
            </span>
            <span className="text-[10px] text-[#A69F92] font-mono-cad hidden sm:inline">
              Instant Event & Muhurtham AI
            </span>
          </div>
        </button>
      )}

      {/* Expandable Chat Widget Window */}
      {isOpen && (
        <div
          id="floating-ai-chat-drawer"
          className="w-[90vw] sm:w-[380px] h-[520px] rounded-2xl bg-[#0F1116] border border-[#C5A880]/40 shadow-2xl flex flex-col justify-between overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="p-3.5 bg-[#17181F] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880]">
                <Bot className="w-4 h-4 text-[#C5A880]" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-[#F3EFE6] tracking-wide">
                  Aura AI Concierge
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono-cad text-[#94C999]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94C999]" />
                  <span>S Raja Marriage Contractor • Live</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={onOpenAuraAiModal}
                className="px-2 py-1 rounded bg-[#1F222B] hover:bg-[#2A2E39] border border-white/10 text-[10px] font-mono-cad text-[#C5A880] flex items-center gap-1"
                title="Open Fullscreen AI Planner"
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>Full AI</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Notice Bar */}
          <div className="px-3 py-1.5 bg-[#C5A880]/10 border-b border-[#C5A880]/20 flex items-center justify-between text-[10px] font-mono-cad text-[#C5A880]">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#94C999]" />
              <span>15-Min Instant Callback Guarantee</span>
            </div>
            <a href="tel:+919441100609" className="hover:underline text-[#F3EFE6] flex items-center gap-1">
              <Phone className="w-2.5 h-2.5 text-[#C5A880]" />
              +91 94411 00609
            </a>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-[#17181F] border border-[#C5A880]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                  </div>
                )}

                <div className="max-w-[85%] space-y-2">
                  <div
                    className={`p-3 rounded-xl leading-relaxed text-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#C5A880] text-[#0A0B0E] font-medium rounded-tr-none'
                        : 'bg-[#171920] border border-white/10 text-[#E4DFD5] rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[9px] font-mono-cad block text-right mt-1 ${
                        msg.sender === 'user' ? 'text-black/60' : 'text-white/40'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* Suggested Action Chips */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestedActions.map((act, i) => (
                        <button
                          key={i}
                          onClick={act.action}
                          className="px-2.5 py-1 rounded-full bg-[#1F222B] hover:bg-[#2C303E] border border-[#C5A880]/30 text-[10px] text-[#C5A880] font-mono-cad tracking-tight hover:border-[#C5A880] transition-colors"
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 text-[#0A0B0E]">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#A69F92] pl-2">
                <Sparkles className="w-3 h-3 text-[#C5A880] animate-spin" />
                <span className="text-[11px] font-mono-cad">Aura is formulating suggestions...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-2.5 bg-[#12141A] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about costs, dates, mandapam specs..."
              className="flex-1 bg-[#17181F] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#F3EFE6] placeholder-[#A69F92] focus:outline-none focus:border-[#C5A880]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-lg bg-[#C5A880] hover:bg-[#D4B991] disabled:opacity-40 text-[#0A0B0E] transition-all"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
