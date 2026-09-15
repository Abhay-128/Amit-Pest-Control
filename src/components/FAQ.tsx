import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const FAQ: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqWhatsapp = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मेरे पास कीट नियंत्रण से संबंधित एक प्रश्न है।'
    : 'Hello Amit Pest Control, I have a question regarding your pest control treatments.';

  return (
    <section id="faq" className="py-16 md:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B48] tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/80 bg-emerald-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-black text-[#0F2B48] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                      isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-emerald-100/60 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-black text-[#0F2B48]">
            {t.faq.haveQuestionTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
            {t.faq.haveQuestionSubtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              id="faq-call"
              href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F2B48] text-white font-bold text-xs sm:text-sm hover:bg-[#163a5f] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t.faq.callUs}: {BUSINESS_INFO.primaryPhone}</span>
            </a>

            <a
              id="faq-whatsapp"
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(faqWhatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.faq.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
