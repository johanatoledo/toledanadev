
import Services from "@/components/Services";


export const metadata = {
  title: "Servicios de Desarrollo Web y Software",

  description:
    "Desarrollamos páginas web, aplicaciones, comercio electrónico y software a medida para digitalizar negocios y optimizar procesos.",

  alternates: {
    canonical: "/servicios",
  },

  openGraph: {
    title: "Servicios de Desarrollo Web y Software | ToledanaDev",
    description:
      "Soluciones digitales para negocios: desarrollo web, aplicaciones, comercio electrónico y automatización.",
    url: "/servicios",
    siteName: "ToledanaDev",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/branding/toledanadev-og.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de desarrollo web de ToledanaDev",
      },
    ],
  },
};


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-toledana-black dark:text-toledana-white">
      <header className="border-b border-toledana-black/10 dark:border-primary/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-12 pt-16 text-center sm:px-8 sm:pb-16 lg:px-10">
          <h1 className="max-w-5xl font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Soluciones digitales para hacer crecer tu negocio
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-toledana-black/70 sm:text-xl dark:text-toledana-white/70">
            Especialistas en catálogos digitales personalizados,
            con o sin panel administrativo. También desarrollamos
            páginas web, tiendas online, sistemas empresariales
            y soluciones con inteligencia artificial.
          </p>

          <p className="mt-5 text-sm font-semibold text-[#007777] dark:text-primary">
            Desarrollo personalizado · Precios en USD
          </p>
        </div>
      </header>

      <Services />
       
      
     </div>
      );
  }
