import React from 'react';
import { ScanFace, Settings2, Hand, ShieldCheck, Sparkles } from 'lucide-react';
import { useI18n } from './i18n';

const Gallery: React.FC = () => {
  const { t } = useI18n();

  const items = [
    {
      img: "https://i.imgur.com/57r4FjP.png",
      title: t.gallery.items[0].title,
      subtitle: t.gallery.items[0].sub,
      subStrike: t.gallery.items[0].subStrike,
      icon: ScanFace
    },
    {
      img: "https://i.imgur.com/o7cBzyM.png",
      title: t.gallery.items[1].title,
      subtitle: t.gallery.items[1].sub,
      subStrike: t.gallery.items[1].subStrike,
      icon: Settings2
    },
    {
      img: "https://i.imgur.com/BhGg6q6.png",
      title: t.gallery.items[2].title,
      subtitle: t.gallery.items[2].sub,
      subStrike: t.gallery.items[2].subStrike,
      icon: Hand
    },
    {
      img: "https://i.imgur.com/QPs3HE2.png", 
      title: t.gallery.items[3].title,
      subtitle: t.gallery.items[3].sub,
      subStrike: t.gallery.items[3].subStrike,
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-midnight/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-brand-gold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold">{t.gallery.tag}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.gallery.title} <span className="text-brand-gold">{t.gallery.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-brand-gold/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden relative border-b border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"/>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-brand-gold shadow-lg">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center bg-slate-900 relative z-20">
                <h3 className={`font-bold text-white mb-2 group-hover:text-brand-gold transition-colors leading-tight ${index === 0 ? 'text-lg md:text-xl' : 'text-xl'}`}>
                  {item.title}
                </h3>
                <p className="text-slate-400 font-medium text-sm tracking-wide">
                  <span className="text-brand-goldLight">{item.subtitle}</span>
                  {item.subStrike && (
                    <span className="text-slate-600 line-through decoration-slate-600 ml-2 text-xs">
                      {item.subStrike}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
