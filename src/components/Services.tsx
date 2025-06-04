import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';

const Services: React.FC = () => {
  const { services } = useAppSelector(state => state.services);
  
  const mainServices = services.filter(service => service.category === 'main');
  const additionalServices = services.filter(service => service.category === 'additional');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ServiceCard: React.FC<{ service: any; isLarge?: boolean }> = ({ service, isLarge = true }) => (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group ${isLarge ? 'h-full' : ''}`}>
      <h3 className={`font-bold text-white mb-4 group-hover:text-blue-400 transition-colors ${isLarge ? 'text-2xl' : 'text-xl'}`}>
        {service.title}
      </h3>
      <p className={`text-gray-300 mb-6 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
        {service.description}
      </p>
      
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-gray-500 line-through text-lg">
            {service.originalPrice.toLocaleString()} ₴
          </span>
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            -50%
          </span>
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {service.discountPrice.toLocaleString()} ₴
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('contact')}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
      >
        Замовити зараз
      </button>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наші послуги
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Повний спектр послуг для створення та розвитку вашого онлайн-бізнесу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Додаткові послуги
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Комплексні рішення для повного розвитку вашого бренду
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => (
            <ServiceCard key={service.id} service={service} isLarge={false} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Не знайшли потрібну послугу?
            </h3>
            <p className="text-gray-300 mb-6">
              Зв'яжіться з нами для індивідуальної консультації та розробки рішення під ваші потреби
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Індивідуальна консультація
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
