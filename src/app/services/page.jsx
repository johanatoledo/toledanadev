import Services from "../../components/Services";

export const metadata = {
  title: "Servicios de desarrollo web y soluciones digitales",

  description:
    "Conoce los servicios de ToledanaDev: desarrollo web, software a medida, aplicaciones web, comercio electrónico, automatización e inteligencia artificial.",

  alternates: {
    canonical: "https://www.toledanadev.com/services",
  },
};

export default function ServicesPage() {
  return (
  <main className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-toledana-black dark:text-toledana-white">
  <header className="border-b border-black/10 dark:border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-12 pt-32 text-center sm:px-8 sm:pb-16 sm:pt-36 lg:px-10">
      <h1 className="max-w-5xl font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Servicios digitales diseñados para mejorar los procesos de tu negocio
      </h1>

      <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl dark:text-white/70">
        Desarrollamos soluciones digitales adaptadas a las necesidades reales
        de cada negocio, desde páginas web y tiendas online hasta sistemas
        personalizados, automatizaciones e inteligencia artificial.
      </p>
    </div>
  </header>

  <Services />
</main>
  );
}