
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { toggleMobileMenu, closeMobileMenu } from '../store/slices/uiSlice';
import { Menu, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector(state => state.ui);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      dispatch(closeMobileMenu());
    }
  };

  const services = [
    { name: 'Інтернет-магазин', id: 'services' },
    { name: 'Освітня платформа', id: 'services' },
    { name: 'Landing-page', id: 'services' },
    { name: 'Корпоративний сайт', id: 'services' },
    { name: 'Портфоліо', id: 'services' },
    { name: 'Медіа-портал', id: 'services' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GRAVITY
            </span>
            <span className="text-white ml-2">TEAM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Головна
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Про нас
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-blue-400 transition-colors">
                Наші послуги
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.id)}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Портфоліо
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Відгуки
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Контакти
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Отримати консультацію
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Головна
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Про нас
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Наші послуги
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Портфоліо
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Відгуки
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Контакти
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-4"
              >
                Отримати консультацію
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
