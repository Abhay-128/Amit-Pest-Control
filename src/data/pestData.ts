import { PestService, TrustBadge, Testimonial, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Amit Pest Control',
  tagline: 'Safe Home, Healthy Life',
  primaryPhone: '+91 8840950021',
  secondaryPhone: '+91 8574567632',
  primaryPhoneClean: '8840950021',
  secondaryPhoneClean: '8574567632',
  whatsappNumber: '918840950021',
  displayWhatsApp: '+91 8840950021',
  email: 'contact@amitpestcontrol.in',
  address: 'Service available across City & All Nearby Suburbs / Residential & Commercial Areas',
  workingHours: 'Open 7 Days a Week: 7:00 AM – 9:00 PM (Emergency 24/7 Available)',
  rating: 4.9,
  reviewsCount: '1,450+',
  guaranteeText: '100% Odorless & Safe for Babies & Pets',
};

export const SERVICES: PestService[] = [
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
      'Long-lasting protection with free follow-up warranty'
    ],
    treatmentMethod: 'Bayer Maxforce Gel dotting in hinges, crevices + Herbal insect barrier spray',
    safetyRating: '100% Child & Pet Safe',
    warrantyPeriod: '90 Days to 1 Year Warranty',
    startingPrice: '₹799',
    whatsappMessage: 'Hello Amit Pest Control, I want to book Cockroach Control & Gel Treatment for my property. Please share details and earliest slot.'
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
      'Pre-construction soil treatment & Post-construction building shield'
    ],
    treatmentMethod: 'Sub-surface chemical injection with color-matched tile sealing',
    safetyRating: 'Eco-Friendly & Structural Safe',
    warrantyPeriod: '2 to 5 Years Written Warranty',
    startingPrice: '₹1,999',
    whatsappMessage: 'Hello Amit Pest Control, I need Termite / Woodborer protection inspection & treatment. Please contact me.'
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
      'Carcass removal & sanitization support'
    ],
    treatmentMethod: 'Baiting matrix + ultrasonic repellent audit + mechanical trapping',
    safetyRating: 'Secured Tamper-Proof Box Safe',
    warrantyPeriod: '60 Days Active Support',
    startingPrice: '₹899',
    whatsappMessage: 'Hello Amit Pest Control, I have a Rodent/Rat problem at my premises and need urgent control service.'
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
      'Safe on mattress fabrics and bedroom upholstery'
    ],
    treatmentMethod: 'Double-round micro-spray of egg-killing and adult contact formula',
    safetyRating: 'Safe for sleeping areas after 2 hrs drying',
    warrantyPeriod: '45 Days Full Relief Guarantee',
    startingPrice: '₹1,199',
    whatsappMessage: 'Hello Amit Pest Control, I urgently need Bed Bug Intensive Eradication treatment. Please book an inspection.'
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
      'Ideal for societies, bungalows, offices, lawns & balconies'
    ],
    treatmentMethod: 'Cold ULV misting indoors + Thermal smoke fogging outdoors',
    safetyRating: 'WHO Recommended Formulations',
    warrantyPeriod: 'Seasonal / AMC Plans Available',
    startingPrice: '₹699',
    whatsappMessage: 'Hello Amit Pest Control, I want to book Mosquito & General Insect Fogging service.'
  }
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'eco',
    title: '100% Eco-Friendly',
    subtitle: 'Govt. Approved herbal & organic base solutions',
    icon: 'Leaf'
  },
  {
    id: 'sameday',
    title: 'Same Day Service',
    subtitle: 'Quick 60-90 min technician dispatch',
    icon: 'Clock'
  },
  {
    id: 'safe',
    title: 'Child & Pet Safe',
    subtitle: 'Odorless, non-toxic & human-friendly',
    icon: 'HeartHandshake'
  },
  {
    id: 'warranty',
    title: 'Warranty Backed',
    subtitle: 'Free repeat service if pests return',
    icon: 'ShieldCheck'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'odorless',
    title: 'Safe Odorless Spray & Bayer Gels',
    description: 'No pungent chemical smells, no headache, and no need to leave the house. Formulated with advanced Bayer gels and WHO-standard safe chemicals.',
    highlight: 'Zero Downtime',
    icon: 'Sparkles'
  },
  {
    id: 'certified',
    title: 'Certified & Verified Technicians',
    description: 'Our pest specialists undergo rigorous training, background verification, and follow strict hygiene protocols with uniform & ID badges.',
    highlight: 'Govt. Certified Experts',
    icon: 'Award'
  },
  {
    id: 'pricing',
    title: 'Affordable & 100% Transparent Pricing',
    description: 'No hidden charges or surprise inspection fees. Fixed upfront quotes tailored to your property size with maximum value guarantee.',
    highlight: 'Best Rate Guarantee',
    icon: 'IndianRupee'
  },
  {
    id: 'warranty',
    title: 'Follow-Up Warranty & Free Re-Treatment',
    description: 'We stand by our work. If you notice any recurrence within the warranty window, our team will re-treat your space free of charge.',
    highlight: 'Hassle-Free Guarantee',
    icon: 'ShieldCheck'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Book Free Consultation',
    description: 'Call us or request a callback on WhatsApp. Choose your convenient date & time slot for free doorstep inspection.',
    icon: 'PhoneCall',
    badge: 'Step 1'
  },
  {
    step: '02',
    title: 'Eco-Friendly Treatment',
    description: 'Our certified technician arrives equipped with advanced odorless gels, targeted sprays, and modern pest elimination gear.',
    icon: 'Zap',
    badge: 'Step 2'
  },
  {
    step: '03',
    title: '100% Pest-Free Home & Warranty',
    description: 'Enjoy a hygienic, safe environment backed by our official written warranty certificate and post-service care support.',
    icon: 'Home',
    badge: 'Step 3'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    location: 'Gomti Nagar',
    service: 'Cockroach Gel Treatment',
    rating: 5,
    comment: 'Amit Pest Control did a phenomenal job! Kitchen was infested with small German cockroaches for months. Their odorless gel wiped them out completely within 48 hours. No smell at all and baby safe!',
    date: '3 days ago',
    verified: true
  },
  {
    id: '2',
    name: 'Pooja Agarwal',
    location: 'Aliganj',
    service: 'Termite Protection (5 Year)',
    rating: 5,
    comment: 'Termites were eating up our wooden wardrobes. Amit Pest Control team came on the same day, drilled neatly along skirting tiles and injected the solution. Very courteous team and fair pricing.',
    date: '1 week ago',
    verified: true
  },
  {
    id: '3',
    name: 'Vikram Singh',
    location: 'Indira Nagar',
    service: 'Bed Bug Eradication',
    rating: 5,
    comment: 'Suffered from severe bed bug bites for weeks. They did two intensive rounds and now my family sleeps peacefully. Highly recommend their prompt service and WhatsApp follow-up!',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: '4',
    name: 'Dr. Anita Verma',
    location: 'Hazratganj',
    service: 'Rodent & Insect Fogging',
    rating: 5,
    comment: 'Booked them for my clinic. Very professional, punctual, and safe odorless chemicals used. Will definitely continue their yearly AMC contract.',
    date: '1 month ago',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is the pest control treatment safe for small children, elderly, and pets?',
    answer: 'Yes, 100%! We use government-approved, advanced odorless herbal gels and WHO-certified micro-formulations. You do not even need to vacate the house, and it is completely safe for babies, pregnant women, and domestic pets.'
  },
  {
    question: 'Do I need to empty my kitchen cabinets before Cockroach treatment?',
    answer: 'No! With our modern Bayer Gel Baiting system, you do NOT need to empty kitchen utensils or food storage cabinets. We apply tiny, odorless gel dots inside hinges and concealed corners without disturbing your kitchen setup.'
  },
  {
    question: 'How quickly can your technician visit my home or office?',
    answer: 'We offer Same-Day Emergency Service! In most locations, our certified technician can reach your doorstep within 60 to 90 minutes of booking confirmation.'
  },
  {
    question: 'What happens if pests return during the warranty period?',
    answer: 'We provide a written service warranty. If you notice any pest recurrence during the warranty validity, simply WhatsApp or call us, and our team will perform a free re-treatment without any additional charges.'
  },
  {
    question: 'How much does pest control cost for a 1BHK, 2BHK, or 3BHK home?',
    answer: 'Our rates start from just ₹699 for standard insect treatments and ₹799 for full kitchen cockroach gel. We offer transparent pricing based on your home size and pest severity. You can also use our Instant Cost Calculator above for a fast quote!'
  },
  {
    question: 'How do I pay for the service?',
    answer: 'Payment is accepted after the service is completed to your satisfaction. We accept UPI (Google Pay, PhonePe, Paytm), Cash, and Net Banking.'
  }
];
