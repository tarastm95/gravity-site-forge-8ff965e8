import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'uk' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Hero Section
    heroTitle1: 'Створюємо',
    heroTitle2: 'веб-рішення',
    heroTitle3: 'майбутнього',
    heroSubtitle: 'Ми розробляємо сучасні веб-сайти та додатки, що допомагають вашому бізнесу досягати нових висот',
    heroButton: 'Почати проєкт',

    // About Section
    aboutTitle: 'Про компанію Gravity Team',
    aboutDescription: 'Ми — команда професіоналів з понад 5-річним досвідом у веб-розробці. Створюємо якісні рішення для бізнесу будь-якого масштабу.',
    aboutStat1: '200+',
    aboutStat1Label: 'Завершених проєктів',
    aboutStat2: '150+',
    aboutStat2Label: 'Задоволених клієнтів',
    aboutStat3: '15+',
    aboutStat3Label: 'Команда експертів',
    aboutStat4: '5+',
    aboutStat4Label: 'Років досвіду',
    aboutStat5: '24/7',
    aboutStat5Label: 'Підтримка клієнтів',
    aboutStat6: '99%',
    aboutStat6Label: 'Позитивних відгуків',
    aboutWhyUs: 'Чому обирають нас?',
    aboutWhyUsText: 'Ми поєднуємо технічну експертизу з творчим підходом, щоб створювати рішення, які не лише виглядають чудово, але й приносять реальну користь вашому бізнесу.',

    // Portfolio Section
    portfolioTitle: 'Наші роботи',
    portfolioSubtitle: 'Переглянуте приклади наших найкращих проєктів',
    portfolioItem1Title: 'E-commerce Fashion Store',
    portfolioItem1Category: 'Інтернет-магазин',
    portfolioItem1Description: 'Сучасний інтернет-магазин одягу з інтуїтивним інтерфейсом',
    portfolioItem2Title: 'Corporate Banking Platform',
    portfolioItem2Category: 'Корпоративний сайт',
    portfolioItem2Description: 'Банківська платформа з високим рівнем безпеки',
    portfolioItem3Title: 'Online Learning Platform',
    portfolioItem3Category: 'Освітня платформа',
    portfolioItem3Description: 'Платформа для онлайн-навчання з відео-курсами',
    portfolioItem4Title: 'Restaurant Chain Website',
    portfolioItem4Category: 'Корпоративний сайт',
    portfolioItem4Description: 'Мережа ресторанів з онлайн-бронюванням',
    portfolioItem5Title: 'Tech Startup Landing',
    portfolioItem5Category: 'Landing Page',
    portfolioItem5Description: 'Висококонверсійний лендінг для стартапу',
    portfolioItem6Title: 'News Portal',
    portfolioItem6Category: 'Медіа-портал',
    portfolioItem6Description: 'Новинний портал з системою коментарів',
    portfolioItem7Title: 'Photography Portfolio',
    portfolioItem7Category: 'Портфоліо',
    portfolioItem7Description: 'Елегантне портфоліо фотографа',
    portfolioItem8Title: 'Fitness App Landing',
    portfolioItem8Category: 'Landing Page',
    portfolioItem8Description: 'Промо-сайт фітнес додатку',
    portfolioItem9Title: 'Medical Clinic Site',
    portfolioItem9Category: 'Корпоративний сайт',
    portfolioItem9Description: 'Сайт медичної клініки з записом онлайн',
    portfolioItem10Title: 'Real Estate Platform',
    portfolioItem10Category: 'Платформа',
    portfolioItem10Description: 'Платформа для продажу нерухомості',
    portfolioItem11Title: 'Artist Portfolio',
    portfolioItem11Category: 'Портфоліо',
    portfolioItem11Description: 'Креативне портфоліо художника',
    portfolioItem12Title: 'Travel Blog',
    portfolioItem12Category: 'Блог',
    portfolioItem12Description: 'Блог про подорожі з фотогалереєю',
    portfolioItem13Title: 'Software Company',
    portfolioItem13Category: 'Корпоративний сайт',
    portfolioItem13Description: 'Корпоративний сайт IT-компанії',
    portfolioCTA: 'Готові розпочати свій проєкт?',
    portfolioCTAText: 'Зв\'яжіться з нами сьогодні і отримайте безкоштовну консультацію',
    startProject: 'Розпочати проєкт',

    // Calculator Section
    calculatorSubtitle: 'Дізнайтеся орієнтовну вартість вашого проєкту',
    projectType: 'Тип проєкту',
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
    calculatorDisclaimer: 'Остаточна вартість може відрізнятися залежно від технічних вимог',

    // Partners Section
    partnersTitle: 'Наші партнери',
    partnersSubtitle: 'Ми співпрацюємо з провідними компаніями',
    partnersQuote: 'Разом ми створюємо майбутнє',

    // Join Team Section
    joinTeamTitle: 'Приєднуйтесь до нашої команди',
    joinTeamSubtitle: 'Шукаємо талановитих спеціалістів',
    joinTeamDescription: 'Станьте частиною динамічної команди професіоналів',
    whatWeOffer: 'Що ми пропонуємо',
    competitiveSalary: 'Конкурентна зарплата',
    flexibleSchedule: 'Гнучкий графік',
    interestingProjects: 'Цікаві проєкти',
    careerGrowth: 'Кар\'єрне зростання',
    sendResume: 'Надіслати резюме',
    viewVacancies: 'Переглянути вакансії',

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

    // FAQ Section
    faqTitle: 'Часті запитання',
    faqSubtitle: 'Відповіді на найпоширеніші питання про наші послуги',
    faq1Question: 'Скільки часу займає розробка сайту?',
    faq1Answer: 'Час розробки залежить від складності проєкту. Простий лендінг займає 1-2 тижні, корпоративний сайт - 3-4 тижні, а інтернет-магазин - від 4 до 8 тижнів.',
    faq2Question: 'Чи надаєте ви підтримку після запуску сайту?',
    faq2Answer: 'Так, ми надаємо технічну підтримку протягом 3 місяців безкоштовно після запуску. Також пропонуємо платні пакети подальшого обслуговування.',
    faq3Question: 'Чи можна змінити дизайн в процесі розробки?',
    faq3Answer: 'Невеликі правки можливі на етапі дизайну. Кардинальні зміни після затвердження макету можуть вплинути на терміни та вартість проєкту.',
    faq4Question: 'Чи розробляєте ви мобільні додатки?',
    faq4Answer: 'Наразі ми спеціалізуємося на веб-розробці. Всі наші сайти адаптивні та відмінно працюють на мобільних пристроях.',
    faq5Question: 'Як відбувається оплата за послуги?',
    faq5Answer: 'Оплата проводиться поетапно: 50% передоплата на початку проєкту, 50% після здачі готової роботи. Для великих проєктів можливо розбиття на більше етапів.',

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
    allRightsReserved: 'Усі права захищені.',

    // Service Detail Page
    serviceDetailTitle: 'Деталі послуги',
    backToServices: 'Назад до послуг',
    orderService: 'Замовити послугу',
    serviceFeatures: 'Особливості послуги',
    serviceIncludes: 'Що входить у послугу',
    serviceProcess: 'Процес розробки',
    serviceTimeline: 'Терміни виконання',
    servicePricing: 'Вартість послуги',
    
    // Service Page Titles (for browser title)
    onlineStorePageTitle: 'Інтернет-магазин - Gravity Team',
    educationalPlatformPageTitle: 'Освітня платформа - Gravity Team',
    landingPagePageTitle: 'Landing Page - Gravity Team', 
    corporateWebsitePageTitle: 'Корпоративний сайт - Gravity Team',
    portfolioSitePageTitle: 'Сайт-портфоліо - Gravity Team',
    mediaPortalPageTitle: 'Медіа-портал - Gravity Team',

    // Service Detail specific
    serviceNotFound: 'Послугу не знайдено',
    backToHome: 'Повернутися на головну',
    backButton: 'Повернутися назад',
    completedProjects: 'Завершених проектів',
    averageConversion: 'Середня конверсія',
    averageDevelopmentTime: 'Середній час розробки',
    whatIsIncluded: 'Що входить в послугу?',
    howItWorks: 'Як проходить робота?',
    clientReviews: 'Відгуки клієнтів',
    readyToStart: 'Готові розпочати проект?',
    contactUsNow: 'Зв\'яжіться з нами прямо зараз та отримайте безкоштовну консультацію про ваш майбутній проект',

    // Process steps
    processStep1Title: 'Аналіз',
    processStep1Desc: 'Вивчаємо ваші потреби та цілі',
    processStep2Title: 'Планування',
    processStep2Desc: 'Створюємо детальний план проекту',
    processStep3Title: 'Розробка',
    processStep3Desc: 'Втілюємо ідеї в реальність',
    processStep4Title: 'Запуск',
    processStep4Desc: 'Тестуємо та запускаємо проект',

    // Time periods
    days25: '25 днів',
    days35: '35 днів',
    days7: '7 днів',
    days14: '14 днів',
    days10: '10 днів',
    days30: '30 днів',

    // Reviews
    reviewerName1: 'Олексій Петренко',
    reviewerCompany1: 'ТОВ "Технології майбутнього"',
    reviewText1: 'Чудовий результат! Наш сайт працює швидко та приносить нових клієнтів щодня.',
    reviewerName2: 'Марія Іваненко',
    reviewerCompany2: 'Студія дизайну "Креатив"',
    reviewText2: 'Професійна команда, дотримання термінів та якісний результат. Рекомендую!',

    // Service features - Online Store
    feature1_1: 'Адаптивний дизайн для всіх пристроїв',
    feature1_2: 'Інтеграція з платіжними системами',
    feature1_3: 'Система управління товарами',
    feature1_4: 'SEO оптимізація',
    feature1_5: 'Підтримка кількох мов',
    feature1_6: 'Аналітика та звіти',

    // Service features - Educational Platform
    feature2_1: 'Відеоплеєр з підтримкою HD',
    feature2_2: 'Система тестів та завдань',
    feature2_3: 'Особисті кабінети студентів',
    feature2_4: 'Сертифікати після завершення',
    feature2_5: 'Форум для обговорень',
    feature2_6: 'Мобільний додаток',

    // Service features - Landing Page
    feature3_1: 'Швидке завантаження (до 3 сек)',
    feature3_2: 'Форма збору контактів',
    feature3_3: 'Інтеграція з CRM',
    feature3_4: 'A/B тестування',
    feature3_5: 'Аналітика конверсій',
    feature3_6: 'Чат-бот підтримка',

    // Service features - Corporate Website
    feature4_1: 'CMS для легкого редагування',
    feature4_2: 'Багаторівневе меню',
    feature4_3: 'Галерея проектів',
    feature4_4: 'Блог система',
    feature4_5: 'Контактні форми',
    feature4_6: 'Google Maps інтеграція',

    // Service features - Portfolio Site
    feature5_1: 'Галерея робіт',
    feature5_2: 'Контактна інформація',
    feature5_3: 'Соціальні мережі',
    feature5_4: 'Завантаження резюме',
    feature5_5: 'Блог/новини',
    feature5_6: 'Відгуки клієнтів',

    // Service features - Media Portal
    feature6_1: 'Система публікацій',
    feature6_2: 'Коментарі користувачів',
    feature6_3: 'Рекламні блоки',
    feature6_4: 'Розсилка новин',
    feature6_5: 'Соціальні мережі',
    feature6_6: 'Пошук по сайту',
  },
  en: {
    // Hero Section
    heroTitle1: 'Creating',
    heroTitle2: 'web solutions',
    heroTitle3: 'of the future',
    heroSubtitle: 'We develop modern websites and applications that help your business reach new heights',
    heroButton: 'Start Project',

    // About Section
    aboutTitle: 'About Gravity Team',
    aboutDescription: 'We are a team of professionals with over 5 years of experience in web development. We create quality solutions for businesses of any scale.',
    aboutStat1: '200+',
    aboutStat1Label: 'Completed Projects',
    aboutStat2: '150+',
    aboutStat2Label: 'Satisfied Clients',
    aboutStat3: '15+',
    aboutStat3Label: 'Expert Team',
    aboutStat4: '5+',
    aboutStat4Label: 'Years of Experience',
    aboutStat5: '24/7',
    aboutStat5Label: 'Client Support',
    aboutStat6: '99%',
    aboutStat6Label: 'Positive Reviews',
    aboutWhyUs: 'Why choose us?',
    aboutWhyUsText: 'We combine technical expertise with creative approach to create solutions that not only look great but also bring real value to your business.',

    // Portfolio Section
    portfolioTitle: 'Our Work',
    portfolioSubtitle: 'Check out examples of our best projects',
    portfolioItem1Title: 'E-commerce Fashion Store',
    portfolioItem1Category: 'Online Store',
    portfolioItem1Description: 'Modern clothing online store with intuitive interface',
    portfolioItem2Title: 'Corporate Banking Platform',
    portfolioItem2Category: 'Corporate Website',
    portfolioItem2Description: 'Banking platform with high level of security',
    portfolioItem3Title: 'Online Learning Platform',
    portfolioItem3Category: 'Educational Platform',
    portfolioItem3Description: 'Online learning platform with video courses',
    portfolioItem4Title: 'Restaurant Chain Website',
    portfolioItem4Category: 'Corporate Website',
    portfolioItem4Description: 'Restaurant chain with online booking',
    portfolioItem5Title: 'Tech Startup Landing',
    portfolioItem5Category: 'Landing Page',
    portfolioItem5Description: 'High-converting landing page for startup',
    portfolioItem6Title: 'News Portal',
    portfolioItem6Category: 'Media Portal',
    portfolioItem6Description: 'News portal with comment system',
    portfolioItem7Title: 'Photography Portfolio',
    portfolioItem7Category: 'Portfolio',
    portfolioItem7Description: 'Elegant photographer portfolio',
    portfolioItem8Title: 'Fitness App Landing',
    portfolioItem8Category: 'Landing Page',
    portfolioItem8Description: 'Fitness app promotional website',
    portfolioItem9Title: 'Medical Clinic Site',
    portfolioItem9Category: 'Corporate Website',
    portfolioItem9Description: 'Medical clinic website with online booking',
    portfolioItem10Title: 'Real Estate Platform',
    portfolioItem10Category: 'Platform',
    portfolioItem10Description: 'Real estate sales platform',
    portfolioItem11Title: 'Artist Portfolio',
    portfolioItem11Category: 'Portfolio',
    portfolioItem11Description: 'Creative artist portfolio',
    portfolioItem12Title: 'Travel Blog',
    portfolioItem12Category: 'Blog',
    portfolioItem12Description: 'Travel blog with photo gallery',
    portfolioItem13Title: 'Software Company',
    portfolioItem13Category: 'Corporate Website',
    portfolioItem13Description: 'IT company corporate website',
    portfolioCTA: 'Ready to start your project?',
    portfolioCTAText: 'Contact us today and get a free consultation',
    startProject: 'Start Project',

    // Calculator Section
    calculatorSubtitle: 'Find out the estimated cost of your project',
    projectType: 'Project Type',
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
    calculatorDisclaimer: 'Final cost may vary depending on technical requirements',

    // Partners Section
    partnersTitle: 'Our Partners',
    partnersSubtitle: 'We collaborate with leading companies',
    partnersQuote: 'Together we create the future',

    // Join Team Section
    joinTeamTitle: 'Join Our Team',
    joinTeamSubtitle: 'We are looking for talented specialists',
    joinTeamDescription: 'Become part of a dynamic team of professionals',
    whatWeOffer: 'What we offer',
    competitiveSalary: 'Competitive Salary',
    flexibleSchedule: 'Flexible Schedule',
    interestingProjects: 'Interesting Projects',
    careerGrowth: 'Career Growth',
    sendResume: 'Send Resume',
    viewVacancies: 'View Vacancies',

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

    // FAQ Section
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Answers to the most common questions about our services',
    faq1Question: 'How long does website development take?',
    faq1Answer: 'Development time depends on project complexity. A simple landing page takes 1-2 weeks, corporate website - 3-4 weeks, and an online store - from 4 to 8 weeks.',
    faq2Question: 'Do you provide support after website launch?',
    faq2Answer: 'Yes, we provide technical support for 3 months free of charge after launch. We also offer paid ongoing maintenance packages.',
    faq3Question: 'Can design be changed during development?',
    faq3Answer: 'Minor adjustments are possible during the design phase. Major changes after design approval may affect timeline and project cost.',
    faq4Question: 'Do you develop mobile apps?',
    faq4Answer: 'Currently we specialize in web development. All our websites are responsive and work excellently on mobile devices.',
    faq5Question: 'How is payment for services handled?',
    faq5Answer: 'Payment is made in stages: 50% prepayment at project start, 50% after delivery of finished work. For large projects, we can split into more stages.',

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
    allRightsReserved: 'All rights reserved.',

    // Service Detail Page
    serviceDetailTitle: 'Service Details',
    backToServices: 'Back to Services',
    orderService: 'Order Service',
    serviceFeatures: 'Service Features',
    serviceIncludes: 'What\'s Included',
    serviceProcess: 'Development Process',
    serviceTimeline: 'Timeline',
    servicePricing: 'Pricing',
    
    // Service Page Titles (for browser title)
    onlineStorePageTitle: 'Online Store - Gravity Team',
    educationalPlatformPageTitle: 'Educational Platform - Gravity Team',
    landingPagePageTitle: 'Landing Page - Gravity Team',
    corporateWebsitePageTitle: 'Corporate Website - Gravity Team',
    portfolioSitePageTitle: 'Portfolio Site - Gravity Team',
    mediaPortalPageTitle: 'Media Portal - Gravity Team',

    // Service Detail specific
    serviceNotFound: 'Service not found',
    backToHome: 'Back to Home',
    backButton: 'Go back',
    completedProjects: 'Completed projects',
    averageConversion: 'Average conversion',
    averageDevelopmentTime: 'Average development time',
    whatIsIncluded: 'What\'s included in the service?',
    howItWorks: 'How does it work?',
    clientReviews: 'Client reviews',
    readyToStart: 'Ready to start a project?',
    contactUsNow: 'Contact us now and get a free consultation about your future project',

    // Process steps
    processStep1Title: 'Analysis',
    processStep1Desc: 'We study your needs and goals',
    processStep2Title: 'Planning',
    processStep2Desc: 'We create a detailed project plan',
    processStep3Title: 'Development',
    processStep3Desc: 'We bring ideas to reality',
    processStep4Title: 'Launch',
    processStep4Desc: 'We test and launch the project',

    // Time periods
    days25: '25 days',
    days35: '35 days',
    days7: '7 days',
    days14: '14 days',
    days10: '10 days',
    days30: '30 days',

    // Reviews
    reviewerName1: 'Alex Petrenko',
    reviewerCompany1: 'Future Technologies LLC',
    reviewText1: 'Excellent result! Our website works fast and brings new clients every day.',
    reviewerName2: 'Maria Ivanenko',
    reviewerCompany2: 'Creative Design Studio',
    reviewText2: 'Professional team, meeting deadlines and quality results. Highly recommend!',

    // Service features - Online Store
    feature1_1: 'Responsive design for all devices',
    feature1_2: 'Payment system integration',
    feature1_3: 'Product management system',
    feature1_4: 'SEO optimization',
    feature1_5: 'Multi-language support',
    feature1_6: 'Analytics and reports',

    // Service features - Educational Platform
    feature2_1: 'HD video player support',
    feature2_2: 'Test and assignment system',
    feature2_3: 'Student personal accounts',
    feature2_4: 'Completion certificates',
    feature2_5: 'Discussion forum',
    feature2_6: 'Mobile application',

    // Service features - Landing Page
    feature3_1: 'Fast loading (up to 3 sec)',
    feature3_2: 'Contact collection form',
    feature3_3: 'CRM integration',
    feature3_4: 'A/B testing',
    feature3_5: 'Conversion analytics',
    feature3_6: 'Chatbot support',

    // Service features - Corporate Website
    feature4_1: 'CMS for easy editing',
    feature4_2: 'Multi-level menu',
    feature4_3: 'Project gallery',
    feature4_4: 'Blog system',
    feature4_5: 'Contact forms',
    feature4_6: 'Google Maps integration',

    // Service features - Portfolio Site
    feature5_1: 'Work gallery',
    feature5_2: 'Contact information',
    feature5_3: 'Social networks',
    feature5_4: 'Resume download',
    feature5_5: 'Blog/news',
    feature5_6: 'Client reviews',

    // Service features - Media Portal
    feature6_1: 'Publication system',
    feature6_2: 'User comments',
    feature6_3: 'Advertising blocks',
    feature6_4: 'Newsletter',
    feature6_5: 'Social networks',
    feature6_6: 'Site search',
  },
  ru: {
    // Hero Section
    heroTitle1: 'Создаем',
    heroTitle2: 'веб-решения',
    heroTitle3: 'будущего',
    heroSubtitle: 'Мы разрабатываем современные веб-сайты и приложения, которые помогают вашему бизнесу достигать новых высот',
    heroButton: 'Начать проект',

    // About Section
    aboutTitle: 'О компании Gravity Team',
    aboutDescription: 'Мы — команда профессионалов с более чем 5-летним опытом в веб-разработке. Создаем качественные решения для бизнеса любого масштаба.',
    aboutStat1: '200+',
    aboutStat1Label: 'Завершенных проектов',
    aboutStat2: '150+',
    aboutStat2Label: 'Довольных клиентов',
    aboutStat3: '15+',
    aboutStat3Label: 'Команда экспертов',
    aboutStat4: '5+',
    aboutStat4Label: 'Лет опыта',
    aboutStat5: '24/7',
    aboutStat5Label: 'Поддержка клиентов',
    aboutStat6: '99%',
    aboutStat6Label: 'Положительных отзывов',
    aboutWhyUs: 'Почему выбирают нас?',
    aboutWhyUsText: 'Мы сочетаем техническую экспертизу с творческим подходом, чтобы создавать решения, которые не только выглядят отлично, но и приносят реальную пользу вашему бизнесу.',

    // Portfolio Section
    portfolioTitle: 'Наши работы',
    portfolioSubtitle: 'Посмотрите примеры наших лучших проектов',
    portfolioItem1Title: 'E-commerce Fashion Store',
    portfolioItem1Category: 'Интернет-магазин',
    portfolioItem1Description: 'Современный интернет-магазин одежды с интуитивным интерфейсом',
    portfolioItem2Title: 'Corporate Banking Platform',
    portfolioItem2Category: 'Корпоративный сайт',
    portfolioItem2Description: 'Банковская платформа с высоким уровнем безопасности',
    portfolioItem3Title: 'Online Learning Platform',
    portfolioItem3Category: 'Образовательная платформа',
    portfolioItem3Description: 'Платформа для онлайн-обучения с видео-курсами',
    portfolioItem4Title: 'Restaurant Chain Website',
    portfolioItem4Category: 'Корпоративный сайт',
    portfolioItem4Description: 'Сеть ресторанов с онлайн-бронированием',
    portfolioItem5Title: 'Tech Startup Landing',
    portfolioItem5Category: 'Landing Page',
    portfolioItem5Description: 'Высококонверсионный лендинг для стартапа',
    portfolioItem6Title: 'News Portal',
    portfolioItem6Category: 'Медиа-портал',
    portfolioItem6Description: 'Новостной портал с системой комментариев',
    portfolioItem7Title: 'Photography Portfolio',
    portfolioItem7Category: 'Портфолио',
    portfolioItem7Description: 'Элегантное портфолио фотографа',
    portfolioItem8Title: 'Fitness App Landing',
    portfolioItem8Category: 'Landing Page',
    portfolioItem8Description: 'Промо-сайт фитнес приложения',
    portfolioItem9Title: 'Medical Clinic Site',
    portfolioItem9Category: 'Корпоративный сайт',
    portfolioItem9Description: 'Сайт медицинской клиники с записью онлайн',
    portfolioItem10Title: 'Real Estate Platform',
    portfolioItem10Category: 'Платформа',
    portfolioItem10Description: 'Платформа для продажи недвижимости',
    portfolioItem11Title: 'Artist Portfolio',
    portfolioItem11Category: 'Портфолио',
    portfolioItem11Description: 'Креативное портфолио художника',
    portfolioItem12Title: 'Travel Blog',
    portfolioItem12Category: 'Блог',
    portfolioItem12Description: 'Блог о путешествиях с фотогалереей',
    portfolioItem13Title: 'Software Company',
    portfolioItem13Category: 'Корпоративный сайт',
    portfolioItem13Description: 'Корпоративный сайт IT-компании',
    portfolioCTA: 'Готовы начать свой проект?',
    portfolioCTAText: 'Свяжитесь с нами сегодня и получите бесплатную консультацию',
    startProject: 'Начать проект',

    // Calculator Section
    calculatorSubtitle: 'Узнайте ориентировочную стоимость вашего проекта',
    projectType: 'Тип проекта',
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
    calculatorDisclaimer: 'Окончательная стоимость может отличаться в зависимости от технических требований',

    // Partners Section
    partnersTitle: 'Наши партнеры',
    partnersSubtitle: 'Мы сотрудничаем с ведущими компаниями',
    partnersQuote: 'Вместе мы создаем будущее',

    // Join Team Section
    joinTeamTitle: 'Присоединяйтесь к нашей команде',
    joinTeamSubtitle: 'Ищем талантливых специалистов',
    joinTeamDescription: 'Станьте частью динамичной команды профессионалов',
    whatWeOffer: 'Что мы предлагаем',
    competitiveSalary: 'Конкурентная зарплата',
    flexibleSchedule: 'Гибкий график',
    interestingProjects: 'Интересные проекты',
    careerGrowth: 'Карьерный рост',
    sendResume: 'Отправить резюме',
    viewVacancies: 'Посмотреть вакансии',

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

    // FAQ Section
    faqTitle: 'Часто задаваемые вопросы',
    faqSubtitle: 'Ответы на самые распространенные вопросы о наших услугах',
    faq1Question: 'Сколько времени занимает разработка сайта?',
    faq1Answer: 'Время разработки зависит от сложности проекта. Простой лендинг занимает 1-2 недели, корпоративный сайт - 3-4 недели, а интернет-магазин - от 4 до 8 недель.',
    faq2Question: 'Предоставляете ли вы поддержку после запуска сайта?',
    faq2Answer: 'Да, мы предоставляем техническую поддержку в течение 3 месяцев бесплатно после запуска. Также предлагаем платные пакеты дальнейшего обслуживания.',
    faq3Question: 'Можно ли изменить дизайн в процессе разработки?',
    faq3Answer: 'Небольшие правки возможны на этапе дизайна. Кардинальные изменения после утверждения макета могут повлиять на сроки и стоимость проекта.',
    faq4Question: 'Разрабатываете ли вы мобильные приложения?',
    faq4Answer: 'В настоящее время мы специализируемся на веб-разработке. Все наши сайты адаптивные и отлично работают на мобильных устройствах.',
    faq5Question: 'Как происходит оплата за услуги?',
    faq5Answer: 'Оплата проводится поэтапно: 50% предоплата в начале проекта, 50% после сдачи готовой работы. Для больших проектов возможно разбиение на больше этапов.',

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
    onlineStoreDescription: 'Полнофункциональный интернет-магазин с системою оплаты, админ-панелью и интеграцией с CRM',
    educationalPlatformTitle: 'Образовательная платформа',
    educationalPlatformDescription: 'Платформа для онлайн-обучения с видео-уроками, тестами и системою сертификации',
    landingPageTitle: 'Landing Page',
    landingPageDescription: 'Продающая страница с высокой конверсией для ваших товаров или услуг',
    corporateWebsiteTitle: 'Корпоративный сайт',
    corporateWebsiteDescription: 'Представительский сайт компании с каталогом услуг, новостями и формами обратной связи',
    portfolioSiteTitle: 'Сайт-портфолио',
    portfolioSiteDescription: 'Персональный сайт для демонстрации ваших работ и достижений',
    mediaPortalTitle: 'Медиа-портал',
    mediaPortalDescription: 'Новостной портал или блог с системою публикаций и комментариев',

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
    allRightsReserved: 'Все права защищены.',

    // Service Detail Page
    serviceDetailTitle: 'Детали услуги',
    backToServices: 'Назад к услугам',
    orderService: 'Заказать услугу',
    serviceFeatures: 'Особенности услуги',
    serviceIncludes: 'Что входит в услугу',
    serviceProcess: 'Процесс разработки',
    serviceTimeline: 'Сроки выполнения',
    servicePricing: 'Стоимость услуги',
    
    // Service Page Titles (for browser title)
    onlineStorePageTitle: 'Интернет-магазин - Gravity Team',
    educationalPlatformPageTitle: 'Образовательная платформа - Gravity Team',
    landingPagePageTitle: 'Landing Page - Gravity Team',
    corporateWebsitePageTitle: 'Корпоративный сайт - Gravity Team',
    portfolioSitePageTitle: 'Сайт-портфолио - Gravity Team',
    mediaPortalPageTitle: 'Медиа-портал - Gravity Team',

    // Service Detail specific
    serviceNotFound: 'Услуга не найдена',
    backToHome: 'Вернуться на главную',
    backButton: 'Вернуться назад',
    completedProjects: 'Завершенных проектов',
    averageConversion: 'Средняя конверсия',
    averageDevelopmentTime: 'Среднее время разработки',
    whatIsIncluded: 'Что входит в услугу?',
    howItWorks: 'Как проходит работа?',
    clientReviews: 'Отзывы клиентов',
    readyToStart: 'Готовы начать проект?',
    contactUsNow: 'Свяжитесь с нами прямо сейчас и получите бесплатную консультацию о вашем будущем проекте',

    // Process steps
    processStep1Title: 'Анализ',
    processStep1Desc: 'Изучаем ваши потребности и цели',
    processStep2Title: 'Планирование',
    processStep2Desc: 'Создаем детальный план проекта',
    processStep3Title: 'Разработка',
    processStep3Desc: 'Воплощаем идеи в реальность',
    processStep4Title: 'Запуск',
    processStep4Desc: 'Тестируем и запускаем проект',

    // Time periods
    days25: '25 дней',
    days35: '35 дней',
    days7: '7 дней',
    days14: '14 дней',
    days10: '10 дней',
    days30: '30 дней',

    // Reviews
    reviewerName1: 'Алексей Петренко',
    reviewerCompany1: 'ООО "Технологии будущего"',
    reviewText1: 'Прекрасный результат! Наш сайт работает быстро и приносит новых клиентов каждый день.',
    reviewerName2: 'Мария Иваненко',
    reviewerCompany2: 'Студия дизайна "Креатив"',
    reviewText2: 'Профессиональная команда, соблюдение сроков и качественный результат. Рекомендую!',

    // Service features - Online Store
    feature1_1: 'Адаптивный дизайн для всех устройств',
    feature1_2: 'Интеграция с платежными системами',
    feature1_3: 'Система управления товарами',
    feature1_4: 'SEO оптимизация',
    feature1_5: 'Поддержка нескольких языков',
    feature1_6: 'Аналитика и отчеты',

    // Service features - Educational Platform
    feature2_1: 'Видеоплеер с поддержкой HD',
    feature2_2: 'Система тестов и заданий',
    feature2_3: 'Личные кабинеты студентов',
    feature2_4: 'Сертификаты после завершения',
    feature2_5: 'Форум для обсуждений',
    feature2_6: 'Мобильное приложение',

    // Service features - Landing Page
    feature3_1: 'Быстрая загрузка (до 3 сек)',
    feature3_2: 'Форма сбора контактов',
    feature3_3: 'Интеграция с CRM',
    feature3_4: 'A/B тестирование',
    feature3_5: 'Аналитика конверсий',
    feature3_6: 'Чат-бот поддержка',

    // Service features - Corporate Website
    feature4_1: 'CMS для легкого редактирования',
    feature4_2: 'Многоуровневое меню',
    feature4_3: 'Галерея проектов',
    feature4_4: 'Блог система',
    feature4_5: 'Контактные формы',
    feature4_6: 'Интеграция Google Maps',

    // Service features - Portfolio Site
    feature5_1: 'Галерея работ',
    feature5_2: 'Контактная информация',
    feature5_3: 'Социальные сети',
    feature5_4: 'Загрузка резюме',
    feature5_5: 'Блог/новости',
    feature5_6: 'Отзывы клиентов',

    // Service features - Media Portal
    feature6_1: 'Система публикаций',
    feature6_2: 'Комментарии пользователей',
    feature6_3: 'Рекламные блоки',
    feature6_4: 'Рассылка новостей',
    feature6_5: 'Социальные сети',
    feature6_6: 'Поиск по сайту',
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
