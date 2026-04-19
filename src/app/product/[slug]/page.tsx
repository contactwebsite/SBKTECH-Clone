
"use client";

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { Star, ShieldCheck, Truck, RefreshCcw, Headset, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CODForm from '@/components/product/CODForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { enhanceProductDescription } from '@/ai/flows/ai-enhanced-product-description';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const [aiDescription, setAiDescription] = useState("");
  const [isLoadingAi, setIsLoadingAi] = useState(true);
  const [showSticky, setShowSticky] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!product) return;
    
    async function loadAiDescription() {
      try {
        const result = await enhanceProductDescription({
          productName: product.name,
          description: product.description,
          features: product.features,
          benefits: product.benefits,
        });
        setAiDescription(result.enhancedDescription);
      } catch (error) {
        console.error("AI description failed", error);
        setAiDescription(product.description);
      } finally {
        setIsLoadingAi(false);
      }
    }
    loadAiDescription();

    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [product]);

  if (!product) {
    notFound();
  }

  const faqs = [
    {
      q: "Comment fonctionne la livraison ?",
      a: "La livraison est entièrement gratuite partout au Maroc. Une fois votre commande confirmée par téléphone, vous recevrez votre produit sous 24 à 48 heures."
    },
    {
      q: "Le paiement est-il sécurisé ?",
      a: "Nous utilisons exclusivement le paiement à la livraison (Cash on Delivery). Vous ne payez que lorsque vous recevez et vérifiez votre produit."
    },
    {
      q: "Puis-je retourner le produit ?",
      a: "Oui, vous disposez d'un délai de 14 jours pour retourner le produit s'il ne vous satisfait pas, à condition qu'il soit dans son emballage d'origine."
    },
    {
      q: "Proposez-vous l'installation ?",
      a: "Oui, nous disposons d'une équipe de techniciens experts dans les principales villes du Maroc pour assurer une installation professionnelle."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 lg:pb-0">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Gallery */}
          <section className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card border">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                data-ai-hint="security tech"
              />
              <Badge className="absolute top-6 left-6 bg-red-600 hover:bg-red-700 font-bold px-4 py-1.5 text-lg">
                {product.discountPercentage}
              </Badge>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-xl overflow-hidden bg-muted border hover:border-primary cursor-pointer transition-colors">
                  <Image
                    src={`https://picsum.photos/seed/${product.id}-${i}/200/200`}
                    alt={`${product.name} detail ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Right Info */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-muted'}`} />
                  ))}
                  <span className="text-foreground font-bold ml-2">{product.rating}/5</span>
                </div>
                <span className="text-muted-foreground text-sm border-l pl-4">127 avis clients</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">{product.price.toLocaleString()} MAD</span>
                <span className="text-xl text-muted-foreground line-through decoration-red-500/50">
                  {product.oldPrice.toLocaleString()} MAD
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <CODForm productName={product.name} price={product.price} />

            <div className="grid grid-cols-2 gap-4 py-8 border-t">
              <div className="flex items-start gap-3">
                <Truck className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-sm">Livraison Rapide</p>
                  <p className="text-xs text-muted-foreground">Gratuite partout au Maroc</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-sm">Garantie 2 Ans</p>
                  <p className="text-xs text-muted-foreground">Remplacement immédiat</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCcw className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-sm">Satisfait ou Remboursé</p>
                  <p className="text-xs text-muted-foreground">Retours gratuits sous 14 jours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Headset className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-sm">Support 24/7</p>
                  <p className="text-xs text-muted-foreground">Assistance technique incluse</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Product Details Tabs */}
        <section className="mt-20 pt-20 border-t">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full flex justify-start h-auto bg-transparent border-b rounded-none gap-8 p-0">
              <TabsTrigger 
                value="description" 
                className="px-0 py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none text-lg font-bold"
              >
                Description détaillée
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-10">
              {isLoadingAi ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-8 bg-gray-100 w-1/3 rounded"></div>
                  <div className="h-4 bg-gray-100 w-full rounded"></div>
                  <div className="h-4 bg-gray-100 w-full rounded"></div>
                  <div className="h-4 bg-gray-100 w-2/3 rounded"></div>
                </div>
              ) : (
                <article 
                  className="prose prose-blue max-w-none prose-headings:font-bold prose-headings:text-black prose-h2:text-3xl prose-h3:text-xl space-y-6 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: aiDescription }}
                />
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white border-t mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-16 text-black uppercase tracking-[0.2em]">
              Vos questions, nos réponses
            </h2>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-8 flex justify-between items-center group cursor-pointer hover:bg-gray-50 px-6 transition-colors text-left"
                  >
                    <span className="text-[11px] font-black text-black uppercase tracking-[0.15em]">{faq.q}</span>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-gray-400 group-hover:text-black transition-all duration-300",
                      openFaq === i && "rotate-180 text-black"
                    )} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-8 bg-gray-50/50">
                          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Trillion-Dollar Sticky Bottom Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200 p-4 z-[100] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:px-12"
          >
            <div className="flex flex-col">
              <span className="text-sm font-bold text-black truncate max-w-[150px] md:max-w-none">{product.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground line-through decoration-red-500/50">{product.oldPrice.toLocaleString()} MAD</span>
                <span className="text-sm font-bold text-primary">{product.price.toLocaleString()} MAD</span>
                <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-2 py-0.5 rounded ml-1 uppercase">RÉDUCTION {product.discountPercentage}</span>
              </div>
            </div>
            <button 
              onClick={() => {
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all animate-soft-pulse shadow-lg shadow-amber-500/50 active:scale-95 whitespace-nowrap"
            >
              Commander maintenant
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
