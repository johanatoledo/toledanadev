
export const INITIAL_PRICING_VALUES = {
  purchaseCost: "35",
  packagingCost: "2",
  transportCost: "3",
  otherCosts: "0",
  fixedFee: "0",
  percentageFee: "0",
  overheadMonthly: "300",
  expectedUnits: "100",
  desiredMargin: "30",
  incomeTaxRate: "0",
  applyIgv: true,
  purchaseTaxCredit: false,
};

export const PRODUCT_FIELDS = [
  {
    name: "purchaseCost",
    label: "Costo de compra",
    help: "Precio por unidad, con IGV si corresponde.",
    suffix: "S/",
  },
  {
    name: "packagingCost",
    label: "Empaque",
    help: "Bolsas, cajas y materiales por unidad.",
    suffix: "S/",
  },
  {
    name: "transportCost",
    label: "Transporte",
    help: "Transporte asignado a cada unidad.",
    suffix: "S/",
  },
  {
    name: "otherCosts",
    label: "Otros costos",
    help: "Otros gastos unitarios relacionados con la venta.",
    suffix: "S/",
  },
  {
    name: "fixedFee",
    label: "Comisión fija",
    help: "Comisión fija por operación.",
    suffix: "S/",
  },
  {
    name: "percentageFee",
    label: "Comisión porcentual",
    help: "Porcentaje aplicado al precio final cobrado.",
    suffix: "%",
  },
];

export const BUSINESS_FIELDS = [
  {
    name: "overheadMonthly",
    label: "Gastos generales mensuales",
    help: "Alquiler, servicios y administración.",
    suffix: "S/",
  },
  {
    name: "expectedUnits",
    label: "Unidades previstas al mes",
    help: "Total de unidades previstas de venta.",
    suffix: "und.",
  },
];

export const PROFIT_FIELDS = [
  {
    name: "desiredMargin",
    label: "Margen deseado",
    help: "Margen estimado sobre la venta sin IGV.",
    suffix: "%",
  },
  {
    name: "incomeTaxRate",
    label: "Tasa estimada de renta",
    help: "Tasa efectiva de simulación, no tributaria oficial.",
    suffix: "%",
  },
];

export const PRICING_STYLES = {
  panel:
    "min-w-0 rounded-2xl border border-toledana-black/10 bg-secundary p-5 shadow-sm dark:border-primary/20 dark:bg-toledana-black/90 sm:p-7",

  heading:
    "font-title text-xl font-semibold text-toledana-black dark:text-toledana-white",

  label:
    "block text-sm font-semibold text-toledana-black dark:text-toledana-white",

  muted:
    "text-toledana-black/65 dark:text-toledana-white/65",

  field:
    "min-h-12 w-full rounded-xl border border-toledana-black/20 bg-toledana-white px-4 py-3 pr-16 text-base text-toledana-black outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25 dark:border-primary/20 dark:bg-toledana-black dark:text-toledana-white dark:focus:border-primary",

  fieldError:
    "border-accent focus:border-accent focus:ring-accent/25 dark:border-accent",

  divider:
    "border-t border-toledana-black/10 dark:border-primary/20",

  icon:
    "text-toledana-black dark:text-primary",
};
