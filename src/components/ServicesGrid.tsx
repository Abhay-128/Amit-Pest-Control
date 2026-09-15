import React, { useState } from 'react';
import { 
  Bug, 
  ShieldAlert, 
  Rat, 
  Bed, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Info, 
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { ServiceDetailModal } from './ServiceDetailModal';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, TranslationData } from '../data/translations';

type ServiceItem = TranslationData['serviceItems'][0];

export const ServicesGrid: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bug':
        return <Bug className="w-7 h-7 text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-amber-600" />;
      case 'Rat':
        return <Rat className="w-7 h-7 text-indigo-600" />;
      case 'Bed':
        return <Bed className="w-7 h-7 text-rose-600" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-7 h-7 text-teal-600" />;
    }
  };

  const amcMsg = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मुझे ऑल-इन-वन पेस्ट फ्री होम एएमसी (AMC) पैकेज की जानकारी और बुकिंग चाहिए।'
    : 'Hello Amit Pest Control, I am interested in the All-in-One Pest Free Home AMC Plan. Please send package details.';

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            {t.servicesSection.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B48] tracking-tight">
            {t.servicesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* 5-Service Grid + 1 AMC Combo Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.serviceItems.map((service) => {
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top & Details */}
                <div className="p-6 sm:p-7">
                  {/* Icon & Badge Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F2B48] tracking-tight group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-black text-emerald-700 mt-1 uppercase tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key bullet points */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {service.keyBenefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick specs badge */}
                  <div className="mt-4 flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 font-bold block text-[10px] uppercase">{t.servicesSection.warrantyLabel}</span>
                      <span className="font-black text-[#0F2B48]">{service.warrantyPeriod}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 font-bold block text-[10px] uppercase">{t.servicesSection.startsFrom}</span>
                      <span className="font-black text-emerald-700 text-sm">{service.startingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    id={`book-service-${service.id}`}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.servicesSection.bookService}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  <button
                    id={`details-service-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2 text-xs font-black text-slate-600 hover:text-[#0F2B48] flex items-center justify-center gap-1.5 transition-colors focus:outline-none cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>{t.servicesSection.viewDetails}</span>
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Combo / Commercial Protection Card */}
          <div className="bg-gradient-to-br from-[#0F2B48] to-[#0A1F36] text-white rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between border-2 border-amber-400/40 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-900 mb-4 shadow">
                {t.servicesSection.comboBadge}
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                {t.servicesSection.comboTitle}
              </h3>
              <p className="text-xs font-black text-emerald-300 mt-1 uppercase tracking-wide">
                {t.servicesSection.comboSubtitle}
              </p>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {t.servicesSection.comboDesc}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.servicesSection.comboBullet1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.servicesSection.comboBullet2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.servicesSection.comboBullet3}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/80">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(amcMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>{t.servicesSection.comboButton}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal View */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};
