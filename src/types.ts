export interface PestService {
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
}

export interface TrustBadge {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CallbackFormData {
  fullName: string;
  phoneNumber: string;
  serviceNeeded: string;
  propertyType: string;
  preferredTime: string;
  urgency: 'regular' | 'urgent_today';
}
