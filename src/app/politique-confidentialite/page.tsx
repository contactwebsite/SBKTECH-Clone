import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | BALENCIA',
  description: 'Politique de confidentialité de BALENCIA Smart Security. Comment nous collectons et protégeons vos données personnelles.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-light tracking-[0.2em] uppercase text-black mb-4">
            POLITIQUE DE CONFIDENTIALITÉ
          </h1>
          <p className="text-gray-400 text-xs uppercase tracking-wider">Dernière mise à jour : Janvier 2026</p>
        </header>

        <div className="prose prose-sm max-w-none space-y-8 text-gray-600">
          {[
            { title: '1. COLLECTE DES DONNÉES', content: 'BALENCIA Smart Security collecte uniquement les données nécessaires au traitement de vos commandes : nom, prénom, numéro de téléphone et adresse de livraison. Ces données sont collectées lors de votre commande sur notre site.' },
            { title: '2. UTILISATION DES DONNÉES', content: 'Vos données personnelles sont utilisées exclusivement pour : le traitement et la livraison de vos commandes, vous contacter concernant votre commande, améliorer nos services. Nous ne vendons jamais vos données à des tiers.' },
            { title: '3. PROTECTION DES DONNÉES', content: 'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.' },
            { title: '4. COOKIES', content: 'Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Certaines fonctionnalités du site peuvent ne plus fonctionner correctement sans cookies.' },
            { title: '5. VOS DROITS', content: 'Conformément à la loi marocaine 09-08 relative à la protection des personnes physiques, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : contact@balencia.ma' },
            { title: '6. CONTACT', content: 'Pour toute question relative à notre politique de confidentialité, contactez-nous : Email : contact@balencia.ma | Téléphone : +212 687 01 43 98' },
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
