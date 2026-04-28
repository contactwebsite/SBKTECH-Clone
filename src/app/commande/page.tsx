"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CommandePage() {
  const [cart, setCart] = useState<any[]>([]);
  const [form, setForm] = useState({ nom: '', telephone: '', ville: '', adresse: '' });
  const [sent, setSent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save order
    const order = { ...form, cart, total, date: new Date().toISOString() };
    console.log('Order:', order);
    try {
      await fetch('/api/sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'commande_panier', ...form, cart, total }),
      });
    } catch {}
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cart-updated'));
    setSent(true);
  };

  if (sent) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-2xl font-black uppercase tracking-widest text-black mb-4">Commande Confirmée</h1>
        <p className="text-gray-500 mb-8 font-light">Merci ! Nous vous contacterons dans les plus brefs délais.</p>
        <button onClick={() => router.push('/')} className="bg-black text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gray-900 transition-colors">
          Retour à l'accueil
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-light tracking-[0.3em] uppercase text-center text-black mb-16">Finaliser la commande</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h2 className="text-sm font-black uppercase tracking-widest text-black mb-2">Vos informations</h2>
            {[
              { key: 'nom', label: 'Nom complet', type: 'text', placeholder: 'Mohamed Alami' },
              { key: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '06 00 00 00 00' },
              { key: 'ville', label: 'Ville', type: 'text', placeholder: 'Casablanca' },
              { key: 'adresse', label: 'Adresse', type: 'text', placeholder: 'Rue, quartier...' },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key} className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">{label}</label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={(form as any)[key]}
                  onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  className="border border-gray-200 px-4 py-3 text-sm text-black outline-none focus:border-black transition-colors"
                />
              </div>
            ))}
            <div className="bg-gray-50 px-4 py-3 flex items-center gap-3 mt-2">
              <span className="text-lg">🏦</span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black">Paiement à la livraison</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Payez en cash à la réception</p>
              </div>
            </div>
            <button type="submit" className="bg-black text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gray-900 transition-colors mt-4">
              Confirmer la commande — {total.toLocaleString('fr-FR')} DH
            </button>
          </form>

          {/* Cart Summary */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-black mb-6">Récapitulatif</h2>
            <div className="flex flex-col gap-4">
              {cart.map((item, i) => (
                <div key={i} className="flex gap-4 border-b border-gray-50 pb-4">
                  <div className="w-16 h-16 bg-gray-50 flex-shrink-0 overflow-hidden">
                    <img src={item.images?.[0]?.url || item.image || 'https://placehold.co/64x64'} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-wider text-black">{item.name || item.title}</p>
                    <p className="text-sm font-black text-black mt-1">{(item.price || 0).toLocaleString('fr-FR')} DH</p>
                    <p className="text-[10px] text-gray-400">Qté: {item.quantity || 1}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">Total</span>
                <span className="font-black text-black text-lg">{total.toLocaleString('fr-FR')} DH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
