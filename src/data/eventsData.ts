import {
  HeroScene,
  ServiceVertical,
  CulturalOccasion,
  DreamWeddingCaseStudy,
  CoreDiscipline,
  MetamorphosisVenue,
  MandapBlueprint,
  BanquetMenu,
  ClientReview,
  MuhurthamDate
} from '../types';

export const HERO_SCENES: HeroScene[] = [
  {
    id: 'scene-1',
    number: '01',
    title: 'Starlight Palace Banquet',
    subtitle: 'Lakeside Palace Buyout & Candlelit Metamorphosis',
    category: 'ROYAL DESTINATION WEDDING',
    location: 'Lake Pichola, Udaipur',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85',
    specs: {
      area: '48,000 sq.ft Courtyard',
      lumens: '2,400K Candlelight Lumens',
      attendees: '650 Royal Attendees',
      florals: '24,000 Fresh Tuberose Stems',
      setupHours: '36 Hours Turnaround',
      avRig: 'Acoustic Surround L-Acoustics'
    }
  },
  {
    id: 'scene-2',
    number: '02',
    title: 'Cascading Jasmine Mandapam',
    subtitle: 'Vedic Sanctum with Hand-Carved Teakwood & 24K Gold Foil Accents',
    category: 'SACRED VEDIC RITUALS',
    location: 'Taj Falaknuma, Hyderabad',
    image: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=2000&q=85',
    specs: {
      area: '32,000 sq.ft Durbar Terrace',
      lumens: '2,200K Temple Diya Ambiance',
      attendees: '450 Dignitaries',
      florals: '600 kg Madurai Jasmine & Lotus',
      setupHours: '18 Hours Structural Rig',
      avRig: 'Live Classical Nadaswaram Array'
    }
  },
  {
    id: 'scene-3',
    number: '03',
    title: 'Mirrored Celestial Courtyard',
    subtitle: 'Kinetic Ceiling Staging & Bespoke Reflective Glass Runway',
    category: 'SANGEET & COCKTAIL GALA',
    location: 'Samode Palace, Jaipur',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=85',
    specs: {
      area: '55,000 sq.ft Mirror Staging',
      lumens: 'RGBW Laser & Moving Heads',
      attendees: '850 VIP Guests',
      florals: '15,000 Orchids & Velvet Drapes',
      setupHours: '48 Hours Production Build',
      avRig: 'Concert Grade Array + 4K Curved LED'
    }
  },
  {
    id: 'scene-4',
    number: '04',
    title: 'Imperial Heritage Pavilion',
    subtitle: 'Classical Drapes, Brass Urli Waterbodies & Royal Chhatri Architecture',
    category: 'GRAND RECEPTION ARCHITECTURE',
    location: 'Bangalore Palace Grounds',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85',
    specs: {
      area: '70,000 sq.ft Royal Pavilion',
      lumens: 'Warm Architectural Uplighting',
      attendees: '1,500 Grand Attendees',
      florals: 'Marigold Cascades & Imperial Brass',
      setupHours: '40 Hours Master Fabrication',
      avRig: 'Broadcast 4K Switcher + Live Stream'
    }
  }
];

export const SERVICE_VERTICALS: ServiceVertical[] = [
  {
    id: 'wedding-reception',
    name: 'Wedding & Reception Architecture',
    shortDesc: 'Curated royal wedding pavilions, mandapam engineering, and majestic reception staging.',
    iconName: 'Crown'
  },
  {
    id: 'sacred-rituals',
    name: 'Sacred Rituals & Pre-Wedding',
    shortDesc: 'Vedic accuracy, traditional craftsmanship, authentic floral styling for ancient ceremonies.',
    iconName: 'Flame'
  },
  {
    id: 'milestones',
    name: 'Milestones & Farmhouse Soirées',
    shortDesc: 'Private estate transformations, bespoke anniversaries, and high-hospitality celebrations.',
    iconName: 'Sparkles'
  },
  {
    id: 'stage-production',
    name: 'High-Tech Sangeet & Stage AV',
    shortDesc: 'Concert-grade kinetic lighting, stadium line arrays, custom LED facades, and turnkey rigging.',
    iconName: 'Zap'
  }
];

