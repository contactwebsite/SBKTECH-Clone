import React from 'react';
import { Star, CheckCircle, User } from 'lucide-react';
import { useI18n } from './i18n';

const Testimonials: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden border-t border-slate-900">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-brand-gold text-lg md:text-xl font-medium">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:flex-wrap md:justify-center no-scrollbar">
          {t.testimonials.items.map((item, index) => (
            <div 
              key={index}
              className={`
                shrink-0 w-[85vw] md:w-auto snap-center 
                bg-[#111a2e] border border-brand-gold/20 rounded-2xl p-6 md:p-8 
                shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] 
                transition-all duration-300 transform hover:-translate-y-1
                flex flex-col md:col-span-1
                ${index >= 3 ? 'md:w-[calc(50%-12px)] md:max-w-md' : ''}
              `}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(index === 3 ? 4 : 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />
                ))}
                 {index === 3 && <Star className="w-4 h-4 text-slate-600 fill-current" />}
              </div>

              <p className="text-white text-base leading-relaxed mb-6 flex-grow">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                   <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <span className="text-slate-500 text-xs">• {item.city}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] text-green-500 font-medium uppercase tracking-wide">
                      {t.testimonials.verified}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
