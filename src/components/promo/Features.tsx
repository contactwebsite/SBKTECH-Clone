import React from 'react';
import { Battery, Hand, ShieldAlert, Video, Mic } from 'lucide-react';
import { useI18n } from './i18n';

const Features: React.FC = () => {
  const { t, language } = useI18n();

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.features.title}</h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Battery: Large Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-brand-gold/50 transition-colors duration-300 md:col-span-2">
            <div className={`absolute top-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all ${language === 'ar' ? 'right-0' : 'left-0'}`}></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 bg-slate-800 rounded-2xl text-brand-gold">
                <Battery className="w-10 h-10" />
              </div>
              <div>
                <div className="mb-2 leading-tight">
                  <h3 className="inline text-2xl font-bold text-white ltr:mr-3 rtl:ml-3">
                    {t.features.battery.title}
                  </h3>
                  <div className="inline-flex flex-wrap items-center gap-2 select-none">
                    <span className="text-lg md:text-xl font-bold text-slate-400 line-through decoration-slate-400 decoration-2">3200 mAh</span>
                    <span className="text-lg md:text-xl font-bold text-slate-400 line-through decoration-slate-400 decoration-2">4200 mAh</span>
                  </div>
                </div>
                <p className="text-brand-goldLight text-sm font-semibold tracking-wider uppercase mb-2">{t.features.battery.sub}</p>
                <p className="text-slate-400">{t.features.battery.desc}</p>
              </div>
            </div>
          </div>

          {/* 2. Voice Guide */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-brand-gold/50 transition-colors duration-300 md:col-span-2 lg:col-span-1">
            <div className="relative z-10">
               <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit text-brand-gold">
                <Mic className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t.features.voice.title}</h3>
              <p className="text-brand-goldLight text-xs uppercase mb-3">{t.features.voice.sub}</p>
              <p className="text-slate-400 text-sm">{t.features.voice.desc}</p>
            </div>
          </div>

           {/* 3. Palm Mode */}
           <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-brand-gold/50 transition-colors duration-300">
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit text-brand-gold">
                <Hand className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t.features.palm.title}</h3>
              <p className="text-brand-goldLight text-xs uppercase mb-3">{t.features.palm.sub}</p>
              <p className="text-slate-400 text-sm">{t.features.palm.desc}</p>
            </div>
          </div>

           {/* 4. 2FA */}
           <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-brand-gold/50 transition-colors duration-300">
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit text-brand-gold">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t.features.twoFA.title}</h3>
              <p className="text-brand-goldLight text-xs uppercase mb-3">{t.features.twoFA.sub}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.features.twoFA.desc}
              </p>
            </div>
          </div>

          {/* 5. Remote Video */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-brand-gold/50 transition-colors duration-300 md:col-span-2 lg:col-span-1">
             <div className="relative z-10">
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit text-brand-gold">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t.features.video.title}</h3>
              <p className="text-brand-goldLight text-xs uppercase mb-3">{t.features.video.sub}</p>
              <p className="text-slate-400 text-sm">{t.features.video.desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
