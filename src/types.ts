export interface MaterialItem {
  id: string;
  name: string;
  source: string;
  description: string;
  properties: string[];
  image: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface StructuredFormat {
  id: string;
  name: string;
  extension: string;
  description: string;
  content: string;
}

export interface GraphNode {
  id: string;
  label: string;
  category: 'brand' | 'source' | 'product' | 'social' | 'method';
  details: string;
  x: number;
  y: number;
}

export interface GraphLink {
  source: string;
  target: string;
  label: string;
}
