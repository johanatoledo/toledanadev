export default function ComparisonSection({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-black/10 bg-black/2 p-6 dark:border-white/10 dark:bg-white/3"
        >
          <h3 className="font-title text-xl font-bold">
            {item.title}
          </h3>

          {item.idealFor?.length > 0 && (
            <>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Ideal para
              </p>

              <ul className="mt-3 space-y-2 text-black/65 dark:text-white/65">
                {item.idealFor.map((value) => (
                  <li
                    key={value}
                    className="flex gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />

                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {item.keyText && (
            <div className="mt-6 border-t border-black/10 pt-5 dark:border-white/10">
              {item.keyLabel && (
                <p className="text-sm font-semibold">
                  {item.keyLabel}
                </p>
              )}

              <p className="mt-2 leading-7 text-black/60 dark:text-white/60">
                {item.keyText}
              </p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}