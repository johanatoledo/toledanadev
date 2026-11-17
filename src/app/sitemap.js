export default function sitemap() {
  const baseUrl = "https://www.toledanadev.com";

  
  const lastSiteUpdate = new Date("2026-11-16");

  return [
    {
      url: baseUrl,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/catalogos-digitales`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/menus-digitales-restaurantes`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/paginas-web`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/tiendas-online`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/sistemas-pedidos-reservas`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/automatizacion-ia`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/aplicaciones-web`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/software-medida`,
      lastModified: lastSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/herramientas`,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/herramientas/calculadora-de-precios`,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/que-es-un-sistema-digital-para-negocios`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/whatsapp-catalogo-digital-tienda-online`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: lastSiteUpdate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}