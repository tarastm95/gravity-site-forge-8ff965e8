
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const services = [
    'Інтернет-магазин',
    'Освітня платформа',
    'Landing-page',
    'Корпоративний сайт',
    'Портфоліо',
    'Медіа-портал'
  ];

  const company = [
    { name: 'Про нас', id: 'about' },
    { name: 'Портфоліо', id: 'portfolio' },
    { name: 'Вакансії', id: 'join' },
    { name: 'Блог', id: 'blog' }
  ];

  const help = [
    'FAQ',
    'Підтримка',
    'Політика конфіденційності',
    'Умови використання'
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Послуги</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Компанія</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Допомога</h3>
            <ul className="space-y-2">
              {help.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакти</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Адреса:</p>
                <p className="text-white">м. Київ, вул. Хрещатик, 1</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Телефон:</p>
                <p className="text-white">+38 (044) 123-45-67</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email:</p>
                <p className="text-white">info@gravityteam.ua</p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-3 mt-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-pink-600 text-white p-2 rounded-lg transition-colors"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-blue-400 text-white p-2 rounded-lg transition-colors"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-xl mb-4">
              Підпишіться на наші новини
            </h3>
            <p className="text-gray-400 mb-6">
              Отримуйте останні новини про тренди веб-розробки та спеціальні пропозиції
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Підписатися
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Gravity Team — Усі права захищені.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Політика конфіденційності
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
