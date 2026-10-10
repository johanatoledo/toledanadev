
const MAX_AMOUNT = 1_000_000_000;
const MAX_UNITS = 1_000_000;
const MAX_PRICE_CENTS = 1_000_000_000_000;

export const IGV_RATE = 18;

const MONEY_FIELDS = [
  "purchaseCost",
  "packagingCost",
  "transportCost",
  "otherCosts",
  "fixedFee",
  "overheadMonthly",
];

const PERCENT_FIELDS = [
  "percentageFee",
  "desiredMargin",
  "incomeTaxRate",
];

function parseDecimal(value, max) {
  if (typeof value !== "string" && typeof value !== "number") {
    return NaN;
  }

  const normalized = String(value).trim().replace(",", ".");

  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) {
    return NaN;
  }

  const number = Number(normalized);

  return Number.isFinite(number) && number <= max    ? number  : NaN;

}

export function parseAmount(value) {
  return parseDecimal(value, MAX_AMOUNT);
}

export function parsePercentage(value) {
  return parseDecimal(value, 100);
}

export function toCents(amount) {
  return Math.round(amount * 100);
}

export function fromCents(cents) {
  return cents / 100;
}

function percentUnits(value) {
  return Math.round(value * 100);
}

function roundRatio(numerator, denominator) {
  return Math.floor(numerator / denominator + 0.5);
}

function invalidResult(errors) {
  return { ok: false, errors, data: null };
}

