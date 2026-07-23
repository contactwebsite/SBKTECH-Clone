import { Check, X } from 'lucide-react';

export default function TrustSection() {
  const comparison = [
    { 
      feature: 'Batterie haute capacité 5000 mAh – Autonomie longue durée', 
      MegaDealTech: true, 
      others: false 
    },
    { 
      feature: 'Guide et assistant vocal entièrement en français', 
      MegaDealTech: true, 
      others: false 
    },
    { 
      feature: 'Déverrouillage biométrique par reconnaissance palmaire', 
      MegaDealTech: true, 
      others: false 
    },
    { 
      feature: 'Surveillance vidéo à distance + interphone intégré', 
      MegaDealTech: true, 
      others: false 
    },
    { 
      feature: 'TUYA – Contrôle exclusif des ouvertures à distance (si activé)', 
      MegaDealTech: true, 
      others: false 
    },
    { 
      feature: 'Double authentification (2FA) – Sécurité maximale', 
      MegaDealTech: true, 
      others: false 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* الجانب الأيسر - العنوان والوصف */}
          <div className="lg:col-span-4 pt-4">
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-black mb-6 uppercase tracking-tight">
              Le standard du véritable haut de gamme
            </h2>
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">
              Pourquoi choisir MegaDealTech ? Comparez et voyez la différence par vous-même.
            </p>
          </div>

          {/* الجانب الأيمن - جدول المقارنة بالميزات الـ 6 الجديدة */}
          <div className="lg:col-span-8 border border-gray-100 shadow-sm rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-gray-50 text-[9px] font-black uppercase tracking-[0.2em]"></th>
                  <th className="p-4 text-center bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] min-w-[120px]">
                    MegaDealTech
                  </th>
                  <th className="p-4 text-center bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] min-w-[100px]">
                    Autres
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4 text-xs md:text-sm font-semibold text-gray-900 leading-snug">
                      {item.feature}
                    </td>
                    <td className="p-4 text-center bg-emerald-50/20">
                      <Check className="h-5 w-5 text-emerald-600 mx-auto stroke-[2.5px]" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto stroke-[2.5px]" />
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