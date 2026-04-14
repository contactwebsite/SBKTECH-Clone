
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Serrure intelligente' | 'Pointeuse biométrique' | 'Tourniquet tripode' | 'Coffre Fort';
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
  {
    id: 'p3',
    slug: 'lecteur-usb-high',
    name: 'Lecteur Empreinte USB Haute Précision',
    category: 'Pointeuse biométrique',
    price: 850,
    oldPrice: 1500,
    discountPercentage: '43%',
    image: 'https://picsum.photos/seed/bio3/600/800',
    rating: 4.2,
    description: 'Compact et puissant pour PC.',
    features: 'USB 3.0, Scan 360°',
    benefits: 'Portable, Plug & Play'
  },
  {
    id: 'p4',
    slug: 'pack-controle-acces',
    name: 'Pack Contrôle d\'Accès Centralisé X4',
    category: 'Pointeuse biométrique',
    price: 5900,
    oldPrice: 8500,
    discountPercentage: '30%',
    image: 'https://picsum.photos/seed/bio4/600/800',
    rating: 5.0,
    description: 'Solution complète pour entreprise.',
    features: 'Logiciel inclus, 4 Lecteurs',
    benefits: 'Centralisation, Support technique'
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
  },
  {
    id: 't2',
    slug: 'tourniquet-slim-led',
    name: 'Tourniquet Slim LED - Indicateur de Passage',
    category: 'Tourniquet tripode',
    price: 10500,
    oldPrice: 15000,
    discountPercentage: '30%',
    image: 'https://picsum.photos/seed/turn2/600/800',
    rating: 4.8,
    description: 'Design moderne avec signalisation LED.',
    features: 'LED RGB, Passage fluide',
    benefits: 'Guidage visuel, Esthétique'
  },
  {
    id: 't3',
    slug: 'tripode-semi-auto',
    name: 'Tripode Semi-Automatique Haute Sécurité',
    category: 'Tourniquet tripode',
    price: 9200,
    oldPrice: 13500,
    discountPercentage: '32%',
    image: 'https://picsum.photos/seed/turn3/600/800',
    rating: 4.7,
    description: 'Mécanisme haute précision.',
    features: 'Anti-panique, Silencieux',
    benefits: 'Sécurité incendie, Confort'
  },
  {
    id: 't4',
    slug: 'speed-gate-pro',
    name: 'Speed Gate Pro - Couloir Rapide',
    category: 'Tourniquet tripode',
    price: 18900,
    oldPrice: 25000,
    discountPercentage: '24%',
    image: 'https://picsum.photos/seed/turn4/600/800',
    rating: 5.0,
    description: 'Le summum du contrôle d\'accès.',
    features: 'Vantaux motorisés, Capteurs IR',
    benefits: 'Flux ultra-rapide, Design prestigieux'
  }
];