export function validatePricingInput(input) {
  const errors = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      valid: false,
      errors: { purchaseCost: "Ingresa los datos del producto." },
    };
  }

  for (const field of MONEY_FIELDS) {
    if (!Number.isFinite(parseAmount(input[field]))) {
      errors[field] = "Ingresa un importe válido con máximo 2 decimales.";
    }
  }

  for (const field of PERCENT_FIELDS) {
    if (!Number.isFinite(parsePercentage(input[field]))) {
      errors[field] = "Ingresa un porcentaje entre 0 y 100.";
    }
  }

  const purchase = parseAmount(input.purchaseCost);

  if (Number.isFinite(purchase) && purchase <= 0) {
    errors.purchaseCost = "El costo debe ser mayor a cero.";
  }

  const units = Number(input.expectedUnits);

  if ( !/^[1-9]\d*$/.test(String(input.expectedUnits)) || !Number.isSafeInteger(units) || units > MAX_UNITS) {
    errors.expectedUnits = "Ingresa entre 1 y 1,000,000 unidades.";
  }

  if (typeof input.applyIgv !== "boolean") {
    errors.applyIgv = "Selecciona el tratamiento del IGV.";
  }

  if (typeof input.purchaseTaxCredit !== "boolean") {
    errors.purchaseTaxCredit = "Selecciona el tratamiento de compras.";
  }

  if ( input.purchaseTaxCredit === true && input.applyIgv !== true) {
    errors.purchaseTaxCredit =
      "El crédito fiscal simplificado requiere una venta gravada.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculatePricing(input) {
  const validation = validatePricingInput(input);

  if (!validation.valid) {
    return invalidResult(validation.errors);
  }

  const cents = (field) => toCents(parseAmount(input[field]));

  const purchaseGrossCents = cents("purchaseCost");
  const packagingCents = cents("packagingCost");
  const transportCents = cents("transportCost");
  const otherCostsCents = cents("otherCosts");
  const fixedFeeCents = cents("fixedFee");

  const overheadMonthlyCents = cents("overheadMonthly");
  const expectedUnits = Number(input.expectedUnits);

  const marginUnits = percentUnits( parsePercentage(input.desiredMargin) );
  const commissionUnits = percentUnits( parsePercentage(input.percentageFee) );
  const incomeTaxUnits = percentUnits( parsePercentage(input.incomeTaxRate) );

  // Solo el costo de compra se considera con IGV incluido.
  // El crédito fiscal es una hipótesis declarada por el usuario.
  const purchaseNetCents = input.purchaseTaxCredit ? roundRatio(purchaseGrossCents * 100, 118) : purchaseGrossCents;
  const purchaseIgvCreditCents = purchaseGrossCents - purchaseNetCents;

  // Prorrateo conservador de los gastos generales.
  const overheadPerUnitCents = Math.ceil( overheadMonthlyCents / expectedUnits );

  const totalCostCents = purchaseNetCents + packagingCents + transportCents + otherCostsCents + overheadPerUnitCents;

  function evaluate(netPriceCents) {
    // Precio neto + IGV de la venta.
    const outputIgvCents = input.applyIgv ? roundRatio(netPriceCents * 18, 100) : 0;
    const salePriceCents = netPriceCents + outputIgvCents;

    // Comisión sobre el importe efectivamente cobrado.
    const variableFeeCents = roundRatio( salePriceCents * commissionUnits, 10_000 );
    const totalFeesCents = variableFeeCents + fixedFeeCents;

    const operatingProfitCents = netPriceCents - totalCostCents - totalFeesCents;

    // Es una estimación de IR, no un cálculo fiscal oficial.
    const estimatedIncomeTaxCents = roundRatio( Math.max(0, operatingProfitCents) * incomeTaxUnits, 10_000 );
    const netProfitCents = operatingProfitCents - estimatedIncomeTaxCents;

    return {
      netPriceCents,
      salePriceCents,
      outputIgvCents,
      variableFeeCents,
      totalFeesCents,
      operatingProfitCents,
      estimatedIncomeTaxCents,
      netProfitCents,
    };
  }

  function meetsMargin(priceCents) {
    const result = evaluate(priceCents);

    if (result.salePriceCents > MAX_PRICE_CENTS) {
      return false;
    }

    // Comparación exacta a la precisión del modelo,
    // sin dividir porcentajes.
    return ( result.netProfitCents * 10_000 >= priceCents * marginUnits );
  }

  // Búsqueda acotada del precio neto mínimo.
  // Se evita un while sin límites de ejecución.
  const upperBound = MAX_PRICE_CENTS - Math.ceil(MAX_PRICE_CENTS * 18 / 118);

  let low = 1;
  let high = upperBound;

  if (!meetsMargin(high)) {
    return invalidResult({
      desiredMargin:
        "No es posible obtener el margen solicitado. Reduce las comisiones, los impuestos estimados o el margen.",
    });
  }

  while (low < high) {
    const middle = low + Math.floor((high - low) / 2);

    if (meetsMargin(middle)) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  // Pequeña comprobación adicional por posibles saltos
  // de redondeo de impuestos y comisiones.
  let selected = evaluate(low);

  if (!meetsMargin(low)) {
    return invalidResult({
      desiredMargin: "No se pudo calcular un precio válido.",
    });
  }

  const actualMargin = (selected.netProfitCents / selected.netPriceCents) * 100;

  const markup = totalCostCents > 0
      ? (selected.netProfitCents / totalCostCents) * 100
      : 0;

  const estimatedIgvBalanceCents = selected.outputIgvCents - purchaseIgvCreditCents;

  return {
    ok: true,
    errors: {},
    data: {
      purchaseCost: fromCents(purchaseGrossCents),
      totalCost: fromCents(totalCostCents),
      overheadPerUnit: fromCents(overheadPerUnitCents),

      netSalePrice: fromCents(selected.netPriceCents),
      salePrice: fromCents(selected.salePriceCents),

      outputIgv: fromCents(selected.outputIgvCents),
      purchaseIgvCredit: fromCents(purchaseIgvCreditCents),
      estimatedIgvBalance: fromCents(estimatedIgvBalanceCents),

      totalFees: fromCents(selected.totalFeesCents),

      operatingProfit: fromCents(
        selected.operatingProfitCents
      ),
      estimatedIncomeTax: fromCents(
        selected.estimatedIncomeTaxCents
      ),
      profit: fromCents(selected.netProfitCents),

      actualMargin,
      markup,
      desiredMargin: parsePercentage(input.desiredMargin),
      percentageFee: parsePercentage(input.percentageFee),
      incomeTaxRate: parsePercentage(input.incomeTaxRate),
      applyIgv: input.applyIgv,
    },
  };
}

const currencyFormatter = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat("es-PE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export function formatPercent(value) {
  return `${percentFormatter.format(value)}%`;
}
