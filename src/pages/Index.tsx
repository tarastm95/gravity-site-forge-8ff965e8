
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import JoinTeam from '../components/JoinTeam';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <Testimonials />
        <JoinTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
