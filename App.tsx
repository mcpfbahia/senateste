
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
