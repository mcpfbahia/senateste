
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award, Users } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "Pontualidade", desc: "Respeitamos seu tempo com horários precisos." },
    { icon: <Shield className="w-6 h-6" />, title: "Segurança", desc: "Profissionais qualificados e certificados." },
    { icon: <Award className="w-6 h-6" />, title: "Qualidade", desc: "Materiais de primeira linha em cada reparo." },
    { icon: <Users className="w-6 h-6" />, title: "Atendimento Local", desc: "Focados em Lauro de Freitas e arredores." },
  ];

  return (
    <section id="sobre" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nós</span>
              <h2 className="text-4xl font-extrabold text-white mb-8">
                Referência em Refrigeração <br />
                em Lauro de Freitas.
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                A VRN Climatização nasceu do compromisso com a excelência. Não fazemos apenas manutenção, entregamos qualidade de vida através de um ambiente climatizado e livre de impurezas.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{f.title}</h4>
                      <p className="text-gray-500 text-sm leading-tight">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-600/20 inline-block">
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <p className="text-xs uppercase font-bold tracking-widest text-blue-400">Atendimento</p>
                    <p className="text-lg font-bold">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://picsum.photos/seed/technician1/400/500" 
              alt="Técnico em serviço" 
              className="rounded-3xl shadow-2xl"
            />
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://picsum.photos/seed/technician2/400/500" 
              alt="Equipamento VRN" 
              className="rounded-3xl shadow-2xl mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
