export interface HeroScene {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  image: string;
  specs: {
    area: string;
    lumens: string;
    attendees: string;
    florals: string;
    setupHours: string;
    avRig: string;
  };
}

export type ServiceVerticalId = 'wedding-reception' | 'sacred-rituals' | 'milestones' | 'stage-production';

export interface ServiceVertical {
  id: ServiceVerticalId;
  name: string;
  shortDesc: string;
  iconName: string;
}

export interface CulturalOccasion {
  id: string;
  name: string;
  teluguName?: string;
  verticalId: ServiceVerticalId;
  tagline: string;
  description: string;
  image: string;
  setupTime: string;
  budgetRange: string;
  guestScale: string;
  keyInclusions: string[];
  specSheet: {
    architecturalStyle: string;
    floralVarieties: string[];
    lightingDesign: string;
    stageDimensions: string;
    fabricationMaterials: string[];
  };
}

export interface DreamWeddingCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  venue: string;
  guestCount: string;
  duration: string;
  budgetRange: string;
  archetype: string;
  coverImage: string;
  gallery: string[];
  clientNames: string;
  clientQuote: string;
  theBrief: string;
  theConcept: string;
  theExecution: string;
  decorPalette: { name: string; hex: string }[];
  productionHighlights: string[];
  vendorCredits: { role: string; name: string }[];
}

export interface CoreDiscipline {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  image: string;
  leadArchitect: string;
}

export interface MetamorphosisVenue {
  id: string;
  name: string;
  location: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeDesc: string;
  afterDesc: string;
  turnaroundTime: string;
  materialsBreakdown: {
    label: string;
    qty: string;
  }[];
}

export interface MandapBlueprint {
  id: string;
  name: string;
  style: string;
  renderImage: string;
  blueprintImage: string;
  dimensions: {
    height: string;
    span: string;
    footprint: string;
    loadCapacity: string;
  };
  lightingTemp: string;
  woodwork: string;
  brassElements: string;
  floralStemEstimate: string;
  cadSpecs: string[];
}

export interface BanquetMenu {
  id: string;
  title: string;
  tagline: string;
  cuisineStyle: string;
  coursesCount: number;
  highlightDishes: string[];
  specialServiceFeature: string;
  image: string;
  idealFor: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  occasion: string;
  venue: string;
  location: string;
  rating: number;
  badge: string;
  avatar: string;
  review: string;
  eventDate: string;
}

export interface MuhurthamDate {
  date: string;
  monthYear: string;
  nakshatram: string;
  thithi: string;
  timing: string;
  significance: string;
}

export interface CalculatorParameters {
  eventType: 'wedding' | 'sangeet' | 'sacred-rituals' | 'corporate' | 'milestone';
  guestCount: number;
  days: number;
  decorTier: 'artisan' | 'haute' | 'royal';
  cateringOption: 'none' | 'traditional-bhojanam' | 'royal-dastarkhwan' | 'global-gourmet';
  avTier: 'acoustic' | 'concert-kinetic' | 'ultra-stadium';
  city: 'hyderabad' | 'udaipur' | 'jaipur' | 'bangalore' | 'goa' | 'destination-intl';
}

export interface PortalTask {
  id: string;
  title: string;
  due: string;
  status: 'completed' | 'in-progress' | 'pending';
  category: string;
  owner: string;
}

export interface PortalBudgetItem {
  category: string;
  estimated: number;
  quoted: number;
  paid: number;
  status: 'Settled' | 'Partially Paid' | 'Pending Invoice';
}
