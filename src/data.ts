import { Weaver, Fabric, Product, TryOnPreset } from './types';

export const WEAVERS: Weaver[] = [
  {
    id: 'w-1',
    name: 'Sukhdev Devangan',
    location: 'Abhanpur, Raipur District',
    district: 'Raipur',
    story: 'Sukhdev belongs to an ancestral family of Devangans who have been weaving since the 14th century. Transitioning from conventional cotton to banana stem and bamboo fiber was a challenge, but Sukhdev spearheaded the movement in Raipur. Today, he trains younger weavers in Raipur to blend wild flax stalks with waste banana stem fiber on modern frame looms, earning them 3x their previous handloom income.',
    specialty: 'Double-Weft Jacquard and Banana-Bamboo Blends',
    yearsOfExperience: 22,
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80' // Professional elder weaver portrait placeholder
  },
  {
    id: 'w-2',
    name: 'Phoolbai Sahu',
    location: 'Kurud, Dhamtari District',
    district: 'Dhamtari',
    story: 'Phoolbai began her journey 15 years ago by assisting her husband, but quickly rose as one of Dhamtari\'s most skilled master-craftswomen. Using waste agro-residue banana stems processed by a local women\'s cooperative, she spins the crisp golden threads on her traditional handloom. Phoolbai is renowned for her floral motif borders, turning wild fibers into artistic heirlooms that preserve Dhamtari’s heritage.',
    specialty: 'Traditional Pit Loom with Organic Natural Vat Dyeing',
    yearsOfExperience: 16,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' // Female artisan portrait
  },
  {
    id: 'w-3',
    name: 'Jagdish Chandrakar',
    location: 'Patan, Durg District',
    district: 'Durg',
    story: 'Jagdish is a maestro of complex geometric weaves. Residing in Patan, Durg, he has designed custom handlooms that can handle the varying tension of organic cotton mixed with flax-linen stalks. In his community workshop of 45 weavers, Jagdish advocates for zero-waste production. He collects agricultural residues of flax flax and bamboo stalks from surrounding farms, converting them into smooth, luxurious interior textiles.',
    specialty: 'Zero-Waste Flax-Linen and Fine Jamdani Curtains',
    yearsOfExperience: 28,
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' // Male elder weaver portrait
  }
];

