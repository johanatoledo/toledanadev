
import { Calculator, RotateCcw, Wallet, ReceiptText, Percent, Info, } from "lucide-react";
import PricingSection from "./PricingSection";
import TaxOptions from "./TaxOptions";
import { PRODUCT_FIELDS, BUSINESS_FIELDS, PROFIT_FIELDS, PRICING_STYLES, } from "@/data/pricingFields";
import PricingField from "./PricingField";


export default function PricingForm({ values, errors, onChange, onIgvChange, onReset, }) {
  return (
    <section
      aria-labelledby="pricing-form-title"
      className={PRICING_STYLES.panel}
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2
          id="pricing-form-title"
          className="flex items-center gap-2 font-title text-2xl font-semibold text-toledana-black dark:text-toledana-white"
        >
          <Calculator
            size={25}
            aria-hidden="true"
            className={PRICING_STYLES.icon}
          />
          Datos del negocio
        </h2>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-toledana-black/20 px-4 text-sm font-semibold text-toledana-black transition-colors hover:border-primary hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-primary/40 dark:text-primary dark:hover:text-toledana-black"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Restablecer
        </button>
      </div>

      <PricingSection
        title="Costos del producto"
        description="Introduce los gastos relacionados con cada unidad."
        icon={Wallet}
        fields={PRODUCT_FIELDS}
        values={values}
        errors={errors}
        onChange={onChange}
      />

      <div className={`my-8 ${PRICING_STYLES.divider}`} />

      <PricingSection
        title="Gastos generales"
        description="Distribuye tus gastos mensuales entre las unidades previstas."
        icon={ReceiptText}
        fields={BUSINESS_FIELDS}
        values={values}
        errors={errors}
        onChange={onChange}
      />

      <div className={`my-8 ${PRICING_STYLES.divider}`} />

      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
          <Percent
            size={22}
            className={PRICING_STYLES.icon}
            aria-hidden="true"
          />
        </div>

        <div>
          <h3 className={PRICING_STYLES.heading}>
            Impuestos y rentabilidad
          </h3>

          <p
            className={`mt-1 text-sm leading-6 ${PRICING_STYLES.muted}`}
          >
            Configura el tratamiento del IGV y el margen
            que deseas obtener.
          </p>
        </div>
      </div>

      <TaxOptions
        applyIgv={values.applyIgv}
        purchaseTaxCredit={values.purchaseTaxCredit}
        errors={errors}
        onIgvChange={onIgvChange}
        onCreditChange={(checked) =>
          onChange("purchaseTaxCredit", checked)
        }
      />

      <div className="mt-7 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        {PROFIT_FIELDS.map((field) => (
          <PricingSectionField
            key={field.name}
            field={field}
            values={values}
            errors={errors}
            onChange={onChange}
          />
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
        <Info
          size={20}
          aria-hidden="true"
          className={`mt-0.5 shrink-0 ${PRICING_STYLES.icon}`}
        />

        <p
          className={`text-sm leading-6 ${PRICING_STYLES.muted}`}
        >
          <strong className="text-toledana-black dark:text-primary">
            Importante:
          </strong>{" "}
          Esta herramienta proporciona estimaciones comerciales.
          El Impuesto a la Renta depende del régimen tributario
          y no se determina automáticamente mediante una
          tasa universal.
        </p>
      </div>
    </section>
  );
}

// Mantiene los campos de rentabilidad en su propia cuadrícula.
function PricingSectionField({ field, values, errors, onChange, }) {
  return (
    <PricingField
      field={field}
      value={values[field.name]}
      error={errors[field.name]}
      onChange={onChange}
    />
  );
}
