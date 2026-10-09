
"use client";

import { useState } from "react";
import { calculatePricing } from "@/lib/calculators/pricing";
import { INITIAL_PRICING_VALUES } from "@/data/pricingFields";
import PricingForm from "./PricingForm";
import PricingResults from "./PricingResults";

export default function PriceCalculator() {
  const [values, setValues] = useState(() => ({
    ...INITIAL_PRICING_VALUES,
  }));

  const result = calculatePricing(values);

  function handleChange(name, value) {
    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleIgvChange(checked) {
    setValues((previous) => ({
      ...previous,
      applyIgv: checked,
      purchaseTaxCredit: checked
        ? previous.purchaseTaxCredit
        : false,
    }));
  }

  function handleReset() {
    setValues({ ...INITIAL_PRICING_VALUES });
  }

  return (
    <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
      <PricingForm
        values={values}
        errors={result.errors}
        onChange={handleChange}
        onIgvChange={handleIgvChange}
        onReset={handleReset}
      />

      <PricingResults result={result} />
    </div>
  );
}
