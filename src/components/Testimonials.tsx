
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ірина Петренко',
      position: 'CEO Fashion.ua',
      avatar: '👩‍💼',
      text: 'Gravity Team воістину професіонали: упродовж місяця створили для нас повноцінний інтернет-магазин, інтегрували CMS і платіжні системи. Результат — +40% продажів уже за перший квартал.',
      rating: 5
    },
    {
      name: 'Олександр Коваленко',
      position: 'Засновник EdTech Hub',
      avatar: '👨‍💻',
      text: 'Освітня платформа, яку розробила команда Gravity, перевершила всі наші очікування. Інтуїтивний інтерфейс, стабільна робота та відмінна підтримка. Рекомендую!',
      rating: 5
    },
    {
      name: 'Марія Сидоренко',
      position: 'Маркетинг-директор StartupX',
      avatar: '👩‍🎨',
      text: 'З 2019 року команда Gravity Team — наш незмінний партнер із веб-розробки. Вони довели, що можуть забезпечувати високу якість і дотримуватися термінів. Дякуємо за професіоналізм!',
      rating: 5
    },
    {
      name: 'Дмитро Іваненко',
      position: 'Власник ресторану "Смак"',
      avatar: '👨‍🍳',
      text: 'Завдяки новому сайту з системою онлайн-замовлень наш бізнес виріс у 3 рази за рік. Gravity Team зрозуміли наші потреби і створили ідеальне рішення.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700 text-center min-h-[300px] flex flex-col justify-center">
              <div className="text-6xl mb-4">
                {testimonials[currentIndex].avatar}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <div>
                <p className="text-white font-bold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-blue-400">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional testimonials preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{testimonial.avatar}</span>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
