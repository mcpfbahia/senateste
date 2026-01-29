
import React from 'react';
import { motion } from 'framer-motion';
// Added Snowflake to the imported icons from lucide-react
import { Star, MapPin, CheckCircle2, Snowflake } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              5.0 no Google ({COMPANY_INFO.totalReviews} avaliações)
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            O Ar Gelado que sua <br /> 
            <span className="gradient-text">Casa Merece.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Especialistas em instalação e manutenção de ar condicionado em <span className="text-white font-semibold">Lauro de Freitas e região.</span> Conforto térmico com a perfeição que você procura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href={COMPANY_INFO.whatsappLink}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
            >
              Solicitar Orçamento Agora
            </a>
            <a 
              href="#servicos"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all"
            >
              Ver Nossos Serviços
            </a>
          </div>

          {/* Trusted indicators */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              Garantia de Serviço
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-5 h-5 text-blue-500" />
              Atendimento em Lauro de Freitas
            </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden premium-shadow border border-white/10">
            <img 
              src="https://picsum.photos/seed/ac-service/800/1000" 
              alt="Ar Condicionado Profissional" 
              className="w-full h-auto object-cover"
            />
            {/* Floating Info Box */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Snowflake className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Resfriamento Instantâneo</h4>
                  <p className="text-gray-400 text-xs">Equipamentos limpos rendem 30% mais</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
