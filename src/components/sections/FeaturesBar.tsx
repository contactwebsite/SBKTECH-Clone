
import { Fingerprint, Key, Hash, CreditCard, Smartphone } from 'lucide-react';

const features = [
  { icon: Fingerprint, label: 'Empreinte' },
  { icon: Key, label: 'Clé de secours' },
  { icon: Hash, label: 'Code PIN' },
  { icon: CreditCard, label: 'Carte RFID' },
  { icon: Smartphone, label: 'Application Mobile' },
];

export default function FeaturesBar() {
  return (
    <div className="bg-card border-y py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform hover:scale-110">
                <feature.icon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm tracking-wide">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
