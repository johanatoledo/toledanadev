export default function FAQSection({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-black/10 p-5 open:bg-black/2 dark:border-white/10 dark:open:bg-white/3"
        >
          <summary className="cursor-pointer list-none font-semibold">
            <span className="flex items-start justify-between gap-4">
              {item.question}

              <span
                aria-hidden="true"
                className="text-primary transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>

          <p className="mt-4 leading-7 text-black/65 dark:text-white/65">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}