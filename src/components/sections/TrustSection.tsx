import { Check, X } from 'lucide-react';

export default function TrustSection() {
  const comparison = [
    { feature: 'Accès sans clé (Biométrie)', balencia: true, others: false },
    { feature: 'Contrôle à distance via App', balencia: true, others: false },
    { feature: 'Installation professionnelle', balencia: true, others: true },
    { feature: 'Support technique 24/7 au Maroc', balencia: true, others: false },
    { feature: 'Garantie de 2 ans minimum', balencia: true, others: true },
    { feature: 'Résistance aux intempéries IP65', balencia: true, others: false },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="pt-4">
            <h2 className="text-4xl font-bold leading-tight text-black mb-6 uppercase tracking-tight">
              Le standard du véritable haut de gamme
            </h2>
            <p className="text-xs text-gray-500 max-w-sm uppercase tracking-[0.2em] font-bold">
              Pourquoi choisir BALENCIA ? Comparez et voyez la différence par vous-même.
            </p>
          </div>

          <div className="border border-gray-100 shadow-none">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em]"></th>
                  <th className="p-4 text-center bg-black text-white text-[10px] font-black uppercase tracking-[0.2em]">BALENCIA</th>
                  <th className="p-4 text-center bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Autres</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-[11px] font-bold text-gray-900 uppercase tracking-wide">{item.feature}</td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      {item.others ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto opacity-20" />
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
