import Link from "next/link";

export default function ToledanaDevSection() {
  return (
    <section aria-labelledby="como-trabaja-toledanadev">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            ToledanaDev
          </p>

          <h2
            id="como-trabaja-toledanadev"
            className="mt-4 font-title text-3xl font-bold tracking-tight sm:text-4xl"
          >
            ¿Cómo desarrolla ToledanaDev estos sistemas?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/70 dark:text-white/70 sm:text-lg">
            <p>
              En ToledanaDev desarrollamos soluciones digitales partiendo de
              los procesos reales de cada negocio.
            </p>

            <p>
              Primero identificamos qué problema necesita resolverse, cuáles
              son las acciones que realizan actualmente los clientes y
              administradores y qué partes del proceso pueden digitalizarse.
            </p>

            <p>
              A partir de esa información diseñamos soluciones como páginas
              web, catálogos digitales, sistemas de reservas, sistemas de
              pedidos, tiendas online, paneles administrativos y
              automatizaciones con inteligencia artificial.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-primary/25 bg-primary/5 p-7">
          <h3 className="text-xl font-bold">
            Una solución debe adaptarse al negocio
          </h3>

          <p className="mt-4 leading-7 text-black/65 dark:text-white/65">
            La tecnología no debería agregar procesos innecesarios. Su objetivo
            es simplificar operaciones, mejorar la experiencia del cliente y
            facilitar la gestión del negocio.
          </p>

          <Link
            href="/#services"
            className="mt-6 inline-flex font-semibold text-primary underline-offset-4 hover:underline"
          >
            Conoce nuestras soluciones digitales
          </Link>
        </aside>
      </div>
    </section>
  );
}