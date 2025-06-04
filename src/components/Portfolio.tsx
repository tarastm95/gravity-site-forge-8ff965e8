
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
}

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Агенція веб-розробки",
      description: "Сучасний дизайн для креативної агенції з портфоліо робіт",
      detailedDescription: "Повнофункціональний сайт для креативної агенції, що демонструє портфоліо робіт та послуги. Дизайн виконаний у сучасному стилі з акцентом на візуальний контент та зручну навігацію.",
      image: "/lovable-uploads/2496db32-a5e7-4955-ad7f-500900c9bcc5.png",
      category: "Веб-дизайн",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Адаптивний дизайн", "Портфоліо галерея", "Контактні форми", "SEO оптимізація"]
    },
    {
      id: 2,
      title: "Welcome Studio",
      description: "Мінімалістичний дизайн студії з акцентом на досвід користувача",
      detailedDescription: "Елегантний сайт для дизайн-студії з мінімалістичним підходом. Фокус на UX/UI дизайні та презентації творчих рішень. Використано сучасні принципи веб-дизайну.",
      image: "/lovable-uploads/607c9971-f4a1-4f2f-82b0-b611b0faf7b2.png",
      category: "UX/UI Дизайн",
      technologies: ["Next.js", "SCSS", "GSAP", "Three.js"],
      features: ["3D анімації", "Інтерактивний дизайн", "Оптимізація швидкості", "Кросплатформність"]
    },
    {
      id: 3,
      title: "Бізнес-рішення Optium",
      description: "Корпоративний сайт для технологічних бізнес-рішень",
      detailedDescription: "Професійний корпоративний сайт для технологічної компанії. Представляє бізнес-рішення та послуги компанії з акцентом на надійність та інновації.",
      image: "/lovable-uploads/c4c14285-bfef-4e61-848f-a7e1297bb56f.png",
      category: "Корпоративний",
      technologies: ["Vue.js", "Nuxt.js", "Bootstrap", "Chart.js"],
      features: ["Корпоративний стиль", "Інтеграція з CRM", "Аналітичні дашборди", "Багатомовність"]
    },
    {
      id: 4,
      title: "Digital makers",
      description: "Платформа для цифрових виробників з сучасним інтерфейсом",
      detailedDescription: "Інноваційна платформа для цифрових креаторів та виробників. Забезпечує інструменти для створення, управління та продажу цифрових продуктів.",
      image: "/lovable-uploads/39359310-1c4d-4aae-8b69-81aee3328135.png",
      category: "Платформа",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["Система оплати", "Панель управління", "Файловий менеджер", "Система відгуків"]
    },
    {
      id: 5,
      title: "Дизайн-студія",
      description: "Елегантний сайт для дизайнерського агентства",
      detailedDescription: "Стильний та функціональний сайт для дизайн-агентства. Демонструє креативний підхід команди та високу якість виконаних проектів.",
      image: "/lovable-uploads/3ab700fd-82e7-4646-a541-fb9855743760.png",
      category: "Креативний",
      technologies: ["Gatsby", "GraphQL", "Styled Components", "Contentful"],
      features: ["Headless CMS", "Статична генерація", "Швидке завантаження", "Блог система"]
    },
    {
      id: 6,
      title: "Мобільний додаток",
      description: "UI дизайн для мобільного додатку доставки",
      detailedDescription: "Сучасний дизайн мобільного додатку для служби доставки. Інтуїтивний інтерфейс з акцентом на зручність використання та швидкість замовлення.",
      image: "/lovable-uploads/ee8c936c-b732-44ca-a3cf-47e7c541f53a.png",
      category: "Мобільний",
      technologies: ["React Native", "Redux", "Firebase", "Google Maps API"],
      features: ["Геолокація", "Push сповіщення", "Онлайн оплата", "Відстеження замовлень"]
    },
    {
      id: 7,
      title: "Miro колаборація",
      description: "Інтерфейс для платформи командної роботи",
      detailedDescription: "Дизайн інтерфейсу для платформи командної співпраці. Забезпечує ефективну взаємодію між членами команди та управління проектами.",
      image: "/lovable-uploads/085c7a7a-fcf8-40ab-b781-c2afb6ff2c29.png",
      category: "SaaS",
      technologies: ["Angular", "TypeScript", "Socket.io", "PostgreSQL"],
      features: ["Реального часу співпраця", "Відеоконференції", "Управління задачами", "Інтеграції"]
    },
    {
      id: 8,
      title: "Digital Studio",
      description: "Темний дизайн для цифрової студії з портфоліо",
      detailedDescription: "Елегантний темний дизайн для цифрової студії. Акцент на візуальному контенті та сучасних трендах веб-дизайну з унікальними анімаціями.",
      image: "/lovable-uploads/a23c6d2d-994c-4e49-a84b-63a316543b08.png",
      category: "Портфоліо",
      technologies: ["React", "Three.js", "GSAP", "WebGL"],
      features: ["3D візуалізація", "Темна тема", "Smooth скролінг", "Інтерактивні елементи"]
    },
    {
      id: 9,
      title: "PostPilot маркетинг",
      description: "Яскравий дизайн для маркетингової платформи",
      detailedDescription: "Динамічний та яскравий дизайн для маркетингової платформи. Оптимізований для конверсії та залучення клієнтів з акцентом на результативність.",
      image: "/lovable-uploads/baeefd68-e7ce-4abd-bab6-459b1f32b7da.png",
      category: "Маркетинг",
      technologies: ["React", "D3.js", "Express.js", "Redis"],
      features: ["Аналітика", "A/B тестування", "Email маркетинг", "Автоматизація"]
    },
    {
      id: 10,
      title: "Gravity Team",
      description: "Наш власний сайт з темним дизайном та градієнтами",
      detailedDescription: "Власний корпоративний сайт студії Gravity Team. Демонструє наші можливості в області сучасного веб-дизайну та розробки.",
      image: "/lovable-uploads/9cc3bb96-222d-4e76-9482-a2a4fbe0b436.png",
      category: "Власний проект",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Градієнтний дизайн", "Анімації", "Адаптивність", "SEO оптимізація"]
    },
    {
      id: 11,
      title: "Certo Mobile Privacy",
      description: "Додаток для захисту мобільної приватності",
      detailedDescription: "Професійний лендінг для додатку захисту мобільної приватності. Яскравий дизайн з акцентом на безпеку та довіру користувачів. Включає відгуки, статистику та детальний опис функцій.",
      image: "/lovable-uploads/52830e93-dab8-48e7-ac91-c8b3e52e9485.png",
      category: "Мобільний додаток",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      features: ["Безпека даних", "Відгуки користувачів", "Статистика використання", "Багатоплатформність"]
    },
    {
      id: 12,
      title: "Sable Financial",
      description: "Фінансова платформа з темним дизайном",
      detailedDescription: "Сучасна фінансова платформа з елегантним темним дизайном. Фокус на зручності використання фінансових послуг та інтуїтивному інтерфейсі. Включає порівняльні таблиці та відгуки.",
      image: "/lovable-uploads/7ed81f30-c1dd-48ba-954a-92cbf1601dc6.png",
      category: "Фінтех",
      technologies: ["React", "Node.js", "GraphQL", "Stripe"],
      features: ["Фінансові операції", "Порівняння продуктів", "Система рейтингів", "Безпечні платежі"]
    },
    {
      id: 13,
      title: "Web3 Design Studio",
      description: "Дизайн-студія для Web3 проектів",
      detailedDescription: "Інноваційна дизайн-студія, що спеціалізується на Web3 проектах. Темний футуристичний дизайн з акцентом на блокчейн технології та NFT проекти. Демонструє портфоліо та процес роботи.",
      image: "/lovable-uploads/4281fff1-4a39-4c04-a6b0-727549f915e4.png",
      category: "Web3",
      technologies: ["React", "Web3.js", "Three.js", "IPFS"],
      features: ["Блокчейн інтеграція", "NFT галерея", "3D елементи", "Крипто платежі"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наше портфоліо
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Переглянуте наші найкращі роботи - від лендінгів до складних веб-платформ
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => openModal(item)}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Детальніше →
                  </button>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готові створити щось подібне?
            </h3>
            <p className="text-gray-300 mb-6">
              Давайте обговоримо ваш проект та створимо щось унікальне разом
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Почати проект
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-6xl max-h-[90vh] bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedItem && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image with zoom controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={zoomOut}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ZoomOut className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-white text-sm">{Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={zoomIn}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>
                
                <div className="overflow-auto max-h-96 border border-gray-700 rounded-lg">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Опис проекту</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedItem.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Технології</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Ключові особливості</h4>
                  <ul className="space-y-2">
                    {selectedItem.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Замовити подібний проект
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
