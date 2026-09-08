"use client"; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Code2, Layout, Server, Database, Smartphone, Globe, BotMessageSquare } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Description = () => {
  
  const slides = [
    {
      titleId: "Soluciones web integrales",
      contentId: "Te guiaré a través de todo el ciclo de vida de tu aplicación, teniendo en cuenta el diseño de interfaces dinámicas y responsivas. Mi enfoque no se limita a escribir código, sino a asegurar que cada capa funcione en armonía.",
      icon: <Code2 className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "Integro IA que entiende tu negocio",
      contentId: "IA que no solo responde, vende y agenda por ti, aprende los gustos de tus clientes para ofrecer experiencias personalizadas y eficientes.",
      icon: <BotMessageSquare className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "Desarrollo Frontend y Backend",
      contentId: "Creación de interfaces modernas y ultra rápidas, utilizando arquitecturas de componentes escalables.",
      icon: <Layout className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "Sistemas Robustos y Escalables",
      contentId: "Más allá del código, me especializo en la columna vertebral de tu proyecto. Gestionando servidores, orquestación componetizada y seguridad con Cloud.",
      icon: <Server className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "Bases de Datos",
      contentId: "Diseño y optimización de bases de datos, garantizando la integridad de los datos.",
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "Presencia Digital Innovadora",
      contentId: "Transformo ideas audaces en portafolios disruptivos para fotógrafos, modelos y creativos.",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "Contenerización y Despliegue",
      contentId: "Despliegue y gestión de aplicaciones con las mejores plataformas para asegurar entornos de producción idénticos.",
      icon: <Globe className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="description" className="relative py-24 overflow-hidden bg-transparent transition-colors duration-300 rounded-xl">
      
      
      <span className="absolute -top-10 -left-10 text-[15rem] text-primary/5 font-mono select-none pointer-events-none z-0">
        {'{'}
      </span>
      <span className="absolute -bottom-20 -right-10 text-[15rem] text-accent/5 font-mono select-none pointer-events-none z-0">
        {'}'}
      </span>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={1}
          className="pb-12 toledana-swiper" 
          style={{ minHeight: '320px' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              
              <div className="relative border-l-2 border-primary/30 pl-8 md:pl-12 py-4 bg-transparent rounded-xl">
                {slide.icon}
                <h2 className="text-primary text-sm mt-4 uppercase tracking-[0.3em] font-bold mb-6">
                  {slide.titleId} 
                </h2>
                
                <p className="text-xl md:text-2xl text-background/80 dark:text-gray-400 italic leading-relaxed font-light text-justify">
                  {slide.contentId} 
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Description;