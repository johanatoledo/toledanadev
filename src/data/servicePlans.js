
export const SERVICE_PLANS = {
  catalogoEsencial: {
    id: "catalogo-esencial",
    name: "Catálogo Esencial",
    priceUSD: 249,
    pricingType: "fixed",
    billing: "one-time",
  },
  catalogoProfesional: {
    id: "catalogo-profesional",
    name: "Catálogo Profesional",
    priceUSD: 499,
    pricingType: "fixed",
    billing: "one-time",
  },
  catalogoBusiness: {
    id: "catalogo-business",
    name: "Catálogo Business",
    priceUSD: 999,
    pricingType: "fixed",
    billing: "one-time",
  },
  landingPage: {
    id: "landing-page",
    name: "Landing Page",
    priceUSD: 299,
    pricingType: "fixed",
    billing: "one-time",
  },
  webCorporativa: {
    id: "web-corporativa",
    name: "Web Corporativa",
    priceUSD: 599,
    pricingType: "fixed",
    billing: "one-time",
  },
  webBlog: {
    id: "web-blog",
    name: "Web con Blog",
    priceUSD: 849,
    pricingType: "fixed",
    billing: "one-time",
  },
  ecommerce: {
    id: "ecommerce",
    name: "Tienda Online",
    priceUSD: 1290,
    pricingType: "from",
    billing: "one-time",
  },
  reservas: {
    id: "reservas",
    name: "Sistema de Reservas",
    priceUSD: 899,
    pricingType: "from",
    billing: "one-time",
  },
  pedidos: {
    id: "pedidos",
    name: "Sistema de Pedidos",
    priceUSD: 999,
    pricingType: "from",
    billing: "one-time",
  },
  agenteIA: {
    id: "agente-ia",
    name: "Agente IA",
    priceUSD: 549,
    pricingType: "from",
    billing: "one-time",
  },
  agenteIAIntegrado: {
    id: "agente-ia-integrado",
    name: "Agente IA Integrado",
    priceUSD: 999,
    pricingType: "from",
    billing: "one-time",
  },
  automatizacion: {
    id: "automatizacion",
    name: "Automatización",
    priceUSD: 249,
    pricingType: "from",
    billing: "one-time",
  },
  softwareMedida: {
    id: "software-medida",
    name: "Software a Medida",
    priceUSD: 1490,
    pricingType: "from",
    billing: "one-time",
  },
};

export const MAINTENANCE_PLANS = [
  {
    id: "soporte-esencial",
    name: "Soporte Esencial",
    priceUSD: 29,
    billing: "monthly",
  },
  {
    id: "soporte-profesional",
    name: "Soporte Profesional",
    priceUSD: 49,
    billing: "monthly",
  },
  {
    id: "soporte-business",
    name: "Soporte Business",
    priceUSD: 99,
    pricingType: "from",
    billing: "monthly",
  },
];

export function formatUSD(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
