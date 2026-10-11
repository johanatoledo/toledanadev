
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICE_PLANS, formatUSD, } from "@/data/servicePlans";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  const plan = service.planKey
    ? SERVICE_PLANS[service.planKey]
    : null;

  const priceLabel = plan
    ? `${plan.pricingType === "from" ? "Desde " : ""}${formatUSD(plan.priceUSD)}`
    : service.pricingLabel ?? "Solicitar cotización";

  const detailUrl = `/servicios/${service.id}`;

  return (
    <article
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        service.featured
          ? "border-[#007777]/40 bg-primary/5 dark:border-primary/50"
          : "border-toledana-black/10 bg-secundary dark:border-primary/15 dark:bg-toledana-black/80"
      }`}
    >
      {service.featured && (
        <span className="absolute right-4 top-4 rounded-full border border-[#007777]/30 bg-[#007777]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#006666] dark:border-primary/30 dark:bg-primary/10 dark:text-primary">
          Especialidad
        </span>
      )}

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#007777]/20 bg-[#007777]/10 text-[#007777] transition-transform duration-300 group-hover:scale-105 dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
        <Icon
          className="h-7 w-7"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <h3 className="font-title text-xl font-bold tracking-tight text-toledana-black dark:text-toledana-white">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-toledana-black/70 dark:text-toledana-white/70">
        {service.description}
      </p>

      <div className="mt-7 border-t border-toledana-black/10 pt-5 dark:border-primary/15">
        <p className="text-xs font-medium uppercase tracking-wider text-toledana-black/60 dark:text-toledana-white/60">
          Inversión inicial
        </p>

        <p className="mt-2 font-title text-2xl font-bold text-toledana-black dark:text-primary">
          {priceLabel}
        </p>

        {plan && (
          <p className="mt-1 flex items-center gap-2 text-xs text-toledana-black/60 dark:text-toledana-white/60">
            <Check
              className="h-3.5 w-3.5 shrink-0 text-[#007777] dark:text-primary"
              aria-hidden="true"
            />
            Pago único por desarrollo
          </p>
        )}
      </div>

      <Link
        href={detailUrl}
        aria-label={`Ver detalles y planes de ${service.title}`}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-toledana-black px-5 py-3 text-sm font-bold text-toledana-white transition-colors hover:bg-[#006666] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:text-toledana-black dark:hover:bg-primary/80"
      >
        Ver planes y precios

        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
