
import Link from "next/link";
import { ArrowRight, Calculator, Wrench } from "lucide-react";
import { TOOLS } from "@/data/tools";

export const metadata = {
  title: "Herramientas gratuitas para negocios",
  description:
    "Herramientas gratuitas para emprendedores y comercios. Calcula precios de venta, costos y ganancias con ToledanaDev.",
  alternates: {
    canonical: "/herramientas",
  },
  openGraph: {
    title: "Herramientas gratuitas para negocios",
    description:
      "Calculadoras y herramientas digitales gratuitas para emprendedores y pequeños negocios.",
    url: "/herramientas",
    type: "website",
  },
};

const ICONS = { calculator: Calculator, };

export default function HerramientasPage() {
  const availableTools = TOOLS.filter( (tool) => tool.status === "disponible" );

  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-16 text-toledana-black dark:text-white sm:px-8 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:text-primary">
            <Wrench size={16} aria-hidden="true" />
            Recursos digitales de ToledanaDev
          </div>

          <h1 className="font-title text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Herramientas gratuitas para{" "}
            <span className="text-cyan-700 dark:text-primary">
              hacer crecer tu negocio.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
            Calcula precios, analiza costos y toma mejores
            decisiones para tu negocio con herramientas
            digitales fáciles de utilizar.
          </p>
        </header>

        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-title text-2xl font-semibold">
            Explora nuestras herramientas
          </h2>

          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {availableTools.length} disponibles
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableTools.map((tool) => {
            const Icon = ICONS[tool.icon] ?? Wrench;

            return (
              <article
                key={tool.id}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-primary/50"
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 dark:bg-primary/10 dark:text-primary">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <span className="rounded-full border border-cyan-600/20 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-primary/30 dark:text-primary">
                    Gratis
                  </span>
                </div>

                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-700 dark:text-primary">
                  {tool.category}
                </p>

                <h3 className="font-title text-xl font-semibold">
                  {tool.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {tool.description}
                </p>

                <Link
                  href={tool.href}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-cyan-700 transition-colors hover:text-cyan-900 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600 dark:text-primary dark:hover:text-white dark:focus-visible:outline-primary"
                  aria-label={`Abrir ${tool.title}`}
                >
                  Utilizar herramienta
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
