import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const StickyMobileCTA: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const quickMsg = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मुझे तत्काल कीट नियंत्रण (Pest Control) सर्विस बुक करनी है।'
    : 'Hello Amit Pest Control, I would like to book an immediate pest control service.';

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(quickMsg)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl safe-area-inset-bottom">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          id="mobile-sticky-call"
          href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#0F2B48] text-white font-black text-xs sm:text-sm active:scale-95 transition-transform shadow-md"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span className="truncate">{t.stickyCTA.callNow}</span>
        </a>

        {/* WhatsApp Quick Chat */}
        <a
          id="mobile-sticky-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-black text-xs sm:text-sm active:scale-95 transition-transform shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="truncate">{t.stickyCTA.whatsapp}</span>
        </a>
      </div>
    </div>
  );
};
