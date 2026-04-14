
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Serrure intelligente' | 'Pointeuse biométrique' | 'Coffre Fort';
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
  {
    id: '1',
    slug: 'serrure-smart-pro-x1',
    name: 'Serrure Connectée Pro X1 - Empreinte & App',
    category: 'Serrure intelligente',
    price: 1890,
    oldPrice: 2700,
    discountPercentage: 'Economisez 30%',
    image: 'https://picsum.photos/seed/lock1/600/600',
    rating: 4.8,
    description: 'Une serrure intelligente ultra-sécurisée avec reconnaissance d\'empreintes digitales en 0.3s.',
    features: 'Reconnaissance biométrique, Contrôle via application mobile, Clé de secours physique, Code PIN temporaire',
    benefits: 'Accès sans clé, Sécurité maximale, Historique des entrées en temps réel'
  },
  {
    id: '2',
    slug: 'poignee-digitale-s2',
    name: 'Poignée Digitale S2 - Clavier Tactile',
    category: 'Serrure intelligente',
    price: 1450,
    oldPrice: 2100,
    discountPercentage: 'Economisez 31%',
    image: 'https://picsum.photos/seed/lock2/600/600',
    rating: 4.5,
    description: 'Poignée élégante avec clavier tactile rétroéclairé et accès par carte RFID.',
    features: 'Clavier tactile anti-espion, Lecteur de carte RFID, Installation facile sans perçage',
    benefits: 'Design moderne, Idéal pour bureaux et chambres, Autonomie de 12 mois'
  },
  {
    id: '3',
    slug: 'pointeuse-bio-face-v5',
    name: 'Pointeuse Biométrique Face Recognition V5',
    category: 'Pointeuse biométrique',
    price: 3200,
    oldPrice: 4500,
    discountPercentage: 'Economisez 28%',
    image: 'https://picsum.photos/seed/bio1/600/600',
    rating: 4.9,
    description: 'Système de gestion du temps avec reconnaissance faciale et thermique avancée.',
    features: 'Double caméra IR, Exportation USB/Réseau, Supporte 3000 visages, Ecran couleur 4.3"',
    benefits: 'Gestion simplifiée des employés, Zéro fraude, Hygiénique (sans contact)'
  },
  {
    id: '4',
    slug: 'scanner-empreinte-desktop',
    name: 'Lecteur Empreinte USB Haute Précision',
    category: 'Pointeuse biométrique',
    price: 850,
    oldPrice: 1200,
    discountPercentage: 'Economisez 29%',
    image: 'https://picsum.photos/seed/bio2/600/600',
    rating: 4.2,
    description: 'Petit scanner d\'empreintes digitales pour une authentification PC sécurisée.',
    features: 'Certification Windows Hello, Lecture à 360 degrés, Design compact en aluminium',
    benefits: 'Connexion rapide, Protection des données sensibles, Plus besoin de mots de passe'
  },
  {
    id: '5',
    slug: 'coffre-fort-titan-80',
    name: 'Coffre Fort Titan 80 - Biométrique & Feu',
    category: 'Coffre Fort',
    price: 5900,
    oldPrice: 8500,
    discountPercentage: 'Economisez 30%',
    image: 'https://picsum.photos/seed/safe1/600/600',
    rating: 5.0,
    description: 'Coffre-fort blindé résistant au feu et aux effractions avec serrure biométrique.',
    features: 'Acier massif 10mm, Résistance au feu 60min, Verrouillage par empreinte et code',
    benefits: 'Protection ultime de vos biens, Tranquillité d\'esprit totale, Capacité 80L'
  },
  {
    id: '6',
    slug: 'coffre-fort-compact-home',
    name: 'Coffre Fort Compact Home - Digital',
    category: 'Coffre Fort',
    price: 1200,
    oldPrice: 1800,
    discountPercentage: 'Economisez 33%',
    image: 'https://picsum.photos/seed/safe2/600/600',
    rating: 4.6,
    description: 'Coffre-fort domestique compact idéal pour les documents et petits objets de valeur.',
    features: 'Clavier numérique, Clés d\'urgence incluses, Trous de fixation pré-percés',
    benefits: 'Installation discrète, Facile d\'utilisation, Format optimisé pour placards'
  }
];
