import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous | BALENCIA',
  description: 'Contactez BALENCIA Smart Security au Maroc. Notre équipe est disponible pour vous conseiller sur nos serrures digitales et solutions de sécurité.',
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-black mb-4">
            CONTACTEZ-NOUS
          </h1>
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            Notre équipe est à votre disposition du lundi au samedi, 9h-18h
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">INFORMATIONS</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-black font-bold mt-0.5">📍</span>
                  <div>
                    <p className="font-medium text-black">Adresse</p>
                    <p>Casablanca, Maroc</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-black font-bold mt-0.5">📞</span>
                  <div>
                    <p className="font-medium text-black">Téléphone</p>
                    <p>+212 687 01 43 98</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-black font-bold mt-0.5">✉️</span>
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <p>contact@balencia.ma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-black font-bold mt-0.5">🕐</span>
                  <div>
                    <p className="font-medium text-black">Horaires</p>
                    <p>Lun - Sam: 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">LIVRAISON</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ Livraison gratuite partout au Maroc</p>
                <p>✓ Délai : 24 à 48 heures</p>
                <p>✓ Paiement à la livraison</p>
                <p>✓ Retour gratuit sous 14 jours</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-6">ENVOYEZ UN MESSAGE</h2>
            <form className="space-y-4" action="mailto:contact@balencia.ma" method="get">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Nom complet</label>
                <input type="text" name="name" required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Téléphone</label>
                <input type="tel" name="phone"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="06 87 01 43 98" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Sujet</label>
                <input type="text" name="subject"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Objet de votre message" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Message</label>
                <textarea name="body" rows={5} required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Votre message..." />
              </div>
              <button type="submit"
                className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors">
                ENVOYER LE MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
