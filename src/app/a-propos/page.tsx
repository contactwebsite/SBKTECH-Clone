import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos | BALENCIA Smart Security',
  description: 'BALENCIA Smart Security - Leader en solutions de sécurité intelligente au Maroc. Découvrez notre histoire et notre mission.',
}

export default function AProposPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-black mb-4">
            À PROPOS
          </h1>
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            L'élégance de la sécurité intelligente au Maroc
          </p>
        </header>

        <div className="space-y-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4 border-b border-gray-100 pb-3">NOTRE HISTOIRE</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              BALENCIA Smart Security est née d'une vision simple : rendre la sécurité intelligente accessible à tous les foyers et entreprises marocains. Depuis notre création, nous nous sommes imposés comme le référentiel de confiance en matière de serrures digitales, pointeuses biométriques et coffres-forts au Maroc.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4 border-b border-gray-100 pb-3">NOTRE MISSION</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Protéger ce qui compte le plus pour vous. Nous proposons des solutions de sécurité haut de gamme, alliant technologie de pointe et design élégant, pour sécuriser vos espaces résidentiels et professionnels.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-6 border-b border-gray-100 pb-3">NOS ENGAGEMENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🛡️', title: 'Qualité Premium', desc: 'Produits certifiés aux normes internationales les plus strictes.' },
                { icon: '��', title: 'Livraison Gratuite', desc: 'Livraison offerte partout au Maroc en 24 à 48 heures.' },
                { icon: '💳', title: 'Paiement à la livraison', desc: 'Commandez en toute confiance, payez à réception.' },
                { icon: '🔄', title: 'Retour Gratuit', desc: 'Retours acceptés sous 14 jours sans conditions.' },
                { icon: '📞', title: 'Support 24/7', desc: 'Notre équipe est disponible pour vous accompagner.' },
                { icon: '✅', title: 'Garantie 2 Ans', desc: 'Tous nos produits sont garantis 2 ans pièces et main-d\'œuvre.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 rounded-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-black mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