export const CULTURAL_OCCASIONS: CulturalOccasion[] = [
  {
    id: 'pellikuthuru',
    name: 'Pellikuthuru & Pellikoduku (Haldi)',
    teluguName: 'పెళ్లికూతురు & పెళ్లికొడుకు వేడుక',
    verticalId: 'sacred-rituals',
    tagline: 'Sunlit yellow turmeric courtyard with brass urli ponds and marigold canopies',
    description: 'A deeply emotional purification ritual styled with authentic South Indian pattu drapery, hand-hammered brass vessels, fresh marigold weaves, and floral shower structures.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    setupTime: '8 Hours Build',
    budgetRange: '₹4.5L – ₹14L',
    guestScale: '150 – 350 Guests',
    keyInclusions: [
      'Handcrafted Pellikuthuru Peeta Seating',
      'Water Lily & Lotus Urli Float Installation',
      'Turmeric & Floral Shower Hydraulic Canopy',
      'Traditional Mangala Vaadyam Audio Setup',
      'Kendra Brass Diya Illumination'
    ],
    specSheet: {
      architecturalStyle: 'Traditional Dravidian Heritage Courtyard with Pichwai Backdrop',
      floralVarieties: ['Calcutta Marigolds', 'Madurai Jasmine', 'Bangalore Carnations', 'Temple Lotuses'],
      lightingDesign: 'Warm Amber Uplighting (2700K) + Golden Sunlight Reflectors',
      stageDimensions: '24ft x 16ft elevated teak platform with floral arches',
      fabricationMaterials: ['Treated Teakwood', 'Hammered Brass Urlis', 'Raw Pattu Silk Curtains']
    }
  },
  {
    id: 'traditional-muhurtham',
    name: 'Traditional Telugu Vedic Muhurtham',
    teluguName: 'సాంప్రదాయ తెలుగు ముహూర్తం & వేద మంటపం',
    verticalId: 'wedding-reception',
    tagline: 'Sacred Jeelakarra Bellam sanctum, hand-carved pillars, and 100% Vedic precision',
    description: 'Authentic South Indian wedding sanctum engineered with zero-smoke homam enclosures, temple kalashams, pure mogra garlands, and flawless coordination for the auspicious muhurtham.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    setupTime: '24 Hours Build',
    budgetRange: '₹14L – ₹45L',
    guestScale: '350 – 1,500 Guests',
    keyInclusions: [
      'Hand-Carved Seasoned Teak Mandapam Dome',
      'Gajalakshmi Pure Brass Auspicious Pillars',
      'Medicinal Samagri Smokeless Homam Kundam',
      'Nadaswaram & Carnatic Instrumental Acoustic Array',
      'VIP Elder Seating & Authentic Bhojanam Layout'
    ],
    specSheet: {
      architecturalStyle: 'Authentic 12-Pillar Kakatiya Temple Sanctum with Floral Shikharam',
      floralVarieties: ['Madurai Malli (Jasmine)', 'Fresh Tuberose Strings', 'Red & Orange Marigolds', 'Parijatham'],
      lightingDesign: '2200K Temple Oil Lamp Glow + Precision Soft Profile Framing on Couple',
      stageDimensions: '36ft x 28ft reinforced quad-pillar mandapam with tiered priest steps',
      fabricationMaterials: ['Hand-Carved Solid Teak', 'Hammered Copper Kundam', 'Pure Silk Brocade Drapes']
    }
  },
  {
    id: 'seemantham',
    name: 'Seemantham & Valaikaappu',
    teluguName: 'శ్రీమంతం & గాజుల వేడుక',
    verticalId: 'sacred-rituals',
    tagline: 'Bangles, blessings, and lush green banana-stem floral sanctum',
    description: 'Celebrating motherhood with auspicious green and gold palettes, floral cradle displays, glass bangle trees, brass lamp pathways, and traditional Vedic chanting acoustic setup.',
    image: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1200&q=85',
    setupTime: '6 Hours Build',
    budgetRange: '₹3.5L – ₹9.5L',
    guestScale: '100 – 250 Guests',
    keyInclusions: [
      'Auspicious Floral Bangle Tree & Display Wall',
      'Pichwai Art Lotus Backdrop with Brass Pillars',
      'Traditional Oonjal (Swing) with Floral Garlands',
      'Vedic Priest Audio & Samagri Staging',
      'Customized Return Gifts & Sweet Presentation Cart'
    ],
    specSheet: {
      architecturalStyle: 'Vedic Sanctum with Hand-Embroidered Toranam Borders',
      floralVarieties: ['Fresh Vetiver (Khus)', 'Bangles String Weaves', 'Sevanthi', 'Jasmine Vines'],
      lightingDesign: 'Soft Diffused Lanterns (2400K) with Candlelight Aura',
      stageDimensions: '20ft x 14ft low-profile platform with floral swing',
      fabricationMaterials: ['Solid Sheesham Wood Swing', 'Brass Bells', 'Kanchipuram Silk Motifs']
    }
  },
  {
    id: 'half-saree',
    name: 'Half-Saree (Ritu Kala Samskara)',
    teluguName: 'లంగా ఓణీ & రుతు కాల సంస్కార వేడుక',
    verticalId: 'sacred-rituals',
    tagline: 'Regal coming-of-age celebration with royal floral arches and classical grandeur',
    description: 'A celebratory milestone blending timeless temple architecture, pastel floral chandeliers, custom photo pavilions, and vibrant stage backdrops.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    setupTime: '10 Hours Build',
    budgetRange: '₹5L – ₹18L',
    guestScale: '200 – 500 Guests',
    keyInclusions: [
      'Gajalakshmi Brass Mandap Backdrop',
      'Cascading Tuberose & Rose Chandeliers',
      'Mirror Aisle Runway for Grand Entry',
      'Customized Royal Jhoola (Swing) Staging',
      'Artisanal Mehendi & Bangle Station'
    ],
    specSheet: {
      architecturalStyle: 'Neo-Classical Chettinad & Royal Palace Archway',
      floralVarieties: ['Dutch Roses', 'Tuberoses (Sampangi)', 'White Hydrangeas', 'Baby\'s Breath'],
      lightingDesign: 'Architectural Column Spotting + Soft Beauty Fillers',
      stageDimensions: '30ft x 20ft layered stage with royal step-up platform',
      fabricationMaterials: ['CNC Jaali Panels', 'Golden Chrome Trusses', 'Velvet Drapery']
    }
  },
  {
    id: 'engagement-nishchitartham',
    name: 'Nishchitartham & Ring Ceremony',
    teluguName: 'నిశ్చితార్థం & రింగ్ సెర్మనీ',
    verticalId: 'wedding-reception',
    tagline: 'Sleek modern elegance with floral botanical tunnels and gold ring structures',
    description: 'A formal commitment ceremony with bespoke acrylic backdrops, cascading wisteria canopies, live instrumental quartet, and champagne/mocktail tower staging.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    setupTime: '14 Hours Build',
    budgetRange: '₹7L – ₹28L',
    guestScale: '250 – 700 Guests',
    keyInclusions: [
      'Circular 18ft Metallic Gold Ring Arch',
      'Imported White Peonies & Hydrangea Wall',
      'Glass Top Pathway with Floating Pillar Candles',
      'Formal Ring Exchange Spotlight Cues',
      'Live Saxophone & Classical Fusion Ensemble'
    ],
    specSheet: {
      architecturalStyle: 'Modern European Classical Minimalist with Gold Accentuation',
      floralVarieties: ['White Calla Lilies', 'Phalaenopsis Orchids', 'Eucalyptus Greens'],
      lightingDesign: 'Pinspot Table Illumination + 3000K Soft Architectural Profiles',
      stageDimensions: '32ft x 20ft high-gloss white stage with curved edges',
      fabricationMaterials: ['High Gloss Acrylic', 'Electroplated Titanium Gold', 'Tempered Glass']
    }
  },
  {
    id: 'sangeet-cocktail',
    name: 'Sangeet & Kinetic AV Gala',
    teluguName: 'సంగీత్ & కైనెటిక్ లైవ్ గాలా',
    verticalId: 'stage-production',
    tagline: 'High-energy concert stage, kinetic light grids, and mirror dance floors',
    description: 'Stadium-level sound engineering, computerized beam choreography, VIP lounge pods, and customized cocktail mixology bars for electrifying nights.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
    setupTime: '36 Hours Build',
    budgetRange: '₹18L – ₹65L',
    guestScale: '350 – 1,200 Guests',
    keyInclusions: [
      'Concert Spec P3 LED Curved Wall & Risers',
      'Kinetic Winch Spheres with DMX Sync',
      'Custom Mirrored 40x40ft Dance Floor',
      'VIP Tiered Velvet Lounge Seating Pods',
      'Celebrity Artist Green Room Management'
    ],
    specSheet: {
      architecturalStyle: 'Modern Cybernetic Luxury with Reflected Mirrors and Neon Glow',
      floralVarieties: ['Black Baccara Roses', 'Dark Plum Orchids', 'Silver Dipped Foliage'],
      lightingDesign: 'Sharpy Moving Heads (15R), CO2 Jets, Hazers, Sparkular Pyrotechnics',
      stageDimensions: '48ft x 32ft reinforced concert stage with 8ft drum riser',
      fabricationMaterials: ['Heavy-Duty Aluminum Box Truss', 'Plexiglass Mirrors', 'Acoustic Drape']
    }
  },
  {
    id: 'mehendi-sufi',
    name: 'Mehendi & Sufi Baithak',
    teluguName: 'మెహందీ & సూఫీ నైట్',
    verticalId: 'sacred-rituals',
    tagline: 'Moroccan fretwork, Persian rugs, hanging lanterns, and live Qawwali setup',
    description: 'An intimate bohemian-royal evening with embroidered shamianas, low baithak cushions, fragrant ittar counters, and artisanal henna lounges.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    setupTime: '12 Hours Build',
    budgetRange: '₹6L – ₹22L',
    guestScale: '200 – 600 Guests',
    keyInclusions: [
      'Authentic Turkish Lantern Chandeliers',
      'Low Baithak Velvet Floor Lounges & Bolsters',
      'Customized Henna Artist Booths & Gifts Station',
      'Acoustic Mic Setup for Live Sufi Ensemble'
    ],
    specSheet: {
      architecturalStyle: 'Indo-Mughal Shamiana with Intricate Geometric Cutouts',
      floralVarieties: ['Wild Marigolds', 'Terracotta Florals', 'Pampas Grass', 'Gypsophila'],
      lightingDesign: 'Amber Filament Bulbs, Fairy Light Canopy, Moroccan Candle Lanterns',
      stageDimensions: '24ft x 18ft octagonal wooden stage with Persian carpet layer',
      fabricationMaterials: ['Hand-dyed Linen', 'Antique Brass Candelabras', 'Embossed Leather Poufs']
    }
  },
  {
    id: 'grand-reception',
    name: 'Grand Royal Palace Reception',
    teluguName: 'గ్రాండ్ రాయల్ రిసెప్షన్ ఆర్కిటెక్చర్',
    verticalId: 'wedding-reception',
    tagline: 'Monumental palace facades, cascading floral water fountains, and 2000+ guest dining',
    description: 'The ultimate statement celebration with colossal multi-level staging, VIP dining enclosures, custom carpeted walkways, and synchronized lighting choreography.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    setupTime: '48 Hours Build',
    budgetRange: '₹25L – ₹1.2Cr+',
    guestScale: '800 – 3,500 Guests',
    keyInclusions: [
      'Multi-Level Imperial Palace Staging',
      'Orchestrated Varmala Hydraulic Lift Staging',
      'Climate-Controlled Luxury Dining Shamiana',
      'Red Carpet VIP Motorcade Arrival Lounge'
    ],
    specSheet: {
      architecturalStyle: 'Grand Imperial Mughal-Rajputana Palace Elevation',
      floralVarieties: ['50,000 Red Naomi Roses', 'Imported Caspia', 'White Lilies'],
      lightingDesign: 'Architectural Laser Spotting, 100+ Pinspots, Sky Trackers',
      stageDimensions: '60ft x 40ft three-tiered stage with 20ft backdrop height',
      fabricationMaterials: ['Structural Steel Trusses', 'Fiber Glass Domes', 'Italian Marble Vinyl']
    }
  },
  {
    id: 'upanayanam',
    name: 'Upanayanam & Thread Ceremony',
    teluguName: 'ఉపనయనం సంస్కార వేడుక',
    verticalId: 'sacred-rituals',
    tagline: 'Auspicious Vedic homam setup, brass urlis, and traditional temple architecture',
    description: 'Vedic precision with clean smokeless homam pits, pure brass deepams, traditional plantain trees, and authentic banana-leaf bhojanam dining setup.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    setupTime: '6 Hours Build',
    budgetRange: '₹3L – ₹8.5L',
    guestScale: '100 – 300 Guests',
    keyInclusions: [
      'Smokeless Homa Kundam with Copper Fixtures',
      'Coconut & Mango Leaf Toranam Mandap',
      'Traditional Plantain & Sugarcane Gateways',
      'Audio Setup for Vedic Rithwiks & Vedic Samagri'
    ],
    specSheet: {
      architecturalStyle: 'Authentic South Indian Agnihotra Sanctum',
      floralVarieties: ['Temple Marigold Strings', 'Tulasi Garlands', 'Yellow Chrysanthemums'],
      lightingDesign: 'Authentic Oil Lamp Array + Soft Golden Wash (2700K)',
      stageDimensions: '20ft x 16ft wooden platform with sacred fire pit insulation',
      fabricationMaterials: ['Natural Teakwood', 'Hand-woven Straw Mats', 'Pure Brass Vessels']
    }
  },
  {
    id: 'gruhapravesam',
    name: 'Gruhapravesam & Housewarming',
    teluguName: 'గృహప్రవేశం & వాస్తు పూజ మహోత్సవం',
    verticalId: 'sacred-rituals',
    tagline: 'Welcoming prosperity with cow puja styling, floral thresholds, and rooftop lighting',
    description: 'Transforming newly built homes with auspicious entrance thoranams, sacred rangoli art, facade fairy light cascades, and intimate guest dining arrangements.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
    setupTime: '8 Hours Build',
    budgetRange: '₹2.5L – ₹9L',
    guestScale: '100 – 400 Guests',
    keyInclusions: [
      'Grand Entrance Floral Thoranam & Brass Bells',
      'Decorated Cow & Calf Puja Enclosure',
      'Rooftop Tensile Canopy & Dining Area',
      'Building Facade Illumination & Laser Lights'
    ],
    specSheet: {
      architecturalStyle: 'Traditional Vaastu-Compliant Auspicious Gateway',
      floralVarieties: ['Fresh Jasmine (Mogra)', 'Golden Marigold Weaves', 'Mango Leaves'],
      lightingDesign: 'Warm White LED Facade Wash (3000K) + Diya Walkways',
      stageDimensions: 'Custom site-specific entryway and courtyard staging',
      fabricationMaterials: ['Natural Coconut Leaves', 'Brass Devas', 'Brocade Silks']
    }
  },
  {
    id: 'barasala-cradle',
    name: 'Barasala & Cradle Ceremony',
    teluguName: 'బారసాల & ఉయ్యాల నామకరణ వేడుక',
    verticalId: 'sacred-rituals',
    tagline: 'Delicate floral jhoola, pastel fairytale touches, and auspicious Vedic naming blessings',
    description: 'A charming baby naming celebration with handcrafted antique brass cradles wrapped in fresh jasmine, floral peacocks, customized photo walls, and sweet tables.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85',
    setupTime: '6 Hours Build',
    budgetRange: '₹3L – ₹9L',
    guestScale: '100 – 350 Guests',
    keyInclusions: [
      'Handcrafted Floral Cradle (Uyyala) Setup',
      'Pastel Floral Archway & Name Monogram',
      'Traditional Pichwai Art & Diya Towers',
      'Baby Care Suite & Mother Hospitality Lounge',
      'Curated Mithai & Prasadam Display Carts'
    ],
    specSheet: {
      architecturalStyle: 'Pastel Vedic Sanctum with Pichwai Lotus Accents',
      floralVarieties: ['White Mogra Vines', 'Pink Baby Roses', 'Gypsophila', 'Yellow Sevanthi'],
      lightingDesign: 'Soft Dimmable Warm Fill (2700K) for Baby-Friendly Ambiance',
      stageDimensions: '20ft x 14ft low-rise stage with floral cradle canopy',
      fabricationMaterials: ['Antique Brass Uyyala', 'Organic Cotton Drapes', 'Gold Foil Backdrops']
    }
  },
  {
    id: 'birthday-1st-bash',
    name: 'Princess / Prince 1st Birthday Theme',
    teluguName: 'రాయల్ 1st బర్త్‌డే థీమ్ సెలబ్రేషన్',
    verticalId: 'milestones',
    tagline: 'Enchanted castle stage, interactive candy wonderland, and 3D character pavilions',
    description: 'Spectacular milestone celebration engineered with 3D sculpted castle facades, customized floral clouds, toddler play zones, magic illusions, and gourmet live counters.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85',
    setupTime: '12 Hours Build',
    budgetRange: '₹4.5L – ₹18L',
    guestScale: '150 – 500 Guests',
    keyInclusions: [
      '3D Grand Castle Facade & LED Name Neon',
      'Organic Pastel Balloon & Floral Arches',
      'Customized Thematic Cake Cutting Stage',
      'Kids Interactive Arcade & Soft Play Enclosure',
      'Live Master Magic & Illusionist Staging'
    ],
    specSheet: {
      architecturalStyle: 'Enchanted Royal Fairytale Castle with 3D Sculpted Turrets',
      floralVarieties: ['Pastel Hydrangeas', 'Baby Pink & Blue Carnations', 'Eucalyptus Accents'],
      lightingDesign: 'Fairytale Pastel Color Wash (RGBW) + Followspot for Cake Entry',
      stageDimensions: '32ft x 18ft multi-level castle stage with photo alcoves',
      fabricationMaterials: ['High-Density CNC Foam', 'Non-Toxic Matte Acrylic', 'Soft Vinyl Flooring']
    }
  },
  {
    id: 'shashti-poorthi',
    name: 'Shashti Poorthi (60th) & Satabhishekam',
    teluguName: 'షష్టిపూర్తి & శతాభిషేకం వేడుక',
    verticalId: 'milestones',
    tagline: 'Honoring six decades with golden kalasam baths, elder comfort, and Vedic homage',
    description: 'A deeply reverent traditional renewal ceremony with auspicious 60-kalasa abhishekam staging, wheelchair-accessible ramp design, and archival family memory galleries.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    setupTime: '8 Hours Build',
    budgetRange: '₹4L – ₹15L',
    guestScale: '150 – 450 Guests',
    keyInclusions: [
      '60 Brass Kalasam Sanctum & Abhishekam Platform',
      'Elder Ergonomic Teak Throne & Footrests',
      'Curated 6-Decade Family Archival Wall',
      'Acoustic Vedic Rithwik Audio System',
      'Satvik Multi-Course Traditional Feast Staging'
    ],
    specSheet: {
      architecturalStyle: 'Traditional South Indian Temple Sanctum with Golden Pillars',
      floralVarieties: ['Calcutta Marigold Weaves', 'Tuberose Garlands', 'Tulasi Stems', 'Lotus Flowers'],
      lightingDesign: 'Warm Golden Sunlight Wash (2800K) + Traditional Kuthuvilakku',
      stageDimensions: '26ft x 18ft gentle-ramp stage with dedicated abhishekam drainage',
      fabricationMaterials: ['Natural Teakwood', 'Hammered Brass Kalasams', 'Kanchipuram Silk Motifs']
    }
  },
  {
    id: 'farmhouse-soiree',
    name: 'Private Farmhouse & Lake Estate Soirée',
    teluguName: 'ప్రైవేట్ ఫామ్‌హౌస్ లగ్జరీ పార్టీ',
    verticalId: 'milestones',
    tagline: 'Under-the-stars poolside staging, bohemian fire pits, and mixology bars',
    description: 'Transforming private estates into boutique luxury resorts with fairy light forests, floating pool decks, live BBQ grills, and acoustic chillout lounges.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    setupTime: '16 Hours Build',
    budgetRange: '₹6L – ₹25L',
    guestScale: '80 – 300 Guests',
    keyInclusions: [
      'Acrylic Clear Top Pool Stage & Floating Candles',
      'Live Charcoal BBQ & Molecular Mixology Bar Stalls',
      'Bohemian Low Baithak Lounge with Fire Pit',
      'Complete Estate Landscape Uplighting'
    ],
    specSheet: {
      architecturalStyle: 'Tuscan Rustic Elegance meets Hyderabad Farmhouse Luxury',
      floralVarieties: ['Eucalyptus', 'Olive Twigs', 'White Delphinium', 'Wild Daisies'],
      lightingDesign: 'Tree Uplighting, Festoon String Canopies, Pool Floating Spheres',
      stageDimensions: '20ft x 16ft poolside floating deck with acoustic canopy',
      fabricationMaterials: ['Distressed Wood', 'Cast Iron Fire Baskets', 'Natural Canvas Canvas']
    }
  },
  {
    id: 'temple-kalyanam',
    name: 'Temple Kalyanam & Sacred Sanctum',
    teluguName: 'దేవాలయ కళ్యాణం & శాస్త్రోక్త పూజలు',
    verticalId: 'sacred-rituals',
    tagline: 'Ancient temple courtyard ambiance with sacred dhwajasthambham and brass bells',
    description: 'Creating temple-grade sacred environments with real granite aesthetics, bronze bells, thousands of clay diyas, and authentic Agamic ritual infrastructure.',
    image: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1200&q=85',
    setupTime: '18 Hours Build',
    budgetRange: '₹6L – ₹20L',
    guestScale: '200 – 800 Guests',
    keyInclusions: [
      'Architectural Stone-Finish Temple Gopuram Facade',
      'Authentic Temple Bell Gateway Corridor',
      '1,008 Clay Diya Light Array Staging',
      'Agamic Ritual Samagri & Priestly Podium',
      'Traditional Prasadam Counter Management'
    ],
    specSheet: {
      architecturalStyle: 'Granite Temple Gopuram with Carved Shikhara Elements',
      floralVarieties: ['Sevanti', 'Temple Jasmine', 'Marigold Festoons', 'Bel Leaves'],
      lightingDesign: 'Warm Candle & Diya Spectrum (2000K) + Accent Gopuram Spotting',
      stageDimensions: '32ft x 22ft sacred temple altar with stone textured risers',
      fabricationMaterials: ['Carved Stone Resin Panels', 'Pure Bronze Bells', 'Natural Coconut Coir']
    }
  }
];

