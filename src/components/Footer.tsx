import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { BrandLogo } from './BrandLogo';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const whatsappFooterMsg = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मुझे कीट नियंत्रण सेवा के बारे में पूछताछ करनी है।'
    : 'Hello Amit Pest Control, I want to inquire about your pest control services.';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="dark" />

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <LanguageToggle variant="topbar" />
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-2 rounded-xl max-w-xs">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.footer.cert1}</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {isHindi ? 'त्वरित लिंक्स' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">{t.nav.costEstimator}</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">{t.nav.process}</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">{t.nav.reviews}</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">{t.nav.faqs}</a></li>
            </ul>
          </div>

          {/* Key Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {t.footer.keyServicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {t.serviceItems.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {t.footer.helplinesTitle}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.secondaryPhoneClean}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.secondaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappFooterMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: {BUSINESS_INFO.displayWhatsApp}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1 text-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t.footer.badge2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {isHindi ? 'अमित पेस्ट कंट्रोल' : 'Amit Pest Control'}. {t.footer.allRightsReserved}</p>
          <div className="flex items-center gap-1">
            <span>{t.footer.tagline}</span>
            <span className="text-emerald-500 font-black">&bull; {BUSINESS_INFO.primaryPhone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
