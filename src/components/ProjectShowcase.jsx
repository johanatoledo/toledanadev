"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

export default function ProjectShowcase({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const project = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const whatsappNumber = "51932297805";

  const whatsappMessage = `¡Hola! Me gustaría obtener más información sobre el proyecto: ${project.title}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    
      <div className="max-w-6xl mx-auto">

        {/* Showcase */}
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-center">

          {/* Media */}
          <div className="relative group">

            <div className="relative aspect-video overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-black shadow-2xl">

              {project.video ? (
                <video
                  key={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={project.video} type="video/webm" />
                </video>
              ) : (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                  priority
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-lineal-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Controles */}
              <button
                type="button"
                onClick={previousProject}
                aria-label="Proyecto anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-black"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Siguiente proyecto"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-black"
              >
                <ChevronRight size={22} />
              </button>

            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Mostrar proyecto ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col">

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
              Proyecto destacado
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-secundary mb-2">
              {project.title}
            </h3>

            <p className="text-sm font-medium text-primary mb-6 uppercase tracking-wider">
              {project.client}
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-semibold hover:brightness-110 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
                Quiero algo similar
              </a>

              

            </div>
          </div>
        </div>

        

      
    </div>
  );
}