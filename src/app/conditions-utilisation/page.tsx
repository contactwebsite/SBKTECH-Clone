import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | BALENCIA",
  description: "Conditions générales d'utilisation et de vente de BALENCIA Smart Security au Maroc.",
}

export default function ConditionsUtilisationPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-light tracking-[0.2em] uppercase text-black mb-4">
            CONDITIONS D'UTILISATION
          </h1>
          <p className="text-gray-400 text-xs uppercase tracking-wider">Dernière mise à jour : Janvier 2026</p>
        </header>

        <div className="space-y-8 text-gray-600">
          {[
            { title: '1. ACCEPTATION DES CONDITIONS', content: 'En accédant et en utilisant le site BALENCIA Smart Security, vous acceptez d\'être lié par les présentes conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre site.' },
            { title: '2. PRODUITS ET PRIX', content: 'Tous les prix affichés sur notre site sont en Dirhams Marocains (MAD) et incluent la TVA. Nous nous réservons le droit de modifier nos prix à tout moment. Les commandes sont confirmées au prix affiché au moment de la commande.' },
            { title: '3. COMMANDES ET PAIEMENT', content: 'Les commandes sont passées en ligne et confirmées par téléphone. Le paiement s\'effectue à la livraison (Cash on Delivery). Nous n\'acceptons pas les paiements en ligne pour votre sécurité.' },
            { title: '4. LIVRAISON', content: 'La livraison est gratuite partout au Maroc. Les délais de livraison sont de 24 à 48 heures ouvrables selon votre région. BALENCIA Smart Security ne peut être tenu responsable des retards dus à des circonstances indépendantes de notre volonté.' },
            { title: '5. RETOURS ET REMBOURSEMENTS', content: 'Vous disposez de 14 jours à compter de la réception de votre commande pour retourner un produit. Le produit doit être dans son état d\'origine, non utilisé et dans son emballage d\'origine. Les frais de retour sont pris en charge par BALENCIA.' },
            { title: '6. GARANTIE', content: 'Tous nos produits bénéficient d\'une garantie de 2 ans contre les défauts de fabrication. La garantie ne couvre pas les dommages résultant d\'une mauvaise utilisation, d\'accidents ou de modifications non autorisées.' },
            { title: '7. PROPRIÉTÉ INTELLECTUELLE', content: 'Le contenu de ce site (textes, images, logos) est protégé par le droit marocain de la propriété intellectuelle. Toute reproduction non autorisée est interdite.' },
            { title: '8. CONTACT', content: 'Pour toute question : Email : contact@balencia.ma | Téléphone : +212 6XX XX XX XX | Adresse : Casablanca, Maroc' },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-3 border-b border-gray-100 pb-2">{section.title}</h2>
              <p className="text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
