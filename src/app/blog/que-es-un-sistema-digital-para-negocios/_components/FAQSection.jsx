
import { faqs } from "../_data/articleData";

export default function FAQSection() {
  if (!faqs?.length) return null;

  return (
    <section
      aria-labelledby="preguntas-frecuentes"
      className="mt-16 max-w-4xl sm:mt-20"
    >
      <h2
        id="preguntas-frecuentes"
        className="font-title text-3xl font-bold tracking-tight text-toledana-black dark:text-toledana-white sm:text-4xl"
      >
        Preguntas frecuentes
      </h2>

      <div className="mt-8 divide-y divide-toledana-black/10 overflow-hidden rounded-2xl border border-toledana-black/10 bg-secundary px-5 dark:divide-primary/15 dark:border-primary/20 dark:bg-toledana-black/80 sm:px-6">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            name="bloq-faq"
            className="group py-5"
          >
            <summary className="cursor-pointer font-semibold leading-7 text-toledana-black transition-colors marker:text-[#007777] hover:text-[#007777] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-toledana-white dark:marker:text-primary dark:hover:text-primary">
              {faq.question}
            </summary>

            <p className="mt-4 max-w-3xl text-base leading-7 text-toledana-black/70 dark:text-toledana-white/70">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
