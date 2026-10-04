import { z } from "zod";

export const CONTACT_SERVICES = [
  "desarrollo-web",
  "software-medida",
  "aplicaciones-web",
  "comercio-electronico",
  "soluciones-digitales",
  "automatizacion-ia",
  "otro",
];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre.")
    .max(80, "El nombre es demasiado largo."),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Ingresa un correo electrónico válido.")
    .max(160, "El correo electrónico es demasiado largo."),

  business: z
    .string()
    .trim()
    .max(120, "El nombre del negocio es demasiado largo.")
    .optional()
    .default(""),

  service: z.enum(CONTACT_SERVICES, {
    error: "Selecciona un servicio válido.",
  }),

  message: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más sobre lo que necesitas.")
    .max(3000, "El mensaje no puede superar los 3000 caracteres."),

  // Honeypot anti-spam.
  website: z.string().max(200).optional().default(""),
});