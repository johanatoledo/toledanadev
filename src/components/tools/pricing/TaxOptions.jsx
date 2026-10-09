
import { AlertCircle } from "lucide-react";
import { PRICING_STYLES } from "@/data/pricingFields";
export default function TaxOptions({ applyIgv, purchaseTaxCredit, errors = {}, onIgvChange, onCreditChange, }) {
  return (
    <div className="space-y-5 rounded-xl border border-toledana-black/10 bg-toledana-white p-5 dark:border-primary/20 dark:bg-primary/5">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="applyIgv"
          checked={applyIgv}
          onChange={(event) =>
            onIgvChange(event.target.checked)
          }
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
        />

        <span className="min-w-0">
          <span className="block text-sm font-semibold text-toledana-black dark:text-toledana-white">
            Venta gravada con IGV (18%)
          </span>

          <span
            className={`mt-2 block text-xs leading-6 ${PRICING_STYLES.muted}`}
          >
            Incluye el IGV en el precio final cuando corresponde
            a una operación gravada con la tasa general.
          </span>
        </span>
      </label>

      <div className={PRICING_STYLES.divider} />

      <label
        className={`flex items-start gap-3 ${
          !applyIgv
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
      >
        <input
          type="checkbox"
          name="purchaseTaxCredit"
          checked={purchaseTaxCredit}
          disabled={!applyIgv}
          onChange={(event) =>
            onCreditChange(event.target.checked)
          }
          className="mt-1 h-4 w-4 shrink-0 accent-primary disabled:cursor-not-allowed"
        />

        <span className="min-w-0">
          <span className="block text-sm font-semibold text-toledana-black dark:text-toledana-white">
            Compra con crédito fiscal válido
          </span>

          <span
            className={`mt-2 block text-xs leading-6 ${PRICING_STYLES.muted}`}
          >
            Considera el IGV incluido en el precio de compra
            como crédito fiscal, únicamente cuando exista
            derecho a utilizarlo.
          </span>
        </span>
      </label>

      {["applyIgv", "purchaseTaxCredit"].map((field) =>
        errors[field] ? (
          <p
            key={field}
            className="flex items-start gap-2 text-xs leading-5 text-accent"
            role="alert"
          >
            <AlertCircle
              size={15}
              aria-hidden="true"
              className="shrink-0"
            />
            {errors[field]}
          </p>
        ) : null
      )}
    </div>
  );
}
