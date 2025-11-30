export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    hero: {
      name: 'Bellagh Fatma',
      title: 'Passionnée par l\'IA et la cybersécurité',
      subtitle: 'Étudiante en L3 Informatique, je me spécialise dans le développement d\'applications sécurisées, en alliant expertise en cybersécurité et intelligence artificielle. Mon objectif : créer des solutions techniques qui sont à la fois performantes et résilientes.',
      cta: 'Voir mes projets',
      contact: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      description: 'Passionnée par la convergence entre intelligence artificielle et sécurité numérique, je développe des systèmes intelligents avec une approche "security by design" intégrée dès la phase de conception.',
      paragraph2: 'Actuellement en recherche active d\'un stage de fin d\'études, je souhaite mettre mes compétences au service de projets innovants en cybersécurité offensive, machine learning sécurisé ou protection des infrastructures critiques.',
      downloadCV: 'Télécharger mon CV',
    },
    skills: {
      title: 'Compétences',
    },
    projects: {
      title: 'Projets',
    },
    experience: {
      title: 'Expérience',
    },
    contact: {
      title: 'Contact',
    },
    footer: {
      madeWith: 'Fait avec',
      by: 'par',
      rights: 'Tous droits réservés',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      name: 'Bellagh Fatma',
      title: 'AI & Cybersecurity Enthusiast',
      subtitle: 'Third-year Computer Science Student, specializing in developing secure applications by combining cybersecurity expertise and artificial intelligence. My goal: to create technical solutions that are both performant and resilient.',
      cta: 'View my projects',
      contact: 'Contact me',
    },
    about: {
      title: 'About Me',
      description: 'Passionate about the convergence of artificial intelligence and cybersecurity, I develop intelligent systems with a "security by design" approach integrated from the conception phase.',
      paragraph2: 'Currently actively seeking a final year internship, I aim to apply my skills to innovative projects in offensive cybersecurity, secure machine learning, or critical infrastructure protection.',
      downloadCV: 'Download my Resume',
    },
    skills: {
      title: 'Skills',
    },
    projects: {
      title: 'Projects',
    },
    experience: {
      title: 'Experience',
    },
    contact: {
      title: 'Contact',
    },
    footer: {
      madeWith: 'Made with',
      by: 'by',
      rights: 'All rights reserved',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      contact: 'اتصل بي',
    },
    hero: {
      name: 'بلاغ فاطمة',
      title: 'مهتمة بالذكاء الاصطناعي والأمن السيبراني',
      subtitle: 'طالبة في السنة الثالثة علوم الحاسوب، أتخصص في تطوير التطبيقات الآمنة من خلال الجمع بين الخبرة في الأمن السيبراني والذكاء الاصطناعي. هدفي: إنشاء حلول تقنية تكون فعالة وقوية في نفس الوقت.',
      cta: 'عرض مشاريعي',
      contact: 'تواصل معي',
    },
    about: {
      title: 'نبذة عني',
      description: 'شغوفة بالتقارب بين الذكاء الاصطناعي والأمن السيبراني، أصمم أنظمة ذكية بنهج "الأمن أثناء التصميم" المدمج منذ مرحلة التصميم.',
      paragraph2: 'أبحث حاليًا بنشاط عن تدريب نهاية الدراسات، أطمح لتوظيف مهاراتي في مشاريع مبتكرة في الأمن السيبراني الهجومي، تعلم الآلة الآمن أو حماية البنى التحتية الحرجة.',
      downloadCV: 'تحميل سيرتي الذاتية',
    },
    skills: {
      title: 'المهارات',
    },
    projects: {
      title: 'المشاريع',
    },
    experience: {
      title: 'الخبرة',
    },
    contact: {
      title: 'اتصل بي',
    },
    footer: {
      madeWith: 'صنع بـ',
      by: 'بواسطة',
      rights: 'جميع الحقوق محفوظة',
    },
  },
}

export const useTranslation = (language) => {
  return translations[language] || translations.fr
}