export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Serrure intelligente' | 'Pointeuse biométrique' | 'Tourniquet tripode' | 'Coffre Fort' | 'Contrôle d\'accès' | 'Caisse automatique' | 'Imprimante Thermique' | 'Contrôle d\'accès porte' | 'Lecteurs contrôle d\'accès';
  price: number;
  oldPrice: number;
  discountPercentage: string;
  image: string;
  images?: { url: string; alt: string; }[];
  metaDescription?: string;
  detailedDescription?: string;
  reviewCount?: number;
  rating: number;
  rating: number;
  description: string;
  features: string;
  benefits: string;
}

export const products: Product[] = [
  // Serrure intelligente
  {
    id: 's1',
    slug: 'serrure-x9-2026',
    name: 'Serrure Digitale X9 2026 - Ultra Slim',
    category: 'Serrure intelligente',
    price: 1790,
    oldPrice: 3990,
    discountPercentage: '34%',
    image: 'https://picsum.photos/seed/lock1/600/800',
    rating: 4.8,
    description: 'Sécurité maximale avec un design ultra-fin.',
    features: 'Empreinte, Code, Carte, App, Clé',
    benefits: 'Design moderne, Sécurité renforcée'
  },
  {
    id: 's2',
    slug: 'serrure-pro-v2',
    name: 'Serrure Connectée Pro V2 - Gold Edition',
    category: 'Serrure intelligente',
    price: 2100,
    oldPrice: 4500,
    discountPercentage: '53%',
    image: 'https://picsum.photos/seed/lock2/600/800',
    rating: 4.9,
    description: 'La version luxe de notre best-seller.',
    features: 'Reconnaissance faciale, Empreinte, WiFi',
    benefits: 'Prestige, Technologie avancée'
  },
  {
    id: 's3',
    slug: 'poignee-smart-lite',
    name: 'Poignée Smart Lite - Minimaliste',
    category: 'Serrure intelligente',
    price: 1250,
    oldPrice: 2800,
    discountPercentage: '55%',
    image: 'https://picsum.photos/seed/lock3/600/800',
    rating: 4.5,
    description: 'Idéal pour les chambres et bureaux.',
    features: 'Empreinte, Bluetooth',
    benefits: 'Installation facile, Prix abordable'
  },
  // Coffre Fort
  {
    id: 'cf1',
    slug: 'coffre-fort-titan-v1',
    name: 'Coffre-Fort Titan V1 - Haute Sécurité',
    category: 'Coffre Fort',
    price: 4500,
    oldPrice: 7500,
    discountPercentage: '40%',
    image: 'https://picsum.photos/seed/safe1/600/800',
    rating: 5.0,
    description: 'Une protection impénétrable pour vos objets de valeur.',
    features: 'Acier blindé, Empreinte digitale, Clé de secours',
    benefits: 'Anti-feu, Résistance maximale'
  },
  // Pointeuse biométrique
  {
    id: 'p1',
    slug: 'pointeuse-bio-v5',
    name: 'Pointeuse Biométrique Face Recognition V5',
    category: 'Pointeuse biométrique',
    price: 3200,
    oldPrice: 4800,
    discountPercentage: '33%',
    image: 'https://picsum.photos/seed/bio1/600/800',
    rating: 4.9,
    description: 'Gestion du temps sans contact.',
    features: 'Visage, Empreinte, Carte',
    benefits: 'Hygiénique, Export Excel'
  },
  // Contrôle d'accès porte
  {
    id: 'cap1',
    slug: 'serrure-magnetique-600',
    name: 'Ventouse Magnétique 600kg Pro',
    category: 'Contrôle d\'accès porte',
    price: 1850,
    oldPrice: 2400,
    discountPercentage: '23%',
    image: 'https://picsum.photos/seed/mag1/600/800',
    rating: 4.8,
    description: 'Force de maintien extrême pour portes sécurisées.',
    features: 'Acier inox, LED indicateur',
    benefits: 'Inviolable, Installation discrète'
  },
  // Lecteurs contrôle d'accès
  {
    id: 'lca1',
    slug: 'lecteur-rfid-premium',
    name: 'Lecteur RFID Premium - Black Glass',
    category: 'Lecteurs contrôle d\'accès',
    price: 950,
    oldPrice: 1500,
    discountPercentage: '36%',
    image: 'https://picsum.photos/seed/reader1/600/800',
    rating: 4.7,
    description: 'Lecteur de badges ultra-rapide au design épuré.',
    features: 'Wiegand, IP66, Rétroéclairé',
    benefits: 'Esthétique, Résistant'
  },
  // Caisse automatique
  {
    id: 'c1',
    slug: 'caisse-auto-smart',
    name: 'Caisse Automatique Smart Pay - 2026',
    category: 'Caisse automatique',
    price: 15900,
    oldPrice: 22000,
    discountPercentage: '28%',
    image: 'https://picsum.photos/seed/pos1/600/800',
    rating: 4.8,
    description: 'Simplifiez vos transactions avec élégance.',
    features: 'Écran tactile 4K, Paiement NFC, Ticket thermique',
    benefits: 'Efficacité, Design compact'
  },
  // Imprimante Thermique
  {
    id: 'it1',
    slug: 'imprimante-thermique-pro',
    name: 'Imprimante Thermique Pro - Ultra Rapide',
    category: 'Imprimante Thermique',
    price: 1450,
    oldPrice: 2800,
    discountPercentage: '48%',
    image: 'https://picsum.photos/seed/print1/600/800',
    rating: 4.7,
    description: 'Des impressions nettes et instantanées.',
    features: 'Bluetooth, USB-C, 250mm/s',
    benefits: 'Économique, Durable'
  },
  // Tourniquet tripode
  {
    id: 't1',
    slug: 'tourniquet-classic-t1',
    name: 'Tourniquet Tripode Classic T1 - Acier Inox',
    category: 'Tourniquet tripode',
    price: 8500,
    oldPrice: 12000,
    discountPercentage: '29%',
    image: 'https://picsum.photos/seed/turn1/600/800',
    rating: 4.9,
    description: 'Robuste et fiable pour flux intenses.',
    features: 'Inox 304, Bidirectionnel',
    benefits: 'Longue durée de vie, Maintenance réduite'
  }
];
