
const SITE_URL = "https://www.toledanadev.com";

const services = [
  "Desarrollo Web",
  "Desarrollo de Software",
  "Aplicaciones Web",
  "Automatización",
  "Inteligencia Artificial",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "ToledanaDev",

  url: SITE_URL,

  description:
    "Desarrollo web, software a medida y soluciones digitales para negocios.",

  logo: `${SITE_URL}/branding/toledana_ico.webp`,

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Servicios de ToledanaDev",

    itemListElement: services.map((service) => ({
      "@type": "OfferCatalog",
      name: service,

      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: service,
        },
      ],
    })),
  },
};
