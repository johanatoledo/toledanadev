"use client";

import React from 'react';
import { 
  Globe,
  Code2,
  MonitorSmartphone,
  Bot,
  ShoppingBag,
  Layout
} from 'lucide-react';

const Services = () => {
  const servicesList = [
  {
    title: "Desarrollo Web",
    description:
      "Diseñamos y desarrollamos sitios web modernos, rápidos y adaptables que fortalecen la presencia digital de tu negocio y convierten visitas en oportunidades.",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Software a Medida",
    description:
      "Creamos sistemas personalizados que se adaptan a los procesos de tu empresa para mejorar la gestión, automatizar tareas y optimizar resultados.",
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: "Aplicaciones Web",
    description:
      "Desarrollamos aplicaciones web escalables y accesibles desde cualquier dispositivo, enfocadas en resolver necesidades reales de tu negocio.",
    icon: <MonitorSmartphone className="w-8 h-8" />
  },
  {
    title: "Comercio Electrónico",
    description:
      "Construimos tiendas online modernas y funcionales que facilitan la gestión de productos, pedidos y ventas, ofreciendo una experiencia de compra fluida.",
    icon: <ShoppingBag className="w-8 h-8" />
  },
  {
    title: "Soluciones Digitales",
    description:
      "Convertimos productos, servicios y procesos tradicionales en experiencias digitales intuitivas, rápidas y optimizadas para tus clientes.",
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Automatización e IA",
    description:
      "Integramos automatización e inteligencia artificial para optimizar procesos, reducir tareas repetitivas y mejorar la eficiencia de tu negocio.",
    icon: <Bot className="w-8 h-8" />
  },
];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full py-24 px-4 md:px-6 bg-toledana-white dark:bg-toledana-black transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              onClick={scrollToContact}
              className="group cursor-pointer p-6 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden shadow-sm hover:shadow-xl bg-white border border-slate-100 dark:diagonal-gradient-pro dark:border-gray-800 dark:hover:border-primary flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              <div>
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-primary border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:bg-primary group-hover:text-toledana-black transition-all duration-500 relative z-10">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-toledana-white group-hover:text-primary transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest relative z-10 pt-2">
                <span>Consultar ahora</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;