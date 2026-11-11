export default function ArticleSection({ id, title, children, className = "", }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 ${className}`}
    >
      <h2 className="font-title text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-base leading-8 text-black/70 sm:text-lg dark:text-white/70">
        {children}
      </div>
    </section>
  );
}