"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/sheet', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'newsletter', email }) });
    } catch {}
    setLoading(false);
    setDone(true);
  };

  if (done) return (
    <div className="space-y-4">
      <h3 className="font-black uppercase text-[10px] tracking-[0.2em] text-gray-500">Subscribe to our emails</h3>
      <p className="text-green-400 text-sm font-medium">✓ Merci pour votre inscription !</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <h3 className="font-black uppercase text-[10px] tracking-[0.2em] text-gray-500">Subscribe to our emails</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"
          className="bg-transparent border border-gray-700 px-4 h-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"/>
        <button type="submit" disabled={loading}
          className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase text-[10px] tracking-widest h-12 transition-all disabled:opacity-50">
          {loading ? '...' : "S'inscrire"}
        </button>
      </form>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-20 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-sans font-black text-3xl md:text-4xl tracking-[0.25em] text-white uppercase leading-none">BALENCIA</span>
              <span className="font-sans font-medium text-[0.6rem] tracking-[0.4em] text-gray-400 uppercase mt-2 leading-none">L'ÉLÉGANCE DE LA SÉCURITÉ</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">Votre partenaire d'excellence pour la sécurité technologique au Maroc. Solutions de luxe pour résidences et entreprises.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase text-[10px] tracking-[0.2em] mb-8 text-gray-500">Liens utiles</h3>
            <ul className="space-y-4 text-sm">
              {[['/',  'Accueil'],['/category/serrure-intelligente','Poignée Digital'],['/category/coffre-fort','Coffre-fort'],['/catalogue','Catalogue'],['/contact','Contactez-nous'],['/a-propos','À Propos'],['/politique-confidentialite','Politique de Confidentialité'],['/conditions-utilisation',"Conditions d'Utilisation"]].map(([href,name])=>(
                <li key={href}><Link href={href} className="text-gray-300 hover:text-white transition-colors tracking-wide">{name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6"><NewsletterForm /></div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-[9px] text-gray-500 uppercase tracking-[0.3em]">
          <p>© 2026 BALENCIA SECURITY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
