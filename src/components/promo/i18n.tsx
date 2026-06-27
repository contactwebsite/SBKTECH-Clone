import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// --- Translations ---
const translations = {
  fr: {
    nav: {
      home: "Accueil",
      support: "Service Client"
    },
    hero: {
      badge: "Paiement à la livraison - Livraison Gratuite",
      badge2026: "MODÈLE 2026 ET FONCTIONNALITÉS",
      headlineTitle: "Tuya Secure",
      headlineSubtitle: "La sécurité intelligente aux performances inédites",
      subheadline: "Contrôle total, surveillance en direct et batterie longue durée.",
      cta: "Commander Maintenant 🚚",
      secure: "Entièrement Sécurisé",
      locked: "Verrouillé",
      reviews: "(32 avis clients)",
      oldPrice: "3890 DH",
      newPrice: "2950 DH"
    },
    features: {
      title: "Pourquoi choisir ce verrou ?",
      battery: {
        title: "Batterie Puissante 5000 mAh",
        sub: "Autonomie longue durée",
        desc: "Plus besoin de recharges fréquentes. Une batterie qui dure des mois."
      },
      palm: {
        title: "Déverrouillage Palmaire",
        sub: "Reconnaissance de la paume",
        desc: "Technologie sans contact haute précision pour un accès rapide."
      },
      twoFA: {
        title: "Double Authentification (2FA)",
        sub: "Sécurité Maximale",
        desc: "Possibilité de renforcer la vérification avec la nécessité de deux utilisateurs distincts pour déverrouiller. Idéal pour les bureaux et les coffres-forts."
      },
      video: {
        title: "Surveillance Vidéo à Distance",
        sub: "Via Tuya App",
        desc: "Voyez qui est devant votre porte directement depuis votre téléphone, où que vous soyez."
      },
      camera: {
        title: "Caméra Espion Discrète",
        sub: "Caméra invisible",
        desc: "Design intelligent intégrant une caméra indétectable par les intrus."
      },
      voice: {
        title: "Guide Vocal Français",
        sub: "Assistant Vocal",
        desc: "Configuration et utilisation faciles avec des instructions vocales claires."
      }
    },
    security: {
      title: "🛡️ Fonctions de sécurité avancées",
      burglar: {
        title: "Alarme anti-effraction",
        desc: "Déclenchée en cas de manipulation forcée ou tentative de sabotage."
      },
      attempts: {
        title: "Alarme après tentatives erronées",
        desc: "Protection renforcée contre les essais de codes ou accès non autorisés."
      },
      battery: {
        title: "Alerte batterie faible",
        desc: "Recevez une alerte avant toute panne pour éviter les mauvaises surprises."
      }
    },
    gallery: {
      tag: "Design Moderne de Luxe",
      title: "L'élégance dans",
      titleHighlight: "chaque détail",
      items: [
        { title: "3 barrières anti fraude biométrique", sub: "sécurité sans compromis", subStrike: "" },
        { title: "Reconnaissance faciale 3D", sub: "Ultra Rapide", subStrike: "" },
        { title: "Biométrie veineuse palmaire", sub: "sécurité avancée sans contact", subStrike: "" },
        { title: "Mécanisme Automatique", sub: "Serrure Silencieuse", subStrike: "" }
      ]
    },
    ecosystem: {
      headline: "Sécurité digitale assurée",
      body: "Reprenez le contrôle total et exclusif de votre porte grâce à Tuya Application, vous êtes sûr d'être le seul maître à bord.",
      comparison: {
        tuya: "Application TUYA",
        others: "Autres applications"
      }
    },
    trust: {
      antitheft: "Système Anti-vol",
      antitheftDesc: "Alerte immédiate en cas de tentative d'effraction",
      weather: "Résistant aux Intempéries",
      weatherDesc: "Fonctionne parfaitement sous la chaleur et l'humidité",
      warranty: "Garantie 2 Ans",
      warrantyDesc: "Remplacement immédiat en cas de défaut de fabrication"
    },
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "Rejoignez plus de 1000 foyers sécurisés au Maroc",
      verified: "Achat Vérifié",
      items: [
        {
          name: "Karim B.",
          city: "Casablanca",
          comment: "Service client au top ! Ils m'ont aidé pour l'installation via appel vidéo. La serrure marche parfaitement avec l'application Tuya. Je recommande."
        },
        {
          name: "Mouna T.",
          city: "Rabat",
          comment: "Enfin je ne cherche plus mes clés dans mon sac à main. L'empreinte digitale est super rapide. Très classe sur ma porte en bois."
        },
        {
          name: "Youssef A.",
          city: "Marrakech",
          comment: "Installée dans mon Airbnb. C'est génial de pouvoir donner un code temporaire aux locataires sans me déplacer. C'est un game changer !"
        },
        {
          name: "Driss H.",
          city: "Tanger",
          comment: "Produit robuste et lourd, on sent la qualité. La livraison était rapide (24h). L'appli est facile à comprendre même pour mes parents."
        },
        {
          name: "Salma F.",
          city: "Agadir",
          comment: "J'avais peur pour la batterie, mais ça fait 2 mois et elle est toujours à 80%. Le design est magnifique, ça change l'entrée de la maison."
        }
      ]
    },
    footer: {
      offer: "Offre Spéciale Limitée",
      price: "2950 DH",
      btn: "Commander Maintenant 🚚"
    },
    modal: {
      title: "Finaliser votre commande",
      sub: "Remplissez le formulaire, nous vous rappellerons pour confirmer.",
      name: "Nom complet",
      phone: "Numéro de téléphone",
      city: "Ville",
      address: "Adresse (Optionnel)",
      productName: "Tuya Smart Lock",
      productSub: "Édition Avancée",
      total: "2950 DH",
      oldPrice: "3890 DH",
      confirmBtn: "Valider ma commande",
      successTitle: "Merci ! Votre commande est enregistrée",
      successDesc: "Nous vous contacterons très prochainement au numéro",
      successDesc2: "pour valider la livraison.",
      backBtn: "Fermer"
    },
    support: {
      auth: {
        title: "Accès Client Réservé",
        subtitle: "Veuillez entrer le mot de passe client pour accéder aux tutoriels.",
        placeholder: "Entrez le mot de passe",
        btn: "Accéder au Support",
        error: "Mot de passe incorrect"
      },
      header: {
        title: "Centre d'Aide & Support",
        subtitle: "Tutoriels exclusifs pour nos clients"
      },
      videos: {
        title: "Guides Vidéo",
        v1: "Installation Rapide",
        v2: "Config Tuya App",
        v3: "Gestion Utilisateurs",
        v4: "Changement Piles"
      },
      faq: {
        title: "Questions Fréquentes",
        q1: "Le verrou ne s'allume pas, que faire ?",
        a1: "Vérifiez que les 4 piles AA sont neuves et correctement insérées. Si le problème persiste, utilisez le câble micro-USB de secours pour l'alimenter.",
        q2: "Comment connecter le verrou au WiFi ?",
        a2: "Activez le mode appairage sur le verrou (touche 8 + #) et suivez les instructions dans l'application Tuya Smart.",
        q3: "J'ai oublié le code administrateur.",
        a3: "Vous devez effectuer une réinitialisation d'usine en appuyant sur le bouton Reset à l'arrière du panneau pendant 5 secondes.",
        q4: "Que faire si la batterie est totalement épuisée ?",
        a4: "Utilisez la clé mécanique de secours fournie ou branchez une batterie externe (Power Bank) sur le port micro-USB situé en bas de la serrure pour une alimentation d'urgence.",
        q5: "Le capteur d'empreinte ne reconnaît pas mon doigt.",
        a5: "Assurez-vous que le capteur est propre et sec. Si le problème persiste, supprimez l'empreinte via l'application Tuya Smart et enregistrez-la à nouveau sous un angle légèrement différent.",
        q6: "Comment créer un mot de passe temporaire pour un invité ?",
        a6: "Dans l'application Tuya, allez dans 'Gestion des membres' > 'Mot de passe temporaire'. Vous pouvez générer un code unique ou limité dans le temps.",
        q7: "La serrure se bloque à la fermeture.",
        a7: "Vérifiez l'alignement de la porte. Si la porte s'est affaissée, le pêne peut frotter contre la gâche. Un ajustement des charnières de la porte est souvent nécessaire.",
        q8: "Est-ce que le verrou résiste à la pluie ?",
        a8: "Oui, votre Tuya Secure est conçu pour résister aux intempéries et à l'humidité, mais évitez l'utilisation de jets d'eau haute pression directement sur le clavier.",
        q9: "J'ai perdu mon téléphone, comment bloquer l'accès ?",
        a9: "Connectez-vous à votre compte Tuya Smart depuis un autre appareil et modifiez immédiatement le mot de passe de votre compte. Vous pouvez aussi réinitialiser la serrure manuellement (bouton Reset)."
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      support: "خدمة العملاء"
    },
    hero: {
      badge: "الدفع عند الاستلام - توصيل مجاني",
      badge2026: "موديل 2026 ومميزات جديدة",
      headlineTitle: "Tuya Secure",
      headlineSubtitle: "الأمان الذكي بآداء غير مسبوق",
      subheadline: "تحكم كامل، مراقبة حية، وبطارية تدوم طويلاً.",
      cta: "اطلب الآن 🚚",
      secure: "مؤمن بالكامل",
      locked: "مغلق بإحكام",
      reviews: "(32 تقييم للعملاء)",
      oldPrice: "3890 درهم",
      newPrice: "2950 درهم"
    },
    features: {
      title: "لماذا تختار هذا القفل تحديداً؟",
      battery: {
        title: "بطارية جبارة 5000 ميلي أمبير",
        sub: "Autonomie longue durée",
        desc: "لا داعي للقلق بشأن الشحن المتكرر. بطارية تدوم لشهور مع استخدام مكثف."
      },
      palm: {
        title: "فتح القفل براحة اليد",
        sub: "Reconnaissance de la paume",
        desc: "تقنية بدون تلامس فائقة الدقة للوصول السريع."
      },
      twoFA: {
        title: "نظام المصادقة الثنائي (2FA)",
        sub: "Sécurité Maximale",
        desc: "يتطلب مستخدمين مختلفين لفتح القفل. مثالي للمكاتب وغرف الخزائن لضمان أعلى درجات الأمان."
      },
      video: {
        title: "مراقبة فيديو عن بعد",
        sub: "Via Tuya App",
        desc: "شاهد من يقف أمام بابك مباشرة من هاتفك أينما كنت."
      },
      camera: {
        title: "كاميرا تجسس مخفية",
        sub: "Caméra discrète",
        desc: "تصميم يدمج الكاميرا بذكاء بحيث لا يلاحظها المتطفلون."
      },
      voice: {
        title: "توجيه صوتي بالفرنسية",
        sub: "Guide vocal",
        desc: "إعدادات واستخدام سهل مع توجيهات صوتية واضحة."
      }
    },
    security: {
      title: "🛡️ وظائف الأمان المتقدمة",
      burglar: {
        title: "إنذار ضد الاقتحام",
        desc: "يتم تفعيله فوراً عند محاولة خلع القفل أو العبث به بالقوة."
      },
      attempts: {
        title: "إنذار المحاولات الخاطئة",
        desc: "حماية ذكية تحظر النظام مؤقتاً عند تكرار إدخال كلمات مرور خاطئة."
      },
      battery: {
        title: "تنبيه انخفاض البطارية",
        desc: "إشعار مبكر قبل نفاد الطاقة لتتمكن من استبدال البطاريات في الوقت المناسب."
      }
    },
    gallery: {
      tag: "تصميم عصري فاخر",
      title: "فخامة التصميم",
      titleHighlight: "في كل التفاصيل",
      items: [
        { title: "تعرف على الوجه", sub: "فائق السرعة ودقيق", subStrike: "" },
        { title: "التعرف على الوجه 3D", sub: "فائق السرعة", subStrike: "" },
        { title: "بصمة أوردة الكف", sub: "أمان متطور بدون تلامس", subStrike: "" },
        { title: "آلية أوتوماتيكية", sub: "قفل صامت", subStrike: "" }
      ]
    },
    ecosystem: {
      headline: "أمان رقمي مضمون",
      body: "استعد التحكم الكامل والحصري في بابك بفضل تطبيق Tuya. على عكس التطبيقات الأخرى، أنت تضمن أنك المسيطر الوحيد.",
      comparison: {
        tuya: "تطبيق TUYA",
        others: "تطبيقات أخرى"
      }
    },
    trust: {
      antitheft: "حماية ضد السرقة",
      antitheftDesc: "تنبيه فوري عند محاولة العبث بالقفل",
      weather: "مقاوم للعوامل الجوية",
      weatherDesc: "يعمل بكفاءة في الحرارة والرطوبة العالية",
      warranty: "ضمان لمدة سنتين",
      warrantyDesc: "استبدال فوري في حال وجود عيوب مصنعية"
    },
    testimonials: {
      title: "آراء عملائنا الكرام",
      subtitle: "انضم لأكثر من 1000 منزل مؤمن في المغرب",
      verified: "شراء مؤكد",
      items: [
        {
          name: "Karim B.",
          city: "الدار البيضاء",
          comment: "خدمة عملاء ممتازة! ساعدوني في التركيب عبر مكالمة فيديو. القفل يعمل بامتياز مع تطبيق Tuya. أنصح به."
        },
        {
          name: "Mouna T.",
          city: "الرباط",
          comment: "وأخيراً لم أعد أبحث عن المفاتيح في حقيبتي. البصمة سريعة جداً. شكل أنيق جداً على بابي الخشبي."
        },
        {
          name: "Youssef A.",
          city: "مراكش",
          comment: "تم تركيبه في شقتي Airbnb. ميزة رائعة أن تعطي كود مؤقت للمستأجرين دون التنقل. هذا غيّر قواعد اللعبة!"
        },
        {
          name: "Driss H.",
          city: "طنجة",
          comment: "منتج صلب وثقيل، تشعر بالجودة. التوصيل كان سريعاً (24 ساعة). التطبيق سهل الفهم حتى لوالدي."
        },
        {
          name: "Salma F.",
          city: "أكادير",
          comment: "كنت قلقة بشأن البطارية، لكن مر شهران وما زالت 80%. التصميم رائع، غيّر مدخل المنزل."
        }
      ]
    },
    footer: {
      offer: "عرض خاص لفترة محدودة",
      price: "2950 درهم",
      btn: "اطلب الآن 🚚"
    },
    modal: {
      title: "تأكيد الطلب",
      sub: "املأ الاستمارة وسنقوم بالاتصال بك للتأكيد.",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      city: "المدينة",
      address: "العنوان (اختياري)",
      productName: "Tuya Smart Lock",
      productSub: "Advanced Edition",
      total: "2950 د.م",
      oldPrice: "3890 د.م",
      confirmBtn: "تأكيد الطلب",
      successTitle: "شكراً لطلبك!",
      successDesc: "تم تسجيل طلبك بنجاح. سنتصل بك قريباً على الرقم",
      successDesc2: "لتأكيد موعد التوصيل.",
      backBtn: "إغلاق"
    },
    support: {
      auth: {
        title: "منطقة العملاء الخاصة",
        subtitle: "يرجى إدخال كلمة مرور العميل للوصول إلى الشروحات.",
        placeholder: "أدخل كلمة المرور",
        btn: "الدخول للدعم",
        error: "كلمة المرور غير صحيحة"
      },
      header: {
        title: "مركز المساعدة والدعم",
        subtitle: "شروحات حصرية لعملائنا"
      },
      videos: {
        title: "أدلة الفيديو",
        v1: "التركيب السريع",
        v2: "إعداد التطبيق",
        v3: "إدارة المستخدمين",
        v4: "تغيير البطاريات"
      },
      faq: {
        title: "أسئلة شائعة",
        q1: "القفل لا يعمل، ماذا أفعل؟",
        a1: "تأكد من البطاريات. إذا استمرت المشكلة، استخدم منفذ USB للطوارئ.",
        q2: "كيفية ربط القفل بالواي فاي؟",
        a2: "قم بتفعيل وضع الاقتران (8 + #) واتبع الخطوات في تطبيق Tuya Smart.",
        q3: "نسيت كود المسؤول.",
        a3: "يجب عليك إعادة ضبط المصنع عبر زر Reset الموجود خلف اللوحة.",
        q4: "ماذا أفعل إذا نفدت البطارية تمامًا؟",
        a4: "استخدم المفتاح الميكانيكي للطوارئ المرفق أو قم بتوصيل بطارية خارجية (Power Bank) بمنفذ micro-USB الموجود أسفل القفل.",
        q5: "مستشعر البصمة لا يتعرف على إصبعي.",
        a5: "تأكد من أن المستشعر نظيف وجاف. إذا استمرت المشكلة، احذف البصمة عبر التطبيق وأعد تسجيلها بزاوية مختلفة.",
        q6: "كيف أنشئ كلمة مرور مؤقتة للضيوف؟",
        a6: "في تطبيق Tuya، اذهب إلى 'إدارة الأعضاء' > 'كلمة مرور مؤقتة'. يمكنك إنشاء رمز لمرة واحدة أو محدد بوقت.",
        q7: "القفل يعلق عند الإغلاق.",
        a7: "تحقق من محاذاة الباب. إذا هبط الباب قليلاً، قد يحتك اللسان بالإطار. ضبط مفصلات الباب قد يكون ضرورياً.",
        q8: "هل القفل مقاوم للمطر؟",
        a8: "نعم، Tuya Secure مصمم لمقاومة العوامل الجوية، لكن تجنب استخدام خراطيم المياه بضغط عالٍ مباشرة عليه.",
        q9: "فقدت هاتفي، كيف أمنع الوصول؟",
        a9: "سجل الدخول إلى حسابك من جهاز آخر وغير كلمة المرور فوراً. يمكنك أيضاً إعادة ضبط القفل يدوياً."
      }
    }
  }
};

// --- Context ---
type Language = 'fr' | 'ar';
type I18nContextType = {
  language: Language;
  t: typeof translations['fr'];
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLangState] = useState<Language>('fr');

  useEffect(() => {
    // Check URL parameters on mount
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    
    if (langParam === 'ar') {
      setLangState('ar');
    } else {
      setLangState('fr');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLangState(lang);
    
    // Update URL query param without refresh
    const url = new URL(window.location.href);
    
    if (lang === 'ar') {
      url.searchParams.set('lang', 'ar');
    } else {
      url.searchParams.delete('lang');
    }

    window.history.pushState({}, '', url);
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    // Update font class on body
    if (language === 'ar') {
      document.body.classList.add('font-cairo');
    } else {
      document.body.classList.remove('font-cairo');
    }
  }, [dir, language]);

  return (
    <I18nContext.Provider value={{ language, t: translations[language], setLanguage, dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
