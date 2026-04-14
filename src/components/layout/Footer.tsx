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
            <span className="text-4xl font-black tracking-tighter text-white">SBKTECH</span>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Votre partenaire de confiance pour la sécurité technologique au Maroc. Solutions innovantes pour maisons et entreprises.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-bold uppercase text-xs tracking-widest mb-8 text-gray-500">Liens utiles</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/category/serrure-intelligente" className="text-gray-300 hover:text-white transition-colors">Poignée Digital</Link></li>
              <li><Link href="/category/coffre-fort" className="text-gray-300 hover:text-white transition-colors">Coffre-fort</Link></li>
              <li><Link href="/catalogue" className="text-gray-300 hover:text-white transition-colors">Catalogue</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase text-xs tracking-widest text-gray-500">Subscribe to our emails</h3>
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent border-gray-600 rounded-none focus:ring-white h-12 text-white placeholder:text-gray-600"
              />
              <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase text-xs h-12">
                Sign up
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2024 SBKTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}