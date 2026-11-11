import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCTA({ title, description, href, label, }) {
  return (
    <aside className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        ToledanaDev
      </p>

      <h2 className="mt-3 font-title text-2xl font-bold sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl leading-8 text-black/65 dark:text-white/65">
        {description}
      </p>

      <Link
        href={href}
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-toledana-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        {label}

        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5"
        />
      </Link>
    </aside>
  );
}