import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uk' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Navigation
    home: 'Головна',
    about: 'Про нас',
    services: 'Наші послуги',
    portfolio: 'Портфоліо',
    testimonials: 'Відгуки',
    contacts: 'Контакти',
    getConsultation: 'Отримати консультацію',
    faq: 'Питання та відповіді',
    calculator: 'Калькулятор вартості',
    
    // Hero section
    heroTitle1: 'Створюємо сучасні',
    heroTitle2: 'сайти для розвитку',
    heroTitle3: 'вашого бізнесу',
    heroSubtitle: 'Наша команда розробників і дизайнерів побудує сайт будь-якої складності — від лендінгу до масштабного маркетплейсу',
    heroButton: 'Отримати безкоштовну консультацію',
    
    // About section
    aboutTitle: 'Про нашу команду',
    aboutDescription: 'Ми — команда Gravity Team, що з 2017 року допомагає бізнесам запускати й масштабувати інтернет-проєкти. Наші ключові цінності: інноваційність, прозорість і якість.',
    aboutStat1: '~100 млн $',
    aboutStat1Label: 'сукупний обсяг проектів',
    aboutStat2: '0.8%',
    aboutStat2Label: 'частка глобального ринку',
    aboutStat3: '30+',
    aboutStat3Label: 'членів команди',
    aboutStat4: '1,200+',
    aboutStat4Label: 'завершених проєктів',
    aboutStat5: '24/7',
    aboutStat5Label: 'цілодобова підтримка',
    aboutStat6: '5 млрд',
    aboutStat6Label: 'загальний трафік',
    aboutWhyUs: 'Чому обирають нас?',
    aboutWhyUsText: 'Ми не просто створюємо сайти — ми будуємо цифрові рішення, які допомагають бізнесу рости. Кожен проект для нас — це можливість втілити інноваційні ідеї та досягти максимального результату для наших клієнтів.',
    
    // Services section
    servicesTitle: 'Наші послуги',
    servicesSubtitle: 'Повний спектр послуг для створення та розвитку вашого онлайн-бізнесу',
    additionalServicesTitle: 'Додаткові послуги',
    additionalServicesSubtitle: 'Комплексні рішення для повного розвитку вашого бренду',
    orderNow: 'Замовити зараз',
    customConsultation: 'Індивідуальна консультація',
    notFoundService: 'Не знайшли потрібну послугу?',
    notFoundServiceText: 'Зв\'яжіться з нами для індивідуальної консультації та розробки рішення під ваші потреби',
    detailsButton: 'Детальніше',
    
    // Main Services
    onlineStoreTitle: 'Інтернет-магазин під ключ',
    onlineStoreDescription: 'Готове рішення з каталогом товарів, фільтрами, кошиком, інтеграцією платежів і служби доставки. Повний цикл: від проектування UI/UX до запуску на продакшені.',
    
    educationalPlatformTitle: 'Освітня платформа / Онлайн-курс',
    educationalPlatformDescription: 'Платформа для проведення онлайн-курсів з особистими кабінетами, відеоуроками, тестами та сертифікацією. Вбудована система монетизації та керування контентом.',
    
    landingPageTitle: 'Landing-page',
    landingPageDescription: 'Односторінковий сайт для презентації продукту чи послуги: яскравий дизайн, адаптивність під мобільні, інтеграція з формою збору лідів.',
    
    corporateWebsiteTitle: 'Корпоративний сайт / Каталог',
    corporateWebsiteDescription: 'Сайт для представлення компанії: розділи «Про нас», «Послуги», «Портфоліо», «Прайс» та «Контакти». Легке редагування через CMS.',
    
    portfolioSiteTitle: 'Портфоліо / Сайт-візитка',
    portfolioSiteDescription: 'Невеликий сайт зі стилем бренду: блок «Про мене», галерея робіт, контактна форма. Ідеально для фрилансерів та малих агенцій.',
    
    mediaPortalTitle: 'Медіа-портал / Сервісний сайт',
    mediaPortalDescription: 'Платформа з редакційною системою: публікація статей, новин, відео, флоти із рекламними блоками. Інтеграція з CRM та API.',

    // Additional Services
    logoDesignTitle: 'Логотип',
    logoDesignDescription: 'Розробка логотипу з унікальною ідеєю, адаптивного до всіх носіїв: від візиток до сайту.',
    
    printDesignTitle: 'Візитки, буклети, флаєри',
    printDesignDescription: 'Дизайн поліграфії: від макету до готового файлу для друку. Підтримка всіх популярних форматів.',
    
    bannerDesignTitle: 'Банери, презентації (дизайн)',
    bannerDesignDescription: 'Створення банерів для сайтів, соцмереж, а також слайдів-презентацій у PowerPoint/Keynote.',
    
    redesignTitle: 'Редизайн сайту',
    redesignDescription: 'Повне оновлення візуальної частини та архітектури: адаптивність, оптимізація швидкості, сучасні UI/UX-практики.',
    
    // Portfolio section
    portfolioTitle: 'Наше портфоліо',
    portfolioSubtitle: 'Переглянуте наші найкращі роботи - від лендінгів до складних веб-платформ',
    portfolioCTA: 'Готові створити щось подібне?',
    portfolioCTAText: 'Давайте обговоримо ваш проект та створимо щось унікальне разом',
    startProject: 'Почати проект',
    
    // Portfolio items
    portfolioItem1Title: 'Агенція веб-розробки',
    portfolioItem1Description: 'Сучасний дизайн для креативної агенції з портфоліо робіт',
    portfolioItem1DetailedDescription: 'Повнофункціональний сайт для креативної агенції, що демонструє портфоліо робіт та послуги. Дизайн виконаний у сучасному стилі з акцентом на візуальний контент та зручну навігацію.',
    portfolioItem1Category: 'Веб-дизайн',
    
    portfolioItem2Title: 'Welcome Studio',
    portfolioItem2Description: 'Мінімалістичний дизайн студії з акцентом на досвід користувача',
    portfolioItem2DetailedDescription: 'Елегантний сайт для дизайн-студії з мінімалістичним підходом. Фокус на UX/UI дизайні та презентації творчих рішень. Використано сучасні принципи веб-дизайну.',
    portfolioItem2Category: 'UX/UI Дизайн',
    
    portfolioItem3Title: 'Бізнес-рішення Optium',
    portfolioItem3Description: 'Корпоративний сайт для технологічних бізнес-рішень',
    portfolioItem3DetailedDescription: 'Професійний корпоративний сайт для технологічної компанії. Представляє бізнес-рішення та послуги компанії з акцентом на надійність та інновації.',
    portfolioItem3Category: 'Корпоративний',
    
    portfolioItem4Title: 'Digital makers',
    portfolioItem4Description: 'Платформа для цифрових виробників з сучасним інтерфейсом',
    portfolioItem4DetailedDescription: 'Інноваційна платформа для цифрових креаторів та виробників. Забезпечує інструменти для створення, управління та продажу цифрових продуктів.',
    portfolioItem4Category: 'Платформа',
    
    portfolioItem5Title: 'Дизайн-студія',
    portfolioItem5Description: 'Елегантний сайт для дизайнерського агентства',
    portfolioItem5DetailedDescription: 'Стильний та функціональний сайт для дизайн-агентства. Демонструє креативний підхід команди та високу якість виконаних проектів.',
    portfolioItem5Category: 'Креативний',
    
    portfolioItem6Title: 'Мобільний додаток',
    portfolioItem6Description: 'UI дизайн для мобільного додатку доставки',
    portfolioItem6DetailedDescription: 'Сучасний дизайн мобільного додатку для служби доставки. Інтуїтивний інтерфейс з акцентом на зручність використання та швидкість замовлення.',
    portfolioItem6Category: 'Мобільний',
    
    portfolioItem7Title: 'Miro колаборація',
    portfolioItem7Description: 'Інтерфейс для платформи командної роботи',
    portfolioItem7DetailedDescription: 'Дизайн інтерфейсу для платформи командної співпраці. Забезпечує ефективну взаємодію між членами команди та управління проектами.',
    portfolioItem7Category: 'SaaS',
    
    portfolioItem8Title: 'Digital Studio',
    portfolioItem8Description: 'Темний дизайн для цифрової студії з портфоліо',
    portfolioItem8DetailedDescription: 'Елегантний темний дизайн для цифрової студії. Акцент на візуальному контенті та сучасних трендах веб-дизайну з унікальними анімаціями.',
    portfolioItem8Category: 'Портфоліо',
    
    portfolioItem9Title: 'PostPilot маркетинг',
    portfolioItem9Description: 'Яскравий дизайн для маркетингової платформи',
    portfolioItem9DetailedDescription: 'Динамічний та яскравий дизайн для маркетингової платформи. Оптимізований для конверсії та залучення клієнтів з акцентом на результативність.',
    portfolioItem9Category: 'Маркетинг',
    
    portfolioItem10Title: 'Gravity Team',
    portfolioItem10Description: 'Наш власний сайт з темним дизайном та градієнтами',
    portfolioItem10DetailedDescription: 'Власний корпоративний сайт студії Gravity Team. Демонструє наші можливості в області сучасного веб-дизайну та розробки.',
    portfolioItem10Category: 'Власний проект',
    
    portfolioItem11Title: 'Certo Mobile Privacy',
    portfolioItem11Description: 'Додаток для захисту мобільної приватності',
    portfolioItem11DetailedDescription: 'Професійний лендінг для додатку захисту мобільної приватності. Яскравий дизайн з акцентом на безпеку та довіру користувачів. Включає відгуки, статистику та детальний опис функцій.',
    portfolioItem11Category: 'Мобільний додаток',
    
    portfolioItem12Title: 'Sable Financial',
    portfolioItem12Description: 'Фінансова платформа з темним дизайном',
    portfolioItem12DetailedDescription: 'Сучасна фінансова платформа з елегантним темним дизайном. Фокус на зручності використання фінансових послуг та інтуїтивному інтерфейсі. Включає порівняльні таблиці та відгуки.',
    portfolioItem12Category: 'Фінтех',
    
    portfolioItem13Title: 'Web3 Design Studio',
    portfolioItem13Description: 'Дизайн-студія для Web3 проектів',
    portfolioItem13DetailedDescription: 'Інноваційна дизайн-студія, що спеціалізується на Web3 проектах. Темний футуристичний дизайн з акцентом на блокчейн технології та NFT проекти. Демонструє портфоліо та процес роботи.',
    portfolioItem13Category: 'Web3',
    
    // Calculator
    projectType: 'Тип проекту',
    landingPage: 'Landing-page',
    corporateWebsite: 'Корпоративний сайт',
    onlineStore: 'Інтернет-магазин',
    educationalPlatform: 'Освітня платформа',
    portfolioSite: 'Портфоліо',
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
    calculatorSubtitle: 'Розрахуйте орієнтовну вартість вашого проекту',
    calculatorDisclaimer: '*Остаточна вартість може відрізнятися після детального обговорення проекту',
    
    // Partners
    partnersTitle: 'Наші партнери та друзі',
    partnersSubtitle: 'Ми пишаємося співпрацею з провідними проектами та компаніями у сфері e-commerce, EdTech, FinTech та інших',
    partnersQuote: '"Ми працюємо з найкращими, щоб забезпечити найкращі результати для наших клієнтів"',
    
    // Testimonials
    testimonialsTitle: 'Що про нас кажуть',
    testimonialsSubtitle: 'Відгуки наших клієнтів — найкраща реклама нашої роботи',
    testimonial1Text: 'Gravity Team воістину професіонали: упродовж місяця створили для нас повноцінний інтернет-магазин, інтегрували CMS і платіжні системи. Результат — +40% продажів уже за перший квартал.',
    testimonial1Name: 'Ірина Петренко',
    testimonial1Position: 'CEO Fashion.ua',
    testimonial2Text: 'Освітня платформа, яку розробила команда Gravity, перевершила всі наші очікування. Інтуїтивний інтерфейс, стабільна робота та відмінна підтримка. Рекомендую!',
    testimonial2Name: 'Олександр Коваленко',
    testimonial2Position: 'Засновник EdTech Hub',
    testimonial3Text: 'З 2019 року команда Gravity Team — наш незмінний партнер із веб-розробки. Вони довели, що можуть забезпечувати високу якість та дотримуватися термінів.',
    testimonial3Name: 'Марія Сидоренко',
    testimonial3Position: 'Маркетинг-директор StartupX',
    
    // Join Team
    joinTeamTitle: 'Приєднуйтесь до',
    joinTeamSubtitle: 'Gravity Team',
    joinTeamDescription: 'Шукаєте місце, де твої ідеї стануть реальністю? Ми постійно відкриті до талановитих девелоперів, дизайнерів і маркетологів. Надсилай своє резюме!',
    developers: 'Розробники',
    designers: 'Дизайнери',
    marketers: 'Маркетологи',
    whatWeOffer: 'Що ми пропонуємо?',
    competitiveSalary: 'Конкурентна заробітна плата',
    flexibleSchedule: 'Гнучкий графік роботи',
    interestingProjects: 'Цікаві проєкти',
    careerGrowth: 'Можливість професійного зростання',
    sendResume: 'Надіслати резюме',
    viewVacancies: 'Переглянути вакансії',
    
    // Contact section
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
    contactAddress: 'м. Київ, вул. Хрещатик, 1',
    workingHours: '24/7 підтримка',
    followUs: 'Слідкуйте за нами',
    
    // Footer
    servicesFooter: 'Послуги',
    companyFooter: 'Компанія',
    helpFooter: 'Допомога',
    contactsFooter: 'Контакти',
    aboutUs: 'Про нас',
    vacancies: 'Вакансії',
    blog: 'Блог',
    support: 'Підтримка',
    privacyPolicy: 'Політика конфіденційності',
    termsOfUse: 'Умови використання',
    address: 'Адреса:',
    phone: 'Телефон:',
    email: 'Email:',
    newsletter: 'Підпішіться на наші новини',
    newsletterText: 'Отримуйте останні новини про тренди веб-розробки та спеціальні пропозиції',
    emailPlaceholderFooter: 'Ваш email',
    subscribe: 'Підписатися',
    copyright: '© 2025 Gravity Team — Усі права захищені.',
    
    // FAQ
    faqTitle: 'Часто задавані питання',
    faqSubtitle: 'Відповіді на найпоширеніші питання наших клієнтів',
    faq1Question: 'Скільки часу займає розробка сайту?',
    faq1Answer: 'Термін розробки залежить від складності проекту. Landing-page - 3-5 днів, корпоративний сайт - 1-2 тижні, інтернет-магазин - 2-4 тижні.',
    faq2Question: 'Чи включено підтримку після запуску?',
    faq2Answer: 'Так, ми надаємо 1 місяць безкоштовної технічної підтримки після запуску проекту.',
    faq3Question: 'Чи можу я самостійно редагувати контент на сайті?',
    faq3Answer: 'Так, всі наші сайти мають зручну систему управління контентом, яка дозволяє легко редагувати тексти та зображення.',
    faq4Question: 'Чи адаптивні ваші сайти під мобільні пристрої?',
    faq4Answer: 'Абсолютно! Всі наші сайти повністю адаптивні та чудово виглядають на всіх пристроях.',
    faq5Question: 'Які способи оплати ви приймаєте?',
    faq5Answer: 'Ми приймаємо оплату банківським переказом, картою Visa/MasterCard та через PayPal.',
    allServices: 'Всі послуги',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Our Services',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    contacts: 'Contacts',
    getConsultation: 'Get Consultation',
    faq: 'FAQ',
    calculator: 'Cost Calculator',
    
    // Hero section
    heroTitle1: 'We create modern',
    heroTitle2: 'websites for developing',
    heroTitle3: 'your business',
    heroSubtitle: 'Our team of developers and designers will build a website of any complexity — from landing pages to large-scale marketplaces',
    heroButton: 'Get free consultation',
    
    // About section
    aboutTitle: 'About our team',
    aboutDescription: 'We are the Gravity Team, helping businesses launch and scale internet projects since 2017. Our key values: innovation, transparency, and quality.',
    aboutStat1: '~$100M',
    aboutStat1Label: 'total project volume',
    aboutStat2: '0.8%',
    aboutStat2Label: 'global market share',
    aboutStat3: '30+',
    aboutStat3Label: 'team members',
    aboutStat4: '1,200+',
    aboutStat4Label: 'completed projects',
    aboutStat5: '24/7',
    aboutStat5Label: 'round-the-clock support',
    aboutStat6: '5B',
    aboutStat6Label: 'total traffic',
    aboutWhyUs: 'Why choose us?',
    aboutWhyUsText: 'We don\'t just create websites — we build digital solutions that help businesses grow. Every project is an opportunity to implement innovative ideas and achieve maximum results for our clients.',
    
    // Services section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Full range of services for creating and developing your online business',
    additionalServicesTitle: 'Additional Services',
    additionalServicesSubtitle: 'Comprehensive solutions for complete brand development',
    orderNow: 'Order Now',
    customConsultation: 'Individual Consultation',
    notFoundService: 'Can\'t find the service you need?',
    notFoundServiceText: 'Contact us for individual consultation and development of a solution for your needs',
    detailsButton: 'Details',
    
    // Main Services
    onlineStoreTitle: 'Turnkey Online Store',
    onlineStoreDescription: 'Ready-made solution with product catalog, filters, shopping cart, payment integration and delivery service. Full cycle: from UI/UX design to production launch.',
    
    educationalPlatformTitle: 'Educational Platform / Online Course',
    educationalPlatformDescription: 'Platform for conducting online courses with personal accounts, video lessons, tests and certification. Built-in monetization system and content management.',
    
    landingPageTitle: 'Landing Page',
    landingPageDescription: 'Single-page website for product or service presentation: bright design, mobile responsiveness, integration with lead capture form.',
    
    corporateWebsiteTitle: 'Corporate Website / Catalog',
    corporateWebsiteDescription: 'Website for company presentation: "About Us", "Services", "Portfolio", "Pricing" and "Contacts" sections. Easy editing through CMS.',
    
    portfolioSiteTitle: 'Portfolio / Business Card Site',
    portfolioSiteDescription: 'Small website with brand style: "About Me" block, work gallery, contact form. Perfect for freelancers and small agencies.',
    
    mediaPortalTitle: 'Media Portal / Service Website',
    mediaPortalDescription: 'Platform with editorial system: publishing articles, news, videos, feeds with advertising blocks. CRM and API integration.',
    
    // Additional Services
    logoDesignTitle: 'Logo Design',
    logoDesignDescription: 'Unique logo design adapted for all media: from business cards to websites.',
    
    printDesignTitle: 'Business Cards, Brochures, Flyers',
    printDesignDescription: 'Print design: from layout to print-ready files. Support for all popular formats.',
    
    bannerDesignTitle: 'Banners, Presentations (Design)',
    bannerDesignDescription: 'Creating banners for websites, social media, and presentation slides in PowerPoint/Keynote.',
    
    redesignTitle: 'Website Redesign',
    redesignDescription: 'Complete visual and architecture update: responsiveness, speed optimization, modern UI/UX practices.',
    
    // Portfolio section
    portfolioTitle: 'Our Portfolio',
    portfolioSubtitle: 'Check out our best work - from landing pages to complex web platforms',
    portfolioCTA: 'Ready to create something similar?',
    portfolioCTAText: 'Let\'s discuss your project and create something unique together',
    startProject: 'Start Project',
    
    // Portfolio items
    portfolioItem1Title: 'Web Development Agency',
    portfolioItem1Description: 'Modern design for creative agency with portfolio works',
    portfolioItem1DetailedDescription: 'Full-featured website for creative agency showcasing portfolio works and services. Design executed in modern style with focus on visual content and convenient navigation.',
    portfolioItem1Category: 'Web Design',
    
    portfolioItem2Title: 'Welcome Studio',
    portfolioItem2Description: 'Minimalist studio design with focus on user experience',
    portfolioItem2DetailedDescription: 'Elegant website for design studio with minimalist approach. Focus on UX/UI design and presentation of creative solutions. Used modern web design principles.',
    portfolioItem2Category: 'UX/UI Design',
    
    portfolioItem3Title: 'Optium Business Solutions',
    portfolioItem3Description: 'Corporate website for technological business solutions',
    portfolioItem3DetailedDescription: 'Professional corporate website for technology company. Presents business solutions and company services with focus on reliability and innovation.',
    portfolioItem3Category: 'Corporate',
    
    portfolioItem4Title: 'Digital makers',
    portfolioItem4Description: 'Platform for digital makers with modern interface',
    portfolioItem4DetailedDescription: 'Innovative platform for digital creators and makers. Provides tools for creating, managing and selling digital products.',
    portfolioItem4Category: 'Platform',
    
    portfolioItem5Title: 'Design Studio',
    portfolioItem5Description: 'Elegant website for design agency',
    portfolioItem5DetailedDescription: 'Stylish and functional website for design agency. Demonstrates team\'s creative approach and high quality of completed projects.',
    portfolioItem5Category: 'Creative',
    
    portfolioItem6Title: 'Mobile App',
    portfolioItem6Description: 'UI design for mobile delivery app',
    portfolioItem6DetailedDescription: 'Modern design of mobile app for delivery service. Intuitive interface with focus on ease of use and order speed.',
    portfolioItem6Category: 'Mobile',
    
    portfolioItem7Title: 'Miro Collaboration',
    portfolioItem7Description: 'Interface for team collaboration platform',
    portfolioItem7DetailedDescription: 'Interface design for team collaboration platform. Provides effective interaction between team members and project management.',
    portfolioItem7Category: 'SaaS',
    
    portfolioItem8Title: 'Digital Studio',
    portfolioItem8Description: 'Dark design for digital studio with portfolio',
    portfolioItem8DetailedDescription: 'Elegant dark design for digital studio. Focus on visual content and modern web design trends with unique animations.',
    portfolioItem8Category: 'Portfolio',
    
    portfolioItem9Title: 'PostPilot Marketing',
    portfolioItem9Description: 'Bright design for marketing platform',
    portfolioItem9DetailedDescription: 'Dynamic and bright design for marketing platform. Optimized for conversion and customer acquisition with focus on performance.',
    portfolioItem9Category: 'Marketing',
    
    portfolioItem10Title: 'Gravity Team',
    portfolioItem10Description: 'Our own website with dark design and gradients',
    portfolioItem10DetailedDescription: 'Own corporate website of Gravity Team studio. Demonstrates our capabilities in modern web design and development.',
    portfolioItem10Category: 'Own Project',
    
    portfolioItem11Title: 'Certo Mobile Privacy',
    portfolioItem11Description: 'Mobile privacy protection app',
    portfolioItem11DetailedDescription: 'Professional landing for mobile privacy protection app. Bright design with focus on security and user trust. Includes reviews, statistics and detailed feature description.',
    portfolioItem11Category: 'Mobile App',
    
    portfolioItem12Title: 'Sable Financial',
    portfolioItem12Description: 'Financial platform with dark design',
    portfolioItem12DetailedDescription: 'Modern financial platform with elegant dark design. Focus on ease of use of financial services and intuitive interface. Includes comparison tables and reviews.',
    portfolioItem12Category: 'Fintech',
    
    portfolioItem13Title: 'Web3 Design Studio',
    portfolioItem13Description: 'Design studio for Web3 projects',
    portfolioItem13DetailedDescription: 'Innovative design studio specializing in Web3 projects. Dark futuristic design with focus on blockchain technologies and NFT projects. Demonstrates portfolio and work process.',
    portfolioItem13Category: 'Web3',
    
    // Calculator
    projectType: 'Project Type',
    landingPage: 'Landing Page',
    corporateWebsite: 'Corporate Website',
    onlineStore: 'Online Store',
    educationalPlatform: 'Educational Platform',
    portfolioSite: 'Portfolio',
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
    calculatorSubtitle: 'Calculate the estimated cost of your project',
    calculatorDisclaimer: '*Final cost may differ after detailed project discussion',
    
    // Partners
    partnersTitle: 'Our partners and friends',
    partnersSubtitle: 'We are proud to collaborate with leading projects and companies in e-commerce, EdTech, FinTech and other fields',
    partnersQuote: '"We work with the best to provide the best results for our clients"',
    
    // Testimonials
    testimonialsTitle: 'What they say about us',
    testimonialsSubtitle: 'Our clients\' reviews are the best advertisement for our work',
    testimonial1Text: 'Gravity Team are true professionals: within a month they created a full-fledged online store for us, integrated CMS and payment systems. Result — +40% sales in the first quarter.',
    testimonial1Name: 'Iryna Petrenko',
    testimonial1Position: 'CEO Fashion.ua',
    testimonial2Text: 'The educational platform developed by the Gravity team exceeded all our expectations. Intuitive interface, stable operation and excellent support. Highly recommend!',
    testimonial2Name: 'Oleksandr Kovalenko',
    testimonial2Position: 'Founder EdTech Hub',
    testimonial3Text: 'Since 2019, the Gravity Team has been our permanent web development partner. They have proven they can deliver high quality and meet deadlines.',
    testimonial3Name: 'Maria Sydorenko',
    testimonial3Position: 'Marketing Director StartupX',
    
    // Join Team
    joinTeamTitle: 'Join',
    joinTeamSubtitle: 'Gravity Team',
    joinTeamDescription: 'Looking for a place where your ideas become reality? We are always open to talented developers, designers and marketers. Send your resume!',
    developers: 'Developers',
    designers: 'Designers',
    marketers: 'Marketers',
    whatWeOffer: 'What do we offer?',
    competitiveSalary: 'Competitive salary',
    flexibleSchedule: 'Flexible working hours',
    interestingProjects: 'Interesting projects',
    careerGrowth: 'Professional growth opportunities',
    sendResume: 'Send Resume',
    viewVacancies: 'View Vacancies',
    
    // Contact section
    contactTitle: 'Contact Us',
    contactSubtitle: 'We\'d be happy to discuss your project! Fill out the form or use the contacts below.',
    sendMessage: 'Send Message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+1 (xxx) xxx-xx-xx',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    sendButton: 'Send',
    contactInfo: 'Contact Information',
    contactEmail: 'info@gravityteam.ua',
    contactPhone: '+38 (044) 123-45-67',
    contactAddress: 'Kyiv, Khreshchatyk str., 1',
    workingHours: '24/7 support',
    followUs: 'Follow us',
    
    // Footer
    servicesFooter: 'Services',
    companyFooter: 'Company',
    helpFooter: 'Help',
    contactsFooter: 'Contacts',
    aboutUs: 'About Us',
    vacancies: 'Vacancies',
    blog: 'Blog',
    support: 'Support',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    address: 'Address:',
    phone: 'Phone:',
    email: 'Email:',
    newsletter: 'Subscribe to our newsletter',
    newsletterText: 'Get the latest news about web development trends and special offers',
    emailPlaceholderFooter: 'Your email',
    subscribe: 'Subscribe',
    copyright: '© 2025 Gravity Team — All rights reserved.',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Answers to the most common questions from our clients',
    faq1Question: 'How long does website development take?',
    faq1Answer: 'Development time depends on project complexity. Landing page - 3-5 days, corporate website - 1-2 weeks, online store - 2-4 weeks.',
    faq2Question: 'Is support included after launch?',
    faq2Answer: 'Yes, we provide 1 month of free technical support after project launch.',
    faq3Question: 'Can I edit content on the website myself?',
    faq3Answer: 'Yes, all our websites have a user-friendly content management system that allows easy editing of texts and images.',
    faq4Question: 'Are your websites mobile-responsive?',
    faq4Answer: 'Absolutely! All our websites are fully responsive and look great on all devices.',
    faq5Question: 'What payment methods do you accept?',
    faq5Answer: 'We accept bank transfers, Visa/MasterCard payments, and PayPal.',
    allServices: 'All Services',
  },
  ru: {
    // Navigation
    home: 'Главная',
    about: 'О нас',
    services: 'Наши услуги',
    portfolio: 'Портфолио',
    testimonials: 'Отзывы',
    contacts: 'Контакты',
    getConsultation: 'Получить консультацию',
    faq: 'Вопросы и ответы',
    calculator: 'Калькулятор стоимости',
    
    // Hero section
    heroTitle1: 'Создаем современные',
    heroTitle2: 'сайты для развития',
    heroTitle3: 'вашего бизнеса',
    heroSubtitle: 'Наша команда разработчиков и дизайнеров создаст сайт любой сложности — от лендинга до масштабного маркетплейса',
    heroButton: 'Получить бесплатную консультацию',
    
    // About section
    aboutTitle: 'О нашей команде',
    aboutDescription: 'Мы — команда Gravity Team, которая с 2017 года помогает бизнесам запускать и масштабировать интернет-проекты. Наши ключевые ценности: инновационность, прозрачность и качество.',
    aboutStat1: '~100 млн $',
    aboutStat1Label: 'суммарный объем проектов',
    aboutStat2: '0.8%',
    aboutStat2Label: 'доля глобального рынка',
    aboutStat3: '30+',
    aboutStat3Label: 'членов команды',
    aboutStat4: '1,200+',
    aboutStat4Label: 'завершенных проектов',
    aboutStat5: '24/7',
    aboutStat5Label: 'круглосуточная поддержка',
    aboutStat6: '5 млрд',
    aboutStat6Label: 'общий трафик',
    aboutWhyUs: 'Почему выбирают нас?',
    aboutWhyUsText: 'Мы не просто создаем сайты — мы строим цифровые решения, которые помогают бизнесу расти. Каждый проект для нас — это возможность воплотить инновационные идеи и достичь максимального результата для наших клиентов.',
    
    // Services section
    servicesTitle: 'Наши услуги',
    servicesSubtitle: 'Полный спектр услуг для создания и развития вашего онлайн-бизнеса',
    additionalServicesTitle: 'Дополнительные услуги',
    additionalServicesSubtitle: 'Комплексные решения для полного развития вашего бренда',
    orderNow: 'Заказать сейчас',
    customConsultation: 'Индивидуальная консультация',
    notFoundService: 'Не нашли нужную услугу?',
    notFoundServiceText: 'Свяжитесь с нами для индивидуальной консультации и разработки решения под ваши потребности',
    detailsButton: 'Подробнее',
    
    // Main Services
    onlineStoreTitle: 'Интернет-магазин под ключ',
    onlineStoreDescription: 'Готовое решение с каталогом товаров, фильтрами, корзиной, интеграцией платежей и службы доставки. Полный цикл: от проектирования UI/UX до запуска на продакшене.',
    
    educationalPlatformTitle: 'Образовательная платформа / Онлайн-курс',
    educationalPlatformDescription: 'Платформа для проведения онлайн-курсов с личными кабинетами, видеоуроками, тестами и сертификацией. Встроенная система монетизации и управления контентом.',
    
    landingPageTitle: 'Landing-страница',
    landingPageDescription: 'Одностраничный сайт для презентации продукта или услуги: яркий дизайн, адаптивность под мобильные, интеграция с формой сбора лидов.',
    
    corporateWebsiteTitle: 'Корпоративный сайт / Каталог',
    corporateWebsiteDescription: 'Сайт для представления компании: разделы «О нас», «Услуги», «Портфолио», «Прайс» и «Контакты». Легкое редактирование через CMS.',
    
    portfolioSiteTitle: 'Портфолио / Сайт-визитка',
    portfolioSiteDescription: 'Небольшой сайт со стилем бренда: блок «Обо мне», галерея работ, контактная форма. Идеально для фрилансеров и малых агентств.',
    
    mediaPortalTitle: 'Медиа-портал / Сервисный сайт',
    mediaPortalDescription: 'Платформа с редакционной системой: публикация статей, новостей, видео, флоты с рекламными блоками. Интеграция с CRM и API.',
    
    // Additional Services
    logoDesignTitle: 'Логотип',
    logoDesignDescription: 'Разработка логотипа с уникальной идеей, адаптивного ко всем носителям: от визиток до сайта.',
    
    printDesignTitle: 'Визитки, буклеты, флаеры',
    printDesignDescription: 'Дизайн полиграфии: от макета до готового файла для печати. Поддержка всех популярных форматов.',
    
    bannerDesignTitle: 'Баннеры, презентации (дизайн)',
    bannerDesignDescription: 'Создание баннеров для сайтов, соцсетей, а также слайдов-презентаций в PowerPoint/Keynote.',
    
    redesignTitle: 'Редизайн сайта',
    redesignDescription: 'Полное обновление визуальной части и архитектуры: адаптивность, оптимизация скорости, современные UI/UX-практики.',
    
    // Portfolio section
    portfolioTitle: 'Наше портфолио',
    portfolioSubtitle: 'Посмотрите наши лучшие работы - от лендингов до сложных веб-платформ',
    portfolioCTA: 'Готовы создать что-то подобное?',
    portfolioCTAText: 'Давайте обсудим ваш проект и создадим что-то уникальное вместе',
    startProject: 'Начать проект',
    
    // Portfolio items
    portfolioItem1Title: 'Агентство веб-разработки',
    portfolioItem1Description: 'Современный дизайн для креативного агентства с портфолио работ',
    portfolioItem1DetailedDescription: 'Полнофункциональный сайт для креативного агентства, демонстрирующий портфолио работ и услуги. Дизайн выполнен в современном стиле с акцентом на визуальный контент и удобную навигацию.',
    portfolioItem1Category: 'Веб-дизайн',
    
    portfolioItem2Title: 'Welcome Studio',
    portfolioItem2Description: 'Минималистичный дизайн студии с акцентом на опыт пользователя',
    portfolioItem2DetailedDescription: 'Элегантный сайт для дизайн-студии с минималистичным подходом. Фокус на UX/UI дизайне и презентации творческих решений. Использованы современные принципы веб-дизайна.',
    portfolioItem2Category: 'UX/UI Дизайн',
    
    portfolioItem3Title: 'Бизнес-решения Optium',
    portfolioItem3Description: 'Корпоративный сайт для технологических бизнес-решений',
    portfolioItem3DetailedDescription: 'Профессиональный корпоративный сайт для технологической компании. Представляет бизнес-решения и услуги компании с акцентом на надежность и инновации.',
    portfolioItem3Category: 'Корпоративный',
    
    portfolioItem4Title: 'Digital makers',
    portfolioItem4Description: 'Платформа для цифровых производителей с современным интерфейсом',
    portfolioItem4DetailedDescription: 'Инновационная платформа для цифровых креаторов и производителей. Обеспечивает инструменты для создания, управления и продажи цифровых продуктов.',
    portfolioItem4Category: 'Платформа',
    
    portfolioItem5Title: 'Дизайн-студия',
    portfolioItem5Description: 'Элегантный сайт для дизайнерского агентства',
    portfolioItem5DetailedDescription: 'Стильный и функциональный сайт для дизайн-агентства. Демонстрирует креативный подход команды и высокое качество выполненных проектов.',
    portfolioItem5Category: 'Креативный',
    
    portfolioItem6Title: 'Мобильное приложение',
    portfolioItem6Description: 'UI дизайн для мобильного приложения доставки',
    portfolioItem6DetailedDescription: 'Современный дизайн мобильного приложения для службы доставки. Интуитивный интерфейс с акцентом на удобство использования и скорость заказа.',
    portfolioItem6Category: 'Мобильный',
    
    portfolioItem7Title: 'Miro коллаборация',
    portfolioItem7Description: 'Интерфейс для платформы командной работы',
    portfolioItem7DetailedDescription: 'Дизайн интерфейса для платформы командного сотрудничества. Обеспечивает эффективное взаимодействие между членами команды и управление проектами.',
    portfolioItem7Category: 'SaaS',
    
    portfolioItem8Title: 'Digital Studio',
    portfolioItem8Description: 'Темный дизайн для цифровой студии с портфолио',
    portfolioItem8DetailedDescription: 'Элегантный темный дизайн для цифровой студии. Акцент на визуальном контенте и современных трендах веб-дизайна с уникальными анимациями.',
    portfolioItem8Category: 'Портфолио',
    
    portfolioItem9Title: 'PostPilot маркетинг',
    portfolioItem9Description: 'Яркий дизайн для маркетинговой платформы',
    portfolioItem9DetailedDescription: 'Динамичный и яркий дизайн для маркетинговой платформы. Оптимизирован для конверсии и привлечения клиентов с акцентом на результативность.',
    portfolioItem9Category: 'Маркетинг',
    
    portfolioItem10Title: 'Gravity Team',
    portfolioItem10Description: 'Наш собственный сайт с темным дизайном и градиентами',
    portfolioItem10DetailedDescription: 'Собственный корпоративный сайт студии Gravity Team. Демонстрирует наши возможности в области современного веб-дизайна и разработки.',
    portfolioItem10Category: 'Собственный проект',
    
    portfolioItem11Title: 'Certo Mobile Privacy',
    portfolioItem11Description: 'Приложение для защиты мобильной приватности',
    portfolioItem11DetailedDescription: 'Профессиональный лендинг для приложения защиты мобильной приватности. Яркий дизайн с акцентом на безопасность и доверие пользователей. Включает отзывы, статистику и детальное описание функций.',
    portfolioItem11Category: 'Мобильное приложение',
    
    portfolioItem12Title: 'Sable Financial',
    portfolioItem12Description: 'Финансовая платформа с темным дизайном',
    portfolioItem12DetailedDescription: 'Современная финансовая платформа с элегантным темным дизайном. Фокус на удобстве использования финансовых услуг и интуитивном интерфейсе. Включает сравнительные таблицы и отзывы.',
    portfolioItem12Category: 'Финтех',
    
    portfolioItem13Title: 'Web3 Design Studio',
    portfolioItem13Description: 'Дизайн-студия для Web3 проектов',
    portfolioItem13DetailedDescription: 'Инновационная дизайн-студия, специализирующаяся на Web3 проектах. Темный футуристичный дизайн с акцентом на блокчейн технологии и NFT проекты. Демонстрирует портфолио и процесс работы.',
    portfolioItem13Category: 'Web3',
    
    // Calculator
    projectType: 'Тип проекта',
    landingPage: 'Landing-страница',
    corporateWebsite: 'Корпоративный сайт',
    onlineStore: 'Интернет-магазин',
    educationalPlatform: 'Образовательная платформа',
    portfolioSite: 'Портфолио',
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
    calculatorSubtitle: 'Рассчитайте ориентировочную стоимость вашего проекта',
    calculatorDisclaimer: '*Окончательная стоимость может отличаться после детального обсуждения проекта',
    
    // Partners
    partnersTitle: 'Наши партнеры и друзья',
    partnersSubtitle: 'Мы гордимся сотрудничеством с ведущими проектами и компаниями в сфере e-commerce, EdTech, FinTech и других',
    partnersQuote: '"Мы работаем с лучшими, чтобы обеспечить лучшие результаты для наших клиентов"',
    
    // Testimonials
    testimonialsTitle: 'Что о нас говорят',
    testimonialsSubtitle: 'Отзывы наших клиентов — лучшая реклама нашей работы',
    testimonial1Text: 'Gravity Team истинные профессионалы: в течение месяца создали для нас полноценный интернет-магазин, интегрировали CMS и платежные системы. Результат — +40% продаж уже в первом квартале.',
    testimonial1Name: 'Ирина Петренко',
    testimonial1Position: 'CEO Fashion.ua',
    testimonial2Text: 'Образовательная платформа, которую разработала команда Gravity, превзошла все наши ожидания. Интуитивный интерфейс, стабильная работа и отличная поддержка. Рекомендую!',
    testimonial2Name: 'Александр Коваленко',
    testimonial2Position: 'Основатель EdTech Hub',
    testimonial3Text: 'С 2019 года команда Gravity Team — наш неизменный партнер по веб-разработке. Они доказали, что могут обеспечивать высокое качество и соблюдать сроки.',
    testimonial3Name: 'Мария Сидоренко',
    testimonial3Position: 'Маркетинг-директор StartupX',
    
    // Join Team
    joinTeamTitle: 'Присоединяйтесь к',
    joinTeamSubtitle: 'Gravity Team',
    joinTeamDescription: 'Ищете место, где ваши идеи станут реальностью? Мы всегда открыты для талантливых разработчиков, дизайнеров и маркетологов. Отправляйте свое резюме!',
    developers: 'Разработчики',
    designers: 'Дизайнеры',
    marketers: 'Маркетологи',
    whatWeOffer: 'Что мы предлагаем?',
    competitiveSalary: 'Конкурентная заработная плата',
    flexibleSchedule: 'Гибкий график работы',
    interestingProjects: 'Интересные проекты',
    careerGrowth: 'Возможность профессионального роста',
    sendResume: 'Отправить резюме',
    viewVacancies: 'Посмотреть вакансии',
    
    // Contact section
    contactTitle: 'Свяжитесь с нами',
    contactSubtitle: 'Будем рады обсудить ваш проект! Заполните форму или воспользуйтесь контактами ниже.',
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
    contactAddress: 'г. Киев, ул. Крещатик, 1',
    workingHours: '24/7 поддержка',
    followUs: 'Следите за нами',
    
    // Footer
    servicesFooter: 'Услуги',
    companyFooter: 'Компания',
    helpFooter: 'Помощь',
    contactsFooter: 'Контакты',
    aboutUs: 'О нас',
    vacancies: 'Вакансии',
    blog: 'Блог',
    support: 'Поддержка',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfUse: 'Условия использования',
    address: 'Адрес:',
    phone: 'Телефон:',
    email: 'Email:',
    newsletter: 'Подпишитесь на наши новости',
    newsletterText: 'Получайте последние новости о трендах веб-разработки и специальные предложения',
    emailPlaceholderFooter: 'Ваш email',
    subscribe: 'Подписаться',
    copyright: '© 2025 Gravity Team — Все права защищены.',
    
    // FAQ
    faqTitle: 'Часто задаваемые вопросы',
    faqSubtitle: 'Ответы на самые распространенные вопросы наших клиентов',
    faq1Question: 'Сколько времени занимает разработка сайта?',
    faq1Answer: 'Срок разработки зависит от сложности проекта. Landing-страница - 3-5 дней, корпоративный сайт - 1-2 недели, интернет-магазин - 2-4 недели.',
    faq2Question: 'Включена ли поддержка после запуска?',
    faq2Answer: 'Да, мы предоставляем 1 месяц бесплатной технической поддержки после запуска проекта.',
    faq3Question: 'Могу ли я самостоятельно редактировать контент на сайте?',
    faq3Answer: 'Да, все наши сайты имеют удобную систему управления контентом, которая позволяет легко редактировать тексты и изображения.',
    faq4Question: 'Адаптивны ли ваши сайты под мобильные устройства?',
    faq4Answer: 'Абсолютно! Все наши сайты полностью адаптивны и отлично выглядят на всех устройствах.',
    faq5Question: 'Какие способы оплаты вы принимаете?',
    faq5Answer: 'Мы принимаем оплату банковским переводом, картой Visa/MasterCard и через PayPal.',
    allServices: 'Все услуги',
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
