import React from 'react';
import { Check, X } from 'lucide-react';
import { useI18n } from './i18n';

const Ecosystem: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-midnight overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-1 lg:order-2 lg:col-start-2 flex flex-col items-center lg:items-start text-center lg:text-start">
            <div className="mb-6">
               <img 
                 src="https://imgur.com/dD103td.png" 
                 alt="Tuya Smart Logo" 
                 className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
               />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t.ecosystem.headline}
            </h2>
            <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 w-full max-w-sm backdrop-blur-sm shadow-xl mb-8 lg:mb-4">
               <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-brand-gold font-bold text-xl tracking-wide">{t.ecosystem.comparison.tuya}</span>
                  <div className="bg-brand-gold/20 p-1.5 rounded-full">
                     <Check className="w-5 h-5 text-brand-gold" strokeWidth={3} />
                  </div>
               </div>
               <div className="flex items-center justify-between">
                   <span className="text-slate-300 font-bold text-xl line-through decoration-slate-500 decoration-2">{t.ecosystem.comparison.others}</span>
                   <X className="w-6 h-6 text-slate-400" />
               </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-start-1 lg:row-span-2 flex justify-center relative my-4 lg:my-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-gold/10 blur-[90px] rounded-full pointer-events-none"></div>
             
             <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] z-10 transform transition-transform duration-700 hover:scale-[1.02]">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white relative">
                    <div className="absolute inset-0 bg-slate-50 flex flex-col">
                        <div className="h-16 bg-[#ff5900] flex items-center justify-between px-4 pt-4 shadow-sm">
                            <span className="text-white font-bold tracking-tight">Tuya Smart</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">Me</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-4 overflow-hidden">
                             <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100">
                                    <div className="w-2.5 h-2.5 bg-current rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Porte d'entrée</h4>
                                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Verrouillée • En ligne</p>
                                </div>
                             </div>
                             
                             <div className="h-48 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80')] bg-cover"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                                </div>
                                <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-red-600 px-2 py-0.5 rounded">Live</div>
                             </div>

                             <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-100">
                                    <span className="block text-xl font-bold text-blue-600">85%</span>
                                    <span className="text-[10px] text-slate-500 uppercase font-bold">Batterie</span>
                                </div>
                                <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-100">
                                    <span className="block text-xl font-bold text-orange-600">4</span>
                                    <span className="text-[10px] text-slate-500 uppercase font-bold">Journal</span>
                                </div>
                             </div>
                             
                             <div className="bg-slate-800 rounded-lg p-3 flex items-start gap-3 shadow-lg transform translate-y-2 opacity-90">
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                   <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                </div>
                                <div>
                                   <p className="text-white text-xs font-semibold">Alerte de Sécurité</p>
                                   <p className="text-slate-400 text-xs mt-0.5">Tentative d'accès détectée.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="order-3 lg:col-start-2 text-center lg:text-start mt-4 lg:mt-0">
             <div className="h-px w-24 bg-slate-700 mb-6 mx-auto lg:mx-0"></div>
             <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t.ecosystem.body}
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
