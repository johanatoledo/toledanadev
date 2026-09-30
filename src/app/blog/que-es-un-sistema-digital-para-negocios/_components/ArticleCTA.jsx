import Link from "next/link";

export default function ArticleCTA() {
  return (
    <section
      aria-labelledby="cta-digitalizar"
      className="relative overflow-hidden rounded-4xl bg-toledana-black px-6 py-12 text-center text-white sm:px-10 sm:py-16"
    >
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
          Desarrollamos soluciones a medida
        </p>

        <h2
          id="cta-digitalizar"
          className="mt-4 font-title text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Cuéntanos qué proceso quieres digitalizar
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Podemos analizar cómo funciona actualmente tu negocio y ayudarte a
          convertir procesos manuales en una solución digital diseñada para tus
          necesidades.
        </p>

        <Link
          href="/#contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-toledana-black transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-toledana-black"
        >
          Cuéntanos sobre tu proyecto
        </Link>
      </div>
    </section>
  );
}