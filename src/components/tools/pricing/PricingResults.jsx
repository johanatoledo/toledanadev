
import { TrendingUp, CheckCircle2, Info, AlertCircle, } from "lucide-react";
import { formatCurrency, formatPercent, } from "@/lib/calculators/pricing";
import { PRICING_STYLES } from "@/data/pricingFields";
import ResultRow from "./ResultRow";

export default function PricingResults({ result }) {
  const data = result.data;

  return (
    <aside
      aria-labelledby="pricing-results-title"
      className={`${PRICING_STYLES.panel} lg:sticky lg:top-24`}
    >
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
          <TrendingUp
            size={24}
            aria-hidden="true"
            className={PRICING_STYLES.icon}
          />
        </div>

        <div>
          <h2
            id="pricing-results-title"
            className={PRICING_STYLES.heading}
          >
            Resultado estimado
          </h2>

          <p className={`mt-1 text-xs ${PRICING_STYLES.muted}`}>
            Valores calculados por unidad
          </p>
        </div>
      </div>

      {result.ok && data ? (
        <>
          <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-toledana-black p-6 text-toledana-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
            />

            <div className="relative">
              <p className="text-sm text-toledana-white/75">
                Precio final de venta
              </p>

              <p className="mt-3 wrap-break-word font-title text-3xl font-bold tracking-tight text-primary tabular-nums sm:text-4xl">
                {formatCurrency(data.salePrice)}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-primary"
                  aria-hidden="true"
                />

                <span className="text-xs text-toledana-white/75">
                  {data.applyIgv
                    ? "Precio con IGV incluido"
                    : "Operación configurada sin IGV"}
                </span>
              </div>
            </div>
          </div>

          <section className="mt-7" aria-label="Desglose de la venta">
            <h3 className="mb-3 font-title text-base font-semibold text-toledana-black dark:text-toledana-white">
              Desglose de la venta
            </h3>

            <ResultRow
              label="Valor de venta sin IGV"
              value={formatCurrency(data.netSalePrice)}
            />

            <ResultRow
              label="IGV de la venta"
              value={formatCurrency(data.outputIgv)}
            />

            <ResultRow
              label="IGV potencialmente acreditable"
              value={formatCurrency(data.purchaseIgvCredit)}
            />

            <ResultRow
              label="Diferencia referencial de IGV"
              value={formatCurrency(data.estimatedIgvBalance)}
            />

            <ResultRow
              label="Gastos generales por unidad"
              value={formatCurrency(data.overheadPerUnit)}
            />

            <ResultRow
              label="Costo total asignado"
              value={formatCurrency(data.totalCost)}
            />

            <ResultRow
              label="Comisiones de venta"
              value={formatCurrency(data.totalFees)}
            />
          </section>

          <div className={`my-7 ${PRICING_STYLES.divider}`} />

          <section aria-label="Rentabilidad estimada">
            <h3 className="mb-3 font-title text-base font-semibold text-toledana-black dark:text-toledana-white">
              Rentabilidad estimada
            </h3>

            <ResultRow
              label="Beneficio antes de renta"
              value={formatCurrency(data.operatingProfit)}
              negative={data.operatingProfit < 0}
            />

            <ResultRow
              label="Impuesto a la Renta estimado"
              value={formatCurrency(data.estimatedIncomeTax)}
            />

            <ResultRow
              label={ data.incomeTaxRate > 0? "Ganancia después de renta estimada" : "Ganancia sin descontar renta" }
              value={formatCurrency(data.profit)}
              highlight
              negative={data.profit < 0}
            />

            <ResultRow
              label="Margen resultante"
              value={formatPercent(data.actualMargin)}
            />

            <ResultRow
              label="Recargo sobre costos"
              value={formatPercent(data.markup)}
            />
          </section>

          <div className="mt-7 rounded-xl border border-primary/40 bg-primary/10 p-5">
            <p className="text-sm font-medium text-toledana-black dark:text-toledana-white/80">
              Ganancia estimada por unidad
            </p>

            <p
              className={`mt-2 wrap-break-word font-title text-2xl font-bold tabular-nums ${
                data.profit < 0
                  ? "text-accent"
                  : "text-toledana-black dark:text-primary"
              }`}
            >
              {formatCurrency(data.profit)}
            </p>

            <p className={`mt-2 text-xs leading-5 ${PRICING_STYLES.muted}`}>
              {data.incomeTaxRate > 0 ? "Después del impuesto sobre beneficios estimado." : "No se ha descontado Impuesto a la Renta."}
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
            <Info
              size={18}
              className="mt-0.5 shrink-0 text-accent"
              aria-hidden="true"
            />

            <p className={`text-xs leading-6 ${PRICING_STYLES.muted}`}>
              Los resultados son referenciales. La diferencia
              de IGV no equivale a la declaración mensual,
              y la ganancia estimada no sustituye
              los cálculos contables o tributarios.
            </p>
          </div>
        </>
      ) : (
        <div
          role="status"
          className="rounded-xl border border-accent/40 bg-accent/5 p-6"
        >
          <div className="flex items-start gap-3">
            <AlertCircle
              size={23}
              aria-hidden="true"
              className="shrink-0 text-accent"
            />

            <div>
              <h3 className="font-title font-semibold text-toledana-black dark:text-toledana-white">
                Revisa los valores ingresados
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${PRICING_STYLES.muted}`}
              >
                Corrige los campos señalados para obtener
                un cálculo válido.
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
