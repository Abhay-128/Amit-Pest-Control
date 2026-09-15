import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BrandLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero' | 'badgeOnly';
  showSubtitle?: boolean;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'light',
}) => {
  const { language, isHindi } = useLanguage();

  // Distinctive Circular Vector Emblem faithfully representing the Amit Pest Control insignia
  const EmblemSVG: React.FC<{ dimensionClass: string }> = ({ dimensionClass }) => (
    <svg
      viewBox="0 0 200 200"
      className={`${dimensionClass} drop-shadow-md select-none shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Amit Pest Control Official Logo Emblem"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        <linearGradient id="goldRibbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="outerNavyRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F2B48" />
          <stop offset="100%" stopColor="#081829" />
        </linearGradient>
        <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Outer Navy Ring */}
      <circle cx="100" cy="100" r="96" fill="url(#outerNavyRing)" stroke="#15803D" strokeWidth="3.5" />
      {/* Gold Middle Ring */}
      <circle cx="100" cy="100" r="90" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />

      {/* Central Shield Graphic */}
      <path
        d="M100 24 L148 44 C148 98 100 134 100 134 C100 134 52 98 52 44 Z"
        fill="url(#shieldGrad)"
        stroke="#0F2B48"
        strokeWidth="2"
      />

      {/* House Gable Outline inside shield */}
      <path
        d="M100 40 L134 64 L128 64 L128 92 L72 92 L72 64 L66 64 Z"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* Technician with Spray lance silhouette inside house/shield */}
      <g fill="#0F2B48">
        {/* Cap & Head */}
        <circle cx="100" cy="56" r="8" />
        <path d="M92 53 C92 49 108 49 108 53 L114 55 L92 55 Z" />
        {/* Face respirator mask */}
        <rect x="96" y="58" width="8" height="5" rx="2" fill="#22C55E" />
        {/* Body / Torso in Uniform */}
        <path d="M88 67 C88 63 112 63 112 67 L114 88 L86 88 Z" />
        {/* Backpack Sprayer Tank on back */}
        <rect x="78" y="65" width="8" height="18" rx="2" fill="#15803D" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="82" cy="62" r="2.5" fill="#F59E0B" />
        {/* Hose & Spray Wand */}
        <path d="M82 83 Q82 92 98 84" stroke="#0F2B48" strokeWidth="2" fill="none" />
        <path d="M108 72 L128 54" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        {/* Spray Mist particles */}
        <circle cx="132" cy="50" r="3" fill="#22C55E" />
        <circle cx="137" cy="46" r="2" fill="#22C55E" />
        <circle cx="140" cy="52" r="1.5" fill="#22C55E" />
        <circle cx="134" cy="42" r="1.5" fill="#F59E0B" />
      </g>

      {/* 5 Pest Prohibition Icons row */}
      {/* 1. Cockroach */}
      <g transform="translate(30, 96)">
        <circle cx="10" cy="10" r="9" fill="#FFF" stroke="#DC2626" strokeWidth="1.8" />
        <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="1.8" />
        <ellipse cx="10" cy="10" rx="3.5" ry="5" fill="#78350F" />
        <line x1="8" y1="7" x2="5" y2="5" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="7" x2="15" y2="5" stroke="#78350F" strokeWidth="1" />
      </g>

      {/* 2. Termite */}
      <g transform="translate(60, 108)">
        <circle cx="10" cy="10" r="9" fill="#FFF" stroke="#DC2626" strokeWidth="1.8" />
        <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="1.8" />
        <circle cx="10" cy="7" r="2.5" fill="#92400E" />
        <ellipse cx="10" cy="12" rx="3" ry="4" fill="#B45309" />
      </g>

      {/* 3. Rodent / Rat */}
      <g transform="translate(90, 114)">
        <circle cx="10" cy="10" r="9" fill="#FFF" stroke="#DC2626" strokeWidth="1.8" />
        <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="1.8" />
        <ellipse cx="10" cy="11" rx="4" ry="3.5" fill="#4B5563" />
        <circle cx="8" cy="8" r="1.5" fill="#4B5563" />
        <path d="M14 12 Q17 11 16 8" stroke="#4B5563" strokeWidth="1" fill="none" />
      </g>

      {/* 4. Bedbug */}
      <g transform="translate(120, 108)">
        <circle cx="10" cy="10" r="9" fill="#FFF" stroke="#DC2626" strokeWidth="1.8" />
        <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="1.8" />
        <circle cx="10" cy="10" r="4" fill="#991B1B" />
        <circle cx="10" cy="6" r="2" fill="#7F1D1D" />
      </g>

      {/* 5. Mosquito */}
      <g transform="translate(150, 96)">
        <circle cx="10" cy="10" r="9" fill="#FFF" stroke="#DC2626" strokeWidth="1.8" />
        <line x1="4" y1="4" x2="16" y2="16" stroke="#DC2626" strokeWidth="1.8" />
        <ellipse cx="10" cy="10" rx="2" ry="4" fill="#1E293B" transform="rotate(30 10 10)" />
        <line x1="10" y1="10" x2="16" y2="6" stroke="#64748B" strokeWidth="1" />
        <line x1="10" y1="10" x2="4" y2="7" stroke="#64748B" strokeWidth="1" />
      </g>

      {/* Brand Text Banner inside Badge */}
      <text
        x="100"
        y="146"
        textAnchor="middle"
        fill="#0F2B48"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="0.5"
      >
        Amit PEST CONTROL
      </text>

      {/* Gold & Navy Bottom Ribbon */}
      <g filter="url(#shadowFilter)">
        <path
          d="M26 160 Q100 178 174 160 L168 178 Q100 196 32 178 Z"
          fill="url(#goldRibbon)"
          stroke="#0F2B48"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="173"
          textAnchor="middle"
          fill="#0F2B48"
          fontFamily="sans-serif"
          fontWeight="900"
          fontSize="9.5"
          letterSpacing="1"
        >
          SAFE HOME, HEALTHY LIFE
        </text>
      </g>

      {/* Phone Numbers Arc at bottom */}
      <text
        x="100"
        y="192"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="7.5"
        letterSpacing="0.8"
      >
        📞 8840950021 | 8574567632
      </text>
    </svg>
  );

  if (size === 'badgeOnly') {
    return <EmblemSVG dimensionClass="w-14 h-14 md:w-16 md:h-16" />;
  }

  if (size === 'hero') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <EmblemSVG dimensionClass="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white flex items-center">
              {isHindi ? 'अमित' : 'Amit'}
              <span className="inline-block w-3 h-3 bg-emerald-400 rounded-full ml-1 animate-pulse" />
            </span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-950 bg-emerald-400 px-2.5 py-1 rounded-lg shadow-sm">
              {isHindi ? 'पेस्ट कंट्रोल' : 'PEST CONTROL'}
            </span>
          </div>
          <span className="text-sm sm:text-base font-bold text-emerald-300 mt-1">
            {isHindi ? 'सुरक्षित घर, स्वस्थ जीवन' : 'Safe Home, Healthy Life'}
          </span>
          <span className="text-xs text-amber-300 font-semibold mt-0.5">
            📞 8840950021 / 8574567632
          </span>
        </div>
      </div>
    );
  }

  if (size === 'sm') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <EmblemSVG dimensionClass="w-10 h-10" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1 leading-tight">
            <span
              className={`font-black text-lg tracking-tight ${
                variant === 'dark' ? 'text-white' : 'text-[#0F2B48]'
              }`}
            >
              {isHindi ? 'अमित' : 'Amit'}
              <span className="text-emerald-500 font-black">.</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
              {isHindi ? 'पेस्ट कंट्रोल' : 'Pest Control'}
            </span>
          </div>
          {showSubtitle && (
            <span
              className={`text-[10px] font-semibold tracking-wide ${
                variant === 'dark' ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              {isHindi ? 'सुरक्षित घर, स्वस्थ जीवन' : 'Safe Home, Healthy Life'}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default 'md' and 'lg' size
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Emblem */}
      <EmblemSVG dimensionClass="w-12 h-12 md:w-14 md:h-14" />

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-2xl md:text-3xl font-black tracking-tight flex items-center ${
              variant === 'dark' ? 'text-white' : 'text-[#0F2B48]'
            }`}
          >
            {isHindi ? 'अमित' : 'Amit'}
            <span className="inline-block w-2.5 h-2.5 bg-emerald-600 rounded-full ml-1 animate-pulse" />
          </span>
          <span className="text-xs md:text-sm font-black uppercase tracking-widest text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md border border-emerald-300/60 shadow-xs">
            {isHindi ? 'पेस्ट कंट्रोल' : 'Pest Control'}
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`text-xs md:text-sm font-bold ${
                variant === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
              }`}
            >
              {isHindi ? 'सुरक्षित घर, स्वस्थ जीवन' : 'Safe Home, Healthy Life'}
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-300 font-medium">|</span>
            <span className="hidden sm:inline-block text-[11px] font-bold text-amber-800 bg-amber-100/80 px-1.5 py-0.2 rounded border border-amber-300/60">
              {isHindi ? '100% गंधहीन व सुरक्षित' : '100% Safe & Odorless'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
