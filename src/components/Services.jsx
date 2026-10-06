import Link from "next/link";
import { servicesList } from "../data/serviceList"; 

export default function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="relative w-full bg-toledana-white px-4 py-4 transition-colors duration-300 md:px-6 dark:bg-toledana-black"
    >
      <div className="mx-auto max-w-7xl">
         <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-secundary mb-6 max-w-2xl mx-auto leading-snug">
          NUESTROS{" "}
          <span className="text-primary italic">SERVICIOS</span>
        </h2>

        <div className="h-1 w-20 bg-accent mx-auto rounded-full shadow-[0_0_8px_rgba(255,0,60,0.6)]" />

      </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:diagonal-gradient-pro dark:hover:border-primary"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-toledana-black dark:border-slate-800 dark:bg-slate-900/50">
                    <Icon
                      className="h-8 w-8"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary dark:text-toledana-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="relative z-10 inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:text-primary"
                  aria-label={`Consultar sobre ${service.title}`}
                >
                  Consultar ahora

                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}