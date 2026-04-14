import { Check, X } from 'lucide-react';

export default function TrustSection() {
  const comparison = [
    { feature: 'Accès sans clé (Biométrie)', sbk: true, others: false },
    { feature: 'Contrôle à distance via App', sbk: true, others: false },
    { feature: 'Installation professionnelle', sbk: true, others: true },
    { feature: 'Support technique 24/7 au Maroc', sbk: true, others: false },
    { feature: 'Garantie de 2 ans minimum', sbk: true, others: true },
    { feature: 'Résistance aux intempéries IP65', sbk: true, others: false },
  ];

  return (
    <section className="py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Le standard du véritable haut de gamme
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Pourquoi choisir SBKTECH ? Comparez et voyez la différence par vous-même à travers nos services et la qualité de nos produits.
            </p>
          </div>

          <div className="overflow-hidden border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Caractéristiques</th>
                  <th className="p-4 text-center text-xs font-bold uppercase tracking-wider">SBKTECH</th>
                  <th className="p-4 text-center text-xs font-bold uppercase tracking-wider text-gray-400">Autres</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-gray-800">{item.feature}</td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      {item.others ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto opacity-30" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}