"use client";

import { Fingerprint, Key, Hash, CreditCard, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Fingerprint, label: 'Empreinte' },
  { icon: Key, label: 'Clé' },
  { icon: Hash, label: 'Code' },
  { icon: CreditCard, label: 'Carte' },
  { icon: Smartphone, label: 'APP' },
];

export default function FeaturesBar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-300 flex items-center justify-center text-black mb-3 transition-all duration-500 ease-out group-hover:border-black group-hover:-translate-y-2">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5px] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider text-center transition-colors duration-300 group-hover:text-black">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
