
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <Snowflake className="w-6 h-6 text-white" />
            </div>
            <span className="font-sora font-bold text-lg tracking-tight text-white">
              VRN <span className="text-blue-500 font-medium">CLIMATIZAÇÃO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={COMPANY_INFO.whatsappLink}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-[#0F172A] border-b border-white/5 overflow-hidden"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={COMPANY_INFO.whatsappLink}
            className="w-full py-3 bg-blue-600 text-white text-center rounded-xl font-bold"
          >
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
