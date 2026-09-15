import React, { useState } from 'react';
import { Calculator, Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const CostCalculator: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const [propertyType, setPropertyType] = useState<string>('2bhk');
  const [selectedPests, setSelectedPests] = useState<string[]>(['cockroach']);
  const [planType, setPlanType] = useState<'single' | 'amc'>('single');

  const propertyMultipliers: Record<string, { multiplier: number; label: string }> = {
    '1bhk': { multiplier: 0.85, label: isHindi ? '1 BHK फ्लैट' : '1 BHK Apartment' },
    '2bhk': { multiplier: 1.0, label: isHindi ? '2 BHK फ्लैट' : '2 BHK Apartment' },
    '3bhk': { multiplier: 1.25, label: isHindi ? '3 BHK फ्लैट' : '3 BHK Apartment' },
    '4bhk': { multiplier: 1.6, label: isHindi ? '4+ BHK / विला' : '4+ BHK / Villa' },
    'commercial': { multiplier: 1.4, label: isHindi ? 'दुकान / ऑफिस' : 'Commercial / Office Space' },
  };

  const togglePest = (id: string) => {
    if (selectedPests.includes(id)) {
      if (selectedPests.length > 1) {
        setSelectedPests(selectedPests.filter((p) => p !== id));
      }
    } else {
      setSelectedPests([...selectedPests, id]);
    }
  };

  // Calculate pricing
  const rawBase = selectedPests.reduce((acc, pestId) => {
    const item = t.calculator.pests.find((p) => p.id === pestId);
    return acc + (item ? item.basePrice : 0);
  }, 0);

  // Apply bundle discount if multiple pests selected
  const bundleDiscount = selectedPests.length > 1 ? 0.85 : 1.0;
  const propertyFactor = (propertyMultipliers[propertyType] || propertyMultipliers['2bhk']).multiplier;
  
  const estimatedSingle = Math.round(rawBase * propertyFactor * bundleDiscount);
  const estimatedAmc = Math.round(estimatedSingle * 2.5); // AMC is 4 visits at price of 2.5 single visits

  const finalPrice = planType === 'single' ? estimatedSingle : estimatedAmc;
  const originalPrice = Math.round(finalPrice * 1.25); // Show 20% discount
  const savings = originalPrice - finalPrice;

  const propertyName = (propertyMultipliers[propertyType] || propertyMultipliers['2bhk']).label;
  const pestNames = selectedPests
    .map(id => t.calculator.pests.find(p => p.id === id)?.label)
    .filter(Boolean)
    .join(', ');

  const planName = planType === 'single' ? t.calculator.planSingle : t.calculator.planAmc;

  const whatsappMessage = isHindi
    ? `*पेस्ट कंट्रोल ऑनलाइन अनुमानित कोटेशन:*
- *प्रॉपर्टी प्रकार:* ${propertyName}
- *कीट समस्याएं:* ${pestNames}
- *चुना गया प्लान:* ${planName}
- *अनुमानित मूल्य:* ₹${finalPrice} (20% ऑनलाइन डिस्काउंट के साथ)

कृपया बताएं कि क्या आज या कल के लिए यह स्लॉट उपलब्ध है!`
    : `*Pest Control Online Cost Estimate:*
- *Property:* ${propertyName}
- *Pests to Treat:* ${pestNames}
- *Plan Selected:* ${planName}
- *Estimated Price:* ₹${finalPrice} (with 20% Online Discount)

Please confirm if this package is available for a visit today or tomorrow!`;

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-black uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-amber-700" />
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B48] tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                {t.calculator.step1}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {t.calculator.properties.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      propertyType === item.id
                        ? 'bg-[#0F2B48] text-white border-[#0F2B48] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pest Selection */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                {t.calculator.step2}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.calculator.pests.map((pest) => {
                  const isSelected = selectedPests.includes(pest.id);
                  return (
                    <button
                      key={pest.id}
                      type="button"
                      onClick={() => togglePest(pest.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 text-emerald-950 border-emerald-500 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{pest.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-600 font-bold">₹{pest.basePrice}+</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Plan Selection */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                {t.calculator.step3}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPlanType('single')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    planType === 'single'
                      ? 'bg-[#0F2B48] text-white border-[#0F2B48] shadow-sm'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="font-black text-xs sm:text-sm block">{t.calculator.planSingle}</span>
                  <span className={`text-[11px] block mt-0.5 ${planType === 'single' ? 'text-slate-300' : 'text-slate-500'}`}>
                    {t.calculator.planSingleDesc}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlanType('amc')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                    planType === 'amc'
                      ? 'bg-emerald-800 text-white border-emerald-700 shadow-sm'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="absolute -top-2 right-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.2 rounded-full uppercase shadow-xs">
                    {isHindi ? 'बेस्ट बचत' : 'Best Value'}
                  </span>
                  <span className="font-black text-xs sm:text-sm block">{t.calculator.planAmc}</span>
                  <span className={`text-[11px] block mt-0.5 ${planType === 'amc' ? 'text-emerald-200' : 'text-slate-500'}`}>
                    {t.calculator.planAmcDesc}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0F2B48] to-[#081b2e] text-white rounded-2xl p-6 sm:p-7 shadow-xl border-2 border-emerald-500/40 relative">
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 mb-3">
                {t.calculator.onlineDiscountApplied}
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                  {t.calculator.estimatedQuote}
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    ₹{finalPrice}
                  </span>
                  <span className="text-sm sm:text-base text-slate-400 line-through">
                    ₹{originalPrice}
                  </span>
                </div>
                <div className="text-xs font-black text-emerald-400 pt-1">
                  {t.calculator.saveAmount} ₹{savings} (20% Off)
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="mt-5 pt-4 border-t border-slate-700 space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{propertyName} &middot; {pestNames}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isHindi ? '100% गंधहीन बायर फॉर्मूलेशन' : '100% Odorless Bayer Formulation'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isHindi ? 'लिखित वारंटी और फ्री री-ट्रीटमेंट' : 'Written Service Warranty Guarantee'}</span>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <a
                  id="calculator-book-whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{t.calculator.bookWhatsappButton}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-3">
                {t.calculator.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
