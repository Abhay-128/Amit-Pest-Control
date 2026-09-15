import React from 'react';
import { X, CheckCircle2, ShieldAlert, Phone, MessageCircle, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, TranslationData } from '../data/translations';

type ServiceItem = TranslationData['serviceItems'][0];

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  if (!service) return null;

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0F2B48] text-white p-5 rounded-t-2xl flex items-start justify-between z-10">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-500 text-white uppercase tracking-wider mb-2">
              {service.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">{service.title}</h3>
            <p className="text-xs sm:text-sm text-emerald-300 font-bold mt-0.5">{service.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-slate-700">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">
              {t.modal.overview}
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {service.description}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-[11px] font-black uppercase text-slate-500 block">{t.modal.specsPrice}</span>
              <span className="text-lg font-black text-[#0F2B48]">{service.startingPrice}</span>
            </div>
            <div>
              <span className="text-[11px] font-black uppercase text-slate-500 block">{t.modal.specsWarranty}</span>
              <span className="text-sm font-black text-emerald-700">{service.warrantyPeriod}</span>
            </div>
            <div>
              <span className="text-[11px] font-black uppercase text-slate-500 block">{t.modal.specsSafety}</span>
              <span className="text-sm font-black text-slate-800">{service.safetyRating}</span>
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
              {t.modal.inclusions}
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure */}
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              {t.modal.scientificMethod}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              {service.treatmentMethod}
            </p>
          </div>

          {/* Preparation & Safety note */}
          <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-amber-900 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>{t.modal.safetyAssurance}</strong> {t.modal.safetyNote}
            </p>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white font-bold text-slate-800 hover:bg-slate-100 text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#0F2B48]" />
            <span>{t.modal.callHelpline}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-700/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.modal.bookWhatsapp}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