export const DREAM_WEDDINGS_SHOWCASE: DreamWeddingCaseStudy[] = [
  {
    id: 'wedding-1',
    title: 'The Starlight Palace Affair',
    subtitle: 'A 3-Day Royal Destination Buyout on Lake Pichola',
    location: 'Udaipur, Rajasthan',
    venue: 'Jagmandir Island Palace & The Leela',
    guestCount: '320 Royal Attendees',
    duration: '3 Days • 5 Bespoke Experiences',
    budgetRange: '₹1.8Cr – ₹3.2Cr',
    archetype: 'Royal Destination Wedding',
    coverImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85'
    ],
    clientNames: 'Aarav & Meera Singhania',
    clientQuote: 'S Raja Contractor and their atelier did not just build decor; they brought ancient royal hospitality to life with jaw-dropping precision.',
    theBrief: 'The Singhania and Reddy families wanted a heritage-rich celebration that paid homage to Mewar royal heritage while seamlessly hosting 300+ international and Indian dignitaries with zero logistical friction.',
    theConcept: 'We conceived "Sandstone & Starlight"—a layered architectural design using 2,400 hand-hammered brass diyas, authentic 100-year-old teak pillars, floating lotus barges across the lake, and acoustic classical ensembles.',
    theExecution: 'Coordinated 400+ artisans over 48 hours, ferried 12 metric tons of materials via private jetty barges, erected a wind-resistant 30ft mandapam dome without drilling into heritage masonry, and executed 5 flawless events.',
    decorPalette: [
      { name: 'Royal Ivory', hex: '#F7F3E9' },
      { name: 'Mewar Sandstone', hex: '#D2A878' },
      { name: 'Imperial Crimson', hex: '#7A1C28' },
      { name: 'Antique Gold', hex: '#C5A880' }
    ],
    productionHighlights: [
      'Zero-impact heritage installation approved by Archaeological trust',
      'Custom solar-powered candle boat floating spectacle',
      'L-Acoustics K2 concert audio system for Royal Sufi Night',
      'Dedicated 24/7 Shadow Butler service for all 80 VIP suites'
    ],
    vendorCredits: [
      { role: 'Creative Direction & Contractor', name: 'S Raja Event Architecture' },
      { role: 'Floral Architecture', name: 'Artisan Bloom Studios' },
      { role: 'Technical Lighting Rig', name: 'Luminary Kinetics' },
      { role: 'Catering Coordination', name: 'Royal Mewar Khansama Guild' }
    ]
  },
  {
    id: 'wedding-2',
    title: 'The Sacred Vedic Sanctum',
    subtitle: 'Traditional Telugu & Tamil Smartha Rituals with Teak Mandapam',
    location: 'Hyderabad, Telangana',
    venue: 'Taj Falaknuma Palace Durbar Lawn',
    guestCount: '480 Dignitaries',
    duration: '2 Days • 4 Auspicious Muhurthams',
    budgetRange: '₹75L – ₹1.4Cr',
    archetype: 'Sacred Traditional Ceremony',
    coverImage: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85'
    ],
    clientNames: 'Dr. Siddharth & Keerthi Rao',
    clientQuote: 'Our elders were moved to tears by the authenticity of the Vedic mandapam. The 28-item traditional banana leaf bhojanam was perfection.',
    theBrief: 'To recreate the ancient sanctum of a 10th-century Kakatiya temple on the lawns of Falaknuma, with strict adherence to authentic Vedic samagri, zero plastic, and fragrant indigenous blooms.',
    theConcept: 'We hand-carved 8 teakwood pillars with Gajalakshmi motifs, suspended 800 kilograms of fresh Madurai Malli (jasmine), and constructed a water-channel pathway where brass diyas floated gently.',
    theExecution: 'Turnaround within 18 hours. Deployed 35 specialized priests, coordinated 60 master chefs for authentic South Indian Bhojanam served on freshly harvested banana leaves, and curated 8 classical nadaswaram masters.',
    decorPalette: [
      { name: 'Temple Ochre', hex: '#E8A338' },
      { name: 'Kanchi Green', hex: '#264A38' },
      { name: 'Madurai Jasmine', hex: '#FAF9F2' },
      { name: 'Brass Sheen', hex: '#D8B868' }
    ],
    productionHighlights: [
      'Hand-carved reusable seasoned teakwood mandapam',
      'Zero-smoke camphor & medicinal herb homam management',
      'Traditional brass urli walkway with 1,200 real wax floating diyas',
      '100% biodegradable eco-conscious dining infrastructure'
    ],
    vendorCredits: [
      { role: 'Vedic Architecture', name: 'S Raja Traditional Atelier' },
      { role: 'Vedic Samagri & Pundits', name: 'Kanchi Kamakoti Seva' },
      { role: 'Traditional Bhojanam', name: 'Sri Balaji Royal Caterers' }
    ]
  },
  {
    id: 'wedding-3',
    title: 'The Celestial Mirror Gala',
    subtitle: 'Cybernetic Sangeet & High-Production Kinetic Light Spectacle',
    location: 'Jaipur, Rajasthan',
    venue: 'Fairmont Grand Ballroom & Lawns',
    guestCount: '650 VIPs',
    duration: '1 Night • 8-Hour High Energy Gala',
    budgetRange: '₹90L – ₹1.8Cr',
    archetype: 'Electrifying Sangeet & Cocktail Gala',
    coverImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85'
    ],
    clientNames: 'Vikram & Ananya Reddy',
    clientQuote: 'It felt like a private Coachella in the middle of Rajasthan. The kinetic ceiling moving to the beat had everyone speechless.',
    theBrief: 'A futuristic luxury Sangeet that broke away from traditional florals, featuring international artists, heavy bass concert sound, and an interactive dance floor.',
    theConcept: 'A 45-foot curved 4K LED portal flanked by 120 motorized kinetic LED spheres that dipped and danced above the crowd in sync with live DJ sets and choreographed family dance battles.',
    theExecution: '48-hour build with 8 heavy-duty box trusses, 240 high-output moving heads, precision timecode laser synchronization, and mixology bar stations flown in from London.',
    decorPalette: [
      { name: 'Obsidian Black', hex: '#0B0B0E' },
      { name: 'Electric Champagne', hex: '#F3E5AB' },
      { name: 'Mirrored Chrome', hex: '#DCDCDC' },
      { name: 'Deep Indigo', hex: '#1B1E38' }
    ],
    productionHighlights: [
      'Custom DMX-controlled kinetic ceiling sculpture',
      'P3 ultra-fine pitch LED backdrop with custom 3D visuals',
      'Dual CO2 jet cannons and sparkular pyro matrix',
      'Bespoke illuminated mixology bar with liquid nitrogen cocktails'
    ],
    vendorCredits: [
      { role: 'Concert Production', name: 'Aurelia Kinetic Stage' },
      { role: 'Sound & Audio Rig', name: 'L-Acoustics Global Team' },
      { role: 'Visuals & Mapping', name: 'Studio Optik' }
    ]
  },
  {
    id: 'wedding-4',
    title: 'The Whispering Pines Estate',
    subtitle: 'Understated Luxury & Tuscan-Inspired Intimate Vineyard Wedding',
    location: 'Bangalore Outskirts',
    venue: 'Private 15-Acre Farmhouse Estate',
    guestCount: '180 Intimate Guests',
    duration: '2 Days • Farmstead Soiree',
    budgetRange: '₹35L – ₹70L',
    archetype: 'Intimate Celebrations & Anniversaries',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85'
    ],
    clientNames: 'Rohan & Tara Varma',
    clientQuote: 'Every single guest told us it was the warmest, most elegant wedding they had ever experienced. Pure poetry in every corner.',
    theBrief: 'An intimate, highly tasteful weekend celebration for close friends and family, focusing on bespoke dining, live acoustic jazz, and botanical elegance.',
    theConcept: 'Long rustic banqueting tables under a 200ft woven fairy-light canopy, wild olive leaves, imported white delphiniums, brass candelabras, and artisanal woodfired sourdough pizza ovens.',
    theExecution: 'Complete site grading and power generation for a remote private property, acoustic dampening, custom water supply installation, and zero visible cabling.',
    decorPalette: [
      { name: 'Sage Olive', hex: '#5E6B56' },
      { name: 'Warm Cream', hex: '#F4EFE6' },
      { name: 'Aged Terracotta', hex: '#C27D60' },
      { name: 'Raw Linen', hex: '#D6CDBF' }
    ],
    productionHighlights: [
      '200-foot continuous festoon light canopy across olive trees',
      'Artisanal farm-to-table 7-course plated banquet',
      'Custom monogrammed linen napkins for all 180 guests',
      'Silent power generator bank with automatic failover'
    ],
    vendorCredits: [
      { role: 'Atelier Design', name: 'Aurelia Private Estates' },
      { role: 'Gourmet Banquet', name: 'Chef Mario & Co' }
    ]
  },
  {
    id: 'wedding-5',
    title: 'The Imperial Pavilion of Nizam',
    subtitle: 'Monumental 2,500-Guest Grand Reception Architecture',
    location: 'Hyderabad, Telangana',
    venue: 'GMR Arena & Hitex Grand Hall',
    guestCount: '2,800 Royal Attendees',
    duration: '1 Grand Night • Monumental Staging',
    budgetRange: '₹1.5Cr – ₹3.5Cr',
    archetype: 'Grand Reception Architecture',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85'
    ],
    clientNames: 'K. V. Harsha & Sanjana Goud',
    clientQuote: 'Hosting 2,800 dignitaries including Cabinet Ministers and business leaders without a single queue was a triumph of engineering.',
    theBrief: 'A high-security, massive scale reception honoring both royal Hyderabadi lineage and modern state architecture with rapid VIP flow and monumental floral grandeur.',
    theConcept: 'A 90ft wide replica of the Chowmahalla Palace facade crafted with high-density polyurethane and 65,000 Dutch carnations, framed by water fountains and private air-conditioned VIP banquet pods.',
    theExecution: 'Managed 500+ security personnel, VIP motorcade protocol, 12 parallel multi-cuisine dining corridors, and a synchronized 3-minute Varmala drone fireworks show.',
    decorPalette: [
      { name: 'Nizam Gold', hex: '#D4AF37' },
      { name: 'Royal Ruby', hex: '#8B0000' },
      { name: 'Pearl White', hex: '#FDFBF7' }
    ],
    productionHighlights: [
      '90-foot custom fabricated heritage palace elevation',
      'Dedicated high-security Green Corridor for Z+ dignitaries',
      'Multi-kitchen simultaneous 3,000-portion catering dispatch',
      'Custom hydraulic stage lift with synchronized rose petal showers'
    ],
    vendorCredits: [
      { role: 'Master Contractor', name: 'S Raja Marriage Contractor & Aurelia' },
      { role: 'Structural Engineering', name: 'Apex Rigging India' }
    ]
  },
  {
    id: 'wedding-6',
    title: 'The Coastal Sunset Sanctuary',
    subtitle: 'Barefoot Luxury & Oceanfront Floral Mandap on Morjim Beach',
    location: 'Goa, India',
    venue: 'Morjim Beachfront Private Cove',
    guestCount: '220 Close Friends',
    duration: '3 Days • Beachside Celebrations',
    budgetRange: '₹60L – ₹1.2Cr',
    archetype: 'Private Estate & Farmhouse Celebrations',
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85'
    ],
    clientNames: 'Kabir & Rhea Fernandez',
    clientQuote: 'Saying our vows as the sun set into the Arabian Sea with live acoustic guitar and the sound of waves was pure magic.',
    theBrief: 'A relaxed yet undeniably chic coastal destination wedding with bamboo structures, tropical greenery, sunset sundowners, and midnight bonfires.',
    theConcept: 'An open-air driftwood and bleached teak mandap right on the sand dunes, accented with wild pampas grass, white orchids, and linen drapery catching the sea breeze.',
    theExecution: 'Tide-safe coastal engineering, eco-friendly beach permits, sea-spray resistant lighting fixtures, and barefoot cocktail hospitality.',
    decorPalette: [
      { name: 'Driftwood Sand', hex: '#D8C3A5' },
      { name: 'Ocean Mist', hex: '#8E8D8A' },
      { name: 'Sunset Terracotta', hex: '#E98074' },
      { name: 'Pure Linen', hex: '#EAE7DC' }
    ],
    productionHighlights: [
      'High-tide engineered wooden boardwalk to beach mandap',
      'Acoustic surround sound tuned for ocean ambient noise',
      'Local Goan seafood & feni cocktail artisanal bars',
      'Eco-restoration of beach within 4 hours post-event'
    ],
    vendorCredits: [
      { role: 'Destination Director', name: 'S Raja Coastal Production' },
      { role: 'Beach Logistics', name: 'Goa Marine Permitting Co' }
    ]
  }
];

