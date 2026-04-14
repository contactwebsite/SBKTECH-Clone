
import { Check, X, ShieldCheck } from 'lucide-react';

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
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">Pourquoi choisir <span className="text-primary">SBKTECH</span> ?</h2>
          <p className="text-muted-foreground text-lg">Comparez et voyez la différence par vous-même.</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border bg-card shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-6 text-left font-bold">Caractéristiques</th>
                <th className="p-6 text-center font-bold text-primary">SBKTECH</th>
                <th className="p-6 text-center font-bold text-muted-foreground">Autres</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {comparison.map((item, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="p-6 text-sm font-medium">{item.feature}</td>
                  <td className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/10 text-muted-foreground/30">
                      {item.others ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
