
import Hero from '@/components/sections/Hero';
import FeaturesBar from '@/components/sections/FeaturesBar';
import TrustSection from '@/components/sections/TrustSection';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/app/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ChevronDown, Play } from 'lucide-react';

export default function Home() {
  const serrures = products.filter(p => p.category === 'Serrure intelligente').slice(0, 4);
  const pointeuses = products.filter(p => p.category === 'Pointeuse biométrique').slice(0, 4);
  const tourniquets = products.filter(p => p.category === 'Tourniquet tripode').slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <FeaturesBar />

      {/* SECTION: Serrure intelligente */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Serrure intelligente
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {serrures.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-black hover:bg-gray-900 text-white px-10 py-6 rounded-none uppercase text-xs font-bold tracking-widest">
              <Link href="/category/serrure-intelligente">Tout afficher</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION: Pointeuse biométrique */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Pointeuse biométrique
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {pointeuses.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-black hover:bg-gray-900 text-white px-10 py-6 rounded-none uppercase text-xs font-bold tracking-widest">
              <Link href="/category/pointeuse-biometrique">Tout afficher</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION: Tourniquet tripode */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Tourniquet tripode
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {tourniquets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-black hover:bg-gray-900 text-white px-10 py-6 rounded-none uppercase text-xs font-bold tracking-widest">
              <Link href="/category/tourniquet-tripode">Tout afficher</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION 1: Image Left, Text Right */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square relative bg-gray-100">
            <Image
              src="https://picsum.photos/seed/home-security/800/800"
              alt="Votre maison sécurisée"
              fill
              className="object-cover"
              data-ai-hint="smart home"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-black leading-tight">
              Votre maison. Votre sécurité. Votre tranquillité.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ouvrez, contrôlez et protégez votre maison en un seul geste. Nos solutions intelligentes s'adaptent à votre style de vie pour vous offrir une sérénité totale, que vous soyez chez vous ou à l'autre bout du monde.
            </p>
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-none uppercase text-xs font-bold tracking-widest h-auto">
              Découvrir nos produits
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION 2: Text Left, Image Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 px-8">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square relative bg-gray-100">
            <Image
              src="https://picsum.photos/seed/tech-security/800/800"
              alt="Technologie SBKTECH"
              fill
              className="object-cover"
              data-ai-hint="security tech"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-black leading-tight">
              La sécurité intelligente commence ici.
            </h2>
            <div className="space-y-4">
              {[
                "Serrures digitales de dernière génération",
                "Accès biométrique ultra-rapide (0.3s)",
                "Installation professionnelle certifiée"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-bold text-black">
              Sécurité. Confort. Tranquillité.
            </p>
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-none uppercase text-xs font-bold tracking-widest h-auto">
              Découvrir les solutions SBKTECH
            </Button>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-black uppercase tracking-widest">
            Ils nous font confiance
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[9/16] bg-gray-200 relative group cursor-pointer overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/testimonial-${i}/400/711`}
                  alt={`Témoignage ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-black fill-current ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-black uppercase tracking-widest">
            Vos questions, nos réponses
          </h2>
          <div className="max-w-4xl mx-auto space-y-0">
            {[
              "Pourquoi devrais-je acheter chez SBKTech ?",
              "Quels sont les modes de paiement acceptés ?",
              "Comment se passe l'installation de ma serrure ?",
              "Quelle est la durée de la garantie ?",
              "Livrez-vous partout au Maroc ?"
            ].map((question, i) => (
              <div key={i} className="border-b border-gray-200 py-6 flex justify-between items-center group cursor-pointer hover:bg-gray-50 px-4 transition-colors">
                <span className="text-sm font-bold text-black uppercase tracking-wider">{question}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
    </div>
  );
}
