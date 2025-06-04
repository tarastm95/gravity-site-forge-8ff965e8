
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Star, Clock, Users, Zap } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { services } = useAppSelector(state => state.services);
  const { t } = useLanguage();
  
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Послугу не знайдено</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Повернутися на головну
          </button>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getServiceFeatures = (serviceId: string) => {
    const features = {
      '1': [
        'Адаптивний дизайн для всіх пристроїв',
        'Інтеграція з платіжними системами',
        'Система управління товарами',
        'SEO оптимізація',
        'Підтримка кількох мов',
        'Аналітика та звіти'
      ],
      '2': [
        'Відеоплеєр з підтримкою HD',
        'Система тестів та завдань',
        'Особисті кабінети студентів',
        'Сертифікати після завершення',
        'Форум для обговорень',
        'Мобільний додаток'
      ],
      '3': [
        'Швидке завантаження (до 3 сек)',
        'Форма збору контактів',
        'Інтеграція з CRM',
        'A/B тестування',
        'Аналітика конверсій',
        'Чат-бот підтримка'
      ],
      '4': [
        'CMS для легкого редагування',
        'Багаторівневе меню',
        'Галерея проектів',
        'Блог система',
        'Контактні форми',
        'Google Maps інтеграція'
      ],
      '5': [
        'Галерея робіт',
        'Контактна інформація',
        'Соціальні мережі',
        'Завантаження резюме',
        'Блог/новини',
        'Відгуки клієнтів'
      ],
      '6': [
        'Система публікацій',
        'Коментарі користувачів',
        'Рекламні блоки',
        'Розсилка новин',
        'Соціальні мережі',
        'Пошук по сайту'
      ]
    };
    return features[serviceId] || [];
  };

  const getServiceStats = (serviceId: string) => {
    const stats = {
      '1': { projects: '150+', conversion: '12%', avgTime: '25 днів' },
      '2': { projects: '45+', conversion: '89%', avgTime: '35 днів' },
      '3': { projects: '300+', conversion: '28%', avgTime: '7 днів' },
      '4': { projects: '200+', conversion: '15%', avgTime: '14 днів' },
      '5': { projects: '120+', conversion: '22%', avgTime: '10 днів' },
      '6': { projects: '80+', conversion: '18%', avgTime: '30 днів' }
    };
    return stats[serviceId] || { projects: '50+', conversion: '20%', avgTime: '14 днів' };
  };

  const features = getServiceFeatures(service.id);
  const stats = getServiceStats(service.id);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Повернутися назад
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 line-through text-2xl">
                  {service.originalPrice.toLocaleString()} ₴
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold">
                  -50%
                </span>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {service.discountPrice.toLocaleString()} ₴
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('orderNow')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-blue-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.projects}</div>
              <div className="text-gray-300">Завершених проектів</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="text-purple-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.conversion}</div>
              <div className="text-gray-300">Середня конверсія</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-green-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.avgTime}</div>
              <div className="text-gray-300">Середній час розробки</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Що входить в послугу?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Як проходить робота?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Аналіз', desc: 'Вивчаємо ваші потреби та цілі' },
                { step: '02', title: 'Планування', desc: 'Створюємо детальний план проекту' },
                { step: '03', title: 'Розробка', desc: 'Втілюємо ідеї в реальність' },
                { step: '04', title: 'Запуск', desc: 'Тестуємо та запускаємо проект' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Відгуки клієнтів
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Олексій Петренко',
                  company: 'ТОВ "Технології майбутнього"',
                  text: 'Чудовий результат! Наш сайт працює швидко та приносить нових клієнтів щодня.',
                  rating: 5
                },
                {
                  name: 'Марія Іваненко', 
                  company: 'Студія дизайну "Креатив"',
                  text: 'Професійна команда, дотримання термінів та якісний результат. Рекомендую!',
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-gray-400 text-sm">{review.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готові розпочати проект?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Зв'яжіться з нами прямо зараз та отримайте безкоштовну консультацію про ваш майбутній проект
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Розпочати проект
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
