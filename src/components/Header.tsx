import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Menu, X, Sparkles, MapPin, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { BrandLogo } from './BrandLogo';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const whatsappMessage = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मुझे कीट नियंत्रण (Pest Control) सेवाओं की जानकारी और बुकिंग चाहिए।'
    : 'Hello Amit Pest Control, I want to inquire about your pest control services.';

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#0F2B48] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#163a5f]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Emergency notice & Working hours */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              {t.nav.emergencyText}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {t.nav.workingHours}
            </span>
          </div>

          {/* Right: Direct Phone Numbers & Language Switcher in Top Bar */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold ml-auto">
            {/* Phone Numbers */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-slate-300 hidden xl:inline">{t.nav.helpline}</span>
              <a 
                id="header-phone-1"
                href={`tel:${BUSINESS_INFO.primaryPhoneClean}`} 
                className="text-white hover:text-emerald-300 transition-colors font-bold tracking-wide underline decoration-emerald-500/50 underline-offset-2"
              >
                {BUSINESS_INFO.primaryPhone}
              </a>
              <span className="text-slate-400">/</span>
              <a 
                id="header-phone-2"
                href={`tel:${BUSINESS_INFO.secondaryPhoneClean}`} 
                className="text-white hover:text-emerald-300 transition-colors font-bold tracking-wide underline decoration-emerald-500/50 underline-offset-2"
              >
                {BUSINESS_INFO.secondaryPhone}
              </a>
            </div>

            {/* Quick Language Toggle in Topbar */}
            <div className="hidden sm:block">
              <LanguageToggle variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg shrink-0">
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-bold text-slate-700">
            <a href="#services" className="hover:text-emerald-700 transition-colors">{t.nav.services}</a>
            <a href="#why-us" className="hover:text-emerald-700 transition-colors">{t.nav.whyUs}</a>
            <a href="#calculator" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              <span>{t.nav.costEstimator}</span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase">
                {t.nav.instantBadge}
              </span>
            </a>
            <a href="#process" className="hover:text-emerald-700 transition-colors">{t.nav.process}</a>
            <a href="#reviews" className="hover:text-emerald-700 transition-colors">{t.nav.reviews}</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">{t.nav.faqs}</a>
          </nav>

          {/* Desktop Language Switcher & CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Prominent Hindi / English Toggle Button */}
            <LanguageToggle variant="navbar" />

            <a
              id="header-cta-call"
              href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black text-[#0F2B48] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all hover:shadow"
            >
              <Phone className="w-4 h-4 text-[#0F2B48]" />
              <span>{t.nav.callNow}</span>
            </a>

            <a
              id="header-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.nav.whatsappUs}</span>
            </a>
          </div>

          {/* Mobile Right Bar (Language Toggle & Menu Button) */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle variant="navbar" />

            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0F2B48] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-3">
            <LanguageToggle variant="mobile" />

            <div className="flex flex-col space-y-2 text-base font-bold text-slate-700">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
              >
                {t.nav.services}
              </a>
              <a 
                href="#why-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
              >
                {t.nav.whyUs}
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800 flex items-center justify-between"
              >
                <span>{t.nav.costEstimator}</span>
                <span className="text-xs bg-amber-100 text-amber-900 font-black px-2 py-0.5 rounded">20% Off</span>
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
              >
                {t.nav.process}
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
              >
                {t.nav.reviews}
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
              >
                {t.nav.faqs}
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-white bg-[#0F2B48] shadow"
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.callNow}: {BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-white bg-emerald-600 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.whatsappUs}: {BUSINESS_INFO.displayWhatsApp}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
