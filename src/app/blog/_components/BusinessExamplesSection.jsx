export default function BusinessExamplesSection({
  examples = [],
}) {
  if (!examples.length) {
    return null;
  }

  return (
    <div className="space-y-5">
      {examples.map((example) => (
        <article
          key={example.title}
          className="rounded-2xl border border-black/10 p-6 sm:p-7 dark:border-white/10"
        >
          <h3 className="font-title text-xl font-bold">
            {example.title}
          </h3>

          {example.description && (
            <p className="mt-4 leading-8 text-black/65 dark:text-white/65">
              {example.description}
            </p>
          )}

          {example.solution && (
            <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Posible solución
              </p>

              <p className="mt-2 leading-7 text-black/70 dark:text-white/70">
                {example.solution}
              </p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}