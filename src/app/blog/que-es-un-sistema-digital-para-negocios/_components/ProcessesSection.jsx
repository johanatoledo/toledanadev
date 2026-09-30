import { processes } from "../_data/articleData";

export default function ProcessesSection() {
  return (
    <section aria-labelledby="procesos-automatizar">
      <h2
        id="procesos-automatizar"
        className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        ¿Qué procesos puede automatizar un sistema digital?
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-black/70 dark:text-white/70 sm:text-lg">
        La automatización dependerá de cómo funciona cada empresa. Sin embargo,
        existen procesos comunes que pueden digitalizarse para reducir tareas
        repetitivas.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {processes.map((process) => (
          <article
            key={process.id}
            className="rounded-3xl border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/3"
          >
            <div
              aria-hidden="true"
              className="mb-5 h-1 w-12 rounded-full bg-primary"
            />

            <h3 className="text-xl font-bold">
              {process.title}
            </h3>

            <p className="mt-3 leading-7 text-black/65 dark:text-white/65">
              {process.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}