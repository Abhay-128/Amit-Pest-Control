import React from 'react';
import { PhoneCall, Zap, Home, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ProcessSection: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const emergencyWhatsapp = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मुझे आज ही आपातकालीन कीट नियंत्रण (Pest Control) सेवा चाहिए।'
    : 'Hello Amit Pest Control, I need urgent pest control treatment today.';

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-100/70 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            {t.process.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B48] tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.process.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between">
            <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-slate-100 select-none">
              {t.process.step1Watermark}
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6 shadow-inner">
                <PhoneCall className="w-7 h-7" />
              </div>

              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                {t.process.step1Badge}
              </span>

              <h3 className="text-xl font-black text-[#0F2B48] mt-3">
                {t.process.step1Title}
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.process.step1Desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>{t.process.step1Time}</span>
              <span className="text-emerald-700 font-bold">{t.process.hassleFree}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between">
            <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-slate-100 select-none">
              {t.process.step2Watermark}
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6 shadow-inner">
                <Zap className="w-7 h-7" />
              </div>

              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                {t.process.step2Badge}
              </span>

              <h3 className="text-xl font-black text-[#0F2B48] mt-3">
                {t.process.step2Title}
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.process.step2Desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>{t.process.step2Time}</span>
              <span className="text-emerald-700 font-bold">{t.process.hassleFree}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between">
            <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-slate-100 select-none">
              {t.process.step3Watermark}
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6 shadow-inner">
                <Home className="w-7 h-7" />
              </div>

              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                {t.process.step3Badge}
              </span>

              <h3 className="text-xl font-black text-[#0F2B48] mt-3">
                {t.process.step3Title}
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.process.step3Desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>{t.process.step3Time}</span>
              <span className="text-emerald-700 font-bold">{t.process.hassleFree}</span>
            </div>
          </div>
        </div>

        {/* Quick Process CTA Banner */}
        <div className="mt-12 bg-[#0F2B48] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              {t.process.bannerTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.process.bannerSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
              className="px-5 py-3 rounded-xl bg-white text-[#0F2B48] font-black text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{t.process.bannerCall}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(emergencyWhatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm transition-all flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.process.bannerWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
