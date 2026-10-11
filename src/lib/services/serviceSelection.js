
import { servicesList } from "@/data/serviceList";
import { serviceDetails } from "@/data/serviceDetails";
import { SERVICE_PLANS } from "@/data/servicePlans";

const servicesById = new Map(
  servicesList.map((service) => [service.id, service])
);

export function getServiceById(serviceId) {
  return servicesById.get(serviceId) ?? null;
}

export function getPlanForService(serviceId, planId) {
  if (!serviceId || !planId) return null;

  const service = getServiceById(serviceId);
  const details = serviceDetails[serviceId];

  if (!service || !details) return null;

  const selectedPlan = details.plans.find((item) => {
    const pricing = SERVICE_PLANS[item.key];

    return pricing?.id === planId;
  });

  if (!selectedPlan) return null;

  const pricing = SERVICE_PLANS[selectedPlan.key];

  if (!pricing) return null;

  return {
    serviceId: service.id,
    serviceName: service.title,
    planId: pricing.id,
    planName: pricing.name,
    priceUSD: pricing.priceUSD,
    pricingType: pricing.pricingType ?? "fixed",
    billing: pricing.billing,
  };
}
