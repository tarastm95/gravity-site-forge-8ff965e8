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
    
    // Join Team
    joinTeamTitle: 'Приєднуйтесь до',
    joinTeamSubtitle: 'Gravity Team',
    joinTeamDescription: 'Шукаєш місце, де твої ідеї стануть реальністю? Ми постійно відкриті до талановитих девелоперів, дизайнерів і маркетологів. Надсилай своє резюме!',
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
