import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'happiness-plaza',
    title: 'هابنيس بلازا',
    category: 'تطوير عقاري',
    description: 'أول مجمع متكامل إداري - تجاري - فندقي - ترفيهي في صعيد مصر، على مساحة 20,000 متر مربع.',
    longDescription: 'هابنيس بلازا هو المشروع الأضخم في صعيد مصر، يقع على المدخل الرئيسي لمدينة قنا الجديدة. يضم المجمع وحدات إدارية وتجارية وفندقية وترفيهية، بالإضافة إلى منطقة خدمات متكاملة. المشروع ينفذ بأعلى معايير الجودة العالمية.',
    location: 'مدينة قنا الجديدة – المدخل الرئيسي',
    area: '20,000 متر مربع',
    timeline: '2021 – 2026',
    progress: 80,
    completion: 'ديسمبر 2026',
    images: ['/images/projects/happiness-1.jpg', '/images/projects/happiness-2.jpg', '/images/projects/happiness-3.jpg'],
    features: ['وحدات إدارية فاخرة', 'منطقة تجارية عالمية', 'فندق 5 نجوم', 'منطقة ترفيهية متكاملة', 'مواقف سيارات ضخمة', 'أنظمة أمان حديثة'],
    investment: true,
    gallery: ['/images/gallery/hp-1.jpg', '/images/gallery/hp-2.jpg', '/images/gallery/hp-3.jpg', '/images/gallery/hp-4.jpg']
  },
  {
    slug: 'residential-1',
    title: 'مشروع سكني – قنا الجديدة',
    category: 'مشاريع سكنية',
    description: 'مجمع سكني متكامل يضم 200 وحدة سكنية بمساحات متنوعة وخدمات متكاملة.',
    longDescription: 'مشروع سكني راقٍ في قلب مدينة قنا الجديدة، يضم شققاً بمساحات متنوعة، مع منطقة خدمات متكاملة ومساحات خضراء واسعة.',
    location: 'مدينة قنا الجديدة – الحي السادس',
    area: '15,000 متر مربع',
    timeline: '2020 – 2022',
    progress: 100,
    completion: 'تم التسليم',
    images: ['/images/projects/residential-1.jpg', '/images/projects/residential-2.jpg'],
    features: ['وحدات سكنية متنوعة', 'منطقة خدمات', 'مساحات خضراء', 'أمن وحراسة'],
    investment: false,
    gallery: ['/images/gallery/res-1.jpg', '/images/gallery/res-2.jpg']
  },
  {
    slug: 'commercial-1',
    title: 'المجمع التجاري المركزي',
    category: 'مشاريع تجارية',
    description: 'مجمع تجاري حديث يضم 150 محلاً تجارياً ومكاتب إدارية في موقع استراتيجي.',
    longDescription: 'المجمع التجاري المركزي هو الوجهة التجارية الأولى في قنا الجديدة، يضم مجموعة متنوعة من المحلات التجارية والمكاتب الإدارية مع مواقف سيارات وخدمات لوجستية متكاملة.',
    location: 'مدينة قنا الجديدة – المحور المركزي',
    area: '10,000 متر مربع',
    timeline: '2022 – 2024',
    progress: 95,
    completion: 'أكتوبر 2025',
    images: ['/images/projects/commercial-1.jpg', '/images/projects/commercial-2.jpg'],
    features: ['محلات تجارية متنوعة', 'مكاتب إدارية', 'مواقف سيارات', 'أنظمة تكييف مركزي'],
    investment: true,
    gallery: ['/images/gallery/com-1.jpg', '/images/gallery/com-2.jpg']
  }
];
