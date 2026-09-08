import React from 'react';
import Image from 'next/image'; 



const projects = [
  {
    title: 'Sound Fusion Entertainment',
    client: 'Event Corporation, USA',
    image: '/images/soundfusion.webp', 
  },
  {
    title: 'CleanPro Services',
    client: 'Cleaning Company',
    image: '/images/cleanpro.webp',
  },
  {
    title: 'Lima Bites',
    client: 'Restaurant, Lima-Peru',
    image: '/images/limabites.webp',
  },
];

function ProjectCard({ proj }) {
   const whatsappNumber = "51932297805"; 
   const mensajeCustom = `¡Hola! Me gustaría obtener mas informacion del servicio:*${projects.title}*`
   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeCustom)}`;
  return (
    <div className="bg-toledana-white/90 dark:bg-toledana-black rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col justify-between transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
      <div>
        {/* Contenedor de la imagen */}
        <div className="w-full h-44 relative rounded-xl mb-4 overflow-hidden border border-gray-200 dark:border-gray-800">
          <Image
            src={proj.image}
            alt={proj.title}
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
        </div>
        
        {/* Sincronizado con tus estilos globales de color */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-primary mb-2 transition-colors duration-300">
          {proj.title}
        </h3>
        <p className="text-gray-500 dark:text-accent font-medium mb-4 text-xs tracking-wider uppercase">
          {proj.client}
        </p>
      </div>

      {/* Botón de enlace a whatsaap solicitado */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-secundary font-mono text-sm font-semibold transition-all duration-300 hover:bg-toledana-black hover:text-white dark:hover:bg-primary dark:hover:text-black dark:hover:border-primary"
      >
        <span>Mas Informacion</span>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-white/95 dark:bg-toledana-black transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-secundary mb-6 max-w-2xl mx-auto leading-snug">
          NUESTROS <span className="text-primary italic">SERVICIOS</span>
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full shadow-[0_0_8px_rgba(255,0,60,0.6)]"></div>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} />
        ))}
      </div>
    </section>
  );
}