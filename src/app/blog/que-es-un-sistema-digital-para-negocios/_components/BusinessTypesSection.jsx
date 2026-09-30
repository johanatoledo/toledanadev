import { businessTypes } from "../_data/articleData";

export default function BusinessTypesSection() {
  return (
    <section aria-labelledby="tipos-negocios">
      <h2
        id="tipos-negocios"
        className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        ¿En qué tipos de negocios puede utilizarse?
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-black/70 dark:text-white/70 sm:text-lg">
        Los sistemas digitales pueden adaptarse a distintos modelos de negocio
        porque sus funcionalidades se construyen en función de los procesos que
        necesita cada empresa.
      </p>

      <div className="mt-10 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
        {businessTypes.map((business) => (
          <article
            key={business.id}
            className="grid gap-3 py-7 sm:grid-cols-[220px_1fr] sm:gap-8"
          >
            <h3 className="text-lg font-bold">
              {business.title}
            </h3>

            <p className="leading-7 text-black/65 dark:text-white/65">
              {business.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}