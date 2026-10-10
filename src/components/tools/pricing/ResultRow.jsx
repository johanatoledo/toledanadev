
import { PRICING_STYLES } from "@/data/pricingFields";

export default function ResultRow({ label, value, highlight = false,negative = false, }) {
  const valueColor = negative
    ? "text-accent"
    : highlight
      ? "text-toledana-black dark:text-primary"
      : "text-toledana-black dark:text-toledana-white";

  return (
    <div className="flex min-w-0 items-start justify-between gap-4 border-b border-toledana-black/10 py-3 last:border-b-0 dark:border-primary/15">
      <span
        className={`min-w-0 flex-1 text-sm leading-6 ${PRICING_STYLES.muted}`}
      >
        {label}
      </span>

      <span
        className= {`max-w-[55%] wrap-break-word  text-right text-sm font-semibold tabular-nums ${valueColor}`}
      >
        {value}
      </span>
    </div>
  );
}
