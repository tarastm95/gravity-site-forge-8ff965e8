
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'uk' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Header
    home: 'Головна',
    about: 'Про нас',
    services: 'Послуги',
    portfolio: 'Портфоліо',
    calculator: 'Калькулятор',
    faq: 'FAQ',
    testimonials: 'Відгуки',
    contacts: 'Контакти',
    getConsultation: 'Отримати консультацію',
    allServices: 'Усі послуги',

    // Services Section
    servicesTitle: 'Наші послуги',
    servicesSubtitle: 'Повний спектр послуг для вашого бізнесу',
    additionalServicesTitle: 'Додаткові послуги',
    additionalServicesSubtitle: 'Доповніть ваш проєкт професійним дизайном',
    notFoundService: 'Не знайшли потрібну послугу?',
    notFoundServiceText: 'Ми створюємо індивідуальні рішення під ваші потреби',
    customConsultation: 'Індивідуальна консультація',

    // Main Services
    onlineStoreTitle: 'Інтернет-магазин',
    onlineStoreDescription: 'Повнофункціональний інтернет-магазин з системою оплати, адмін-панеллю та інтеграцією з CRM',
    educationalPlatformTitle: 'Освітня платформа',
    educationalPlatformDescription: 'Платформа для онлайн-навчання з відео-уроками, тестами та системою сертифікації',
    landingPageTitle: 'Landing Page',
    landingPageDescription: 'Продаюча сторінка з високою конверсією для ваших товарів або послуг',
    corporateWebsiteTitle: 'Корпоративний сайт',
    corporateWebsiteDescription: 'Представницький сайт компанії з каталогом послуг, новинами та формами зворотного зв\'язку',
    portfolioSiteTitle: 'Сайт-портфоліо',
    portfolioSiteDescription: 'Персональний сайт для демонстрації ваших робіт та досягнень',
    mediaPortalTitle: 'Медіа-портал',
    mediaPortalDescription: 'Новинний портал або блог з системою публікацій та коментарів',

    // Additional Services
    logoDesignTitle: 'Дизайн логотипу',
    logoDesignDescription: 'Розробка логотипу з унікальною ідеєю, адаптивного до всіх носіїв: від візиток до сайту',
    printDesignTitle: 'Дизайн поліграфії',
    printDesignDescription: 'Дизайн візиток, буклетів, флаєрів: від макету до готового файлу для друку',
    bannerDesignTitle: 'Дизайн банерів',
    bannerDesignDescription: 'Створення банерів для сайтів, соцмереж, а також слайдів-презентацій',
    redesignTitle: 'Редизайн сайту',
    redesignDescription: 'Повне оновлення візуальної частини та архітектури: адаптивність, оптимізація швидкості, сучасні UI/UX-практики',

    // Buttons
    detailsButton: 'Деталі',
    orderNow: 'Замовити зараз',

    // Contact Form
    contactTitle: 'Зв\'яжіться з нами',
    contactSubtitle: 'Будемо раді обговорити ваш проєкт! Заповніть форму або скористайтесь контактами нижче.',
    sendMessage: 'Надіслати повідомлення',
    nameLabel: 'Ім\'я',
    namePlaceholder: 'Ваше ім\'я',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Телефон',
    phonePlaceholder: '+38 (0xx) xxx-xx-xx',
    messageLabel: 'Повідомлення',
    messagePlaceholder: 'Розкажіть про ваш проєкт...',
    sendButton: 'Відправити',
    contactInfo: 'Контактна інформація',
    contactEmail: 'info@gravityteam.ua',
    contactPhone: '+38 (044) 123-45-67',
    address: 'Адреса',
    contactAddress: 'м. Київ, вул. Хрещатик, 1',
    workingHours: '24/7 підтримка',
    followUs: 'Слідкуйте за нами',

    // Legacy Services (for backward compatibility)
    logoService: 'Логотип',
    logoDescription: 'Розробка логотипу з унікальною ідеєю, адаптивного до всіх носіїв: від візиток до сайту.',
    printService: 'Візитки, буклети, флаєри',
    printDescription: 'Дизайн поліграфії: від макету до готового файлу для друку. Підтримка всіх популярних форматів.',
    bannerService: 'Банери, презентації (дизайн)',
    bannerDescription: 'Створення банерів для сайтів, соцмереж, а також слайдів-презентацій у PowerPoint/Keynote.',
    redesignService: 'Редизайн сайту',

    // Testimonials
    testimonialsTitle: 'Відгуки клієнтів',
    testimonialsSubtitle: 'Що говорять наші клієнти про роботу з нами',
    testimonial1Text: 'Gravity Team воістину професіонали: упродовж місяця створили для нас повноцінний інтернет-магазин, інтегрували CMS і платіжні системи. Результат — +40% продажів уже за перший квартал.',
    testimonial1Name: 'Ірина Петренко',
    testimonial1Position: 'CEO Fashion.ua',
    testimonial2Text: 'Завдяки команді Gravity Team наш стартап отримав сучасний лендінг з адаптивним дизайном. Конверсія виросла на 65%, а час завантаження скоротився втричі.',
    testimonial2Name: 'Максим Коваленко',
    testimonial2Position: 'Засновник TechStart',
    testimonial3Text: 'Найкраща команда для розробки корпоративних сайтів! Gravity Team створили для нас багатомовний портал з CMS, що дозволив збільшити клієнтську базу на 80%.',
    testimonial3Name: 'Олена Сидорова',
    testimonial3Position: 'Маркетинг-директор GlobalCorp',
    testimonial4Text: 'Замовляли у Gravity Team редизайн нашого ресторанного сайту. Отримали сучасний дизайн з онлайн-бронюванням столиків. Кількість бронювань зросла на 120%!',
    testimonial4Name: 'Андрій Мельник',
    testimonial4Position: 'Власник ресторану "Смачно"',

    // Footer
    footerServices: 'Послуги',
    ecommerce: 'Інтернет-магазин',
    educationalPlatform: 'Освітня платформа',
    landingPage: 'Landing-page',
    corporateWebsite: 'Корпоративний сайт',
    portfolioSite: 'Портфоліо',
    mediaPortal: 'Медіа-портал',
    company: 'Компанія',
    aboutUs: 'Про нас',
    jobs: 'Вакансії',
    blog: 'Блог',
    help: 'Допомога',
    support: 'Підтримка',
    privacyPolicy: 'Політика конфіденційності',
    termsOfUse: 'Умови використання',
    footerAddress: 'м. Київ, вул. Хрещатик, 1',
    footerPhone: '+38 (044) 123-45-67',
    footerEmail: 'info@gravityteam.ua',
    newsletter: 'Підпишіться на наші новини',
    newsletterDescription: 'Отримуйте останні новини про тренди веб-розробки та спеціальні пропозиції',
    subscribe: 'Підписатися',
    allRightsReserved: 'Усі права захищені.'
  },
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    calculator: 'Calculator',
    faq: 'FAQ',
    testimonials: 'Testimonials',
    contacts: 'Contacts',
    getConsultation: 'Get Consultation',
    allServices: 'All Services',

    // Services Section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Full range of services for your business',
    additionalServicesTitle: 'Additional Services',
    additionalServicesSubtitle: 'Complete your project with professional design',
    notFoundService: 'Can\'t find the service you need?',
    notFoundServiceText: 'We create custom solutions for your needs',
    customConsultation: 'Custom consultation',

    // Main Services
    onlineStoreTitle: 'Online Store',
    onlineStoreDescription: 'Full-featured online store with payment system, admin panel and CRM integration',
    educationalPlatformTitle: 'Educational Platform',
    educationalPlatformDescription: 'Online learning platform with video lessons, tests and certification system',
    landingPageTitle: 'Landing Page',
    landingPageDescription: 'High-converting sales page for your products or services',
    corporateWebsiteTitle: 'Corporate Website',
    corporateWebsiteDescription: 'Company representative website with service catalog, news and contact forms',
    portfolioSiteTitle: 'Portfolio Site',
    portfolioSiteDescription: 'Personal website to showcase your work and achievements',
    mediaPortalTitle: 'Media Portal',
    mediaPortalDescription: 'News portal or blog with publication and comment system',

    // Additional Services
    logoDesignTitle: 'Logo Design',
    logoDesignDescription: 'Logo development with unique idea, adaptive to all media: from business cards to websites',
    printDesignTitle: 'Print Design',
    printDesignDescription: 'Design of business cards, brochures, flyers: from layout to ready file for printing',
    bannerDesignTitle: 'Banner Design',
    bannerDesignDescription: 'Creating banners for websites, social media, and presentation slides',
    redesignTitle: 'Website Redesign',
    redesignDescription: 'Complete update of visual part and architecture: responsiveness, speed optimization, modern UI/UX practices',

    // Buttons
    detailsButton: 'Details',
    orderNow: 'Order Now',

    // Contact Form
    contactTitle: 'Contact Us',
    contactSubtitle: 'We\'d love to discuss your project! Fill out the form or use the contacts below.',
    sendMessage: 'Send Message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+1 (xxx) xxx-xxxx',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    sendButton: 'Send',
    contactInfo: 'Contact Information',
    contactEmail: 'info@gravityteam.ua',
    contactPhone: '+38 (044) 123-45-67',
    address: 'Address',
    contactAddress: 'Kyiv, Khreshchatyk St., 1',
    workingHours: '24/7 support',
    followUs: 'Follow Us',

    // Legacy Services (for backward compatibility)
    logoService: 'Logo',
    logoDescription: 'Logo development with unique idea, adaptive to all media: from business cards to websites.',
    printService: 'Business cards, brochures, flyers',
    printDescription: 'Printing design: from layout to ready file for printing. Support for all popular formats.',
    bannerService: 'Banners, presentations (design)',
    bannerDescription: 'Creating banners for websites, social media, and presentation slides in PowerPoint/Keynote.',
    redesignService: 'Website redesign',

    // Testimonials
    testimonialsTitle: 'Client Testimonials',
    testimonialsSubtitle: 'What our clients say about working with us',
    testimonial1Text: 'Gravity Team are true professionals: they created a full-fledged online store for us in a month, integrated CMS and payment systems. The result is +40% sales in the first quarter.',
    testimonial1Name: 'Iryna Petrenko',
    testimonial1Position: 'CEO Fashion.ua',
    testimonial2Text: 'Thanks to the Gravity Team, our startup got a modern landing page with responsive design. Conversion increased by 65%, and loading time was reduced threefold.',
    testimonial2Name: 'Maksym Kovalenko',
    testimonial2Position: 'TechStart Founder',
    testimonial3Text: 'The best team for corporate website development! Gravity Team created a multilingual portal with CMS for us, which allowed us to increase our client base by 80%.',
    testimonial3Name: 'Olena Sydorova',
    testimonial3Position: 'Marketing Director GlobalCorp',
    testimonial4Text: 'We ordered a redesign of our restaurant website from Gravity Team. Got a modern design with online table booking. The number of bookings increased by 120%!',
    testimonial4Name: 'Andriy Melnyk',
    testimonial4Position: 'Owner of "Delicious" Restaurant',

    // Footer
    footerServices: 'Services',
    ecommerce: 'E-commerce',
    educationalPlatform: 'Educational Platform',
    landingPage: 'Landing Page',
    corporateWebsite: 'Corporate Website',
    portfolioSite: 'Portfolio',
    mediaPortal: 'Media Portal',
    company: 'Company',
    aboutUs: 'About Us',
    jobs: 'Jobs',
    blog: 'Blog',
    help: 'Help',
    support: 'Support',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    footerAddress: 'Kyiv, Khreshchatyk St., 1',
    footerPhone: '+38 (044) 123-45-67',
    footerEmail: 'info@gravityteam.ua',
    newsletter: 'Subscribe to our newsletter',
    newsletterDescription: 'Get the latest news about web development trends and special offers',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved.'
  },
  ru: {
    // Header
    home: 'Главная',
    about: 'О нас',
    services: 'Услуги',
    portfolio: 'Портфолио',
    calculator: 'Калькулятор',
    faq: 'FAQ',
    testimonials: 'Отзывы',
    contacts: 'Контакты',
    getConsultation: 'Получить консультацию',
    allServices: 'Все услуги',

    // Services Section
    servicesTitle: 'Наши услуги',
    servicesSubtitle: 'Полный спектр услуг для вашего бизнеса',
    additionalServicesTitle: 'Дополнительные услуги',
    additionalServicesSubtitle: 'Дополните ваш проект профессиональным дизайном',
    notFoundService: 'Не нашли нужную услугу?',
    notFoundServiceText: 'Мы создаем индивидуальные решения под ваши потребности',
    customConsultation: 'Индивидуальная консультация',

    // Main Services
    onlineStoreTitle: 'Интернет-магазин',
    onlineStoreDescription: 'Полнофункциональный интернет-магазин с системой оплаты, админ-панелью и интеграцией с CRM',
    educationalPlatformTitle: 'Образовательная платформа',
    educationalPlatformDescription: 'Платформа для онлайн-обучения с видео-уроками, тестами и системой сертификации',
    landingPageTitle: 'Landing Page',
    landingPageDescription: 'Продающая страница с высокой конверсией для ваших товаров или услуг',
    corporateWebsiteTitle: 'Корпоративный сайт',
    corporateWebsiteDescription: 'Представительский сайт компании с каталогом услуг, новостями и формами обратной связи',
    portfolioSiteTitle: 'Сайт-портфолио',
    portfolioSiteDescription: 'Персональный сайт для демонстрации ваших работ и достижений',
    mediaPortalTitle: 'Медиа-портал',
    mediaPortalDescription: 'Новостной портал или блог с системой публикаций и комментариев',

    // Additional Services
    logoDesignTitle: 'Дизайн логотипа',
    logoDesignDescription: 'Разработка логотипа с уникальной идеей, адаптивного ко всем носителям: от визиток до сайта',
    printDesignTitle: 'Дизайн полиграфии',
    printDesignDescription: 'Дизайн визиток, буклетов, флаеров: от макета до готового файла для печати',
    bannerDesignTitle: 'Дизайн баннеров',
    bannerDesignDescription: 'Создание баннеров для сайтов, соцсетей, а также слайдов-презентаций',
    redesignTitle: 'Редизайн сайта',
    redesignDescription: 'Полное обновление визуальной части и архитектуры: адаптивность, оптимизация скорости, современные UI/UX-практики',

    // Buttons
    detailsButton: 'Детали',
    orderNow: 'Заказать сейчас',

    // Contact Form
    contactTitle: 'Свяжитесь с нами',
    contactSubtitle: 'Мы будем рады обсудить ваш проект! Заполните форму или воспользуйтесь контактами ниже.',
    sendMessage: 'Отправить сообщение',
    nameLabel: 'Имя',
    namePlaceholder: 'Ваше имя',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Телефон',
    phonePlaceholder: '+7 (xxx) xxx-xx-xx',
    messageLabel: 'Сообщение',
    messagePlaceholder: 'Расскажите о вашем проекте...',
    sendButton: 'Отправить',
    contactInfo: 'Контактная информация',
    contactEmail: 'info@gravityteam.ua',
    contactPhone: '+38 (044) 123-45-67',
    address: 'Адрес',
    contactAddress: 'г. Киев, ул. Крещатик, 1',
    workingHours: 'Поддержка 24/7',
    followUs: 'Следите за нами',

    // Legacy Services (for backward compatibility)
    logoService: 'Логотип',
    logoDescription: 'Разработка логотипа с уникальной идеей, адаптивного ко всем носителям: от визиток до сайта.',
    printService: 'Визитки, буклеты, флаеры',
    printDescription: 'Дизайн полиграфии: от макета до готового файла для печати. Поддержка всех популярных форматов.',
    bannerService: 'Баннеры, презентации (дизайн)',
    bannerDescription: 'Создание баннеров для сайтов, соцсетей, а также слайдов-презентаций в PowerPoint/Keynote.',
    redesignService: 'Редизайн сайта',

    // Testimonials
    testimonialsTitle: 'Отзывы клиентов',
    testimonialsSubtitle: 'Что говорят наши клиенты о работе с нами',
    testimonial1Text: 'Gravity Team поистине профессионалы: в течение месяца создали для нас полноценный интернет-магазин, интегрировали CMS и платежные системы. Результат — +40% продаж уже в первом квартале.',
    testimonial1Name: 'Ирина Петренко',
    testimonial1Position: 'CEO Fashion.ua',
    testimonial2Text: 'Благодаря команде Gravity Team наш стартап получил современный лендинг с адаптивным дизайном. Конверсия выросла на 65%, а время загрузки сократилось втрое.',
    testimonial2Name: 'Максим Коваленко',
    testimonial2Position: 'Основатель TechStart',
    testimonial3Text: 'Лучшая команда для разработки корпоративных сайтов! Gravity Team создали для нас многоязычный портал с CMS, что позволило увеличить клиентскую базу на 80%.',
    testimonial3Name: 'Елена Сидорова',
    testimonial3Position: 'Директор по маркетингу GlobalCorp',
    testimonial4Text: 'Заказывали у Gravity Team редизайн нашего ресторанного сайта. Получили современный дизайн с онлайн-бронированием столиков. Количество бронирований выросло на 120%!',
    testimonial4Name: 'Андрей Мельник',
    testimonial4Position: 'Владелец ресторана "Вкусно"',

    // Footer
    footerServices: 'Услуги',
    ecommerce: 'Интернет-магазин',
    educationalPlatform: 'Образовательная платформа',
    landingPage: 'Landing-page',
    corporateWebsite: 'Корпоративный сайт',
    portfolioSite: 'Портфолио',
    mediaPortal: 'Медиа-портал',
    company: 'Компания',
    aboutUs: 'О нас',
    jobs: 'Вакансии',
    blog: 'Блог',
    help: 'Помощь',
    support: 'Поддержка',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfUse: 'Условия использования',
    footerAddress: 'г. Киев, ул. Крещатик, 1',
    footerPhone: '+38 (044) 123-45-67',
    footerEmail: 'info@gravityteam.ua',
    newsletter: 'Подпишитесь на наши новости',
    newsletterDescription: 'Получайте последние новости о трендах веб-разработки и специальные предложения',
    subscribe: 'Подписаться',
    allRightsReserved: 'Все права защищены.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>((localStorage.getItem('language') as Language) || 'uk');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
