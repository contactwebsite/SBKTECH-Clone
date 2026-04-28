"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', telephone: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/sheet', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'contact', ...form }) });
    } catch {}
    setLoading(false);
    setSent(true);
  };

  if (sent) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
        <h1 className="text-2xl font-black uppercase tracking-widest text-black mb-4">Message Envoyé</h1>
        <p className="text-gray-500 font-light">Merci ! Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-black mb-4">CONTACTEZ-NOUS</h1>
          <p className="text-gray-500 text-sm font-medium tracking-wide">Notre équipe est à votre disposition du lundi au samedi, 9h-18h</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">INFORMATIONS</h2>
              <div className="space-y-4 text-sm text-gray-600">
                {[['📍','Adresse','Casablanca, Maroc'],['📞','Téléphone','+212 687 01 43 98'],['✉️','Email','contact@balencia.ma'],['🕐','Horaires','Lun - Sam: 9h00 - 18h00']].map(([icon,label,val])=>(
                  <div key={String(label)} className="flex items-start gap-3">
                    <span className="mt-0.5">{icon}</span>
                    <div><p className="font-medium text-black">{label}</p><p>{val}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">LIVRAISON</h2>
              <div className="space-y-2 text-sm text-gray-600">
                {['Livraison gratuite partout au Maroc','Délai : 24 à 48 heures','Paiement à la livraison','Retour gratuit sous 14 jours'].map(t=>(
                  <p key={t}>✓ {t}</p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-6">ENVOYEZ UN MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[{key:'nom',label:'Nom complet',type:'text',placeholder:'Votre nom',req:true},{key:'telephone',label:'Téléphone',type:'tel',placeholder:'06 87 01 43 98',req:false},{key:'sujet',label:'Sujet',type:'text',placeholder:'Objet de votre message',req:false}].map(({key,label,type,placeholder,req})=>(
                <div key={key}>
                  <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">{label}</label>
                  <input type={type} required={req} placeholder={placeholder} value={(form as any)[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"/>
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Message</label>
                <textarea required rows={5} placeholder="Votre message..." value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"/>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors disabled:opacity-50">
                {loading ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
