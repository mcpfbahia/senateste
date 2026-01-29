
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            >
              O que nossos <br />
              <span className="gradient-text">Clientes Dizem</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              A satisfação de quem já experimentou o padrão VRN de atendimento.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
              <span className="text-yellow-500 font-bold">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
              </div>
              <span className="text-gray-500 text-xs">Avaliação Google</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[40px] border border-white/5 relative group hover:border-blue-500/20 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-10 w-12 h-12 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              
              <div className="flex mb-6">
                {[...Array(t.rating)].map((_, starI) => (
                  <Star key={starI} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic leading-relaxed text-lg">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
