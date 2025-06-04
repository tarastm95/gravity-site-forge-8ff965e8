
import React from 'react';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Агенція веб-розробки",
      description: "Сучасний дизайн для креативної агенції з портфоліо робіт",
      image: "/lovable-uploads/2496db32-a5e7-4955-ad7f-500900c9bcc5.png",
      category: "Веб-дизайн"
    },
    {
      id: 2,
      title: "Welcome Studio",
      description: "Мінімалістичний дизайн студії з акцентом на досвід користувача",
      image: "/lovable-uploads/607c9971-f4a1-4f2f-82b0-b611b0faf7b2.png",
      category: "UX/UI Дизайн"
    },
    {
      id: 3,
      title: "Бізнес-рішення Optium",
      description: "Корпоративний сайт для технологічних бізнес-рішень",
      image: "/lovable-uploads/c4c14285-bfef-4e61-848f-a7e1297bb56f.png",
      category: "Корпоративний"
    },
    {
      id: 4,
      title: "Digital makers",
      description: "Платформа для цифрових виробників з сучасним інтерфейсом",
      image: "/lovable-uploads/39359310-1c4d-4aae-8b69-81aee3328135.png",
      category: "Платформа"
    },
    {
      id: 5,
      title: "Дизайн-студія",
      description: "Елегантний сайт для дизайнерського агентства",
      image: "/lovable-uploads/3ab700fd-82e7-4646-a541-fb9855743760.png",
      category: "Креативний"
    },
    {
      id: 6,
      title: "Мобільний додаток",
      description: "UI дизайн для мобільного додатку доставки",
      image: "/lovable-uploads/ee8c936c-b732-44ca-a3cf-47e7c541f53a.png",
      category: "Мобільний"
    },
    {
      id: 7,
      title: "Miro колаборація",
      description: "Інтерфейс для платформи командної роботи",
      image: "/lovable-uploads/085c7a7a-fcf8-40ab-b781-c2afb6ff2c29.png",
      category: "SaaS"
    },
    {
      id: 8,
      title: "Digital Studio",
      description: "Темний дизайн для цифрової студії з портфоліо",
      image: "/lovable-uploads/a23c6d2d-994c-4e49-a84b-63a316543b08.png",
      category: "Портфоліо"
    },
    {
      id: 9,
      title: "PostPilot маркетинг",
      description: "Яскравий дизайн для маркетингової платформи",
      image: "/lovable-uploads/baeefd68-e7ce-4abd-bab6-459b1f32b7da.png",
      category: "Маркетинг"
    },
    {
      id: 10,
      title: "Gravity Team",
      description: "Наш власний сайт з темним дизайном та градієнтами",
      image: "/lovable-uploads/9cc3bb96-222d-4e76-9482-a2a4fbe0b436.png",
      category: "Власний проект"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                  <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
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
    </section>
  );
};

export default Portfolio;
