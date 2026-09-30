export default function ArticleSection({
  id,
  title,
  children,
}) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>

      <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-black/70 dark:text-white/70 sm:text-lg">
        {children}
      </div>
    </section>
  );
}