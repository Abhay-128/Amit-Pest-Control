import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'topbar' | 'navbar' | 'mobile';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-[#163a5f] p-1 rounded-full border border-emerald-500/30 text-xs ${className}`}>
        <Globe className="w-3.5 h-3.5 text-emerald-400 ml-1 shrink-0" />
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded-full font-bold transition-all ${
            language === 'en'
              ? 'bg-emerald-500 text-slate-950 shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className="text-slate-500 text-[10px]">|</span>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          className={`px-2 py-0.5 rounded-full font-bold transition-all ${
            language === 'hi'
              ? 'bg-emerald-500 text-slate-950 shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Switch to Hindi"
        >
          हिंदी
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3 bg-slate-100 rounded-xl border border-slate-200 ${className}`}>
        <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <Globe className="w-4 h-4 text-emerald-600" />
          <span>Website Language / भाषा:</span>
        </div>
        <div className="inline-flex bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md text-xs font-black transition-all ${
              language === 'en'
                ? 'bg-[#0F2B48] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded-md text-xs font-black transition-all ${
              language === 'hi'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            हिंदी
          </button>
        </div>
      </div>
    );
  }

  // Default 'navbar' design
  return (
    <div className={`inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner ${className}`}>
      <button
        type="button"
        id="lang-toggle-en"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1 transition-all ${
          language === 'en'
            ? 'bg-[#0F2B48] text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="Switch to English"
      >
        <span>English</span>
      </button>

      <button
        type="button"
        id="lang-toggle-hi"
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1 transition-all ${
          language === 'hi'
            ? 'bg-emerald-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="हिंदी भाषा चुनें"
      >
        <span>हिंदी</span>
      </button>
    </div>
  );
};
