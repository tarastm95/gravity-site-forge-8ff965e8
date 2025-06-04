
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть всі обов'язкові поля",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Дякуємо за звернення!",
      description: "Ми зв'яжемося з вами найближчим часом",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Зв'яжіться з нами
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Будемо раді обговорити ваш проєкт! Заповніть форму або скористайтесь контактами нижче.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Надіслати повідомлення
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Ім'я *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ваше ім'я"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+38 (0xx) xxx-xx-xx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Повідомлення *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Розкажіть про ваш проєкт..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Відправити
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Контактна інформація
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-300">info@gravityteam.ua</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Телефон</h4>
                      <p className="text-gray-300">+38 (044) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Адреса</h4>
                      <p className="text-gray-300">м. Київ, вул. Хрещатик, 1</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⏰</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Режим роботи</h4>
                      <p className="text-gray-300">24/7 підтримка</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Слідкуйте за нами
                </h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    📘
                  </a>
                  <a 
                    href="#" 
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors"
                  >
                    📷
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors"
                  >
                    🐦
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
                  >
                    💼
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
