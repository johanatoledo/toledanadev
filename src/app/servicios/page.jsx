
import Services from "@/components/Services";

export const metadata = {
  title: "Servicios digitales, catálogos y desarrollo web",
  description:
    "Conoce los servicios y precios de ToledanaDev. Catálogos digitales personalizados con o sin panel administrativo, páginas web, tiendas online, sistemas de pedidos e inteligencia artificial.",
  alternates: {
    canonical: "https://www.toledanadev.com/servicios",
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

      <aside
        aria-label="Información sobre precios y contratación"
        className="border-t border-toledana-black/10 bg-secundary px-5 py-10 dark:border-primary/15 dark:bg-toledana-black"
      >
        <div className="mx-auto max-w-5xl space-y-3 text-center text-sm leading-7 text-toledana-black/70 dark:text-toledana-white/70">
          <p>
            <strong className="text-toledana-black dark:text-toledana-white">
              Precios expresados en dólares estadounidenses (USD).
            </strong>{" "}
            Para pagos en soles (PEN), se aplicará el tipo de cambio
            de venta de la entidad de referencia indicada en la
            cotización, vigente al confirmar cada pago.
          </p>

          <p>
            Los precios corresponden al alcance establecido
            para cada servicio. Dominio, alojamiento, mantenimiento,
            licencias e integraciones externas se presupuestan
            por separado, salvo indicación expresa.
          </p>

          <p>
            La contratación está sujeta a confirmación de requisitos,
            condiciones comerciales y tratamiento tributario aplicable.
          </p>
        </div>
      </aside>
    </div>
  );
}
