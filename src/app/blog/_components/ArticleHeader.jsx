export default function ArticleHeader({ title, excerpt, publishedAt, readingTime, }) {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-4xl px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Blog · ToledanaDev
        </p>

        <h1 className="mt-5 font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl dark:text-white/70">
          {excerpt}
        </p>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-black/45 dark:text-white/45">
          <span>Publicado el {publishedAt}</span>
          <span aria-hidden="true">•</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </header>
  );
}