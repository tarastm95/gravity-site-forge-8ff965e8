
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uk' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    home: 'Головна',
    about: 'Про нас',
    services: 'Наші послуги',
    portfolio: 'Портфоліо',
    testimonials: 'Відгуки',
    contacts: 'Контакти',
    getConsultation: 'Отримати консультацію',
    faq: 'Питання та відповіді',
    calculator: 'Калькулятор вартості',
    // Calculator
    projectType: 'Тип проекту',
    landingPage: 'Landing-page',
    corporateWebsite: 'Корпоративний сайт',
    onlineStore: 'Інтернет-магазин',
    educationalPlatform: 'Освітня платформа',
    portfolio: 'Портфоліо',
    mediaPortal: 'Медіа-портал',
    designComplexity: 'Складність дизайну',
    simple: 'Простий',
    medium: 'Середній',
    complex: 'Складний',
    pages: 'Кількість сторінок',
    features: 'Додаткові функції',
    cms: 'Система управління контентом',
    seo: 'SEO оптимізація',
    analytics: 'Веб-аналітика',
    multilingual: 'Багатомовність',
    estimatedCost: 'Орієнтовна вартість',
    from: 'від',
    usd: 'USD',
    calculate: 'Розрахувати',
    // FAQ
    faqTitle: 'Часто задавані питання',
    faq1Question: 'Скільки часу займає розробка сайту?',
    faq1Answer: 'Термін розробки залежить від складності проекту. Landing-page - 3-5 днів, корпоративний сайт - 1-2 тижні, інтернет-магазин - 2-4 тижні.',
    faq2Question: 'Чи включено підтримку після запуску?',
    faq2Answer: 'Так, ми надаємо 1 місяць безкоштовної технічної підтримки після запуску проекту.',
    faq3Question: 'Чи можу я самостійно редагувати контент на сайті?',
    faq3Answer: 'Так, всі наші сайти мають зручну систему управління контентом, яка дозволяє легко редагувати тексти та зображення.',
    faq4Question: 'Чи адаптивні ваші сайти під мобільні пристрої?',
    faq4Answer: 'Абсолютно! Всі наші сайти повністю адаптивні та чудово виглядають на всіх пристроях.',
    faq5Question: 'Які способи оплати ви приймаєте?',
    faq5Answer: 'Ми приймаємо оплату банківським переказом, картою Visa/MasterCard та через PayPal.'
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Our Services',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    contacts: 'Contacts',
    getConsultation: 'Get Consultation',
    faq: 'FAQ',
    calculator: 'Cost Calculator',
    // Calculator
    projectType: 'Project Type',
    landingPage: 'Landing Page',
    corporateWebsite: 'Corporate Website',
    onlineStore: 'Online Store',
    educationalPlatform: 'Educational Platform',
    portfolio: 'Portfolio',
    mediaPortal: 'Media Portal',
    designComplexity: 'Design Complexity',
    simple: 'Simple',
    medium: 'Medium',
    complex: 'Complex',
    pages: 'Number of Pages',
    features: 'Additional Features',
    cms: 'Content Management System',
    seo: 'SEO Optimization',
    analytics: 'Web Analytics',
    multilingual: 'Multilingual',
    estimatedCost: 'Estimated Cost',
    from: 'from',
    usd: 'USD',
    calculate: 'Calculate',
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Question: 'How long does website development take?',
    faq1Answer: 'Development time depends on project complexity. Landing page - 3-5 days, corporate website - 1-2 weeks, online store - 2-4 weeks.',
    faq2Question: 'Is support included after launch?',
    faq2Answer: 'Yes, we provide 1 month of free technical support after project launch.',
    faq3Question: 'Can I edit content on the website myself?',
    faq3Answer: 'Yes, all our websites have a user-friendly content management system that allows easy editing of texts and images.',
    faq4Question: 'Are your websites mobile-responsive?',
    faq4Answer: 'Absolutely! All our websites are fully responsive and look great on all devices.',
    faq5Question: 'What payment methods do you accept?',
    faq5Answer: 'We accept bank transfers, Visa/MasterCard payments, and PayPal.'
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    services: 'Наши услуги',
    portfolio: 'Портфолио',
    testimonials: 'Отзывы',
    contacts: 'Контакты',
    getConsultation: 'Получить консультацию',
    faq: 'Вопросы и ответы',
    calculator: 'Калькулятор стоимости',
    // Calculator
    projectType: 'Тип проекта',
    landingPage: 'Landing-страница',
    corporateWebsite: 'Корпоративный сайт',
    onlineStore: 'Интернет-магазин',
    educationalPlatform: 'Образовательная платформа',
    portfolio: 'Портфолио',
    mediaPortal: 'Медиа-портал',
    designComplexity: 'Сложность дизайна',
    simple: 'Простой',
    medium: 'Средний',
    complex: 'Сложный',
    pages: 'Количество страниц',
    features: 'Дополнительные функции',
    cms: 'Система управления контентом',
    seo: 'SEO оптимизация',
    analytics: 'Веб-аналитика',
    multilingual: 'Многоязычность',
    estimatedCost: 'Ориентировочная стоимость',
    from: 'от',
    usd: 'USD',
    calculate: 'Рассчитать',
    // FAQ
    faqTitle: 'Часто задаваемые вопросы',
    faq1Question: 'Сколько времени занимает разработка сайта?',
    faq1Answer: 'Срок разработки зависит от сложности проекта. Landing-страница - 3-5 дней, корпоративный сайт - 1-2 недели, интернет-магазин - 2-4 недели.',
    faq2Question: 'Включена ли поддержка после запуска?',
    faq2Answer: 'Да, мы предоставляем 1 месяц бесплатной технической поддержки после запуска проекта.',
    faq3Question: 'Могу ли я самостоятельно редактировать контент на сайте?',
    faq3Answer: 'Да, все наши сайты имеют удобную систему управления контентом, которая позволяет легко редактировать тексты и изображения.',
    faq4Question: 'Адаптивны ли ваши сайты под мобильные устройства?',
    faq4Answer: 'Абсолютно! Все наши сайты полностью адаптивны и отлично выглядят на всех устройствах.',
    faq5Question: 'Какие способы оплаты вы принимаете?',
    faq5Answer: 'Мы принимаем оплату банковским переводом, картой Visa/MasterCard и через PayPal.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uk');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
