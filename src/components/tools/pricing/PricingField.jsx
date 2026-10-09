
import { AlertCircle } from "lucide-react";
import { PRICING_STYLES } from "@/data/pricingFields";

export default function PricingField({ field, value, error, onChange, }) {
  const id = `pricing-${field.name}`;
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;

  const isInteger = field.name === "expectedUnits";

  return (
    <div className="min-w-0 space-y-2">
      <label htmlFor={id} className={PRICING_STYLES.label}>
        {field.label}
      </label>

      <p
        id={helpId}
        className={`text-xs leading-5 ${PRICING_STYLES.muted}`}
      >
        {field.help}
      </p>

      <div className="relative">
        <input
          id={id}
          name={field.name}
          type="text"
          inputMode={isInteger ? "numeric" : "decimal"}
          autoComplete="off"
          spellCheck={false}
          value={value}
          onChange={(event) =>
            onChange(field.name, event.target.value)
          }
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${helpId} ${errorId}` : helpId
          }
          placeholder={isInteger ? "1" : "0.00"}
          className={`${PRICING_STYLES.field} ${
            error ? PRICING_STYLES.fieldError : ""
          }`}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-semibold text-toledana-black/60 dark:text-primary/80"
        >
          {field.suffix}
        </span>
      </div>

      {error && (
        <p
          id={errorId}
          className="flex items-start gap-2 text-xs leading-5 text-accent"
        >
          <AlertCircle
            size={15}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />
          {error}
        </p>
      )}
    </div>
  );
}
