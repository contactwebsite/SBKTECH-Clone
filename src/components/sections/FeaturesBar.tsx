import { Fingerprint, Key, Hash, CreditCard, Smartphone } from 'lucide-react';

const features = [
  { icon: Fingerprint, label: 'Empreinte' },
  { icon: Key, label: 'Clé' },
  { icon: Hash, label: 'Code' },
  { icon: CreditCard, label: 'Carte' },
  { icon: Smartphone, label: 'APP' },
];

export default function FeaturesBar() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-700">
                <feature.icon className="w-8 h-8 stroke-[1.5px]" />
              </div>
              <span className="font-bold text-[10px] tracking-widest uppercase text-gray-800">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}