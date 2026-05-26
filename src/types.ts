export interface Weaver {
  id: string;
  name: string;
  location: string;
  district: 'Raipur' | 'Dhamtari' | 'Durg';
  story: string;
  specialty: string;
  yearsOfExperience: number;
  imageUrl: string;
}

export interface Fabric {
  id: string;
  name: string;
  source: 'Banana Stem' | 'Flax Stalks' | 'Bamboo' | 'Organic Cotton';
  description: string;
  hexValue: string; // fallback color
  textureUrl: string; // fabric texture swatch URL
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'bedsheet' | 'pillow_cover' | 'curtain';
  fibers: ('Banana' | 'Linen' | 'Bamboo' | 'Organic Cotton')[];
  price: number;
  rating: number;
  features: string[];
  description: string;
  imageUrl: string;
  defaultFabricId: string;
}

export interface TryOnPreset {
  id: string;
  type: 'bed' | 'window';
  name: string;
  imageUrl: string;
  // Area defining where the fabric overlay should be placed (normalized coordinates or simple SVG clip path)
  clipPath: string; 
  defaultOverlayPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
  };
}
