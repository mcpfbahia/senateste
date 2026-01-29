
import React from 'react';
import { Snowflake, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="font-sora font-bold text-xl text-white">
                VRN <span className="text-blue-500">CLIMATIZAÇÃO</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Especialistas em transformar ambientes através de soluções térmicas inteligentes e higienização profunda em Lauro de Freitas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-blue-500">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-500 hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-500 hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="text-gray-500 hover:text-blue-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-blue-500">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-500 text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-500 text-sm">{COMPANY_INFO.whatsapp}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-blue-500">Horário</h4>
            <p className="text-gray-500 text-sm mb-6">
              {COMPANY_INFO.hours}
            </p>
            <a 
              href={COMPANY_INFO.whatsappLink}
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">
            © 2024 VRN Climatização. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs text-gray-600">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
