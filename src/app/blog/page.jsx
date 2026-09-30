import Link from "next/link";

export const metadata = {
  title: "Blog y recursos para digitalizar negocios",
  description:
    "Aprende sobre sistemas digitales, automatización, desarrollo web, inteligencia artificial y soluciones tecnológicas para mejorar los procesos de tu negocio.",
  alternates: {
    canonical: "https://www.toledanadev.com/blog",
  },
};

const articles = [
  {
    id: "sistemas-digitales-negocios",
    category: "Digitalización",
    title: "¿Qué es un sistema digital para negocios y cómo puede ayudarte?",
    description:
      "Descubre cómo los sistemas digitales pueden automatizar reservas, pedidos, ventas, atención al cliente y otros procesos de un negocio.",
    href: "/blog/que-es-un-sistema-digital-para-negocios",
    date: "30 de septiembre de 2026",
    dateTime: "2026-09-30",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-transparent dark:text-secundary">
      {/* HERO */}
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Recursos ToledanaDev
          </p>

          <h1 className="max-w-4xl font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tecnología explicada para ayudarte a mejorar tu negocio
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 dark:text-white/70 sm:text-xl">
            Contenido práctico sobre sistemas digitales, páginas web,
            automatización, inteligencia artificial y herramientas que pueden
            ayudarte a organizar procesos, atender clientes y hacer crecer tu
            negocio.
          </p>
        </div>
      </header>

      {/* ARTÍCULOS */}
      <section
        aria-labelledby="ultimos-articulos"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mb-10">
          <h2
            id="ultimos-articulos"
            className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Últimos artículos
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-black/65 dark:text-white/65">
            Guías y recursos creados para ayudarte a entender cómo la tecnología
            puede resolver problemas reales dentro de un negocio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/3"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-primary">
                  {article.category}
                </span>

                <time
                  dateTime={article.dateTime}
                  className="text-xs text-black/45 dark:text-white/45"
                >
                  {article.date}
                </time>
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-snug tracking-tight">
                <Link
                  href={article.href}
                  className="transition-colors group-hover:text-primary"
                >
                  {article.title}
                </Link>
              </h2>

              <p className="mt-4 flex-1 leading-7 text-black/65 dark:text-white/65">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-7 inline-flex items-center font-semibold text-primary underline-offset-4 hover:underline"
              >
                Leer artículo
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-4xl bg-toledana-black px-6 py-12 text-center text-white sm:px-10 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              ToledanaDev
            </p>

            <h2 className="mt-4 font-title text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Quieres digitalizar algún proceso de tu negocio?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70 sm:text-lg">
              Podemos ayudarte a desarrollar una solución digital adaptada a
              tus necesidades, desde una página web hasta sistemas,
              automatizaciones y herramientas con inteligencia artificial.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-toledana-black transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-toledana-black"
            >
              Cuéntanos sobre tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}