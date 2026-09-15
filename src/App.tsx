/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CostCalculator } from './components/CostCalculator';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white font-sans antialiased">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section with Trust Badges and Callback Form */}
          <Hero />

          {/* 2. Key Services Grid with WhatsApp Booking */}
          <ServicesGrid />

          {/* 3. Why Choose Us / Differentiators & Comparison Matrix */}
          <WhyChooseUs />

          {/* 4. Instant Pest Treatment Cost Calculator */}
          <CostCalculator />

          {/* 5. 3-Step Treatment Process */}
          <ProcessSection />

          {/* 6. Customer Testimonials & Verified Reviews */}
          <Testimonials />

          {/* 7. Frequently Asked Questions */}
          <FAQ />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky Bottom Floating Bar for Mobile (Call & WhatsApp) */}
        <StickyMobileCTA />
      </div>
    </LanguageProvider>
  );
}
