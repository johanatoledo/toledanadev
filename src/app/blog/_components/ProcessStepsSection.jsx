export default function ProcessStepsSection({ steps = [] }) {
  if (!steps.length) {
    return null;
  }

  return (
    <ol className="space-y-5">
      {steps.map((step, index) => (
        <li
          key={`${step.title}-${index}`}
          className="flex gap-5 rounded-2xl border border-black/10 p-5 sm:p-6 dark:border-white/10"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 className="font-semibold">
              {step.title}
            </h3>

            {step.description && (
              <p className="mt-2 leading-7 text-black/60 dark:text-white/60">
                {step.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}