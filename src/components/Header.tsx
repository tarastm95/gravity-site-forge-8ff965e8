
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { toggleMobileMenu, closeMobileMenu } from '../store/slices/uiSlice';
import { Menu, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector(state => state.ui);
  const { t } = useLanguage();
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
    { name: t('landingPage'), id: 'services' },
    { name: t('educationalPlatform'), id: 'services' },
    { name: t('corporateWebsite'), id: 'services' },
    { name: t('onlineStore'), id: 'services' },
    { name: t('portfolio'), id: 'services' },
    { name: t('mediaPortal'), id: 'services' },
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
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('about')}
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-blue-400 transition-colors">
                {t('services')}
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
              {t('portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('calculator')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('faq')}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('testimonials')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('contacts')}
            </button>
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('getConsultation')}
            </button>
          </div>

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
              <div className="flex justify-center mb-4">
                <LanguageSelector />
              </div>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('calculator')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('faq')}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('testimonials')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('contacts')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-4"
              >
                {t('getConsultation')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
