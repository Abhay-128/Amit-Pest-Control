import { Language } from '../context/LanguageContext';

export interface TranslationData {
  nav: {
    services: string;
    whyUs: string;
    costEstimator: string;
    instantBadge: string;
    process: string;
    reviews: string;
    faqs: string;
    callNow: string;
    whatsappUs: string;
    emergencyText: string;
    workingHours: string;
    helpline: string;
  };
  hero: {
    pillBadge: string;
    headlineMain: string;
    headlineHighlight: string;
    headlineEnd: string;
    subheadline: string;
    safeHighlight: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    callPrimary: string;
    formTitle: string;
    formSubtitle: string;
    instantRibbon: string;
    serviceLabel: string;
    propertyLabel: string;
    urgencyLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    submitButton: string;
    guarantee1: string;
    guarantee2: string;
    guarantee3: string;
    successTitle: string;
    successDesc: string;
    successCall: string;
    submitAnother: string;
    trustBadges: {
      ecoTitle: string;
      ecoSub: string;
      samedayTitle: string;
      samedaySub: string;
      safeTitle: string;
      safeSub: string;
      warrantyTitle: string;
      warrantySub: string;
    };
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
    bookService: string;
    viewDetails: string;
    warrantyLabel: string;
    startsFrom: string;
    comboBadge: string;
    comboTitle: string;
    comboSubtitle: string;
    comboDesc: string;
    comboBullet1: string;
    comboBullet2: string;
    comboBullet3: string;
    comboButton: string;
  };
  serviceItems: Array<{
    id: string;
    title: string;
    tagline: string;
    badge: string;
    iconName: string;
    description: string;
    keyBenefits: string[];
    treatmentMethod: string;
    safetyRating: string;
    warrantyPeriod: string;
    startingPrice: string;
    whatsappMessage: string;
  }>;
  modal: {
    overview: string;
    specsPrice: string;
    specsWarranty: string;
    specsSafety: string;
    inclusions: string;
    scientificMethod: string;
    safetyAssurance: string;
    safetyNote: string;
    callHelpline: string;
    bookWhatsapp: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    standardEveryBooking: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
      highlight: string;
    }>;
    comparisonTitle: string;
    comparisonSubtitle: string;
    thFeature: string;
    thAmit: string;
    thOthers: string;
    rows: Array<{
      feature: string;
      amit: string;
      others: string;
    }>;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    properties: Array<{ id: string; name: string; fullLabel: string }>;
    pests: Array<{ id: string; label: string; basePrice: number }>;
    planSingle: string;
    planSingleDesc: string;
    planAmc: string;
    planAmcDesc: string;
    estimatedQuote: string;
    onlineDiscountApplied: string;
    originalPriceLabel: string;
    saveAmount: string;
    bookWhatsappButton: string;
    note: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    step1Watermark: string;
    step1Badge: string;
    step1Title: string;
    step1Desc: string;
    step1Time: string;
    step2Watermark: string;
    step2Badge: string;
    step2Title: string;
    step2Desc: string;
    step2Time: string;
    step3Watermark: string;
    step3Badge: string;
    step3Title: string;
    step3Desc: string;
    step3Time: string;
    hassleFree: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerCall: string;
    bannerWhatsapp: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    ratingSub: string;
    homesTreated: string;
    homesTreatedSub: string;
    writtenWarranty: string;
    writtenWarrantySub: string;
    joinHappy: string;
    items: Array<{
      id: string;
      name: string;
      location: string;
      service: string;
      rating: number;
      comment: string;
      date: string;
      verified: boolean;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    haveQuestionTitle: string;
    haveQuestionSubtitle: string;
    callUs: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    desc: string;
    cert1: string;
    cert2: string;
    keyServicesTitle: string;
    amcLink: string;
    helplinesTitle: string;
    primaryHelpline: string;
    secondaryHelpline: string;
    whatsappDirect: string;
    freeInspectionTitle: string;
    freeInspectionDesc: string;
    callTechnician: string;
    backToTop: string;
    disclaimerLabel: string;
    disclaimerText: string;
    allRightsReserved: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  stickyCTA: {
    callNow: string;
    whatsapp: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    nav: {
      services: 'Services',
      whyUs: 'Why Choose Us',
      costEstimator: 'Cost Estimator',
      instantBadge: 'Instant',
      process: '3-Step Process',
      reviews: 'Reviews',
      faqs: 'FAQs',
      callNow: 'Call Now',
      whatsappUs: 'WhatsApp Us',
      emergencyText: 'Same-Day Emergency Service Available',
      workingHours: '7:00 AM - 9:00 PM (All 7 Days)',
      helpline: 'Direct Helpline:',
    },
    hero: {
      pillBadge: 'Govt. Approved Odorless Formulations • Free Inspection',
      headlineMain: 'Say Goodbye to Pests –',
      headlineHighlight: '100% Safe & Guaranteed',
      headlineEnd: 'Treatments',
      subheadline: 'Professional, certified pest management for homes & commercial premises. Advanced German gel technology & odorless botanical sprays with',
      safeHighlight: 'zero harm to babies or pets.',
      benefit1: 'No need to empty kitchen cabinets',
      benefit2: 'Odorless & 100% Non-Toxic',
      benefit3: 'Written Warranty & Free Re-treatments',
      benefit4: 'Technician reaches in 60-90 mins',
      callPrimary: 'Call',
      formTitle: 'Request a Free Callback',
      formSubtitle: 'Get custom quotes & book a same-day technician visit.',
      instantRibbon: '⚡ Instant 5-Min Callback',
      serviceLabel: 'Pest Problem / Service *',
      propertyLabel: 'Property Size',
      urgencyLabel: 'Urgency / Slot',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Rahul Sharma',
      phoneLabel: 'Mobile Number *',
      submitButton: 'Get Free Quote on WhatsApp',
      guarantee1: '🔒 100% Free Consultation',
      guarantee2: 'No Obligation Quote',
      guarantee3: 'Zero Spam Guarantee',
      successTitle: 'Callback Request Sent!',
      successDesc: 'We have redirected your details to our WhatsApp team. You can also dial us immediately for urgent treatment.',
      successCall: 'Call Now:',
      submitAnother: 'Submit another request',
      trustBadges: {
        ecoTitle: '100% Eco-Friendly',
        ecoSub: 'Govt. Approved herbal & organic base solutions',
        samedayTitle: 'Same Day Service',
        samedaySub: 'Quick 60-90 min technician dispatch',
        safeTitle: 'Child & Pet Safe',
        safeSub: 'Odorless, non-toxic & human-friendly',
        warrantyTitle: 'Warranty Backed',
        warrantySub: 'Free repeat service if pests return',
      },
    },
    servicesSection: {
      badge: 'Specialized Treatments',
      title: 'Our Key Pest Control Services',
      subtitle: 'Targeted, odorless, and government-approved pest eradication solutions with guaranteed warranty and zero mess.',
      bookService: 'Book This Service',
      viewDetails: 'View Treatment Inclusions & Safety',
      warrantyLabel: 'Warranty',
      startsFrom: 'Starts from',
      comboBadge: '★ Best Value Combo',
      comboTitle: 'All-in-One Pest Free Home AMC',
      comboSubtitle: 'Annual Maintenance Contract • 4 Visits / Year',
      comboDesc: 'Covers Cockroaches, Ants, Spiders, Silverfish, Rodents & Mosquitoes with year-round free on-call emergency checkups.',
      comboBullet1: '365 Days 100% Pest-Free Guarantee',
      comboBullet2: 'Unlimited Free Emergency Visits',
      comboBullet3: 'Save 35% compared to single treatments',
      comboButton: 'Inquire AMC Package',
    },
    serviceItems: [
      {
        id: 'cockroach-control',
        title: 'Cockroach Control & Gel Treatment',
        tagline: 'Odorless Advanced Bayer Gel & Target Spraying',
        badge: 'Most Popular',
        iconName: 'Bug',
        description: 'Targeted German & American cockroach eradication using high-potency odorless gel baiting and kitchen crevice micro-spraying. No need to empty kitchen cabinets or vacate home.',
        keyBenefits: [
          '100% Odorless & Non-Toxic German Gel formulation',
          'No need to empty kitchen cabinets or move appliances',
          'Eradicates cockroach nests & stops egg regeneration',
          'Long-lasting protection with free follow-up warranty',
        ],
        treatmentMethod: 'Bayer Maxforce Gel dotting in hinges, crevices + Herbal insect barrier spray',
        safetyRating: '100% Child & Pet Safe',
        warrantyPeriod: '90 Days to 1 Year Warranty',
        startingPrice: '₹799',
        whatsappMessage: 'Hello Amit Pest Control, I want to book Cockroach Control & Gel Treatment for my property. Please share details and earliest slot.',
      },
      {
        id: 'termite-protection',
        title: 'Termite & Woodborer Protection',
        tagline: 'Pre & Post Construction Drill-Fill-Seal Anti-Termite Barrier',
        badge: '100% Guaranteed',
        iconName: 'ShieldAlert',
        description: 'Comprehensive subterranean termite eradication and prevention using DRILL-FILL-SEAL chemical barrier technology on skirting tiles, walls, and wooden furniture fixtures.',
        keyBenefits: [
          'Drill-Fill-Seal technology targeting colony queen',
          'Govt. approved termiticide with 2 to 5 years guarantee',
          'Deep wood preservation for wardrobes, doors & modular kitchen',
          'Pre-construction soil treatment & Post-construction building shield',
        ],
        treatmentMethod: 'Sub-surface chemical injection with color-matched tile sealing',
        safetyRating: 'Eco-Friendly & Structural Safe',
        warrantyPeriod: '2 to 5 Years Written Warranty',
        startingPrice: '₹1,999',
        whatsappMessage: 'Hello Amit Pest Control, I need Termite / Woodborer protection inspection & treatment. Please contact me.',
      },
      {
        id: 'rodent-elimination',
        title: 'Rodent & Rat Elimination',
        tagline: 'Bait Stations, Traps & Entry Point Exclusion',
        badge: 'Fast Acting',
        iconName: 'Rat',
        description: 'Systematic rat, mice, and rodent control combining multi-catch bait stations, glue boards, bromadiolone cakes, and entry-hole mesh exclusion to safeguard wiring and food stores.',
        keyBenefits: [
          'Protects electrical wiring, appliances & ceiling lofts',
          'Tamper-proof lockable bait stations safe from pets',
          'Entry point identification and exclusion advice',
          'Carcass removal & sanitization support',
        ],
        treatmentMethod: 'Baiting matrix + ultrasonic repellent audit + mechanical trapping',
        safetyRating: 'Secured Tamper-Proof Box Safe',
        warrantyPeriod: '60 Days Active Support',
        startingPrice: '₹899',
        whatsappMessage: 'Hello Amit Pest Control, I have a Rodent/Rat problem at my premises and need urgent control service.',
      },
      {
        id: 'bed-bug-eradication',
        title: 'Bed Bug Intensive Eradication',
        tagline: '2-Round Deep Crevice Contact Spray & Heat Treatment',
        badge: 'Intensive 2-Step',
        iconName: 'Bed',
        description: 'Specialized 2-visit intensive eradication targeting adult bedbugs, nymphs, and hidden eggs inside mattress seams, bed frames, switchboards, and headboards.',
        keyBenefits: [
          'High-impact knockdown spray reaching deep seam crevices',
          'Mandatory 2nd visit (Day 12-15) to kill newly hatched nymphs',
          'Restores peaceful, bite-free sleep immediately',
          'Safe on mattress fabrics and bedroom upholstery',
        ],
        treatmentMethod: 'Double-round micro-spray of egg-killing and adult contact formula',
        safetyRating: 'Safe for sleeping areas after 2 hrs drying',
        warrantyPeriod: '45 Days Full Relief Guarantee',
        startingPrice: '₹1,199',
        whatsappMessage: 'Hello Amit Pest Control, I urgently need Bed Bug Intensive Eradication treatment. Please book an inspection.',
      },
      {
        id: 'mosquito-insect-fogging',
        title: 'Mosquito & Insect Fogging / Spray',
        tagline: 'Thermal Fogging & Residual Larvicide Spray',
        badge: 'Dengue & Malaria Shield',
        iconName: 'Sparkles',
        description: 'Outdoor and indoor misting and thermal fogging combined with anti-larval water treatments to eliminate mosquitoes, flies, spiders, silverfish, and seasonal flying pests.',
        keyBenefits: [
          'Rapid knockdown of disease-spreading mosquitoes (Aedes/Anopheles)',
          'Residual wall spray repelling flies, ants & silverfish for weeks',
          'Anti-larval treatment for stagnant drains, plant trays & shafts',
          'Ideal for societies, bungalows, offices, lawns & balconies',
        ],
        treatmentMethod: 'Cold ULV misting indoors + Thermal smoke fogging outdoors',
        safetyRating: 'WHO Recommended Formulations',
        warrantyPeriod: 'Seasonal / AMC Plans Available',
        startingPrice: '₹699',
        whatsappMessage: 'Hello Amit Pest Control, I want to book Mosquito & General Insect Fogging service.',
      },
    ],
    modal: {
      overview: 'Treatment Overview',
      specsPrice: 'Starting Price',
      specsWarranty: 'Warranty',
      specsSafety: 'Safety Grade',
      inclusions: 'Key Service Inclusions',
      scientificMethod: 'Scientific Treatment Method',
      safetyAssurance: 'Safety Assurance:',
      safetyNote: 'We use government-certified non-hazardous chemicals. In most treatments, no kitchen shifting or house vacating is required.',
      callHelpline: 'Call Helpline',
      bookWhatsapp: 'Book This Service on WhatsApp',
    },
    whyUs: {
      badge: 'The Amit Pest Control Advantage',
      title: 'Why Thousands of Families Trust Us',
      subtitle: 'We don’t just spray chemicals; we provide scientific, odorless, and family-safe pest eradication with long-lasting protection.',
      standardEveryBooking: 'Standard with every booking',
      cards: [
        {
          id: 'odorless',
          title: 'Safe Odorless Spray & Bayer Gels',
          description: 'No pungent chemical smells, no headache, and no need to leave the house. Formulated with advanced Bayer gels and WHO-standard safe chemicals.',
          highlight: 'Zero Downtime',
        },
        {
          id: 'certified',
          title: 'Certified & Verified Technicians',
          description: 'Our pest specialists undergo rigorous training, background verification, and follow strict hygiene protocols with uniform & ID badges.',
          highlight: 'Govt. Certified Experts',
        },
        {
          id: 'pricing',
          title: 'Affordable & 100% Transparent Pricing',
          description: 'No hidden charges or surprise inspection fees. Fixed upfront quotes tailored to your property size with maximum value guarantee.',
          highlight: 'Best Rate Guarantee',
        },
        {
          id: 'warranty',
          title: 'Follow-Up Warranty & Free Re-Treatment',
          description: 'We stand by our work. If you notice any recurrence within the warranty window, our team will re-treat your space free of charge.',
          highlight: 'Hassle-Free Guarantee',
        },
      ],
      comparisonTitle: 'Amit Pest Control vs Ordinary Local Operators',
      comparisonSubtitle: 'See why hiring certified professionals protects your family and saves you repeated costs.',
      thFeature: 'Feature / Standard',
      thAmit: 'Amit Pest Control',
      thOthers: 'Ordinary Pest Services',
      rows: [
        {
          feature: 'Chemical Quality & Odor',
          amit: '100% Odorless Bayer Gels & Safe Herbal',
          others: 'Pungent, harmful chemical fumes',
        },
        {
          feature: 'Home Vacating Required?',
          amit: 'No need to empty kitchen or vacate',
          others: 'Must pack utensils & leave house',
        },
        {
          feature: 'Technician Safety & Certification',
          amit: 'Verified, Trained & Certified Specialists',
          others: 'Untrained daily wage labor',
        },
        {
          feature: 'Written Service Warranty',
          amit: 'Official Written Warranty + Free Re-visits',
          others: 'No warranty or unreachable after payment',
        },
        {
          feature: 'Response & Emergency Support',
          amit: 'Same-day 60 to 90 min arrival',
          others: 'Unreliable scheduling & delays',
        },
      ],
    },
    calculator: {
      badge: 'Instant Transparent Pricing',
      title: 'Calculate Your Treatment Cost in 10 Seconds',
      subtitle: 'Select your property size and pest concerns below to see an instant estimate with our special 20% online booking discount.',
      step1: '1. Select Property Type:',
      step2: '2. Select Pest Problems (Select multiple to save more):',
      step3: '3. Choose Treatment Plan:',
      properties: [
        { id: '1bhk', name: '1 BHK', fullLabel: '1 BHK Apartment' },
        { id: '2bhk', name: '2 BHK', fullLabel: '2 BHK Apartment' },
        { id: '3bhk', name: '3 BHK', fullLabel: '3 BHK Apartment' },
        { id: '4bhk', name: '4+ BHK / Villa', fullLabel: '4+ BHK / Villa' },
        { id: 'commercial', name: 'Commercial', fullLabel: 'Commercial / Office Space' },
      ],
      pests: [
        { id: 'cockroach', label: 'Cockroach & Ants Gel', basePrice: 799 },
        { id: 'termite', label: 'Termite / Woodborer Barrier', basePrice: 1999 },
        { id: 'bedbug', label: 'Bed Bug 2-Step Eradication', basePrice: 1199 },
        { id: 'rodent', label: 'Rodent & Rat Trapping', basePrice: 899 },
        { id: 'mosquito', label: 'Mosquito & Insect Misting', basePrice: 699 },
      ],
      planSingle: 'Single Treatment (With Warranty)',
      planSingleDesc: 'Full deep eradication with free checkup support.',
      planAmc: 'Annual AMC (4 Visits / Year)',
      planAmcDesc: '365 days unlimited emergency coverage.',
      estimatedQuote: 'Estimated Package Cost',
      onlineDiscountApplied: '20% Instant Online Booking Discount Applied',
      originalPriceLabel: 'Original Price:',
      saveAmount: 'You Save:',
      bookWhatsappButton: 'Lock this Price & Book on WhatsApp',
      note: '✓ Final quote may vary slightly based on extreme infestation levels or custom square footage. Doorstep inspection is 100% Free.',
    },
    process: {
      badge: 'Simple & Fast',
      title: 'Our Easy 3-Step Treatment Process',
      subtitle: 'From initial contact to a certified pest-free premises in less than 24 hours.',
      step1Watermark: '01',
      step1Badge: 'Step 1',
      step1Title: 'Book Free Consultation',
      step1Desc: 'Call us or request a callback on WhatsApp. Choose your convenient date & time slot for free doorstep inspection.',
      step1Time: 'Takes 2 minutes',
      step2Watermark: '02',
      step2Badge: 'Step 2',
      step2Title: 'Eco-Friendly Treatment',
      step2Desc: 'Our certified technician arrives equipped with advanced odorless gels, targeted sprays, and modern pest elimination gear.',
      step2Time: 'Takes 30-45 mins',
      step3Watermark: '03',
      step3Badge: 'Step 3',
      step3Title: '100% Pest-Free Home & Warranty',
      step3Desc: 'Enjoy a hygienic, safe environment backed by our official written warranty certificate and post-service care support.',
      step3Time: 'Valid 365 Days',
      hassleFree: '100% Hassle-Free →',
      bannerTitle: 'Facing an urgent pest infestation today?',
      bannerSubtitle: 'Our nearest emergency technician can reach your premises in 60-90 minutes.',
      bannerCall: 'Call Helpline',
      bannerWhatsapp: 'WhatsApp Emergency',
    },
    reviews: {
      badge: 'Verified Local Customer Reviews',
      title: 'Rated 4.9/5 by 1,450+ Happy Homeowners',
      subtitle: 'Real feedback from local residents who trusted Amit Pest Control for complete, odorless pest eradication.',
      ratingSub: 'Google & Customer Rating',
      homesTreated: '5,000+',
      homesTreatedSub: 'Homes & Offices Treated',
      writtenWarranty: '100%',
      writtenWarrantySub: 'Written Warranty Guaranteed',
      joinHappy: 'Join Happy Customers',
      items: [
        {
          id: '1',
          name: 'Rajesh Sharma',
          location: 'Gomti Nagar',
          service: 'Cockroach Gel Treatment',
          rating: 5,
          comment: 'Amit Pest Control did a phenomenal job! Kitchen was infested with small German cockroaches for months. Their odorless gel wiped them out completely within 48 hours. No smell at all and baby safe!',
          date: '3 days ago',
          verified: true,
        },
        {
          id: '2',
          name: 'Pooja Agarwal',
          location: 'Aliganj',
          service: 'Termite Protection (5 Year)',
          rating: 5,
          comment: 'Termites were eating up our wooden wardrobes. Amit Pest Control team came on the same day, drilled neatly along skirting tiles and injected the solution. Very courteous team and fair pricing.',
          date: '1 week ago',
          verified: true,
        },
        {
          id: '3',
          name: 'Vikram Singh',
          location: 'Indira Nagar',
          service: 'Bed Bug Eradication',
          rating: 5,
          comment: 'Suffered from severe bed bug bites for weeks. They did two intensive rounds and now my family sleeps peacefully. Highly recommend their prompt service and WhatsApp follow-up!',
          date: '2 weeks ago',
          verified: true,
        },
        {
          id: '4',
          name: 'Dr. Anita Verma',
          location: 'Hazratganj',
          service: 'Rodent & Insect Fogging',
          rating: 5,
          comment: 'Booked them for my clinic. Very professional, punctual, and safe odorless chemicals used. Will definitely continue their yearly AMC contract.',
          date: '1 month ago',
          verified: true,
        },
      ],
    },
    faq: {
      badge: 'Got Questions? We Have Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our chemicals, safety, warranty, and technician visits.',
      items: [
        {
          question: 'Is the pest control treatment safe for small children, elderly, and pets?',
          answer: 'Yes, 100%! We use government-approved, advanced odorless herbal gels and WHO-certified micro-formulations. You do not even need to vacate the house, and it is completely safe for babies, pregnant women, and domestic pets.',
        },
        {
          question: 'Do I need to empty my kitchen cabinets before Cockroach treatment?',
          answer: 'No! With our modern Bayer Gel Baiting system, you do NOT need to empty kitchen utensils or food storage cabinets. We apply tiny, odorless gel dots inside hinges and concealed corners without disturbing your kitchen setup.',
        },
        {
          question: 'How quickly can your technician visit my home or office?',
          answer: 'We offer Same-Day Emergency Service! In most locations, our certified technician can reach your doorstep within 60 to 90 minutes of booking confirmation.',
        },
        {
          question: 'What happens if pests return during the warranty period?',
          answer: 'We provide a written service warranty. If you notice any pest recurrence during the warranty validity, simply WhatsApp or call us, and our team will perform a free re-treatment without any additional charges.',
        },
        {
          question: 'How much does pest control cost for a 1BHK, 2BHK, or 3BHK home?',
          answer: 'Our rates start from just ₹699 for standard insect treatments and ₹799 for full kitchen cockroach gel. We offer transparent pricing based on your home size and pest severity. You can also use our Instant Cost Calculator above for a fast quote!',
        },
        {
          question: 'How do I pay for the service?',
          answer: 'Payment is accepted after the service is completed to your satisfaction. We accept UPI (Google Pay, PhonePe, Paytm), Cash, and Net Banking.',
        },
      ],
      haveQuestionTitle: 'Have a specific question about your infestation?',
      haveQuestionSubtitle: 'Talk directly to our chief pest control specialist.',
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'Safe Home, Healthy Life',
      desc: 'Amit Pest Control is your certified local partner for 100% safe, odorless, and government-approved residential and commercial pest management.',
      cert1: 'Bayer Certified Odorless Formulations',
      cert2: 'Open 7 Days a Week: 7:00 AM – 9:00 PM',
      keyServicesTitle: 'Key Services',
      amcLink: 'Annual Pest Free AMC Plans',
      helplinesTitle: 'Direct Helplines',
      primaryHelpline: 'Primary Helpline:',
      secondaryHelpline: 'Secondary Helpline:',
      whatsappDirect: 'WhatsApp Direct:',
      freeInspectionTitle: 'Free Inspection',
      freeInspectionDesc: 'Book a zero-cost doorstep assessment today.',
      callTechnician: 'Call Technician',
      backToTop: 'Back to Top',
      disclaimerLabel: 'Disclaimer & Safety Standard:',
      disclaimerText: 'Amit Pest Control uses WHO-approved, CIB (Central Insecticides Board) registered formulations that are non-hazardous when applied according to professional protocols. Standard warranty terms apply as stated on the service job sheet.',
      allRightsReserved: 'All Rights Reserved.',
      badge1: 'Safe Formulations',
      badge2: 'Govt. Certified',
      badge3: '100% Guaranteed',
    },
    stickyCTA: {
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
    },
  },
  hi: {
    nav: {
      services: 'प्रमुख सेवाएं',
      whyUs: 'हमें क्यों चुनें',
      costEstimator: 'खर्च का अनुमान',
      instantBadge: 'तुरंत',
      process: '3-चरण प्रक्रिया',
      reviews: 'ग्राहकों की राय',
      faqs: 'अक्सर पूछे जाने वाले सवाल',
      callNow: 'कॉल करें',
      whatsappUs: 'व्हाट्सएप करें',
      emergencyText: 'आज ही आपातकालीन सेवा उपलब्ध',
      workingHours: 'सुबह 7:00 - रात 9:00 (सातों दिन)',
      helpline: 'हेल्पलाइन नंबर:',
    },
    hero: {
      pillBadge: 'सरकारी मान्यता प्राप्त गंधहीन दवाएं • निःशुल्क होम इंस्पेक्शन',
      headlineMain: 'कीट-पतंगों को कहें अलविदा –',
      headlineHighlight: '100% सुरक्षित और गारंटीड',
      headlineEnd: 'इलाज',
      subheadline: 'घरों एवं व्यावसायिक प्रतिष्ठानों के लिए पेशेवर व प्रमाणित कीट नियंत्रण। अत्याधुनिक जर्मन जेल तकनीक और गंधहीन स्प्रे जिससे',
      safeHighlight: 'बच्चों और पालतू जानवरों को कोई नुकसान नहीं।',
      benefit1: 'रसोई का सामान खाली करने की ज़रूरत नहीं',
      benefit2: '100% गंधहीन और हानिरहित दवाएं',
      benefit3: 'लिखित वारंटी और फ्री री-ट्रीटमेंट',
      benefit4: 'तकनीशियन 60-90 मिनट में आपके पते पर',
      callPrimary: 'कॉल करें',
      formTitle: 'फ्री कॉलबैक का अनुरोध करें',
      formSubtitle: 'सर्वश्रेष्ठ रेट पाएं और आज ही तकनीशियन विज़िट बुक करें।',
      instantRibbon: '⚡ 5 मिनट में तुरंत कॉलबैक',
      serviceLabel: 'कीट समस्या / सर्विस चुनें *',
      propertyLabel: 'प्रॉपर्टी का प्रकार',
      urgencyLabel: 'कब चाहिए सर्विस',
      nameLabel: 'आपका शुभ नाम',
      namePlaceholder: 'जैसे: राहुल शर्मा',
      phoneLabel: 'मोबाइल नंबर *',
      submitButton: 'व्हाट्सएप पर तुरंत फ्री कोटेशन पाएं',
      guarantee1: '🔒 100% फ्री परामर्श',
      guarantee2: 'कोई छुपा शुल्क नहीं',
      guarantee3: 'ज़ीरो स्पैम गारंटी',
      successTitle: 'कॉलबैक अनुरोध प्राप्त हुआ!',
      successDesc: 'आपकी जानकारी हमारे व्हाट्सएप सपोर्ट को भेज दी गई है। तत्काल सेवा हेतु सीधे कॉल भी कर सकते हैं।',
      successCall: 'अभी कॉल करें:',
      submitAnother: 'दूसरा अनुरोध दर्ज करें',
      trustBadges: {
        ecoTitle: '100% इको-फ्रेंडली',
        ecoSub: 'हर्बल एवं पर्यावरण-सुरक्षित रसायन',
        samedayTitle: 'उसी दिन सर्विस',
        samedaySub: '60-90 मिनट में तकनीशियन की रवानगी',
        safeTitle: 'शिशु एवं पालतू-सुरक्षित',
        safeSub: 'गंधहीन, बिना किसी दुष्प्रभाव के',
        warrantyTitle: 'पक्की वारंटी',
        warrantySub: 'कीड़े दोबारा दिखने पर मुफ्त सर्विस',
      },
    },
    servicesSection: {
      badge: 'विशेषज्ञ समाधान',
      title: 'हमारी प्रमुख पेस्ट कंट्रोल सेवाएं',
      subtitle: 'गंधहीन, वैज्ञानिक और सरकार-मान्यता प्राप्त पेस्ट समाधान, जो आपके घर को रखें पूरी तरह सुरक्षित और स्वच्छ।',
      bookService: 'यह सर्विस बुक करें',
      viewDetails: 'सर्विस विवरण और सुरक्षा विधि देखें',
      warrantyLabel: 'वारंटी',
      startsFrom: 'शुरुआती कीमत',
      comboBadge: '★ सबसे लोकप्रिय कॉम्बो',
      comboTitle: 'ऑल-इन-वन पेस्ट फ्री होम एएमसी (AMC)',
      comboSubtitle: 'वार्षिक रख-रखाव अनुबंध • साल में 4 विज़िट',
      comboDesc: 'कॉकरोच, चींटी, मकड़ी, सिल्वरफिश, चूहे और मच्छरों से पूरे 365 दिन सुरक्षा, साथ में फ्री ऑन-कॉल इमरजेंसी विज़िट।',
      comboBullet1: '365 दिन 100% कीट-मुक्त घर की गारंटी',
      comboBullet2: 'अनलिमिटेड फ्री इमरजेंसी विज़िट',
      comboBullet3: 'सिंगल विज़िट की तुलना में 35% की सीधी बचत',
      comboButton: 'एएमसी पैकेज की जानकारी लें',
    },
    serviceItems: [
      {
        id: 'cockroach-control',
        title: 'कॉकरोच नियंत्रण एवं जेल ट्रीटमेंट',
        tagline: 'गंधहीन बायर (Bayer) जर्मन जेल एवं सटीक स्प्रे',
        badge: 'सर्वाधिक लोकप्रिय',
        iconName: 'Bug',
        description: 'जर्मन एवं अमेरिकी कॉकरोच का संपूर्ण खात्मा। एडवांस गंधहीन जेल तकनीक और सूक्ष्म कोनों में स्प्रे। रसोई का कोई भी बर्तन या डिब्बा हटाने की बिल्कुल आवश्यकता नहीं है।',
        keyBenefits: [
          '100% गंधहीन और हानिरहित जर्मन जेल फॉर्मूलेशन',
          'रसोई की अलमारियां या सामान खाली करने की जरूरत नहीं',
          'कॉकरोच के घोंसलों और अंडों का जड़ से खात्मा',
          'लंबे समय तक सुरक्षा और मुफ्त फॉलो-अप वारंटी',
        ],
        treatmentMethod: 'कब्जों और कोनों में बायर मैक्सफोर्स जेल डॉटिंग + हर्बल बैरियर स्प्रे',
        safetyRating: '100% बच्चों और पालतू जानवरों के लिए सुरक्षित',
        warrantyPeriod: '90 दिन से 1 वर्ष की वारंटी',
        startingPrice: '₹799',
        whatsappMessage: 'नमस्ते अमित पेस्ट कंट्रोल, मुझे अपने घर के लिए कॉकरोच जेल ट्रीटमेंट बुक करना है। कृपया विवरण और सबसे पहला स्लॉट बताएं।',
      },
      {
        id: 'termite-protection',
        title: 'दीमक एवं वुडबोरर से संपूर्ण सुरक्षा',
        tagline: 'ड्रिल-फिल-सील (Drill-Fill-Seal) एंटी-टर्माइट बैरियर',
        badge: '100% गारंटीड',
        iconName: 'ShieldAlert',
        description: 'जमीन से आने वाली दीमक और लकड़ी के कीड़ों से लकड़ी के फर्नीचर, अलमारियों और दीवारों की पूरी सुरक्षा। आधुनिक ड्रिल-फिल-सील केमिकल बैरियर तकनीक।',
        keyBenefits: [
          'ड्रिल-फिल-सील तकनीक से रानी दीमक तक सीधा असर',
          'सरकारी प्रमाणित टरमिटिसाइड के साथ 2 से 5 वर्ष की वारंटी',
          'अलमारी, दरवाजे और मॉड्यूलर किचन की लकड़ी की दीर्घकालिक सुरक्षा',
          'निर्माण से पहले (Pre) व बाद (Post) दोनों तरह के उपचार उपलब्ध',
        ],
        treatmentMethod: 'टाइल्स के नीचे केमिकल इंजेक्शन और मैचिंग सील',
        safetyRating: 'इको-फ्रेंडली और मकान की मजबूती के लिए सुरक्षित',
        warrantyPeriod: '2 से 5 वर्ष की लिखित वारंटी',
        startingPrice: '₹1,999',
        whatsappMessage: 'नमस्ते अमित पेस्ट कंट्रोल, मुझे दीमक / वुडबोरर ट्रीटमेंट और इंस्पेक्शन की आवश्यकता है। कृपया संपर्क करें।',
      },
      {
        id: 'rodent-elimination',
        title: 'चूहा एवं रोडेंट उन्मूलन',
        tagline: 'बेट स्टेशन, सुरक्षित ट्रैप एवं प्रवेश-द्वार रोकथाम',
        badge: 'त्वरित असर',
        iconName: 'Rat',
        description: 'घर, दुकान और गोदाम में चूहों से तारों और खाद्य सामग्री की सुरक्षा। आधुनिक बेट स्टेशन, गम पैड और प्रवेश छिद्रों की जालीदार रोकथाम।',
        keyBenefits: [
          'बिजली की वायरिंग, फॉल सीलिंग और उपकरणों की सुरक्षा',
          'सुरक्षित लॉकेबल बेट बॉक्स (पालतू जानवरों से सुरक्षित)',
          'चूहों के आने-जाने के रास्तों की पहचान व रोकथाम',
          'स्वच्छता एवं सैनिटाइजेशन में पूरा सहयोग',
        ],
        treatmentMethod: 'मल्टी-कैच बेटिंग + अल्ट्रासोनिक ऑडिट + मैकेनिकल ट्रैप',
        safetyRating: 'लॉक्ड बॉक्स में पूरी तरह सुरक्षित',
        warrantyPeriod: '60 दिन का एक्टिव सपोर्ट',
        startingPrice: '₹899',
        whatsappMessage: 'नमस्ते अमित पेस्ट कंट्रोल, मेरे परिसर में चूहों की गंभीर समस्या है, तुरंत समाधान चाहिए।',
      },
      {
        id: 'bed-bug-eradication',
        title: 'खटमल गहन खात्मा ट्रीटमेंट',
        tagline: '2-चरणों में डीप स्प्रे एवं हीट कॉन्टैक्ट विधि',
        badge: '2-चरण सघन उपचार',
        iconName: 'Bed',
        description: 'गद्दों, बेड फ्रेम, स्विच बोर्ड और सोफों में छिपे खटमलों और उनके अंडों का 2 विज़िट में संपूर्ण नाश, जिससे आपको मिले चैन की सुकून भरी नींद।',
        keyBenefits: [
          'गद्दों और लकड़ी के बारीक कोनों तक पहुंचने वाला प्रभावी स्प्रे',
          'अंडों से निकलने वाले नए खटमलों के लिए 12-15 दिन बाद दूसरी विज़िट अनिवार्य',
          'काटने और खुजली से तुरंत और पक्की राहत',
          'कपड़ों और गद्दों के फेब्रिक के लिए पूरी तरह सुरक्षित',
        ],
        treatmentMethod: 'अंडे नाशक और वयस्क नाशक फॉर्मूले का डबल-राउंड माइक्रो-स्प्रे',
        safetyRating: '2 घंटे सूखने के बाद सोने के लिए 100% सुरक्षित',
        warrantyPeriod: '45 दिन की पूर्ण राहत गारंटी',
        startingPrice: '₹1,199',
        whatsappMessage: 'नमस्ते अमित पेस्ट कंट्रोल, मुझे खटमल खात्मा (Bed Bug) ट्रीटमेंट जल्द से जल्द कराना है।',
      },
      {
        id: 'mosquito-insect-fogging',
        title: 'मच्छर एवं सामान्य कीट फॉगिंग व स्प्रे',
        tagline: 'थर्मल फॉगिंग एवं लार्वा नाशक रेसिड्यूअल स्प्रे',
        badge: 'डेंगू व मलेरिया सुरक्षा कवच',
        iconName: 'Sparkles',
        description: 'मच्छरों, मक्खियों, मकड़ियों और मौसमी उड़ने वाले कीड़ों का नाश। घर के अंदर कोल्ड मिस्टिंग और बाहर/बगीचों में थर्मल फॉगिंग।',
        keyBenefits: [
          'डेंगू-मलेरिया फैलाने वाले मच्छरों का तुरंत खात्मा',
          'दीवारों पर कई हफ्तों तक असरदार रहने वाला हर्बल स्प्रे',
          'नालियों और गमलों में लार्वा-रोधी (Anti-Larval) उपचार',
          'सोसायटी, बंगले, ऑफिस, लॉन एवं बालकनी के लिए सर्वोत्तम',
        ],
        treatmentMethod: 'कमरे में कोल्ड यूएलवी मिस्टिंग + बाहर थर्मल स्मोक फॉगिंग',
        safetyRating: 'विश्व स्वास्थ्य संगठन (WHO) अनुमोदित दवाएं',
        warrantyPeriod: 'मौसमी / एएमसी प्लान उपलब्ध',
        startingPrice: '₹699',
        whatsappMessage: 'नमस्ते अमित पेस्ट कंट्रोल, मुझे मच्छर एवं कीट फॉगिंग सर्विस की बुकिंग करानी है।',
      },
    ],
    modal: {
      overview: 'ट्रीटमेंट का पूरा विवरण',
      specsPrice: 'शुरुआती कीमत',
      specsWarranty: 'वारंटी',
      specsSafety: 'सुरक्षा मानक',
      inclusions: 'सर्विस में क्या-क्या शामिल है',
      scientificMethod: 'वैज्ञानिक ट्रीटमेंट विधि',
      safetyAssurance: 'सुरक्षा आश्वासन:',
      safetyNote: 'हम केवल सरकार द्वारा प्रमाणित गंधहीन व हानिरहित दवाओं का प्रयोग करते हैं। रसोई खाली करने या घर छोड़ने की आवश्यकता नहीं होती।',
      callHelpline: 'हेल्पलाइन पर बात करें',
      bookWhatsapp: 'व्हाट्सएप पर बुक करें',
    },
    whyUs: {
      badge: 'अमित पेस्ट कंट्रोल की खासियतें',
      title: 'हजारों परिवार हम पर क्यों भरोसा करते हैं',
      subtitle: 'हम सिर्फ दवा नहीं छिड़कते, बल्कि गंधहीन, वैज्ञानिक और परिवार के लिए सुरक्षित दीर्घकालिक समाधान प्रदान करते हैं।',
      standardEveryBooking: 'प्रत्येक बुकिंग के साथ सुनिश्चित',
      cards: [
        {
          id: 'odorless',
          title: 'सुरक्षित गंधहीन स्प्रे व बायर जेल',
          description: 'कोई बदबू नहीं, कोई सिरदर्द नहीं और न ही घर से बाहर जाने की ज़रूरत। आधुनिक बायर जेल और WHO मानक दवाओं से उपचार।',
          highlight: 'शून्य व्यवधान',
        },
        {
          id: 'certified',
          title: 'प्रमाणित एवं पुलिस-सत्यापित तकनीशियन',
          description: 'हमारे विशेषज्ञ पूरी तरह प्रशिक्षित, बैकग्राउंड सत्यापित और साफ-सुथरी वर्दी व आईडी कार्ड के साथ आते हैं।',
          highlight: 'सरकारी प्रमाणित एक्सपर्ट',
        },
        {
          id: 'pricing',
          title: 'किफायती एवं 100% पारदर्शी दरें',
          description: 'कोई छुपा हुआ चार्ज नहीं। घर के आकार के अनुसार निश्चित व उचित रेट, जिससे आपको मिले सर्वोत्तम मूल्य।',
          highlight: 'बेस्ट रेट गारंटी',
        },
        {
          id: 'warranty',
          title: 'लिखित वारंटी और फ्री री-ट्रीटमेंट',
          description: 'यदि वारंटी अवधि में कोई भी कीट दोबारा दिखता है, तो हमारी टीम बिना किसी अतिरिक्त शुल्क के पुनः उपचार करेगी।',
          highlight: 'तनावमुक्त गारंटी',
        },
      ],
      comparisonTitle: 'अमित पेस्ट कंट्रोल बनाम अन्य साधारण ऑपरेटर',
      comparisonSubtitle: 'जानिए क्यों प्रमाणित विशेषज्ञों को चुनना आपके परिवार की सुरक्षा और पैसों की बचत करता है।',
      thFeature: 'सुविधा / मानक',
      thAmit: 'अमित पेस्ट कंट्रोल',
      thOthers: 'साधारण लोकल पेस्ट वाले',
      rows: [
        {
          feature: 'दवा की गुणवत्ता और गंध',
          amit: '100% गंधहीन बायर जेल और सुरक्षित हर्बल दवा',
          others: 'तीखी बदबू और हानिकारक जहरीले धुएं',
        },
        {
          feature: 'क्या घर खाली करना पड़ता है?',
          amit: 'रसोई या घर खाली करने की कोई ज़रूरत नहीं',
          others: 'बर्तन समेटने और घर से बाहर रहने की मजबूरी',
        },
        {
          feature: 'तकनीशियन की सुरक्षा व पहचान',
          amit: 'सत्यापित, प्रशिक्षित और प्रमाणित विशेषज्ञ',
          others: 'अकुशल व अप्रशिक्षित दिहाड़ी मजदूर',
        },
        {
          feature: 'लिखित सर्विस वारंटी',
          amit: 'पक्की लिखित वारंटी + मुफ्त में दोबारा विज़िट',
          others: 'पैसा लेने के बाद कोई वारंटी या फोन न उठाना',
        },
        {
          feature: 'आपातकालीन सहायता व रिस्पॉन्स',
          amit: 'उसी दिन 60 से 90 मिनट में सेवा उपलब्ध',
          others: 'अनिश्चित समय और बार-बार देरी',
        },
      ],
    },
    calculator: {
      badge: 'पारदर्शी एवं तुरंत मूल्य निर्धारण',
      title: '10 सेकंड में अपने ट्रीटमेंट का खर्च जानें',
      subtitle: 'अपनी प्रॉपर्टी का आकार और कीट समस्या चुनें, और 20% ऑनलाइन डिस्काउंट के साथ तुरंत अनुमानित रेट देखें।',
      step1: '1. अपनी प्रॉपर्टी चुनें:',
      step2: '2. कीट समस्या चुनें (अधिक बचत के लिए एक से अधिक चुन सकते हैं):',
      step3: '3. ट्रीटमेंट प्लान चुनें:',
      properties: [
        { id: '1bhk', name: '1 BHK फ्लैट', fullLabel: '1 BHK फ्लैट / अपार्टमेंट' },
        { id: '2bhk', name: '2 BHK फ्लैट', fullLabel: '2 BHK फ्लैट / अपार्टमेंट' },
        { id: '3bhk', name: '3 BHK फ्लैट', fullLabel: '3 BHK फ्लैट / अपार्टमेंट' },
        { id: '4bhk', name: '4+ BHK / विला', fullLabel: '4+ BHK / स्वतंत्र विला' },
        { id: 'commercial', name: 'दुकान / ऑफिस', fullLabel: 'व्यावसायिक दुकान / ऑफिस' },
      ],
      pests: [
        { id: 'cockroach', label: 'कॉकरोच व चींटी जेल', basePrice: 799 },
        { id: 'termite', label: 'दीमक / वुडबोरर बैरियर', basePrice: 1999 },
        { id: 'bedbug', label: 'खटमल 2-स्टेप खात्मा', basePrice: 1199 },
        { id: 'rodent', label: 'चूहा एवं रोडेंट ट्रैप', basePrice: 899 },
        { id: 'mosquito', label: 'मच्छर एवं कीट मिस्टिंग', basePrice: 699 },
      ],
      planSingle: 'सिंगल ट्रीटमेंट (वारंटी सहित)',
      planSingleDesc: 'पूरी सफाई और वारंटी सपोर्ट के साथ।',
      planAmc: 'वार्षिक एएमसी (साल में 4 विज़िट)',
      planAmcDesc: 'पूरे 365 दिन असीमित इमरजेंसी सपोर्ट।',
      estimatedQuote: 'अनुमानित पैकेज मूल्य',
      onlineDiscountApplied: '20% विशेष ऑनलाइन बुकिंग डिस्काउंट लागू',
      originalPriceLabel: 'वास्तविक मूल्य:',
      saveAmount: 'आपकी सीधी बचत:',
      bookWhatsappButton: 'यह रेट लॉक करें व व्हाट्सएप पर बुक करें',
      note: '✓ अत्यधिक संक्रमण या विशेष कस्टमाइजेशन के आधार पर मामूली अंतर हो सकता है। डोरस्टेप इंस्पेक्शन 100% फ्री है।',
    },
    process: {
      badge: 'सरल और त्वरित',
      title: 'हमारी आसान 3-चरण वाली प्रक्रिया',
      subtitle: 'संपर्क करने से लेकर 24 घंटे के अंदर पाएं पूरी तरह कीट-मुक्त सुरक्षित घर।',
      step1Watermark: '01',
      step1Badge: 'चरण 1',
      step1Title: 'फ्री परामर्श व बुकिंग',
      step1Desc: 'हमें कॉल करें या व्हाट्सएप पर मैसेज भेजें। अपने सुविधाजनक समय पर फ्री इंस्पेक्शन स्लॉट बुक करें।',
      step1Time: 'मात्र 2 मिनट का समय',
      step2Watermark: '02',
      step2Badge: 'चरण 2',
      step2Title: 'इको-फ्रेंडली ट्रीटमेंट',
      step2Desc: 'हमारे प्रमाणित तकनीशियन अत्याधुनिक गंधहीन जेल व सुरक्षित स्प्रे के साथ आकर उपचार करते हैं।',
      step2Time: '30-45 मिनट में संपन्न',
      step3Watermark: '03',
      step3Badge: 'चरण 3',
      step3Title: '100% कीट-मुक्त घर व वारंटी',
      step3Desc: 'लिखित वारंटी सर्टिफिकेट और निश्चिंतता के साथ सुरक्षित व स्वच्छ वातावरण का आनंद लें।',
      step3Time: '365 दिन तक प्रभावी',
      hassleFree: '100% परेशानी-मुक्त →',
      bannerTitle: 'क्या आज घर में कीड़ों से बहुत ज्यादा परेशान हैं?',
      bannerSubtitle: 'हमारा नजदीकी आपातकालीन तकनीशियन 60-90 मिनट में आपके घर पहुंच सकता है।',
      bannerCall: 'हेल्पलाइन पर कॉल करें',
      bannerWhatsapp: 'व्हाट्सएप इमरजेंसी',
    },
    reviews: {
      badge: 'सत्यापित ग्राहकों के अनुभव',
      title: '1,450+ संतुष्ट परिवारों द्वारा 4.9/5 की रेटिंग',
      subtitle: 'स्थानीय निवासियों की वास्तविक प्रतिक्रिया जिन्होंने अमित पेस्ट कंट्रोल पर भरोसा किया।',
      ratingSub: 'गूगल एवं कस्टमर रेटिंग',
      homesTreated: '5,000+',
      homesTreatedSub: 'संतुष्ट घर एवं कार्यालय',
      writtenWarranty: '100%',
      writtenWarrantySub: 'लिखित वारंटी गारंटी',
      joinHappy: 'संतुष्ट ग्राहकों से जुड़ें',
      items: [
        {
          id: '1',
          name: 'राजेश शर्मा',
          location: 'गोमती नगर',
          service: 'कॉकरोच जेल ट्रीटमेंट',
          rating: 5,
          comment: 'अमित पेस्ट कंट्रोल ने कमाल का काम किया! किचन में जर्मन कॉकरोच बहुत ज्यादा थे। इनके गंधहीन जेल ने 48 घंटे में सारे कॉकरोच खत्म कर दिए। कोई बदबू नहीं आई और छोटे बच्चे के लिए बिल्कुल सेफ था!',
          date: '3 दिन पहले',
          verified: true,
        },
        {
          id: '2',
          name: 'पूजा अग्रवाल',
          location: 'अलीगंज',
          service: 'दीमक सुरक्षा (5 वर्ष)',
          rating: 5,
          comment: 'दीमक हमारी लकड़ी की अलमारियों को खोखला कर रही थी। टीम उसी दिन आई, टाइल्स के पास बहुत सफाई से ड्रिल करके दवा डाली। बहुत ही शालीन स्टाफ और सही दाम।',
          date: '1 हफ्ता पहले',
          verified: true,
        },
        {
          id: '3',
          name: 'विक्रम सिंह',
          location: 'इंदिरा नगर',
          service: 'खटमल खात्मा ट्रीटमेंट',
          rating: 5,
          comment: 'हफ्तों से खटमलों की वजह से सोना मुश्किल हो गया था। इन्होंने दो बार आकर पूरा ट्रीटमेंट किया और अब हम सब चैन से सोते हैं। बहुत बढ़िया सर्विस!',
          date: '2 हफ्ते पहले',
          verified: true,
        },
        {
          id: '4',
          name: 'डॉ. अनिता वर्मा',
          location: 'हजरतगंज',
          service: 'रोडेंट एवं कीट फॉगिंग',
          rating: 5,
          comment: 'मैंने अपने क्लिनिक के लिए इन्हें बुलाया था। बहुत समय के पाबंद और सुरक्षित दवाओं का प्रयोग किया। हम इनका वार्षिक एएमसी जारी रखेंगे।',
          date: '1 महीना पहले',
          verified: true,
        },
      ],
    },
    faq: {
      badge: 'आपके सवाल, हमारे जवाब',
      title: 'अक्सर पूछे जाने वाले सवाल (FAQs)',
      subtitle: 'दवाओं की सुरक्षा, वारंटी और विज़िट से संबंधित सभी जानकारियां।',
      items: [
        {
          question: 'क्या यह पेस्ट कंट्रोल छोटे बच्चों, बुजुर्गों और पालतू जानवरों के लिए सुरक्षित है?',
          answer: 'जी हां, बिल्कुल 100%! हम सरकार द्वारा अनुमोदित, गंधहीन बायर जेल और WHO मानक हर्बल दवाओं का उपयोग करते हैं। आपको घर खाली करने की आवश्यकता नहीं होती और यह सभी के लिए पूरी तरह सुरक्षित है।',
        },
        {
          question: 'क्या कॉकरोच ट्रीटमेंट से पहले किचन की अलमारियां खाली करनी पड़ेंगी?',
          answer: 'बिल्कुल नहीं! हमारी आधुनिक बायर जेल तकनीक में डिब्बे या बर्तन हटाने की कोई आवश्यकता नहीं होती। हम केवल कब्जों और गुप्त कोनों में बारीक जेल लगाते हैं जिससे कोई असुविधा नहीं होती।',
        },
        {
          question: 'बुकिंग के बाद तकनीशियन कितनी देर में घर पहुंच सकता है?',
          answer: 'हम उसी दिन इमरजेंसी सर्विस प्रदान करते हैं। बुकिंग कन्फर्म होने के 60 से 90 मिनट के भीतर हमारा तकनीशियन आपके पते पर पहुंच सकता है।',
        },
        {
          question: 'यदि वारंटी के दौरान कीड़े दोबारा आ जाएं तो क्या होगा?',
          answer: 'हम लिखित सर्विस वारंटी देते हैं। यदि वारंटी अवधि में कोई भी कीट दिखता है, तो बस हमें व्हाट्सएप या कॉल करें, हमारी टीम बिना कोई चार्ज लिए दोबारा ट्रीटमेंट करेगी।',
        },
        {
          question: '1 BHK, 2 BHK या 3 BHK के लिए पेस्ट कंट्रोल का खर्च कितना आता है?',
          answer: 'हमारी दरें मात्र ₹699 और किचन कॉकरोच जेल के लिए ₹799 से शुरू होती हैं। आप ऊपर दिए गए ऑनलाइन कॉस्ट कैलकुलेटर से भी तुरंत सटीक खर्च देख सकते हैं!',
        },
        {
          question: 'सर्विस का भुगतान कैसे करना होता है?',
          answer: 'काम पूरा होने और आपकी संतुष्टि के बाद ही भुगतान लिया जाता है। आप UPI (Google Pay, PhonePe, Paytm), नकद (Cash) या नेट बैंकिंग से भुगतान कर सकते हैं।',
        },
      ],
      haveQuestionTitle: 'क्या आपके पास कोई विशेष सवाल या समस्या है?',
      haveQuestionSubtitle: 'हमारे मुख्य पेस्ट कंट्रोल विशेषज्ञ से सीधे बातचीत करें।',
      callUs: 'कॉल करें',
      whatsapp: 'व्हाट्सएप',
    },
    footer: {
      tagline: 'सुरक्षित घर, स्वस्थ जीवन',
      desc: 'अमित पेस्ट कंट्रोल 100% सुरक्षित, गंधहीन और सरकारी मान्यता प्राप्त आवासीय व व्यावसायिक कीट नियंत्रण के लिए आपका भरोसेमंद स्थानीय साथी है।',
      cert1: 'बायर प्रमाणित गंधहीन फॉर्मूलेशन',
      cert2: 'सातों दिन खुला: सुबह 7:00 – रात 9:00',
      keyServicesTitle: 'प्रमुख सेवाएं',
      amcLink: 'वार्षिक पेस्ट फ्री एएमसी (AMC) प्लान',
      helplinesTitle: 'सीधी हेल्पलाइन',
      primaryHelpline: 'मुख्य हेल्पलाइन:',
      secondaryHelpline: 'द्वितीयक हेल्पलाइन:',
      whatsappDirect: 'व्हाट्सएप डायरेक्ट:',
      freeInspectionTitle: 'फ्री इंस्पेक्शन',
      freeInspectionDesc: 'आज ही निःशुल्क होम इंस्पेक्शन बुक करें।',
      callTechnician: 'तकनीशियन को कॉल करें',
      backToTop: 'ऊपर जाएं',
      disclaimerLabel: 'अस्वीकरण एवं सुरक्षा मानक:',
      disclaimerText: 'अमित पेस्ट कंट्रोल WHO एवं केंद्रीय कीटनाशक बोर्ड (CIB) द्वारा पंजीकृत गैर-हानिकारक दवाओं का उपयोग करता है। जॉब शीट पर उल्लिखित मानक वारंटी नियम लागू होते हैं।',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      badge1: 'सुरक्षित दवाएं',
      badge2: 'सरकारी मान्यता प्राप्त',
      badge3: '100% गारंटीड',
    },
    stickyCTA: {
      callNow: 'कॉल करें',
      whatsapp: 'व्हाट्सएप',
    },
  },
};