export const FABRICS: Fabric[] = [
  {
    id: 'fab-1',
    name: 'Banana Stem Khadi Gold',
    source: 'Banana Stem',
    description: 'Woven from hand-scraped banana tree pseudo-stem fibers, combined with low-impact organic cotton. Naturally golden-beige, with a crisp linen-like texture, beautiful natural slubs, and exceptional thermal insulation.',
    hexValue: '#E4D5B7',
    textureUrl: 'https://images.unsplash.com/photo-1610116306796-6ebd30d79122?auto=format&fit=crop&w=300&q=80',
    features: ['High Tensile Strength', 'Biodegradable & Zero-Chemical', 'Cool in summer, warm in winter']
  },
  {
    id: 'fab-2',
    name: 'Dhamtari Sage Bamboo',
    source: 'Bamboo',
    description: 'Eco-processed bamboo cellulose combined with fine cotton yarn, dyed using natural leaves and herbs. Gives off a soft, satin-like touch, an elegant fluid drape, and incredible skin-friendly cooling properties.',
    hexValue: '#A8BBA2',
    textureUrl: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=300&q=80',
    features: ['Naturally Hypoallergenic', 'Satin-soft Drape', 'Moisture wicking']
  },
  {
    id: 'fab-3',
    name: 'Durg Organic Indigo',
    source: 'Organic Cotton',
    description: 'Certified long-staple organic cotton dyed in natural indigo fermentation vats. Handloomed in Raipur to produce a textured fabric with deep blue ocean tones and fine, artisanal irregularities that tell the weaver\'s tale.',
    hexValue: '#243C56',
    textureUrl: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=300&q=80',
    features: ['100% Herbal Indigo Dye', 'Extremely breathable', 'Gets softer with every wash']
  },
  {
    id: 'fab-4',
    name: 'Flax Linen Warm Ochre',
    source: 'Flax Stalks',
    description: 'Processed from high-yield flax stalk fibers and traditional cotton handloom weaving. Rich mustard-ochre hue, extremely robust and heavy-weighted structure, making it the perfect candidate for rich curtain screens and bed covers.',
    hexValue: '#C79F5E',
    textureUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
    features: ['Agro-residue Flex Stalks', 'Heavy weight & structural drape', 'Excellent UV protection']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Mahanadi Banana & Cotton Bedsheet Set',
    category: 'bedsheet',
    fibers: ['Banana', 'Organic Cotton'],
    price: 3499,
    rating: 4.9,
    features: ['Includes 1 Double Bedsheet & 2 Pillow Covers', 'Zero synthetic blends', 'Handwoven, Raipur double-weft technique'],
    description: 'Crafted from 60% agricultural waste banana stem fiber and 40% GOTS-certified organic cotton. This bedsheet brings a rustic yet luxurious feel to your bedroom, characterized by pleasant earthy textures and absolute breathability.',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80', // Beautiful bedsheet
    defaultFabricId: 'fab-1'
  },
  {
    id: 'p-2',
    name: 'Sihava Flax Linen Heavy Curtain Panel',
    category: 'curtain',
    fibers: ['Linen', 'Organic Cotton'],
    price: 1899,
    rating: 4.8,
    features: ['Sold as individual panels', 'Rust-resistant brass rust grommets', 'Zero dye waste, Raipur Flax'],
    description: 'Drape your windows in sustainable poetry. Handloomed by Sukhdev Devangan, this heavy-weight flax stalk and cotton curtain panels filters sunlight beautiful, casting an enchanting warm glow that enriches any modern living room.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80', // sunlit window
    defaultFabricId: 'fab-4'
  },
  {
    id: 'p-3',
    name: 'Dhamtari Sage Bamboo Pillow Covers (Set of 2)',
    category: 'pillow_cover',
    fibers: ['Bamboo', 'Organic Cotton'],
    price: 899,
    rating: 4.7,
    features: ['Pack of 2 pillow cases', 'Elegant envelope closure style', 'Organic plant dyed in sage greens'],
    description: 'Unbelievably soft, antibacterial pillow covers handloomed in Dhamtari using fine regeneratively grown bamboo fibers. Designed with envelope closure to completely eliminate heavy metals or zipper components.',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1000&q=80', // soft pillows list
    defaultFabricId: 'fab-2'
  },
  {
    id: 'p-4',
    name: 'Durg Heritage Indigo Organic Bedding Set',
    category: 'bedsheet',
    fibers: ['Organic Cotton'],
    price: 3899,
    rating: 4.9,
    features: ['Double Bedsheet + 2 matching Indigo Pillow covers', 'Natural indigo herbal dye', 'Handloomed near Durg district'],
    description: 'Showcasing master weaving from the Patan cluster in Durg, this majestic set is dyed in 100% natural indigo. Features a pleasant custom feel that is completely harmless to sensitive skin and brings a peaceful ocean breeze aesthetic.',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80', // beautiful bedding indigo
    defaultFabricId: 'fab-3'
  },
  {
    id: 'p-5',
    name: 'Patan Banana & Flax Linen Curtain Panel',
    category: 'curtain',
    fibers: ['Banana', 'Linen'],
    price: 2199,
    rating: 5.0,
    features: ['High sun protection', 'Sturdy premium handloom loop top', 'Sourced and woven completely in Patan, Durg'],
    description: 'Made from a durable weave of 50% banana pseudo-stem and 50% flax stalk fibers. It is structural, elegant, and filters heat perfectly, keeping rooms cool in hot seasons and beautifully highlighting natural material grains.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80', // Curtains closeup
    defaultFabricId: 'fab-1'
  }
];

export const PRESETS: TryOnPreset[] = [
  {
    id: 'preset-bed',
    type: 'bed',
    name: 'Minimalist Studio Bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    // custom CSS clip path path or visual overlay
    clipPath: 'polygon(15% 45%, 85% 42%, 98% 70%, 95% 95%, 5% 95%)',
    defaultOverlayPosition: {
      x: 35,
      y: 60,
      width: 70,
      height: 48,
      rotation: 2 // slight angle
    }
  },
  {
    id: 'preset-window',
    type: 'window',
    name: 'Sun-drenched Tall Window',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    clipPath: 'polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)',
    defaultOverlayPosition: {
      x: 50,
      y: 50,
      width: 48,
      height: 85,
      rotation: 0
    }
  }
];
