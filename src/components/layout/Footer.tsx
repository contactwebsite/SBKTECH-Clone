import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-20 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-black text-4xl tracking-[0.2em] uppercase text-white">BALENCIA</span>
              <p className="mt-2 text-sm text-gray-400 tracking-wider">L'ÉLÉGANCE DE LA SÉCURITÉ</p>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Votre partenaire d'excellence pour la sécurité technologique au Maroc. Solutions de luxe pour résidences et entreprises.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-black uppercase text-[10px] tracking-[0.2em] mb-8 text-gray-500">Liens utiles</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors tracking-wide">Accueil</Link></li>
              <li><Link href="/category/serrure-intelligente" className="text-gray-300 hover:text-white transition-colors tracking-wide">Poignée Digital</Link></li>
              <li><Link href="/category/coffre-fort" className="text-gray-300 hover:text-white transition-colors tracking-wide">Coffre-fort</Link></li>
              <li><Link href="/catalogue" className="text-gray-300 hover:text-white transition-colors tracking-wide">Catalogue</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors tracking-wide">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <h3 className="font-black uppercase text-[10px] tracking-[0.2em] text-gray-500">Subscribe to our emails</h3>
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent border-gray-700 rounded-none focus:ring-white h-12 text-white placeholder:text-gray-600"
              />
              <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase text-[10px] tracking-widest h-12 transition-all">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-[9px] text-gray-500 uppercase tracking-[0.3em]">
          <p>© 2024 BALENCIA SECURITY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
