import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Clock, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Check
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { CallbackFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<CallbackFormData>({
    fullName: '',
    phoneNumber: '',
    serviceNeeded: t.serviceItems[0].title,
    propertyType: isHindi ? '2 BHK फ्लैट' : '2 BHK Apartment',
    preferredTime: isHindi ? 'आज ही (तत्काल / अर्जेन्ट)' : 'Today (Immediate / Urgent)',
    urgency: 'urgent_today',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phoneNumber) return;

    // Format WhatsApp message
    const msg = isHindi
      ? `*नया पेस्ट कंट्रोल कॉलबैक अनुरोध:*
- *नाम:* ${formData.fullName.trim() || 'उल्लेख नहीं'}
- *मोबाइल नंबर:* ${formData.phoneNumber.trim()}
- *सर्विस की जरूरत:* ${formData.serviceNeeded}
- *प्रॉपर्टी प्रकार:* ${formData.propertyType}
- *प्राथमिकता/स्लॉट:* ${formData.preferredTime}

कृपया मुझे रेट कोटेशन और उपलब्धता के साथ कॉल करें।`
      : `*New Pest Control Callback Request:*
- *Name:* ${formData.fullName.trim() || 'Not specified'}
- *Phone:* ${formData.phoneNumber.trim()}
- *Service Needed:* ${formData.serviceNeeded}
- *Property Type:* ${formData.propertyType}
- *Urgency/Slot:* ${formData.preferredTime}

Please call me back with quote & availability.`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    
    // Trigger WhatsApp redirect
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#0F2B48] to-[#0A1F36] text-white pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Mini Pill / CRO Urgency Hook */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold mb-6 shadow-inner backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{t.hero.pillBadge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Proof points & Trust badges (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-white">
              {t.hero.headlineMain}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlineEnd}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
              {t.hero.subheadline} <strong className="text-white font-bold">{t.hero.safeHighlight}</strong>
            </p>

            {/* Quick Benefits Bullet Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.hero.benefit1}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.hero.benefit2}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.hero.benefit3}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.hero.benefit4}</span>
              </div>
            </div>

            {/* Direct Calling Emergency Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                id="hero-call-primary"
                href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white text-[#0F2B48] font-black text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5 text-emerald-600 animate-bounce" />
                <span>{t.hero.callPrimary}: {BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                id="hero-call-secondary"
                href={`tel:${BUSINESS_INFO.secondaryPhoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm sm:text-base transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{BUSINESS_INFO.secondaryPhone}</span>
              </a>
            </div>

            {/* 4 Trust Badges Grid */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-black text-white leading-snug">{t.hero.trustBadges.ecoTitle}</h2>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{t.hero.trustBadges.ecoSub}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-black text-white leading-snug">{t.hero.trustBadges.samedayTitle}</h2>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{t.hero.trustBadges.samedaySub}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-black text-white leading-snug">{t.hero.trustBadges.safeTitle}</h2>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{t.hero.trustBadges.safeSub}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-black text-white leading-snug">{t.hero.trustBadges.warrantyTitle}</h2>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{t.hero.trustBadges.warrantySub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Callback Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-7 border-2 border-emerald-500/30 relative">
              {/* Highlight ribbon */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                {t.hero.instantRibbon}
              </div>

              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-black text-[#0F2B48] tracking-tight">
                  {t.hero.formTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                  {t.hero.formSubtitle}
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3 my-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-black text-lg text-emerald-950">{t.hero.successTitle}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {t.hero.successDesc}
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.primaryPhoneClean}`}
                      className="w-full py-2.5 bg-[#0F2B48] text-white rounded-lg font-black text-sm hover:bg-[#163a5f] transition-colors"
                    >
                      {t.hero.successCall} {BUSINESS_INFO.primaryPhone}
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-emerald-700 font-bold hover:underline cursor-pointer"
                    >
                      {t.hero.submitAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service-select" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                      {t.hero.serviceLabel}
                    </label>
                    <select
                      id="service-select"
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all outline-none"
                      required
                    >
                      {t.serviceItems.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value={isHindi ? 'ऑल-इन-वन पेस्ट फ्री होम एएमसी (All Pests)' : 'Complete Home Pest Control Combo (All Pests)'}>
                        {isHindi ? 'ऑल-इन-वन संपूर्ण पेस्ट कंट्रोल कॉम्बो' : 'Complete Home Pest Control Combo (All Pests)'}
                      </option>
                      <option value={isHindi ? 'अन्य / जनरल होम इंस्पेक्शन' : 'Other / General Inspection'}>
                        {isHindi ? 'अन्य / निःशुल्क होम इंस्पेक्शन' : 'Other / Unsure (Request Inspection)'}
                      </option>
                    </select>
                  </div>

                  {/* Property Size */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="property-select" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                        {t.hero.propertyLabel}
                      </label>
                      <select
                        id="property-select"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none"
                      >
                        <option value={isHindi ? '1 BHK फ्लैट' : '1 BHK Apartment'}>{isHindi ? '1 BHK फ्लैट' : '1 BHK Flat'}</option>
                        <option value={isHindi ? '2 BHK फ्लैट' : '2 BHK Apartment'}>{isHindi ? '2 BHK फ्लैट' : '2 BHK Flat'}</option>
                        <option value={isHindi ? '3 BHK फ्लैट' : '3 BHK Apartment'}>{isHindi ? '3 BHK फ्लैट' : '3 BHK Flat'}</option>
                        <option value={isHindi ? '4+ BHK / विला' : '4+ BHK / Villa'}>{isHindi ? '4+ BHK / विला' : '4+ BHK / Villa'}</option>
                        <option value={isHindi ? 'दुकान / कमर्शियल' : 'Commercial / Office'}>{isHindi ? 'दुकान / कमर्शियल' : 'Commercial / Office'}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="time-select" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                        {t.hero.urgencyLabel}
                      </label>
                      <select
                        id="time-select"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none"
                      >
                        <option value={isHindi ? 'आज ही (तत्काल / अर्जेन्ट)' : 'Today (Immediate / Urgent)'}>
                          {isHindi ? '⚡ आज ही (तत्काल)' : '⚡ Today (Urgent)'}
                        </option>
                        <option value={isHindi ? 'कल सुबह (9AM - 12PM)' : 'Tomorrow Morning (9AM - 12PM)'}>
                          {isHindi ? 'कल सुबह' : 'Tomorrow Morning'}
                        </option>
                        <option value={isHindi ? 'कल दोपहर (12PM - 4PM)' : 'Tomorrow Afternoon (12PM - 4PM)'}>
                          {isHindi ? 'कल दोपहर' : 'Tomorrow Afternoon'}
                        </option>
                        <option value={isHindi ? 'इस वीकेंड' : 'This Weekend'}>
                          {isHindi ? 'इस सप्ताहांत' : 'This Weekend'}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Name input */}
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                      {t.hero.nameLabel}
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      placeholder={t.hero.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* Phone number input */}
                  <div>
                    <label htmlFor="phone-input" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                      {t.hero.phoneLabel}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-slate-500 font-bold text-sm">
                        +91
                      </span>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="88409 50021"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') })}
                        className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="hero-submit-callback"
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 shadow-lg shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>{t.hero.submitButton}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 font-semibold text-center">
                    <span>{t.hero.guarantee1}</span>
                    <span>&bull;</span>
                    <span>{t.hero.guarantee2}</span>
                    <span>&bull;</span>
                    <span>{t.hero.guarantee3}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
