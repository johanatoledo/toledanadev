import { faqs } from "../_data/articleData";

export default function FAQSection() {
  return (
    <section aria-labelledby="preguntas-frecuentes">
      <h2
        id="preguntas-frecuentes"
        className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Preguntas frecuentes
      </h2>

      <div className="mt-10 space-y-5">
        {faqs.map((faq) => (
          <article
            key={faq.id}
            className="rounded-3xl border border-black/10 p-6 dark:border-white/10 sm:p-7"
          >
            <h3 className="text-lg font-bold sm:text-xl">
              {faq.question}
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-black/65 dark:text-white/65">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}