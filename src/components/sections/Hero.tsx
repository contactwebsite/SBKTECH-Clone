
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[750px] w-full overflow-hidden flex items-center">
      <Image
        src="https://picsum.photos/seed/sbk-hero/1920/1080"
        alt="Smart Security Technology"
        fill
        priority
        className="object-cover brightness-[0.4]"
        data-ai-hint="smart lock"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-6">
          <Badge className="bg-primary/20 text-primary border-primary/30 py-1.5 px-4 text-sm mb-4">
            Innovation & Sécurité 2024
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            L'Avenir de la <span className="text-primary">Sécurité</span> est Entre Vos Mains
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Découvrez nos solutions de serrures intelligentes et biométrie haute précision. La technologie au service de votre sérénité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg h-14 px-8 font-bold rounded-full" asChild>
              <Link href="/catalogue">Explorer le Catalogue</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 font-bold rounded-full backdrop-blur-sm" asChild>
              <Link href="/contact">Demander un Devis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  );
}
