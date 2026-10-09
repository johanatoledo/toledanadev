
import PricingField from "./PricingField";
import { PRICING_STYLES } from "@/data/pricingFields";

export default function PricingSection({ title, description, icon: Icon, fields, values, errors, onChange,}) {
  return (
    <section className="min-w-0">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
          <Icon
            size={22}
            className={PRICING_STYLES.icon}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <h3 className={PRICING_STYLES.heading}>
            {title}
          </h3>

          {description && (
            <p
              className={`mt-1 text-sm leading-6 ${PRICING_STYLES.muted}`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
        {fields.map((field) => (
          <PricingField
            key={field.name}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={onChange}
          />
        ))}
      </div>
    </section>
  );
}
