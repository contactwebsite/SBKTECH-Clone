
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SBKTECH</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre partenaire de confiance pour la sécurité technologique au Maroc. Solutions innovantes pour maisons et entreprises.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produits</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Serrures Intelligentes</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Pointeuses Biométriques</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Coffres Forts</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Nouveautés</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Assistance</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contactez-nous</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Livraison & Retours</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Guide d'installation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Abonnez-vous pour recevoir nos offres exclusives.</p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-background"
                required
              />
              <Button className="w-full">S'abonner</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2024 SBKTECH Clone. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
