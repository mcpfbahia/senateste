
import React from 'react';
import { Snowflake, ShieldCheck, Settings, Droplets, ClipboardList, Zap } from 'lucide-react';

export const COMPANY_INFO = {
  name: "VRN CLIMATIZAÇÃO",
  whatsapp: "(71) 99996-2879",
  whatsappLink: "https://wa.me/5571999962879?text=Ol%C3%A1%2C%20vi%20o%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20climatiza%C3%A7%C3%A3o.",
  location: "Lauro de Freitas e proximidades - BA",
  address: "Lauro de Freitas, BA",
  hours: "Seg a Sab 07:00 às 19:00",
  googleRating: 5,
  totalReviews: 15,
};

export const SERVICES = [
  {
    title: "Instalação Premium",
    description: "Instalação técnica seguindo rigorosamente os manuais dos fabricantes para manter sua garantia.",
    icon: <Snowflake className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Manutenção Preventiva",
    description: "Evite quebras inesperadas e garanta que seu equipamento funcione com eficiência máxima.",
    icon: <Settings className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Limpeza & Higienização",
    description: "Eliminação de fungos e bactérias através de jateamento e produtos específicos biodegradáveis.",
    icon: <Droplets className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Contratos de Manutenção",
    description: "Soluções completas para empresas (PMOC), garantindo ar puro e economia constante.",
    icon: <ClipboardList className="w-8 h-8 text-blue-400" />,
  },
];

export const TESTIMONIALS = [
  {
    name: "Fernanda Neres",
    role: "Cliente Residencial",
    text: "Serviço top! Atencioso, rápido e caprichoso. Super indico a VRN Climatização, agora meu ar tá gelando que é uma beleza!",
    rating: 5,
  },
  {
    name: "Josafa Silva",
    role: "Cliente Corporativo",
    text: "Excelente profissional. Pontualidade, credibilidade e trabalha com tamanha perfeição que indico a quem procura por um bom profissional.",
    rating: 5,
  },
  {
    name: "Enzo Henrique",
    role: "Cliente Residencial",
    text: "Serviço de qualidade, feito com atenção e rapidez. Gostei muito do trabalho da VRN. Recomendo!",
    rating: 5,
  },
];
