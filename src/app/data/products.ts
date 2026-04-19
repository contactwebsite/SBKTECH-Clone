export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Serrure intelligente' | 'Pointeuse biométrique' | 'Tourniquet tripode' | 'Coffre Fort' | 'Contrôle d\'accès' | 'Caisse automatique' | 'Imprimante Thermique';
  price: number;
  oldPrice: number;
  discountPercentage: string;
  image: string;
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
  {
    id: 's4',
    slug: 'serrure-porte-verre',
    name: 'Serrure Spéciale Porte en Verre G1',
    category: 'Serrure intelligente',
    price: 1850,
    oldPrice: 3200,
    discountPercentage: '42%',
    image: 'https://picsum.photos/seed/lock4/600/800',
    rating: 4.7,
    description: 'Conçue spécifitiement pour le tertiaire.',
    features: 'Badge, Code, Télécommande',
    benefits: 'Sans perçage, Esthétique'
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
  {
    id: 'cf2',
    slug: 'coffre-luxe-biometrique',
    name: 'Coffre de Luxe Biométrique - Premium Silver',
    category: 'Coffre Fort',
    price: 6200,
    oldPrice: 9800,
    discountPercentage: '37%',
    image: 'https://picsum.photos/seed/safe2/600/800',
    rating: 4.9,
    description: 'L\'élégance alliée à la sécurité absolue.',
    features: 'Revêtement cuir intérieur, LED, Biométrie',
    benefits: 'Discrétion, Prestige'
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
  {
    id: 'p2',
    slug: 'pointeuse-cloud-wifi',
    name: 'Pointeuse Cloud WiFi - Gestion Mobile',
    category: 'Pointeuse biométrique',
    price: 2800,
    oldPrice: 4200,
    discountPercentage: '33%',
    image: 'https://picsum.photos/seed/bio2/600/800',
    rating: 4.8,
    description: 'Synchronisation automatique sur le cloud.',
    features: 'WiFi, Batterie intégrée',
    benefits: 'Accès distant, Sécurité données'
  },
  // Contrôle d'accès
  {
    id: 'ca1',
    slug: 'controle-acces-faciale',
    name: 'Système de Contrôle d\'Accès Faciale AI',
    category: 'Contrôle d\'accès',
    price: 5400,
    oldPrice: 8200,
    discountPercentage: '34%',
    image: 'https://picsum.photos/seed/access1/600/800',
    rating: 5.0,
    description: 'Identifiez vos collaborateurs en moins d\'une seconde.',
    features: 'AI Recognition, Log instantané, IP65',
    benefits: 'Rapidité, Haute fiabilité'
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