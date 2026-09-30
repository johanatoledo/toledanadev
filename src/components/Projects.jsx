import ProjectShowcase from "./ProjectShowcase";
import { projects } from "../data/projects"


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 bg-white/95 dark:bg-toledana-black transition-colors duration-300"
    >
      {/* Encabezado */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-secundary mb-6 max-w-2xl mx-auto leading-snug">
          PROYECTOS{" "}
          <span className="text-primary italic">DESTACADOS</span>
        </h2>

        <div className="h-1 w-20 bg-accent mx-auto rounded-full shadow-[0_0_8px_rgba(255,0,60,0.6)]" />

        <h3 className="mt-6 text-xl md:text-2xl font-medium text-slate-700 dark:text-secundary leading-relaxed max-w-3xl mx-auto">
          Soluciones Digitales que venden por ti!
        </h3>
      </div>

      <ProjectShowcase projects={projects} />
    </section>
  );
}