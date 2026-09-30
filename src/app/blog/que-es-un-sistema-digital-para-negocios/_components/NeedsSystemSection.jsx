import { systemSigns } from "../_data/articleData";

export default function NeedsSystemSection() {
  return (
    <section aria-labelledby="necesita-sistema-digital">
      <h2
        id="necesita-sistema-digital"
        className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        ¿Cómo saber si mi negocio necesita un sistema digital?
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-black/70 dark:text-white/70 sm:text-lg">
        No se trata simplemente de incorporar tecnología. El objetivo debe ser
        resolver un problema concreto dentro de la operación del negocio.
      </p>

      <ul className="mt-8 max-w-3xl space-y-4">
        {systemSigns.map((sign) => (
          <li
            key={sign}
            className="flex gap-4 rounded-2xl bg-black/3 p-5 dark:bg-white/4"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary"
            />

            <span className="leading-7 text-black/70 dark:text-white/70">
              {sign}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}