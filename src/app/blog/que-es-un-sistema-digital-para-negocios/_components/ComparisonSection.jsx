const solutions = [
  {
    number: "01",
    title: "Página web",
    description:
      "Presenta información sobre una empresa, sus servicios, proyectos, contacto y propuesta de valor.",
    featured: false,
  },
  {
    number: "02",
    title: "Catálogo digital",
    description:
      "Organiza productos o servicios para que el cliente pueda explorarlos, comparar opciones y realizar una acción.",
    featured: false,
  },
  {
    number: "03",
    title: "Sistema digital",
    description:
      "Además de mostrar información, ejecuta procesos como reservas, pedidos, pagos, cotizaciones o gestión interna.",
    featured: true,
  },
];

export default function ComparisonSection() {
  return (
    <section aria-labelledby="diferencias-soluciones-digitales">
      <h2
        id="diferencias-soluciones-digitales"
        className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        ¿Cuál es la diferencia entre una página web, un catálogo digital y un
        sistema digital?
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-black/70 dark:text-white/70 sm:text-lg">
        Aunque pueden parecer soluciones similares, cumplen funciones
        diferentes dentro de la estrategia digital de un negocio.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {solutions.map((solution) => (
          <article
            key={solution.number}
            className={
              solution.featured
                ? "rounded-3xl border border-primary/40 bg-primary/5 p-6 shadow-sm"
                : "rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/3"
            }
          >
            <span className="text-sm font-semibold text-primary">
              {solution.number}
            </span>

            <h3 className="mt-4 text-xl font-bold">
              {solution.title}
            </h3>

            <p className="mt-3 leading-7 text-black/65 dark:text-white/65">
              {solution.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}