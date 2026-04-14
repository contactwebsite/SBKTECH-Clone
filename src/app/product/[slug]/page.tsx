
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { Star, ShieldCheck, Truck, RefreshCcw, Headset } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CODForm from '@/components/product/CODForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { enhanceProductDescription } from '@/ai/flows/ai-enhanced-product-description';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // GenAI call for enhanced description
  const aiResult = await enhanceProductDescription({
    productName: product.name,
    description: product.description,
    features: product.features,
    benefits: product.benefits,
  });

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.image],
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "SBKTECH"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://sbktech-clone.vercel.app/product/${product.slug}`,
      "priceCurrency": "MAD",
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": "127"
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

          <CODForm productName={product.name} />

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
            <TabsTrigger 
              value="specs" 
              className="px-0 py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none text-lg font-bold"
            >
              Fiche technique
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-10">
            <article 
              className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:text-primary prose-h2:text-3xl prose-h3:text-xl space-y-6"
              dangerouslySetInnerHTML={{ __html: aiResult.enhancedDescription }}
            />
          </TabsContent>
          <TabsContent value="specs" className="py-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Spécifications Techniques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {product.features.split(',').map((feat, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{feat.trim()}</span>
                    <span className="font-semibold text-primary">Inclus</span>
                  </div>
                ))}
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Alimentation</span>
                  <span className="font-semibold">4x Piles AA</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Matériau</span>
                  <span className="font-semibold">Alliage de Zinc</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Étanchéité</span>
                  <span className="font-semibold">IP65</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
