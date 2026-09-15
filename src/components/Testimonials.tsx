import React from 'react';
import { Star, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Testimonials: React.FC = () => {
  const { language, isHindi } = useLanguage();
  const t = TRANSLATIONS[language];

  const reviewWhatsapp = isHindi
    ? 'नमस्ते अमित पेस्ट कंट्रोल, मैंने आपकी बेहतरीन समीक्षाएं देखी हैं और मुझे सर्विस बुक करनी है।'
    : 'Hello Amit Pest Control, I saw your great reviews and want to book a pest control service.';

  return (
    <section id="reviews" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            {t.reviews.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B48] tracking-tight">
            {t.reviews.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.reviews.items.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-1.5">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F2B48]">{review.name}</h4>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 max-w-[90px] truncate">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review summary stats banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="text-3xl font-black text-[#0F2B48]">4.9 / 5.0</span>
            <div className="flex items-center justify-center gap-0.5 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-bold">{t.reviews.ratingSub}</span>
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <div>
            <span className="text-3xl font-black text-emerald-700">{t.reviews.homesTreated}</span>
            <p className="text-xs text-slate-500 font-bold mt-1">{t.reviews.homesTreatedSub}</p>
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <div>
            <span className="text-3xl font-black text-[#0F2B48]">{t.reviews.writtenWarranty}</span>
            <p className="text-xs text-slate-500 font-bold mt-1">{t.reviews.writtenWarrantySub}</p>
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(reviewWhatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.reviews.joinHappy}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
