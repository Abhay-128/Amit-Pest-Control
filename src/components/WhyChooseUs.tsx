import React from 'react';
import { 
  Sparkles, 
  Award, 
  IndianRupee, 
  ShieldCheck, 
  Check, 
  X, 
  Shield 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            {t.whyUs.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B48] tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.whyUs.cards.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-700/20">
                  {item.id === 'odorless' && <Sparkles className="w-6 h-6" />}
                  {item.id === 'certified' && <Award className="w-6 h-6" />}
                  {item.id === 'pricing' && <IndianRupee className="w-6 h-6" />}
                  {item.id === 'warranty' && <ShieldCheck className="w-6 h-6" />}
                </div>

                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  {item.highlight}
                </span>

                <h3 className="text-lg font-black text-[#0F2B48] mt-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{t.whyUs.standardEveryBooking}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table / CRO Trust Booster */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0F2B48] text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {t.whyUs.comparisonTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {t.whyUs.comparisonSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">{t.whyUs.thFeature}</th>
                  <th className="py-3 px-4 text-emerald-400 font-black text-sm">{t.whyUs.thAmit}</th>
                  <th className="py-3 px-4 text-slate-400">{t.whyUs.thOthers}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {t.whyUs.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="py-3 px-4 font-semibold text-slate-200">{row.feature}</td>
                    <td className="py-3 px-4 font-bold text-emerald-300 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.amit}</span>
                    </td>
                    <td className="py-3 px-4 text-rose-300">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{row.others}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
