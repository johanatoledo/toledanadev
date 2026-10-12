
export const serviceDetails = {
  "catalogos-digitales": {
    introduction:
      "Transforma tus productos en un catálogo digital personalizado. Muestra tu inventario de forma profesional, organiza tus categorías y facilita los pedidos por WhatsApp o desde una plataforma administrable.",
    benefits: [
      "Presenta tus productos las 24 horas.",
      "Comparte tu catálogo mediante un enlace.",
      "Organiza productos, precios y categorías.",
      "Ofrece una experiencia adaptable a móviles.",
    ],
    plans: [
      {
        key: "catalogoEsencial",
        description: "Para emprendedores que desean comenzar.",
        features: [
          "Diseño personalizado y responsive",
          "Hasta 50 productos cargados inicialmente",
          "Categorías y fichas de producto",
          "Consultas y pedidos por WhatsApp",
          "SEO técnico básico",
          "Dos rondas de revisión",
        ],
        exclusions: [
          "Panel administrativo",
          "Pagos online",
          "Control de inventario",
        ],
      },
      {
        key: "catalogoProfesional",
        description: "Para negocios que actualizan su catálogo.",
        featured: true,
        features: [
          "Todo lo incluido en Esencial",
          "Panel administrativo protegido",
          "Hasta 50 productos cargados inicialmente",
          "Crear y editar productos y categorías",
          "Administración de precios e imágenes",
          "Buscador y filtros",
          "Carrito para pedidos por WhatsApp",
          "Capacitación inicial",
        ],
        exclusions: [
          "Pasarela de pagos",
          "Facturación electrónica",
          "Control avanzado de inventario",
        ],
      },
      {
        key: "catalogoBusiness",
        description: "Para negocios que necesitan gestionar pedidos.",
        features: [
          "Todo lo incluido en Profesional",
          "Hasta 100 productos cargados inicialmente",
          "Registro de pedidos en base de datos",
          "Panel de gestión de pedidos",
          "Actualización de estados de pedido",
          "Datos básicos de clientes",
          "Historial y estadísticas básicas",
        ],
        exclusions: [
          "Facturación electrónica SUNAT",
          "Integraciones logísticas externas",
          "Agentes IA y pagos online",
        ],
      },
    ],
  },

  
  "menus-digitales-restaurantes": {
    subtitle: "Menús QR personalizados para restaurantes",

    introduction:
      "Digitaliza la carta de tu restaurante con un menú QR personalizado. Presenta platos, bebidas, precios y promociones desde cualquier dispositivo, con opciones de administración y gestión de pedidos según las necesidades de tu negocio.",

    benefits: [
      "Tus clientes pueden consultar el menú escaneando un código QR.",
      "Presenta platos, fotografías, precios y categorías de forma organizada.",
      "Evita reimprimir cartas cada vez que cambien tus productos.",
      "Facilita la atención en mesas y los pedidos para llevar.",
      "Ofrece una experiencia adaptada a celulares y tablets.",
    ],

    plans: [
      {
        key: "menuEsencial",
        description:
          "Para restaurantes y cafeterías que necesitan una carta digital profesional.",

        features: [
          "Diseño personalizado con la identidad del restaurante",
          "Menú digital responsive",
          "Hasta 40 platos y bebidas cargados inicialmente",
          "Categorías, fotografías, descripciones y precios",
          "Código QR descargable para compartir e imprimir",
          "Enlace directo al menú digital",
          "Botón de contacto por WhatsApp",
          "SEO técnico básico",
          "Dos rondas de revisión",
        ],

        exclusions: [
          "Panel administrativo",
          "Gestión de pedidos desde la plataforma",
          "Control de inventario",
          "Pasarela de pagos",
          "Actualización ilimitada de platos y precios",
        ],
      },

      {
        key: "menuProfesional",
        description:
          "Para restaurantes que necesitan actualizar su carta de manera independiente.",

        featured: true,

        features: [
          "Todo lo incluido en Menú QR Esencial",
          "Panel administrativo protegido",
          "Hasta 60 platos y bebidas cargados inicialmente",
          "Crear, editar y desactivar productos",
          "Administrar categorías y precios",
          "Actualizar fotografías y descripciones",
          "Controlar la disponibilidad de platos",
          "Código QR descargable",
          "Capacitación inicial para utilizar el panel",
        ],

        exclusions: [
          "Sistema interno de gestión de pedidos",
          "Pasarela de pagos",
          "Control avanzado de inventario",
          "Facturación electrónica",
          "Integración con sistemas POS",
        ],
      },

      {
        key: "menuBusiness",
        description:
          "Para restaurantes que desean recibir y administrar pedidos mediante su menú digital.",

        features: [
          "Todo lo incluido en Menú QR Profesional",
          "Hasta 100 platos y bebidas cargados inicialmente",
          "Carrito de pedidos",
          "Identificación de mesa mediante código QR",
          "Opciones de pedido en mesa o para llevar",
          "Registro de pedidos en base de datos",
          "Panel administrativo de pedidos",
          "Estados de preparación y entrega",
          "Historial básico de pedidos",
          "Capacitación para el personal administrador",
        ],

        exclusions: [
          "Integración con impresoras de cocina",
          "Facturación electrónica SUNAT",
          "Integración con sistemas POS externos",
          "Pasarela de pagos online",
          "Gestión avanzada de inventario",
          "Agentes de inteligencia artificial",
        ],
      },
    ],
  },

  "paginas-web": {
    subtitle: "Presencia digital profesional",
    introduction:
      "Creamos páginas web rápidas, modernas y adaptadas a tu marca para presentar tu negocio, generar confianza y facilitar que nuevos clientes te contacten.",
    benefits: [
      "Fortalece la presencia de tu empresa.",
      "Presenta tus servicios profesionalmente.",
      "Facilita la captación de contactos.",
      "Mejora la experiencia en móviles.",
    ],
    plans: [
      {
        key: "landingPage",
        description: "Ideal para promocionar un servicio.",
        features: [
          "Una página de hasta 6 secciones",
          "Diseño responsive",
          "Formulario de contacto",
          "Enlace a WhatsApp",
          "SEO técnico básico",
          "Hasta dos rondas de revisión",
        ],
        exclusions: ["Blog", "Panel administrativo"],
      },
      {
        key: "webCorporativa",
        description: "Para negocios que buscan presencia sólida.",
        featured: true,
        features: [
          "Hasta 5 páginas informativas",
          "Diseño adaptado a la marca",
          "Formularios de contacto",
          "Integración de redes sociales",
          "SEO técnico inicial",
          "Diseño responsive",
        ],
        exclusions: ["Tienda online", "Blog administrable"],
      },
      {
        key: "webBlog",
        description: "Para empresas que publican contenido.",
        features: [
          "Todo lo incluido en Web Corporativa",
          "Blog con gestión de publicaciones",
          "Categorías de artículos",
          "Metadatos SEO por publicación",
          "Capacitación de administración",
        ],
        exclusions: [
          "Redacción mensual de artículos",
          "E-commerce",
        ],
      },
    ],
  },

  "tiendas-online": {
    subtitle: "Comercio electrónico",
    introduction:
      "Desarrollamos tiendas online para negocios que necesitan exhibir productos, recibir compras y gestionar pedidos desde internet.",
    benefits: [
      "Vende mediante una plataforma propia.",
      "Organiza productos y pedidos.",
      "Integra medios de pago compatibles.",
      "Gestiona información comercial.",
    ],
    plans: [
      {
        key: "ecommerce",
        description: "Desarrollo sujeto al alcance del negocio.",
        features: [
          "Catálogo administrable",
          "Carrito de compras",
          "Proceso de checkout",
          "Integración de una pasarela compatible",
          "Registro y gestión de pedidos",
          "Configuración básica de entrega",
          "Pruebas funcionales",
        ],
        exclusions: [
          "Comisiones de pasarelas",
          "Facturación electrónica",
          "Integración ERP o logística avanzada",
        ],
      },
    ],
  },

  "sistemas-pedidos-reservas": {
    subtitle: "Gestión de operaciones",
    introduction:
      "Digitalizamos la recepción y administración de pedidos o reservas para restaurantes, comercios y negocios de servicios.",
    benefits: [
      "Reduce tareas manuales.",
      "Organiza solicitudes y horarios.",
      "Centraliza la información.",
      "Mejora el seguimiento de operaciones.",
    ],
    plans: [
      {
        key: "reservas",
        description: "Para negocios que trabajan con citas.",
        features: [
          "Catálogo de servicios",
          "Selección de fecha y horario",
          "Registro de reservas",
          "Panel de administración",
          "Gestión básica de disponibilidad",
          "Estados de reserva",
        ],
        exclusions: [
          "Agente IA",
          "Pasarela de pago",
          "Integraciones complejas de calendario",
        ],
      },
      {
        key: "pedidos",
        description: "Para restaurantes y comercios.",
        features: [
          "Catálogo digital de productos",
          "Carrito de pedidos",
          "Registro de órdenes",
          "Panel de gestión",
          "Estados de preparación",
          "Opciones básicas de entrega o recojo",
        ],
        exclusions: [
          "Facturación electrónica",
          "Integración de impresoras POS",
          "Gestión logística externa",
        ],
      },
    ],
  },

  "automatizacion-ia": {
    subtitle: "Procesos inteligentes",
    introduction:
      "Integramos automatizaciones y agentes de inteligencia artificial para reducir tareas repetitivas y mejorar la atención a tus clientes.",
    benefits: [
      "Automatiza procesos específicos.",
      "Responde consultas frecuentes.",
      "Reduce trabajo operativo.",
      "Conecta herramientas y plataformas.",
    ],
    plans: [
      {
        key: "automatizacion",
        description: "Automatización de un proceso definido.",
        features: [
          "Análisis de un flujo de trabajo",
          "Configuración de disparador y acciones",
          "Integración compatible acordada",
          "Pruebas del proceso",
          "Documentación básica",
        ],
        exclusions: ["Automatizaciones ilimitadas"],
      },
      {
        key: "agenteIA",
        description: "Asistente para consultas frecuentes.",
        features: [
          "Agente IA integrado en una web",
          "Base de conocimiento inicial",
          "Respuestas a preguntas frecuentes",
          "Pruebas y configuración",
          "Límites de uso acordados",
        ],
        exclusions: [
          "Consumo de modelos IA",
          "WhatsApp Business API",
          "Integraciones empresariales",
        ],
      },
      {
        key: "agenteIAIntegrado",
        description: "Asistente conectado a tus operaciones.",
        features: [
          "Todo lo incluido en Agente IA",
          "Integración con reservas o pedidos",
          "Registro de solicitudes",
          "Consulta de información autorizada",
          "Validaciones básicas del flujo",
        ],
        exclusions: [
          "Consumo de IA y APIs externas",
          "Integraciones adicionales no contratadas",
        ],
      },
    ],
  },

  "aplicaciones-web": {
    subtitle: "Plataformas empresariales",
    introduction:
      "Desarrollamos aplicaciones web para centralizar información y gestionar procesos específicos de tu negocio desde cualquier dispositivo.",
    benefits: [
      "Accede a información desde distintos dispositivos.",
      "Centraliza procesos operativos.",
      "Digitaliza registros y consultas.",
      "Incorpora módulos según las necesidades.",
    ],
    plans: [],
    customQuote: true,
  },

  "software-medida": {
    subtitle: "Desarrollo personalizado",
    introduction:
      "Construimos soluciones informáticas adaptadas a procesos que no pueden resolverse adecuadamente con plataformas estándar.",
    benefits: [
      "Diseño basado en procesos reales.",
      "Módulos y funcionalidades a medida.",
      "Integraciones según requisitos.",
      "Arquitectura preparada para evolución.",
    ],
    plans: [
      {
        key: "softwareMedida",
        description: "Proyecto definido mediante análisis técnico.",
        features: [
          "Reunión de levantamiento de requisitos",
          "Definición de alcance y módulos",
          "Diseño de arquitectura",
          "Desarrollo de funcionalidades contratadas",
          "Pruebas técnicas y funcionales",
          "Despliegue y entrega acordada",
        ],
        exclusions: [
          "Funcionalidades fuera del alcance",
          "Infraestructura y licencias externas",
          "Mantenimiento indefinido",
        ],
      },
    ],
  },
};