export const CORE_DISCIPLINES: CoreDiscipline[] = [
  {
    id: 'disc-1',
    number: '01',
    title: 'Royal Destination Weddings',
    subtitle: 'Palace Buyouts & Turnkey Logistics',
    description: 'We orchestrate complete palace buyouts, charter flights, fleet logistics, shadow butlers, and heritage site compliance across Rajasthan, Hyderabad, and international destinations.',
    capabilities: [
      'Heritage Palace Buyout Negotiations',
      'Private Charter & VIP Fleet Coordination',
      'Dedicated Shadow Butler Squads',
      'Zero-Impact Historical Monument Compliance'
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85',
    leadArchitect: 'Rajendra Varma, Head of Destination'
  },
  {
    id: 'disc-2',
    number: '02',
    title: 'Sacred Vedic & Traditional Ceremonies',
    subtitle: 'Vedic Samagri & Master Carved Teak Mandapams',
    description: 'Deep reverence for traditional rituals. We build authentic teak and brass mandapams, source medicinal samagri, coordinate authentic Nadaswaram maestros, and prepare smokeless homam sanctums.',
    capabilities: [
      'Authentic Teak & Brass Mandap Architecture',
      'Traditional Samagri & 100% Pure Ghee Procurement',
      'Kanchi & Tirupati Classical Nadaswaram Troupes',
      'Auspicious Muhurtham Minute-by-Minute Run of Show'
    ],
    image: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1000&q=85',
    leadArchitect: 'Vidwan S. Sundaram, Vedic Rituals Advisor'
  },
  {
    id: 'disc-3',
    number: '03',
    title: 'High-Production Sangeet & Galas',
    subtitle: 'Kinetic Lighting & Concert Audio Engineering',
    description: 'Full-stadium entertainment engineering featuring computerized DMX kinetic winches, curved 4K LED backdrops, touring line arrays, lasers, pyrotechnics, and celebrity artist management.',
    capabilities: [
      'Motorized Kinetic Winches & DMX Pixel Grids',
      'L-Acoustics & d&b audiotechnik Line Arrays',
      '3D Holographic Stage & Projection Mapping',
      'A-List Bollywood & International Artist Booking'
    ],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85',
    leadArchitect: 'Arjun Sen, Technical Production Director'
  },
  {
    id: 'disc-4',
    number: '04',
    title: 'Haute Floral & Mandap Architecture',
    subtitle: '10,000+ Fresh Stems & 3D CAD Blueprinting',
    description: 'We run our own direct-import floral supply chain from Holland, Bangalore, and Madurai. Every structural frame is pre-engineered in 3D CAD with exact load-bearing certifications before fabrication.',
    capabilities: [
      '3D CAD Engineering & Structural Load Analysis',
      'Temperature-Controlled Floral Cold-Chain Vans',
      'Bespoke Master Sculpting (Teak, Brass, Acrylic)',
      '10,000+ Daily Fresh Exotic Stem Capacity'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
    leadArchitect: 'Devika Singhal, Lead Floral Architect'
  },
  {
    id: 'disc-5',
    number: '05',
    title: 'Grand Royal Reception Staging',
    subtitle: 'Palace Elevations & Monumental Pavilions',
    description: 'Turnkey execution for monumental wedding receptions with multi-tier palace elevations, hydraulic varmala staging, climate-controlled shamianas, and VIP motorcade arrival corridors.',
    capabilities: [
      'Custom Fabricated Heritage Palace Facades',
      'Orchestrated Hydraulic Varmala Staging',
      'Climate-Controlled Luxury Banqueting Shamianas',
      'Multi-Tiered Seating & VIP Motorcade Lounges'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
    leadArchitect: 'Vikram Joshi, VP Monumental Production'
  },
  {
    id: 'disc-6',
    number: '06',
    title: 'Private Milestone & Farmhouse Soirées',
    subtitle: 'Estate Staging, Mixology & Site Restoration',
    description: 'Transforming bare farmland and private family estates into ultra-luxury boutique venues with silent generators, mobile luxury washrooms, customized mixology bars, and complete post-event site cleanup.',
    capabilities: [
      'Complete Raw Estate Power & Water Infrastructure',
      'Acrylic Clear-Top Pool Flooring & Staging',
      'Bespoke Molecular Mixology & Live Grill Counters',
      '100% Post-Event Ecological Restoration'
    ],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85',
    leadArchitect: 'Karan Mehra, Private Estate Specialist'
  }
];

export const METAMORPHOSIS_VENUES: MetamorphosisVenue[] = [
  {
    id: 'venue-1',
    name: 'The Lake Pichola Courtyard',
    location: 'Udaipur, Rajasthan',
    subtitle: 'From Raw Cobblestone Ground to 10,000 Candlelit Palace Starlight Banquet',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85',
    beforeDesc: 'Raw, unpaved lakeside courtyard with exposed masonry, no electrical wiring, and uneven heritage stone flooring.',
    afterDesc: 'Tiered bespoke wooden decking, 2,400 brass candelabras, velvet shamiana drapes, and hidden under-deck cabling with surround acoustic sound.',
    turnaroundTime: '36 Hours Master Transformation',
    materialsBreakdown: [
      { label: 'Treated Teakwood Decking', qty: '14,000 sq.ft' },
      { label: 'Solid Brass Candelabras', qty: '480 units' },
      { label: 'Fresh Tuberose Garlands', qty: '12,500 meters' },
      { label: 'L-Acoustics Stealth Audio', qty: '16 discreet points' },
      { label: 'Raw Pattu Silk Canopy', qty: '3,200 meters' }
    ]
  },
  {
    id: 'venue-2',
    name: 'The Sacred Vedic Mandapam',
    location: 'Taj Falaknuma, Hyderabad',
    subtitle: 'From Bare Lawn to 24K Gold Foil & Cascading Jasmine Temple Sanctum',
    beforeImage: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1400&q=85',
    beforeDesc: 'Open lawn with harsh afternoon sun and zero shade or spiritual focal point.',
    afterDesc: 'Self-supporting octagonal teakwood mandap with 600kg fresh Madurai jasmine, lotus pools, and shaded VIP pavilions.',
    turnaroundTime: '18 Hours Structural Assembly',
    materialsBreakdown: [
      { label: 'Seasoned Teakwood Pillars', qty: '8 Master Pillars' },
      { label: 'Fresh Madurai Malli (Jasmine)', qty: '650 kilograms' },
      { label: 'Hand-hammered Brass Urlis', qty: '64 vessels' },
      { label: 'Smokeless Vedic Firepit Core', qty: '1 insulated unit' },
      { label: 'Gold Embroidered Shamianas', qty: '1,800 sq.ft' }
    ]
  },
  {
    id: 'venue-3',
    name: 'The Mirrored Celestial Gala',
    location: 'Fairmont Ballroom, Jaipur',
    subtitle: 'From Standard Carpeted Hall to Cybernetic Kinetic Mirror Wonderland',
    beforeImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85',
    beforeDesc: 'Standard hotel beige conference hall with low static lighting and plain wallpaper.',
    afterDesc: 'Reflective 40ft glass runway, 120 motorized kinetic DMX winches, 4K curved LED portals, and VIP tiered banquettes.',
    turnaroundTime: '28 Hours High-Tech Rigging',
    materialsBreakdown: [
      { label: 'P3 Curved LED Screen', qty: '45ft x 18ft' },
      { label: 'Kinetic DMX Winch Spheres', qty: '120 units' },
      { label: 'Tempered Glass Mirror Floor', qty: '1,600 sq.ft' },
      { label: 'Sharpy 15R Moving Lights', qty: '64 heads' },
      { label: 'Custom Velvet Lounges', qty: '28 pods' }
    ]
  }
];

export const MANDAP_BLUEPRINTS: MandapBlueprint[] = [
  {
    id: 'mandap-1',
    name: 'The Ashta-Lakshmi Teakwood Mandapam',
    style: 'Ancient Dravidian Vedic Sanctum',
    renderImage: 'https://images.unsplash.com/photo-1609358905594-55444b9148d2?auto=format&fit=crop&w=1200&q=85',
    blueprintImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dimensions: {
      height: '18.5 Feet Apex Height',
      span: '28 Feet Diameter Octagonal',
      footprint: '784 sq.ft Plinth Base',
      loadCapacity: '2.5 Metric Tons Floral Rig'
    },
    lightingTemp: '2400K Warm Diya Lumens + 2700K Architectural Pinspotting',
    woodwork: 'Seasoned CP Teak with CNC Hand-Finished Elephant & Floral Reliefs',
    brassElements: 'Pure Kansa Brass Deepasthambams & Toranams with 24K Leaf Coating',
    floralStemEstimate: '18,000 Fresh Tuberose & Lotus Weaves',
    cadSpecs: [
      'CAD Rev: DWG-MANDAP-2026-V8',
      'Structural Safety: Certified for 60 km/h wind gusts with internal steel anchors',
      'Smokeless Homa Exhaust: Dual-layer underfloor air intake vents',
      'Camera Angles: 6 unobstructed broadcast 4K camera sightlines'
    ]
  },
  {
    id: 'mandap-2',
    name: 'The Chhatri of Celestial Lotus',
    style: 'Royal Rajasthani Heritage Chhatri',
    renderImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    dimensions: {
      height: '22.0 Feet Jharokha Apex',
      span: '32 Feet Hexagonal Dome',
      footprint: '1,024 sq.ft Elevated Base',
      loadCapacity: '3.8 Metric Tons Chandelier Truss'
    },
    lightingTemp: '2200K Candlelight Tone with Synchronized Water Reflection Uplights',
    woodwork: 'Hand-carved Sandstone Finish Polyurethane with Teak Substructure',
    brassElements: 'Antique Patina Brass Jali Screens and Hanging Oil Vessels',
    floralStemEstimate: '32,000 Dutch Roses & Caspia Garlands',
    cadSpecs: [
      'CAD Rev: DWG-CHHATRI-RAJ-04',
      'Dome Stability: Zero-ground penetration counterweight truss ballast',
      'Water Integration: Surrounding 4-inch deep lotus reflection moat',
      'Acoustic Profile: Curvature engineered to amplify live shehnai & nadaswaram'
    ]
  },
  {
    id: 'mandap-3',
    name: 'The Modern Crystal Pavilion',
    style: 'Contemporary Minimalist Glass & Gold Sanctum',
    renderImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    blueprintImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    dimensions: {
      height: '16.0 Feet Geometric Frame',
      span: '24 Feet Square Open Span',
      footprint: '576 sq.ft High-Gloss Platform',
      loadCapacity: '1.8 Metric Tons Crystal Canopy'
    },
    lightingTemp: '3000K Neutral Warm Glow + RGBW Micro-Washes for Vows',
    woodwork: 'Titanium Gold Electroplated Steel with White Satin Wood Finish',
    brassElements: 'Minimalist Brushed Gold Pillars with Concealed Warm LED Grooves',
    floralStemEstimate: '8,500 White Orchids, Peonies & Hydrangeas',
    cadSpecs: [
      'CAD Rev: DWG-CRYSTAL-MIN-02',
      'Platform: 4-inch tempered acrylic glass with internal diffuse lighting',
      'Cabling: 100% invisible conduit routing through hollow pillar core',
      'Weatherproofing: Rain-shield transparent UV canopy integration'
    ]
  }
];

export const BANQUET_MENUS: BanquetMenu[] = [
  {
    id: 'menu-1',
    title: 'South Indian Royal Banana Leaf Bhojanam',
    tagline: '28-Dish Traditional Feast served with royal brass urlis and pure ghee service',
    cuisineStyle: 'Traditional Telugu, Tamil & Udupi Smartha Heritage',
    coursesCount: 28,
    highlightDishes: [
      'Live Podi & Nattu Sakkarai Ghee Dosa Counter',
      'Gutti Vankaya Kura (Stuffed Royal Brinjal)',
      'Ulavacharu with Fresh Cream & Pulao',
      'Palathalikalu & Kakinada Kaja Dessert Service',
      'Thoran, Avial, Mysore Rasam & Filter Coffee Stall'
    ],
    specialServiceFeature: 'Silver & Brass Urli Service by 80 trained traditional servers in silk dhotis, with unlimited warm Ghee pouring rituals.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=85',
    idealFor: 'Pellikuthuru, Muhurtham, Upanayanam & Sacred Celebrations'
  },
  {
    id: 'menu-2',
    title: 'Imperial Royal Mughlai Dastarkhwan',
    tagline: 'Slow-cooked Dum Biryanis, Galouti Kebabs, and Khansama Live Stalls',
    cuisineStyle: 'Hyderabadi Nizami & Awadhi Royal Court Banquet',
    coursesCount: 32,
    highlightDishes: [
      'Zaffrani Gosht Dum Biryani (Slow-cooked on Wood Fire)',
      'Melt-in-Mouth Galouti Kebabs with Ulte Tawe Ka Paratha',
      'Dum Ka Murgh with Khameeri Roti',
      'Double Ka Meetha & Shahi Tukda with 24K Gold Leaf',
      'Live Irani Chai & Paan Artisanal Station'
    ],
    specialServiceFeature: 'Dedicated Master Khansama brigade with live clay tandoor stations and engraved silver chafing dishes.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=85',
    idealFor: 'Sangeet Nights, Grand Receptions & Destination Welcome Dinners'
  },
  {
    id: 'menu-3',
    title: 'Global Haute Cuisine & Artisanal Live Stations',
    tagline: 'Truffle risotto wheels, Mediterranean mezze, and molecular mixology',
    cuisineStyle: 'Modern European, Pan-Asian & Contemporary Fusion',
    coursesCount: 24,
    highlightDishes: [
      'Flamed 24-Month Parmigiano Reggiano Truffle Pasta',
      'Robata Grilled Exotic Mushroom & Yakitori Skewers',
      'Handcrafted Burrata & Heirloom Tomato Bar',
      'Liquid Nitrogen Dragon Smoke Desserts & Gelato Bar',
      'Artisanal Single-Origin Coffee & Matcha Bar'
    ],
    specialServiceFeature: 'Michelin-experienced guest chefs with choreographed live flame and carving stations.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    idealFor: 'Cocktail Galas, Corporate Leadership Summits & Milestone Soirées'
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    clientName: 'Sanjay & Radhika Kamineni',
    occasion: 'Daughter\'s Royal Destination Wedding',
    venue: 'Jagmandir Palace, Udaipur',
    location: 'Hyderabad / Udaipur',
    rating: 5,
    badge: 'Vogue Verified',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    review: 'S Raja Marriage Contractor operated like a Swiss watch and an architectural atelier. From building the most breathtaking mandap to managing lighting and acoustics for 800 guests, they exceeded every dream.',
    eventDate: 'December 2025'
  },
  {
    id: 'rev-2',
    clientName: 'Vikram & Ananya Reddy',
    occasion: 'Celebrity Sangeet & Kinetic Stage',
    venue: 'Taj Krishna, Hyderabad',
    location: 'Hyderabad',
    rating: 5,
    badge: '5.0 Google Verified',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    review: 'The turnkey sound engineering, LED wall synchronization, and flower craftsmanship were flawless. Zero stress for our family. S Raja and the team are true masters of event architecture.',
    eventDate: 'November 2025'
  },
  {
    id: 'rev-3',
    clientName: 'Dr. Venkat & Gayatri Rao',
    occasion: 'Traditional Telugu Vedic Muhurtham',
    venue: 'Taj Falaknuma Palace, Hyderabad',
    location: 'Hyderabad',
    rating: 5,
    badge: 'Heritage Verified',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    review: 'The authenticity of their Vedic mandap with fresh jasmine weaves and traditional banana leaf bhojanam catering brought tears of joy to our elders. Exceptional execution and punctual delivery.',
    eventDate: 'January 2026'
  },
  {
    id: 'rev-4',
    clientName: 'Priya & Siddharth Murthy',
    occasion: 'Half-Saree & Grand Reception',
    venue: 'GMR Arena, Hyderabad',
    location: 'Hyderabad',
    rating: 5,
    badge: 'WedMeGood Platinum',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    review: 'Their 3D CAD blueprint preview before the event gave us 100% confidence. The actual setup looked even more magnificent than the renders. Exceptional transparent itemized contracting.',
    eventDate: 'February 2026'
  },
  {
    id: 'rev-5',
    clientName: 'Harsha & Tejaswi Goud',
    occasion: 'Pellikuthuru & Royal Sangeet',
    venue: 'Novotel HICC, Hyderabad',
    location: 'Hyderabad',
    rating: 5,
    badge: 'Top Contractor Choice',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    review: 'The turmeric urli setup with marigold cascades for the Pellikuthuru was pure magic. Our entire family was amazed by how quickly and cleanly the turnkey crew transformed the venue.',
    eventDate: 'January 2026'
  },
  {
    id: 'rev-6',
    clientName: 'Rajesh & Swetha Varma',
    occasion: 'Princess 1st Birthday & Shashti Poorthi',
    venue: 'JRC Convention, Hyderabad',
    location: 'Hyderabad',
    rating: 5,
    badge: '5.0 Verified Client',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    review: 'From the enchanted 3D castle decor for our daughter to the sacred 60-Kalasa Vedic setup for my parents, S Raja handled both events with unbelievable attention to detail and care.',
    eventDate: 'March 2026'
  }
];

export const MUHURTHAM_DATES_2026_2027: MuhurthamDate[] = [
  {
    date: '14 November 2026',
    monthYear: 'Nov 2026',
    nakshatram: 'Rohini Nakshatram',
    thithi: 'Shukla Paksha Panchami',
    timing: '06:42 AM – 08:15 AM',
    significance: 'Extremely Auspicious for Royal Weddings & Long Life'
  },
  {
    date: '28 November 2026',
    monthYear: 'Nov 2026',
    nakshatram: 'Uttara Phalguni',
    thithi: 'Shukla Paksha Ekadashi',
    timing: '07:15 AM – 09:30 AM',
    significance: 'Ideal for Destination Weddings & Prosperity'
  },
  {
    date: '06 December 2026',
    monthYear: 'Dec 2026',
    nakshatram: 'Hasta Nakshatram',
    thithi: 'Shukla Paksha Trayodashi',
    timing: '05:30 AM – 07:10 AM',
    significance: 'Vedic Gold Standard Muhurtham'
  },
  {
    date: '18 January 2027',
    monthYear: 'Jan 2027',
    nakshatram: 'Mrigashira Nakshatram',
    thithi: 'Shukla Paksha Dashami',
    timing: '08:20 AM – 10:45 AM',
    significance: 'Post-Sankranti Auspicious Spring Union'
  },
  {
    date: '12 February 2027',
    monthYear: 'Feb 2027',
    nakshatram: 'Anuradha Nakshatram',
    thithi: 'Shukla Paksha Saptami',
    timing: '06:10 AM – 08:35 AM',
    significance: 'Supreme Planetary Alignment for Harmony'
  },
  {
    date: '24 April 2027',
    monthYear: 'Apr 2027',
    nakshatram: 'Swati Nakshatram',
    thithi: 'Shukla Paksha Navami',
    timing: '07:45 AM – 09:50 AM',
    significance: 'Auspicious Akshaya Tritiya Season Muhurtham'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How early should we commission S Raja Marriage Contractor for our celebration?',
    answer: 'For flagship destination weddings (Udaipur, Jaipur, Hyderabad palaces) or peak muhurtham dates (November – February), we recommend commissioning our contractor team 6 to 12 months in advance to secure custom mandapam fabrication slots and prime auspicious dates. For intimate celebrations, milestones, and pre-wedding rituals, a 4 to 8-week window is optimal.'
  },
  {
    question: 'What makes S Raja Marriage Contractor different from standard decorators?',
    answer: 'We are a master turnkey contractor and event architecture firm with in-house structural fabrication, seasoned teakwood mandapams, high-grade audio/lighting trusses, floral cold-chain logistics, and end-to-end banquet coordination. Every mandap is structurally pre-engineered with 3D CAD blueprints.'
  },
  {
    question: 'How do you coordinate with NRI families living in the USA, UK, or Dubai?',
    answer: 'Over 40% of our weddings are commissioned by NRI families. We provide a real-time Client Portal where you can view 3D CAD mandap renders, approve floral palettes, track itemized contractor budgets in USD/INR, and schedule weekly timezone-aligned video reviews.'
  },
  {
    question: 'Do you offer transparent itemized pricing without hidden costs?',
    answer: 'Yes. Our contractor quotations feature 100% itemized transparency. You receive distinct line items for structural fabrication, fresh floral counts, lighting/sound rigs, artist fees, and catering with zero hidden markups.'
  },
  {
    question: 'Can you work with our family’s preferred private caterer or priest?',
    answer: 'Absolutely. We seamlessly collaborate with your family’s traditional Sampradaya priests, specialized Khansamas, or regional sweet makers, while providing all background infrastructure (kitchen staging, refrigeration, power, gas, and service staff).'
  },
  {
    question: 'What is your procedure for contingency weather or venue restrictions?',
    answer: 'Every outdoor or lawn project includes a pre-engineered weatherproof structural plan with rapid-deployment waterproof drapes, backup silent generators with automatic sub-second failover, and wind-tested anchoring certified by structural engineers.'
  }
];
