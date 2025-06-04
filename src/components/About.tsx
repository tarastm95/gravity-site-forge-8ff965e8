
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '~100 млн $', label: 'сукупний обсяг проектів', icon: '💰' },
    { value: '0.8%', label: 'частка глобального ринку', icon: '📊' },
    { value: '30+', label: 'членів команди', icon: '👥' },
    { value: '1,200+', label: 'завершених проєктів', icon: '🚀' },
    { value: '24/7', label: 'цілодобова підтримка', icon: '⏰' },
    { value: '5 млрд', label: 'загальний трафік', icon: '🌐' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Про нашу команду
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ми — команда Gravity Team, що з 2017 року допомагає бізнесам запускати й масштабувати 
            інтернет-проєкти. Наші ключові цінності: інноваційність, прозорість і якість.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Чому обирають нас?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ми не просто створюємо сайти — ми будуємо цифрові рішення, які допомагають бізнесу рости. 
              Кожен проект для нас — це можливість втілити інноваційні ідеї та досягти максимального результату 
              для наших клієнтів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
