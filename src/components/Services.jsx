"use client";

import React from 'react';
import { 
  UserCircle, 
  Utensils, 
  Scissors, 
  ShoppingBag,
  Layout
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Portafolios Digitales",
      description: "Diseño exclusivo para profesionales que buscan destacar. Creamos una vitrina digital de alto impacto que proyecta confianza.",
      icon: <UserCircle className="w-8 h-8" />
    },
    {
      title: "Sistemas para Restaurantes",
      description: "Digitaliza tu menú y gestiona pedidos sin pagar comisiones a terceros. Control de mesas, stock y ventas desde un panel privado.",
      icon: <Utensils className="w-8 h-8" />
    },
    {
      title: "Salones de Belleza y Barberías",
      description: "Implementamos agendas inteligentes donde tus clientes reservan su turno online, optimizando el tiempo de tus estilistas.",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Tiendas Online (E-commerce)",
      description: "Lleva tu tienda al mundo digital. Catálogo de productos con carrito de compras y conexión directa a pasarelas de pago.",
      icon: <ShoppingBag className="w-8 h-8" />
    },
     {
      title: "Catálogos Digitales",
      description: "Sustituye los PDF pesados por una Web App visual y fluida. Ideal para muestras de productos con carga ultra rápida.",
      icon: <Layout className="w-8 h-8" />
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-secundary mb-4">
            <span className="text-primary italic">Nuestros Servicios</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>

          <h3 className="mt-6 text-xl md:text-2xl font-medium text-slate-700 dark:text-secundary leading-relaxed max-w-3xl mx-auto">
            Soluciones web a medida diseñadas para destacar tu marca y escalar tu negocio.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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