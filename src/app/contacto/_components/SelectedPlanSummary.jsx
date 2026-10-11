
import { BadgeCheck,  CreditCard, Info, } from "lucide-react";
import { formatUSD } from "@/data/servicePlans";

export default function SelectedPlanSummary({ selection, }) {
  if (!selection) return null;

  const isFrom = selection.pricingType === "from";

  return (
    <aside
      aria-label="Resumen del plan seleccionado"
      className="rounded-2xl border border-[#007777]/30 bg-primary/5 p-5 dark:border-primary/30 dark:bg-primary/5 sm:p-6"
    >
      <div className="flex items-center gap-2 text-[#007777] dark:text-primary">
        <BadgeCheck
          className="h-5 w-5 shrink-0"
          aria-hidden="true"
        />

        <h3 className="font-title text-lg font-bold">
          Tu plan seleccionado
        </h3>
      </div>

      <dl className="mt-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <dt className="text-sm text-toledana-black/60 dark:text-toledana-white/60">
            Servicio
          </dt>

          <dd className="text-sm font-semibold text-toledana-black dark:text-toledana-white">
            {selection.serviceName}
          </dd>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <dt className="text-sm text-toledana-black/60 dark:text-toledana-white/60">
            Plan
          </dt>

          <dd className="text-sm font-semibold text-toledana-black dark:text-toledana-white">
            {selection.planName}
          </dd>
        </div>

        <div className="border-t border-[#007777]/20 pt-4 dark:border-primary/20">
          <dt className="text-xs font-semibold uppercase tracking-wider text-toledana-black/60 dark:text-toledana-white/60">
            {isFrom
              ? "Inversión inicial desde"
              : "Precio de desarrollo"}
          </dt>

          <dd className="mt-2 font-title text-3xl font-bold text-[#007777] dark:text-primary">
            {formatUSD(selection.priceUSD)}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center gap-2 text-sm text-toledana-black/70 dark:text-toledana-white/70">
        <CreditCard
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        />

        Pago único por desarrollo
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs leading-6 text-toledana-black/60 dark:text-toledana-white/60">
        <Info
          className="mt-1 h-4 w-4 shrink-0"
          aria-hidden="true"
        />

        Precio expresado en USD. El equivalente en
        soles se calcula al tipo de cambio acordado.
        La contratación se confirma después de
        aprobar el alcance y las condiciones.
      </p>
    </aside>
  );
}
