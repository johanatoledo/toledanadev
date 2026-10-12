
import {
  BookOpen,
  UtensilsCrossed,
  Globe,
  ShoppingBag,
  CalendarDays,
  Bot,
  MonitorSmartphone,
  Code2,
} from "lucide-react";

export const servicesList = [
  {
    id: "catalogos-digitales",
    title: "Catálogos Digitales",
    description:
      "Catálogos personalizados para mostrar tus productos, organizar categorías y recibir pedidos. Disponibles con o sin panel administrativo.",
    icon: BookOpen,
    planKey: "catalogoEsencial",
    featured: true,
  },
  {
    id: "menus-digitales-restaurantes",
    title: "Menús Digitales para Restaurantes",
    description:
      "Menús digitales personalizados con código QR para restaurantes, cafeterías y negocios gastronómicos. Ofrecemos cartas digitales con o sin panel administrativo y sistemas de pedidos por mesa o para llevar.",
    icon: UtensilsCrossed,
    planKey: "menuEsencial",
    featured: false,
  },
  {
    id: "paginas-web",
    title: "Páginas Web",
    description:
      "Landing pages, sitios corporativos y blogs profesionales para fortalecer tu presencia digital y atraer nuevos clientes.",
    icon: Globe,
    planKey: "landingPage",
  },
  {
    id: "tiendas-online",
    title: "Tiendas Online",
    description:
      "Tiendas e-commerce con catálogo, carrito, proceso de compra, pagos y gestión de pedidos según las necesidades del negocio.",
    icon: ShoppingBag,
    planKey: "ecommerce",
  },
  {
    id: "sistemas-pedidos-reservas",
    title: "Pedidos y Reservas",
    description:
      "Sistemas personalizados para gestionar reservas, pedidos, horarios y solicitudes desde una plataforma digital.",
    icon: CalendarDays,
    planKey: "reservas",
  },
  {
    id: "automatizacion-ia",
    title: "Automatización e IA",
    description:
      "Automatizamos tareas repetitivas e integramos asistentes inteligentes para mejorar la atención y los procesos de tu negocio.",
    icon: Bot,
    planKey: "automatizacion",
  },
  {
    id: "aplicaciones-web",
    title: "Aplicaciones Web",
    description:
      "Aplicaciones para administrar clientes, información y operaciones empresariales desde distintos dispositivos.",
    icon: MonitorSmartphone,
    pricingLabel: "Cotización personalizada",
  },
  {
    id: "software-medida",
    title: "Software a Medida",
    description:
      "Sistemas desarrollados según tus procesos reales, con funcionalidades, integraciones y módulos definidos para cada proyecto.",
    icon: Code2,
    planKey: "softwareMedida",
  },
];
