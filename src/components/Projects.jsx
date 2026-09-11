import ProjectShowcase from "./ProjectShowcase";

const projects = [
  {
    title: "Catálogo Digital",
    client: "Juliana Nail Art",
    description:
      "Catálogo digital diseñado para presentar servicios y productos de forma visual, rápida y accesible desde cualquier dispositivo.",
    video: "/projects/juliana/videojulianaweb.webm",
    images: [
      "/projects/juliana/juliana1.webp",
      "/projects/juliana/juliana2.webp",
      "/projects/juliana/juliana3.webp",
    ],
  },

  {
    title: "CleanPro Services",
    client: "Cleaning Company",
    description:
      "Sitio web profesional diseñado para fortalecer la presencia digital de la empresa y facilitar la captación de nuevos clientes.",
    video: "/projects/pristines/videopristines.webm",
    images: [
      "/projects/pristines/pristines1.webp",
      "/projects/pristines/pristines2.webp",
      "/projects/pristines/pristines3.webp",
    ],
  },

  {
    title: "Sistema Reservas IA",
    client: "Restaurant · Lima, Perú",
    description:
      "Sistema completo para  restaurantes con asistente IA y panel administrativo con monitoreo en tiempo real.Agenda citas  24/7",
    video: "/projects/limenita/videolimenita.webm",
    images: [
      "/projects/limenita/limenita1.webp",
      "/projects/limenita/limenita2.webp",
      "/projects/limenita/limenita4.webp",
    ],
  },
  {
    title: "Menu QR automatizado",
    client: "Restaurant · Lima, Perú",
    description:
      "Solución digital para presentar productos, facilitar pedidos y ofrecer a los clientes una experiencia de compra rápida y sencilla.Incluye panel administrativo para monitoreo en tiempo real",
    video: "/projects/cafetoledana/videocafe.webm",
    images: [
      "/projects/cafetoledana/cafetoledana1.webp",
      "/projects/cafetoledana/cafetoledana2.webp",
      "/projects/cafetoledana/cafetoleda3.webp",
    ],
  },
];

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