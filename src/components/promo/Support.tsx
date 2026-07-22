import React, { useState } from 'react';
import { Lock, Play, ChevronDown, Key, AlertCircle, X, BatteryCharging, Maximize2, BookOpen, Wrench, Package } from 'lucide-react';
import { useI18n } from './i18n';

const Support: React.FC = () => {
  const { t } = useI18n();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Tuyasecure@') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // 1. الفيديوهات العريضة (16:9)
  const videos = [
    { 
      title: "Réglage distance de détection visage", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727219/Reglage_distance_de_detection_visage_agvyik.mp4" 
    },
    { 
      title: "Diminuer le volume de la serrure", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727443/Diminuer_le_volume_de_la_serrure_ybflrt.mp4" 
    },
    { 
      title: "Ajout mot de passe Administrateur première utilisation", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727542/Ajout_mot_de_passe_Administrateur_premiere_utilisation_v3goqr.mp4" 
    },
    { 
      title: "Ajout administrateur empreinte", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727566/ajout_administrateur_empreinte_wc7d9v.mp4" 
    },
  ];

  // 2. قسم شحن البطارية (3 صور)
  const batterySteps = [
    {
      step: "01",
      title: "Signalisation Batterie Faible",
      img: "https://i.ibb.co/F4yzJK8N/Batterie-faible.jpg"
    },
    {
      step: "02",
      title: "Sens de placement de la batterie",
      img: "https://i.ibb.co/hF1sgnW5/sens-de-placement-batterie.jpg"
    },
    {
      step: "03",
      title: "Rechargement de la batterie",
      img: "https://i.ibb.co/DPkrpsWr/recharger-Batterie.jpg"
    }
  ];

  // 3. قسم دليل المستندات والتشغيل الأول (5 صور)
  const noticeDocs = [
    {
      num: "01",
      title: "Notice & Sécurité Importante",
      img: "https://i.ibb.co/BKZbdsNR/Premiere-mise-en-marche.jpg"
    },
    {
      num: "02",
      title: "Première Mise en Service (Obligatoire)",
      img: "https://i.ibb.co/v4k4sSdb/Premiere-mise-en-service.jpg"
    },
    {
      num: "03",
      title: "Application Mobile & Connexion Wi-Fi",
      img: "https://i.ibb.co/pjGYZg9r/wifi-tuya.jpg"
    },
    {
      num: "04",
      title: "Réinitialisation Usine",
      img: "https://i.ibb.co/WN62zQfG/reset-usine.jpg"
    },
    {
      num: "05",
      title: "Assistance & Support Client",
      img: "https://i.ibb.co/9kXtb6Xb/Assistance.jpg"
    }
  ];

  // 4. قسم دليل تركيب القفل على الباب F27 Pro
  const installationVideo = {
    title: "Vidéo - Manuel d'installation serrure Porte (F27 Pro)",
    url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784729730/Manuel_Installation_serrure_Porte_shgjz7.mp4"
  };

  const installationDocs = [
    {
      num: "01",
      title: "1. Carré de serrure & 2. Batterie",
      img: "https://i.ibb.co/PGBvHfcL/1-installation-Porte.jpg"
    },
    {
      num: "02",
      title: "3. Anti-blocage & 4. Vis de serrure",
      img: "https://i.ibb.co/twyx4TmC/2-installation-porte.jpg"
    },
    {
      num: "03",
      title: "5. Serrure avant & 6. Fixation finale",
      img: "https://i.ibb.co/gbzSmvfC/3-installation-porte.jpg"
    },
    {
      num: "04",
      title: "Conseils d'alignement important",
      img: "https://i.ibb.co/h3h1HbP/4-installation-porte.jpg"
    }
  ];

  // 5. قسم محتويات العلبة Unpacking List (8 صور)
  const unpackingItems = [
    { num: "01", title: "Composant 01 - Panneau & Serrure", img: "https://i.ibb.co/zWMGJVcd/List-001.jpg" },
    { num: "02", title: "Composant 02 - Pack Accessoires", img: "https://i.ibb.co/gLh6P24r/pack-list-02.jpg" },
    { num: "03", title: "Composant 03 - Kit de Fixation", img: "https://i.ibb.co/4nHxvmmB/Pack-list-03.jpg" },
    { num: "04", title: "Composant 04 - Cylindre & Clés", img: "https://i.ibb.co/MyByVZFX/pack-list-04.jpg" },
    { num: "05", title: "Composant 05 - Batterie Lithium", img: "https://i.ibb.co/8Ljgfwdq/list-05.jpg" },
    { num: "06", title: "Composant 06 - Cartes RFID & Câbles", img: "https://i.ibb.co/bjfXk0tw/list-06.jpg" },
    { num: "07", title: "Composant 07 - Schéma de Perçage", img: "https://i.ibb.co/JFkz1Vgm/list07.jpg" },
    { num: "08", title: "Composant 08 - Manuel & Garantie", img: "https://i.ibb.co/mFPp32QD/list-08.jpg" }
  ];

  const faqs = [
    { q: t.support.faq.q1, a: t.support.faq.a1 },
    { q: t.support.faq.q2, a: t.support.faq.a2 },
    { q: t.support.faq.q3, a: t.support.faq.a3 },
    { q: t.support.faq.q4, a: t.support.faq.a4 },
    { q: t.support.faq.q5, a: t.support.faq.a5 },
    { q: t.support.faq.q6, a: t.support.faq.a6 },
    { q: t.support.faq.q7, a: t.support.faq.a7 },
    { q: t.support.faq.q8, a: t.support.faq.a8 },
    { q: t.support.faq.q9, a: t.support.faq.a9 },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-midnight/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 text-center animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-inner">
            <Lock className="w-10 h-10 text-brand-gold" />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">{t.support.auth.title}</h1>
          <p className="text-slate-400 mb-8">{t.support.auth.subtitle}</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Key className="absolute top-3.5 left-4 w-5 h-5 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.support.auth.placeholder}
                className={`w-full bg-slate-800 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all`}
              />
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm justify-center animate-pulse">
                <AlertCircle className="w-4 h-4" />
                <span>{t.support.auth.error}</span>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-dark font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-gold/10"
            >
              {t.support.auth.btn}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-midnight/30 border border-brand-midnight/50 text-brand-gold mb-4 text-sm font-medium">
             <Lock className="w-3 h-3" />
             <span>Secure Access Granted</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.support.header.title}
          </h1>
          <p className="text-slate-300 text-lg">
            {t.support.header.subtitle}
          </p>
        </header>

        {/* 1. قسم الفيديوهات مع العنوان الجديد المحدث */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Play className="w-6 h-6 text-brand-gold fill-current shrink-0" />
            <h2 className="text-2xl font-bold text-white leading-tight">
              Guides Vidéo : Configuration optimale de la serrure digitale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {videos.map((video, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedVideo(video.url)}
                className="group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:border-brand-gold/60 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                <video 
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-between p-5 z-10 pointer-events-none">
                  <div className="self-end w-12 h-12 bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:border-brand-gold transition-all duration-300 shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white group-hover:text-brand-dark transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-base md:text-lg leading-snug group-hover:text-brand-gold transition-colors drop-shadow-md">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. قسم شحن البطارية */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Recharger la Batterie</h2>
              <p className="text-slate-400 text-sm">Guide pas à pas pour l'entretien et le rechargement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {batterySteps.map((step, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage({ url: step.img, title: step.title })}
                className="group relative aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:border-brand-gold/60"
              >
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-brand-gold font-bold text-xs tracking-wider">
                    Étape {step.step}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 z-10 pointer-events-none">
                  <h3 className="text-white font-semibold text-base leading-snug group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. قسم التشغيل الأول والدلائل */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Première Mise en Service</h2>
              <p className="text-slate-400 text-sm">Notice utilisateur et instructions de configuration</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticeDocs.map((doc, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage({ url: doc.img, title: doc.title })}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:border-brand-gold/60 shadow-xl flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 p-2 flex items-center justify-center shadow-inner">
                  <img 
                    src={doc.img} 
                    alt={doc.title}
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full bg-slate-900/90 text-white border border-brand-gold/50 text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Agrandir la notice</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-brand-gold font-mono font-bold text-sm bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-lg">
                    {doc.num}
                  </span>
                  <h3 className="text-white font-medium text-sm md:text-base leading-snug group-hover:text-brand-gold transition-colors">
                    {doc.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. قسم دليل تركيب القفل على الباب F27 Pro */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">F27 Pro Installation Porte</h2>
              <p className="text-slate-400 text-sm">Manuel vidéo et fiches techniques d'installation mécanique sur porte</p>
            </div>
          </div>

          <div 
            onClick={() => setSelectedVideo(installationVideo.url)}
            className="group relative w-full aspect-video md:aspect-[21/9] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300 hover:-translate-y-1 mb-8 cursor-pointer hover:border-brand-gold/60"
          >
            <video 
              src={installationVideo.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-gold text-brand-dark font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg">
                <Play className="w-3.5 h-3.5 fill-current" />
                Vidéo Tutoriel
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 md:p-8 z-10 pointer-events-none">
              <h3 className="text-white font-bold text-lg md:text-2xl leading-snug group-hover:text-brand-gold transition-colors drop-shadow-lg max-w-2xl">
                {installationVideo.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationDocs.map((doc, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage({ url: doc.img, title: doc.title })}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:border-brand-gold/60 shadow-xl flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 p-2 flex items-center justify-center shadow-inner">
                  <img 
                    src={doc.img} 
                    alt={doc.title}
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white border border-brand-gold/50 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Zoomer</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 text-brand-gold font-mono font-bold text-xs bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded-md">
                    {doc.num}
                  </span>
                  <h3 className="text-white font-medium text-xs md:text-sm leading-snug group-hover:text-brand-gold transition-colors">
                    {doc.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. قسم الأسئلة الشائعة FAQ */}
        <section className="mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{t.support.faq.title}</h2>
            <div className="h-1 w-16 bg-slate-800 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === idx ? 'border-brand-gold/40' : 'border-slate-800'}`}
              >
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-white hover:bg-slate-800/50 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeAccordion === idx ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="p-5 pt-0 text-slate-300 leading-relaxed text-sm md:text-base border-t border-slate-800/50 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. قسم Unpacking List */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Unpacking List</h2>
              <p className="text-slate-400 text-sm">Contenu détaillé du coffret et liste des composants inclus</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {unpackingItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage({ url: item.img, title: item.title })}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-3 md:p-4 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:border-brand-gold/60 shadow-xl flex flex-col justify-between"
              >
                <div className="relative w-full aspect-square bg-white rounded-xl overflow-hidden mb-3 p-3 flex items-center justify-center shadow-inner">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white border border-brand-gold/50 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Agrandir</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="shrink-0 text-brand-gold font-mono font-bold text-xs bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded-md">
                    {item.num}
                  </span>
                  <h3 className="text-white font-medium text-xs md:text-sm truncate group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* مشغل الفيديو المنبثق Modal */}
        {selectedVideo && (
           <div 
             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200" 
             onClick={() => setSelectedVideo(null)}
           >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-all z-50 border border-slate-700 shadow-lg"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div 
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800" 
                onClick={(e) => e.stopPropagation()}
              >
                <video 
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              </div>
           </div>
        )}

        {/* نافذة تكبير الصور العريضة Modal */}
        {selectedImage && (
           <div 
             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200" 
             onClick={() => setSelectedImage(null)}
           >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-all z-50 border border-slate-700 shadow-lg"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div 
                className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col items-center p-2" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full max-h-[80vh] overflow-auto flex items-center justify-center p-2 bg-black rounded-xl">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.title}
                    className="max-h-[78vh] w-auto object-contain rounded-lg"
                  />
                </div>
                <div className="w-full p-3 text-center">
                  <p className="text-white font-medium text-base md:text-lg">{selectedImage.title}</p>
                </div>
              </div>
           </div>
        )}

      </div>
    </div>
  );
};

export default Support;