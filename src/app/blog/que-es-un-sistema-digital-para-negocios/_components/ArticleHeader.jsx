export default function ArticleHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Digitalización de negocios
        </p>

        <h1 className="max-w-4xl font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          ¿Qué es un sistema digital para negocios y cómo puede ayudarte?
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 dark:text-white/70 sm:text-xl">
          Muchas empresas utilizan páginas web, WhatsApp, hojas de cálculo y
          diferentes herramientas para administrar su negocio. Sin embargo,
          cuando esas tareas comienzan a crecer, un sistema digital puede ayudar
          a organizar, automatizar y conectar esos procesos en un mismo entorno.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-black/50 dark:text-white/50">
          <span>ToledanaDev</span>

          <span aria-hidden="true">•</span>

          <time dateTime="2026-09-30">
            30 de septiembre de 2026
          </time>
        </div>
      </div>
    </header>
  );
}