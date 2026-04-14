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
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center text-black mb-3 transition-all duration-500 ease-out group-hover:border-black group-hover:-translate-y-2">
                <feature.icon className="w-10 h-10 stroke-[1.5px] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-center transition-colors duration-300 group-hover:text-black">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
